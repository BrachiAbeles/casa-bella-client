import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "./productApi";
import { useDispatch, useSelector } from 'react-redux';
import { add, update } from "../order/orderSlice";
import "./ProductDetails.css";
import { Button, ButtonGroup } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Typography, Box, Avatar } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Outlet } from "react-router-dom";
import SmallBasket from "../order/SmallBasket";

const ProductDetails = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let params = useParams();
    let [product, setProduct] = useState([]);
    let [flag, setFlag] = useState(false);
    useEffect(() => {
        getProductById(params.id).then(res => {
            setProduct(res.data);
        }).catch(err => {
            alert("Error loading product details");
            console.error(err);
        })
    }, [])
    const basket = useSelector(state => state.basket.basket).filter(item => item._id == params.id);
    console.log(basket)
    const [amount, setAmount] = useState(basket.length == 1 ? basket[0].productAmount : 1);
    const addAmount = () => {
        setAmount(amount + 1);
    }
    const minusAmount = () => {
        if (amount > 1)
            setAmount(amount - 1);
    }
    // const navigate = useNavigate();
    const addToBasket = () => {
        
        setFlag(true);
        if (amount >= 1) {
            if (basket.length == 0)
                dispatch(add({ ...product, productAmount: amount }));
            else
                dispatch(update({ ...product, productAmount: amount }))
            
        }
        console.log(flag)
    }
    return (<>
        <div className="details" style={{ position: "fixed", marginTop: "0%", width: "100vw", height: "100vh", backgroundColor: "white" }}>
            <Button style={{ color: "black", marginLeft: "92%", position: "absolute", marginTop: "1.3%" }} onClick={() => { navigate(-1)}}><ArrowForwardIcon style={{ fontSize: "xx-large", width: "100%" }} /></Button>
            <img className="imgProduct" src={product.src} width="500px" height="650px" />
            <h1 className="desc1">{product.productName}</h1>
            <h3 className="desc3">₪ {product.price}</h3>
            <h4 className="desc4">{product.descriptionProduct}</h4>
            <div className="basket">
                <ButtonGroup className="cart-button" variant="contained" style={{ justifyContent: "center", height: "6%", width: "15.3%", boxShadow: "2px 2px 2px 2px rgba(239, 212, 217, 0.759)", position: "absolute", marginTop: "26%", marginLeft: "-72.6%", display: 'flex', flexDirection: 'row', backgroundColor: "rgba(239, 212, 217, 0.759)", border: "rgba(239, 212, 217, 0.759) 1px solid", padding: "0.3%" }}>
                    <Button onClick={minusAmount} variant="outlined" style={{ fontSize: "medium", color: "black", border: "rgba(239, 212, 217, 0.759) 0px solid" }}><RemoveIcon /></Button>
                    <Button variant="outlined" style={{ fontSize: "medium", color: "black", border: "rgba(239, 212, 217, 0.759) 0px solid" }}>{amount}</Button>
                    <Button onClick={addAmount} variant="outlined" style={{ color: "black", border: "rgba(239, 212, 217, 0.759) 0px solid" }}><AddIcon /></Button>
                </ButtonGroup>
            </div>

            <Button className="basket-button" onClick={addToBasket} variant="outlined" style={{ fontSize: "medium", color: "black", border: "rgb(247, 237, 234) 0px solid", backgroundColor: "  rgb(231, 191, 198)", padding: "1%", width: "16.2%", position: "absolute", marginLeft: "22%", marginTop: "32%" }} startIcon={<ShoppingCartIcon />}>הוספה לסל</Button>
            {flag && <Outlet />}
            <div style={{ display: 'flex', flexDirection: "row-reverse", justifyContent: '', width: "10%", position: "absolute", marginLeft: "23.2%", marginTop: "40%" }}>
                <CheckCircleOutlineIcon color="primary" style={{ color: "rgb(87, 57, 62)", fontSize: 20 }} />
                <Typography variant="body1" color="textPrimary" style={{ color: " rgb(87, 57, 62)", marginLeft: 3 }}>
                    קיים במלאי
                </Typography>
            </div>
        </div>
        
        {/* <Outlet /> */}
    </>

    );
}
export default ProductDetails;
