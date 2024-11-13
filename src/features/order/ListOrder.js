import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { getAllOrders } from "./orderApi";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Button } from "@mui/base";

const ListOrder = () => {
    const [orders, setOrders] = useState([]);
    const user = useSelector((state) => state.user.currentUser);
    let [onWay, setOnWay] = useState(false);
    useEffect(() => {
        getAllOrders(user.token)
            .then(res => setOrders(res.data))
            .catch(err => {
                alert("Failed to fetch orders");
                console.error(err);
            });
    }, []);
    console.log(orders)

    return (
        <TableContainer component={Paper} style={{ direction: "rtl" }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{ fontWeight: "bold", fontSize: "1.1rem", border: "1px solid black", textAlign: "center" }}>User Name</TableCell>
                        <TableCell style={{ fontWeight: "bold", fontSize: "1.1rem", border: "1px solid black", textAlign: "center" }}>Product Name</TableCell>
                        <TableCell style={{ fontWeight: "bold", fontSize: "1.1rem", border: "1px solid black", textAlign: "center" }}>Product Amount</TableCell>
                        <TableCell style={{ fontWeight: "bold", fontSize: "1.1rem", border: "1px solid black", textAlign: "center" }}>Order Address</TableCell>
                        <TableCell style={{ fontWeight: "bold", fontSize: "1.1rem", border: "1px solid black", textAlign: "center" }}>On Way</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orders.map(order => (
                        <TableRow key={order._id}>
                            <TableCell style={{ border: "1px solid black", textAlign: "center" }}>{order.userName}</TableCell>
                            <TableCell style={{ border: "1px solid black", textAlign: "center" }}>
                                {order.product.map(product => (
                                    <div key={product._id}>
                                        {product.productName}
                                    </div>
                                ))}
                            </TableCell>
                            <TableCell style={{ border: "1px solid black", textAlign: "center" }}>
                                {order.product.map(product => (
                                    <div key={product._id}>
                                        {product.productAmount}
                                    </div>
                                ))}
                            </TableCell>
                            <TableCell style={{ border: "1px solid black", textAlign: "center" }}>{order.orderAddress}</TableCell>
                            <TableCell style={{ border: "1px solid black", textAlign: "center" }}>{order.onWayProduct == true ? "נשלחה" : " לא נשלחה"}
                                <br />{order.onWayProduct == false? <Button onClick={() => { }}>שלח הזמנה</Button>:""}
                            </TableCell>
                        </TableRow>

                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default ListOrder;
