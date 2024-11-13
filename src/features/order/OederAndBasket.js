import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import OrderForm from './OrderForm';
import Basket from './Basket';

const OrderAndBasket = () => {
    return (
        <Grid container spacing={3} style={{ width: "98%", display: "flex" }}>
            {/* חצי העמוד שמאלה */}
            <Grid item xs={12} sm={5} style={{ marginLeft: "10%" }}>
                <Paper style={{ maxHeight: '70vh', overflow: 'auto' }}>
                    <Typography variant="h4" gutterBottom style={{ direction: "rtl" }}>
                        עגלת קניות
                    </Typography>
                    <div style={{ overflowX: "auto" }}>
                        <Basket />
                    </div>
                </Paper>
            </Grid>
            {/* חצי העמוד ימינה */}
            <Grid item xs={12} sm={5} style={{ marginLeft: "3%" }}>
                <Paper style={{ padding: '20px' }}>
                    <OrderForm />
                </Paper>
            </Grid>
        </Grid>
    );
};

export default OrderAndBasket;
