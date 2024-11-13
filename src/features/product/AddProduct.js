import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { addProduct } from './productApi';

const AddProduct = () => {
    const basket = useSelector((state) => state.basket.basket);
    const [formData, setFormData] = useState({
        productName: '',
        price: '',
        src: '',
        type: ''
    });
    let user = useSelector((state) => state.user.currentUser)
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        addProduct({ productName: formData.productName, src: formData.src, price: formData.price, type: formData.type }, user.token);
    };
    return (
        <Container maxWidth="md" style={{ direction:"rtl"}}>
            <Typography variant="h4" gutterBottom textAlign="center">
                מילוי פרטי מוצר
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2} direction="column" alignItems="center" >
                    <Grid item xs={12} style={{ width: "60%" }}>
                        <TextField
                            fullWidth
                            label="שם מוצר"
                            name="productName"
                            value={formData.productName}
                            onChange={handleChange}
                            variant="outlined"
                            required
                        />
                    </Grid>
                    <Grid item xs={12} style={{ width: "60%" }}>
                        <TextField
                            fullWidth
                            label="תמונה"
                            name="src"
                            value={formData.src}
                            onChange={handleChange}
                            variant="outlined"
                            required
                        />
                    </Grid>
                    <Grid item xs={12} style={{ width: "60%" }}>
                        <TextField
                            fullWidth
                            label="סוג"
                            name="type"
                            value={formData.type}
                            onChange={handleChange}
                            variant="outlined"
                            required
                        />
                    </Grid>
                    <Grid item xs={12} style={{ width: "60%" }}>
                        <TextField
                            fullWidth
                            label="מחיר"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            variant="outlined"
                            required
                        />
                    </Grid>
                    <Grid item xs={12} style={{ width: "60%" }}>
                        <Button /*style={{ width: "100%", padding: "3%", backgroundColor: "rgb(224, 193, 186)", color: "white" }}*/ type="submit" variant="contained" color="primary"
                    style={{ backgroundColor: 'rgb(224, 193, 186)', boxShadow: "none", padding: "3%", width: "100%", transition: "background-color 0.3s" }}

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

export default AddProduct;
