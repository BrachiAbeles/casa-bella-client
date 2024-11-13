import { Container, Typography, Grid, IconButton, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { remove } from "./orderSlice";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useEffect, useState } from "react";
import { add, update } from "../order/orderSlice";
// import "./ProductDetails.css";
import { ButtonGroup } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';
const Basket = () => {
    
    const basket = useSelector((state) => state.basket.basket);
    const dispatch = useDispatch();
    const [totalPrice, setTotalPrice] = useState(0)
    useEffect(() => {
        let total = 0;
        basket.forEach(item => {
            total += item.price * item.productAmount;
        });
        setTotalPrice(total);
    }, [basket]);
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);
    const handleRemoveItem = (itemId) => { dispatch(remove(itemId)); };

    return (
        <Container style={{ direction: "rtl" }}>
            {basket.length === 0 && (
                <div className="empty-basket" style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "10%" }}>
                    <Button style={{ marginRight: "8%", borderRadius: "50%", backgroundColor: "black", padding: "1.5%", marginBottom: "1rem", fontSize: "18px", color: "white" }}>
                        0
                    </Button>
                    <ShoppingBagOutlinedIcon style={{ fontSize: "110px", marginBottom: "1rem", marginTop: "-5%" }} />
                    <Typography variant="h4" align="center">עגלת הקניות שלך ריקה</Typography>
                </div>
            )}

            {basket.map((item) => (
                <Grid key={item._id} container alignItems="center" sx={{width:"100vw", marginTop: 4 }}>
                    <Grid item xs={3} style={{marginRight:"-10%"}}>
                        <img src={item.src} alt={item.productName} style={{ width: "50%" }} />
                    </Grid>

                    <Grid item xs={6}>
                        <Typography variant="h5">{item.productName}</Typography>
                        <Typography variant="h6"> {(item.productAmount * item.price).toFixed(2)} ₪</Typography>
                    </Grid>
                    <Grid style={{display:"flex", justifyContext:"space-evenly"}}>
                    <Button  variant="outlined" style={{ fontSize: "medium", color: "black", border: "rgba(239, 212, 217, 0.759) 0px solid" }}  onClick={() => {if(item.productAmount > 1) dispatch(update({ ...item, productAmount: item.productAmount - 1 })) }}><RemoveIcon /></Button>
                    {/* <Button variant="outlined" style={{ fontSize: "medium", color: "black", border: "rgba(239, 212, 217, 0.759) 0px solid" }}>{amount}</Button> */}
                    <Button  variant="outlined" style={{ color: "black", border: "rgba(239, 212, 217, 0.759) 0px solid" }} onClick={() => { dispatch(update({ ...item, productAmount: item.productAmount + 1 })) }}><AddIcon /></Button>
                    </Grid>
                    <Grid item xs={3} style={{ direction: "ltr" }} >
                        <IconButton style={{ display: "flex", flexDirection: "column", marginLeft:"250%" }} onClick={() => handleRemoveItem(item._id)}>
                            <input style={{ marginLeft: "-13%", width: "40%", textAlign: "center", borderRadius: "50%", backgroundColor: "rgb(198, 153, 143)", color: "white", border: "0" }} value={item.productAmount} />
                            <DeleteOutlineOutlinedIcon style={{ fontSize: "35px", marginTop: "-10%", color: "black" }} />
                        </IconButton>
                    </Grid>
                </Grid>
            ))}

            {basket.length > 0 && (
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "2rem", marginBottom: "2%", width: "85%", fontWeight: "bolder", fontSize: "x-large" }}>
                    <Typography variant="">סה"כ:</Typography>
                    <Typography variant="">{parseFloat(totalPrice).toFixed(2)} ₪</Typography>
                </div>

            )}
            <div style={{ display: "flex" }}>
                <Link to="/products/אגרטל" style={{ textDecoration: "none", width: "100%", display: "flex", justifyContent: "center", marginTop: "5rem" }}>
                    <Button variant="contained" style={{ backgroundColor: "black", color: "white", padding: "1%", width: "20%" }}>המשך בקניות</Button>
                </Link>
                <Link to="/orderForm" style={{ textDecoration: "none", width: "100%", display: "flex", justifyContent: "center", marginTop: "5rem" }}>
                    <Button variant="contained" style={{ backgroundColor: "black", color: "white", padding: "1%", width: "20%" }}>ביצוע הזמנה</Button>
                </Link>
            </div>
        </Container>

    );
};

export default Basket;
