import React, { useState, useEffect } from 'react';
import { Paper, Typography, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from './orderSlice';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const SmallBasket = () => {
    const basket = useSelector((state) => state.basket.basket);
    const dispatch = useDispatch();
    const [totalPrice, setTotalPrice] = useState(0);
    const [flag, setFlag] = useState(true);
    const [numOfProduct, setNumOfProduct] = useState(0);

    useEffect(() => {
        let total = 0;
        let count = 0;
        basket.forEach(item => {
            total += item.price * item.productAmount;
            count += item.productAmount;
        });
        setNumOfProduct(count);
        setTotalPrice(total);
    }, [basket]);


    const handleRemoveItem = (itemId) => { dispatch(remove(itemId)); };

    return (
        basket.length > 0 && flag &&
        <div className="details" style={{ backgroundColor: "white", position: "fixed", marginLeft: "57%", marginTop: "2%", borderRadius: "8%", width: "40vw", height: "95vh", borderRadius: "5%", boxShadow: "2px 2px 20px 2px rgb(198, 153, 143)" }}>
            <Paper style={{ backgroundColor: "white", paddingLeft: "30px", paddingRight: '30px', maxHeight: '100vh', overflow: 'hidden' }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Link style={{ textDecoration: "none" }} onClick={() => { setFlag(false) }}><h4 style={{ color: "black", marginLeft: "5%", position: "sticky", top: "0%" }}><CloseOutlinedIcon /></h4></Link>
                    <h3><div style={{ borderRadius: "50%", backgroundColor: "black", color: "white", padding: "0%", width: "23%", textAlign: "center", fontSize: "15px" }}>{numOfProduct}</div>עגלת קניות</h3>
                </div>

                <h4 style={{ direction: "rtl", position: "sticky", top: "0%" }}> איזה כיף! משלוח חינם עלינו ❣️</h4>
                <div style={{ maxHeight: 'calc(95vh - 160px)', overflowY: 'auto' }}>
                    {basket.map((item) => (
                        <Grid key={item._id} container alignItems="center" sx={{ marginTop: 4, direction: "rtl" }}>
                            <Grid item xs={3}>
                                <img src={item.src} alt={item.productName} style={{ width: "80%" }} />
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="h7" style={{ fontWeight: "bold" }}>{item.productName}</Typography>
                                <br />
                                <br />
                                <Typography variant="h9"> {(item.productAmount * item.price).toFixed(2)} ₪</Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <div style={{ display: "flex", flexDirection: "column", marginTop: "20%", marginRight: "40%" }}>
                                    <input type="text" style={{ borderColor: "#e0e0e0", backgroundColor: "white", width: "42%", textAlign: "center" }} value={item.productAmount} />
                                    <button style={{textDecoration:"underline", border: "none", backgroundColor: "transparent", color: "black", fontSize: "12px", marginLeft: "19%", cursor: "pointer" }} onClick={() => handleRemoveItem(item._id)}>הסרה</button>
                                </div>
                            </Grid>
                        </Grid>
                    ))}
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                </div>
                <div style={{ position: "sticky", bottom: 0, width: "98%", backgroundColor: "white", padding: "10px", marginBottom: "3%" }}>
                    <br />

                    <div style={{ borderTop: "1px solid black", display: "flex", justifyContent: "space-between", marginBottom: "5%", fontWeight: "bolder", fontSize: "x-large" }}>
                        <Typography variant="">{parseFloat(totalPrice).toFixed(2)}</Typography>
                        <Typography variant="">סה"כ</Typography>
                    </div>
                    <p style={{ textAlign: "right", fontSize: "12px" }}>המסים הכלולים ודמי משלוח יחושבו בעת התשלום </p>
                    <br />
                    <Link to="/basket"><Button style={{ padding: "3%", width: "100%", backgroundColor: "black", color: "white" }}>הצג עגלת קניות</Button></Link>
                </div>
            </Paper>
        </div>
    );
}

export default SmallBasket;
