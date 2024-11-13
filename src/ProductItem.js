import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { deleteProduct } from "./features/product/productApi";
import { useState } from "react";
import { Container, Typography, TextField, Grid, Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

const ProductItem = ({ item }) => {
    const user = useSelector((state) => state.user.currentUser);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState(null);

    const handleClickOpenDeleteDialog = (productId) => {
        setSelectedProductId(productId);
        setOpenDeleteDialog(true);
    };

    const handleCloseDeleteDialog = () => {
        setOpenDeleteDialog(false);
    };

    const handleConfirmDelete = () => {
        deleteProduct(selectedProductId, user.token);
        setOpenDeleteDialog(false);
    };
    return (<>
        <div className="container" style={{ marginTop: "2%", marginLeft: "1.1%", width: "98%", backgroundColor: "#fdebf0" }}>

            <Link to={"" + item._id}><img className="productImg" src={item.src} width="100%" height="520px" /></Link>

            <h4 className="productName" style={{ textAlign: "center", color: "black", fontWeight: "bold" }}>{item.productName} </h4>
            <p className="price" style={{ textAlign: "center", marginBottom: "2%" }}>₪ {item.price}</p>
            {user && user.role == "ADMIN" && <div style={{ display: "flex" }}>
                <Button style={{ color: "black" }}>עריכה</Button>
                <Button onClick={() =>  {handleClickOpenDeleteDialog(item._id)}} style={{ color: "black" }}>מחק</Button>
            </div>}

            <br />
            <Dialog open={openDeleteDialog} onClose={handleCloseDeleteDialog}>
                <DialogContent >
                    <DialogContentText style={{color:"black"}}>
                        ?האם למחוק מוצר זה לצמיתות
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button style={{color:"white", backgroundColor:"black"}} onClick={handleCloseDeleteDialog} color="primary">
                        ביטול
                    </Button>
                    <Button style={{color:"white", backgroundColor:"black"}} onClick={handleConfirmDelete} color="primary" autoFocus>
                        אישור
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    </>
    );
}

export default ProductItem;
