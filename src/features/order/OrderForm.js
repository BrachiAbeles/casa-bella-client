import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addOrder } from './orderApi';
import { useNavigate } from 'react-router-dom';
import { saveArr } from './orderSlice';

const OrderForm = () => {
    const basket = useSelector((state) => state.basket.basket);
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        address: '',
        creditCard:'',
        tokef:'',
        nums:''
    });
    const navigate = useNavigate();
    const user = useSelector((state) => state.user.currentUser);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (user) {
            addOrder({ orderAddress: formData.address, product: basket, userName: user.userName }, user.token);
            alert("הזמנה נשלחה");
            dispatch(saveArr([]));
        } else {
            navigate("/login");
        }
    };



    return (
        <Container maxWidth="md">
            <Typography variant="h4" gutterBottom style={{direction:"rtl"}}>
                מילוי פרטי לקוח
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} style={{width: "70%"}}>
                        <TextField style={{direction:"rtl"}}
                            fullWidth
                            label="כתובת"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            variant="outlined"
                            required
                        />
                    </Grid>
                    <Grid item xs={12} style={{width: "70%"}}>
                        <TextField style={{direction:"rtl"}}
                            fullWidth
                            label="מספר אשראי"
                            name="creditCard"
                            value={formData.creditCard}
                            onChange={handleChange}
                            variant="outlined"
                            required
                        />
                    </Grid>
                    <Grid item xs={12} style={{width: "70%"}}>
                        <TextField style={{direction:"rtl"}}
                            fullWidth
                            label="תוקף"
                            name="tokef"
                            value={formData.tokef}
                            onChange={handleChange}
                            variant="outlined"
                            
                        />
                    </Grid>
                    <Grid item xs={12} style={{width: "70%"}}>
                        <TextField style={{direction:"rtl"}}
                            fullWidth
                            label="3 ספרות בגב הכרטיס"
                            name="nums"
                            value={formData.nums}
                            onChange={handleChange}
                            variant="outlined"
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" style={{ marginTop: '1rem', backgroundColor: 'rgb(224, 193, 186)', boxShadow: "none", padding: "2%", width: "100%", marginRight: "14%", textAlign: "center", transition: "background-color 0.3s", color:"white" }}
                            onMouseOver={(e) => { e.target.style.backgroundColor = "white"; e.target.style.border = "2px solid rgb(224, 193, 186)"; e.target.style.color = "rgb(224, 193, 186)" }}
                            onMouseOut={(e) => { e.target.style.backgroundColor = "rgb(224, 193, 186)"; e.target.style.color = "white" }}
                        >
                            שליחה
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};

export default OrderForm;
