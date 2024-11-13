import  { useState,useEffect } from 'react';
import { Container, Typography, TextField, Button, Grid, Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useSelector } from 'react-redux';
import { addProduct } from './features/product/productApi';
import { deleteProduct } from './features/product/productApi'; // assuming this function exists
import ProductItem from "./ProductItem";
import { getAllProduct } from "./features/product/productApi";
// import { useEffece } from "react";
import "./ListProduct.css";
import { Outlet, useParams } from "react-router-dom";
import { Pagination } from '@mui/material';

const ListProductVase = () => {
    let [product, setProduct] = useState([]);
    let [page, setPage] = useState(1);
    const { type } = useParams();
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
        deleteProduct(selectedProductId); // Assuming this function deletes the product
        setOpenDeleteDialog(false);
        // You might want to update the product list after deletion
    };

    useEffect(() => {
        getAllProduct(page, type).then(res => {
            setProduct(res.data)
        }).catch(err => {
            alert("לא הצליח להביא מוצרים")
            console.log(err)
        })
    }, [page, type])

    useEffect(() => {
        window.scrollTo({ top: 0 });
        setPage(1);
    }, [type]);

    return (
        <>
            {type === "אגרטל" && (
                <>
                    <h1 style={{ textAlign: "center", fontSize: "50px", marginTop: "1%", marginBottom: "3%" }}>אגרטלים</h1>
                    <h3 style={{ fontWeight: "normal", textAlign: "center", marginTop: "1%", marginBottom: "5%" }}>אגרטלים מעוצבים שיהפכו את הבית שלכם למקום נעים וחמים עם אוירה ושלווה ביתית.<br />
                        בלי הרבה מאמץ תוסיפו לפינה בסלון או בכניסה לבית מלא חיים וצבע, אצלינו תוכלו למצוא היצע רחב של אגרטלים משלל חומרים.<br /> זכוכית, קרמיקה, עץ ועוד שיוסיפו צבע ושלווה לביתכם.<br />
                        אנחנו מעצבים עבורכם אגרטלים במגוון טקסטורות וגדלים שיתאימו לכל פינה בבית וישדרגו לכם כל חלל
                    </h3>
                </>
            )}
            {type === "צלחת" && (
                <>
                    <h1 style={{ textAlign: "center", fontSize: "50px", marginTop: "1%", marginBottom: "3%" }}>צלחות</h1>
                    <h3 style={{ fontWeight: "normal", textAlign: "center", marginTop: "1%", marginBottom: "5%" }}>
                        מוצרים שבירים ניתנים להחלפה/החזרה בחנות בלבד ולא ע"י שליח
                    </h3>
                </>
            )}
            {type === "מפית" && (
                <>
                    <h1 style={{ textAlign: "center", fontSize: "50px", marginTop: "1%", marginBottom: "3%" }}>מפיות</h1>
                    <h3 style={{ fontWeight: "normal", textAlign: "center", marginTop: "1%", marginBottom: "5%" }}>
                        פינת המפיות שלנו עם מבחר ענק של מפיות, זוכרים כשהייתם ילדים אמא תמיד אמרה לכם לאכול נקי ומסודר ולנקות מדי פעם את הפה עם מפית? <br />מפיות הן מוצר בסיסי בכל בית בין אם
                        <br />אתם מארחים חברים ובני משפחה, או סועדים ביחד עם בן או בת הזוג ורוצים לשמור על ניקיון ואסתטיקה. <br />אך מעבר להיותן מוצר בסיסי בכל בית, מפיות צריכות להיות יפות ומהודרות
                    </h3>
                </>
            )}
            <div className="flex-picture">
                {product.map(item => (
                    <div className="picture" key={item._id}>
                        <ProductItem item={item} />
                    </div>
                ))}
            </div>
            <Box display="flex" justifyContent="center" alignItems="center" sx={{ color: 'pink', p: 2, padding: "5%" }}>
                <Pagination
                    count={3}
                    page={page}
                    onChange={(event, value) => setPage(value)}
                    color="secondary"
                    sx={{
                        '& .MuiPaginationItem-root.Mui-selected': {
                            backgroundColor: 'rgb(198, 153, 143) !important',
                        },
                    }}
                />
            </Box>
            <Outlet />
        </>
    );
}

export default ListProductVase;
