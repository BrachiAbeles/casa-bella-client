// import React, { useState } from 'react';
import './App.css';
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import SignUp from './features/user/SignUp';
import Home from './Home';
import Login from './features/user/Login';
import ListProduct from './ListProduct';
import ProductDetails from './features/product/ProductDetails';
import NavBar from './NavBar';
import Basket from "./features/order/Basket"
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import { Facebook, Instagram, YouTube } from '@mui/icons-material';
import { useDispatch, useSelector } from "react-redux";
import NavBarManager from './NavBarManager';
import OrderAndBasket from './features/order/OederAndBasket';
import ListOrder from './features/order/ListOrder';
import SmallBasket from "./features/order/SmallBasket"
import NavBarGuest from './NavBarGuest';
import AddProduct from './features/product/AddProduct';
import { Button } from '@mui/base';
import { Container, Typography, TextField, Grid, Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import ProtectedRouteForUser from './ProtectedRouteForUser ';
import ProtectedRouteForManager from './ProtectedRouteForManager ';
import { userIn } from './features/user/userSlice';
function App() {

  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  let dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);
  // const user1 = JSON.parse(localStorage.getItem("currentUser"));
  // if (user1)
  //   dispatch(userIn(user1))

  let navigate = useNavigate();
  useEffect(() => {
    if (user) {
      if (user.role === "ADMIN") {
        navigate("/Home");
      } else if (user.role === "user") {
        navigate("/Home");
      }
    }
    else navigate("/Home")
  }, [user]);
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
    // deleteProduct(selectedProductId, user.token);
    setOpenDeleteDialog(false);
  };
  return (
    <div className="app-container">
      {user && user.role === "ADMIN" && <NavBarManager />}
      {user && user.role === "user" && <NavBar />}
      {user == null && <NavBarGuest />}

      <div className="circle-wrapper" /*onClick={toggleMenu}*/ onClick={() => { handleClickOpenDeleteDialog() }}>
        <div className="outer-circle">
          <div className="inner-circle">
            <ForumOutlinedIcon style={{ color: "rgb(198, 153, 143)", fontSize: 30 }} />
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="overlay" onClick={toggleMenu}>
          <div className="centered">
            שלום
          </div>
        </div>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/orderForm" element={<ProtectedRouteForUser><OrderAndBasket /> </ProtectedRouteForUser>} />
        <Route path="/order" element={<ListOrder />} />
        <Route path="/addProduct" element={<ProtectedRouteForManager><AddProduct /></ProtectedRouteForManager>} />
        <Route path="/login" element={<Login />} />
        <Route path="/products/:type" element={<ListProduct />} >
          <Route path=":id" element={<ProductDetails />} >
            <Route path="" element={<SmallBasket />} />
          </Route>
        </Route>
        <Route path="/basket" element={<Basket />} />
        <Route path="/Home" element={<Home />} />
      </Routes>

      <div className="detailsHome" style={{ backgroundColor: "rgba(255, 232, 232, 0.518)", paddingTop: "8%" }}>
        <div>
          <h3>Casa Bella</h3>
          הסיפור שלי
          <br />
          <br />
          החנויות
          <br />
          <br />
          שובר מתנה
        </div>
        <div>
          <h3>שירות לקוחות</h3>
          Customer@casabella.co.il
          <br />
          <br />
          לקוחות סיטונאים? דברו איתנו: -
          <br />
          <br />
          Suppliers@casabella.co.il
          <br />
          <br />
          משלוחים והחלפות
          <br />
          <br />
          איך מבטלים עסקה?
        </div>
        <div>
          <h3>בואו לבקר אותנו:</h3>
          <div>
            <h5>סניף בני ברק</h5>
            רבי עקיבא 54
            <br />
            טלפון החנות: 050-7575895
            <br />
            א-ה 10:00-21:00
            <br />
            ו 10:00-13:00
          </div>
          <div>
            <h5>סניף ירושלים</h5>
            רב שפע שמגר 16, קומה 2
            <br />
            טלפון החנות: 050-5924366
            <br />
            א-ה 10:00-21:00
            <br />
            ו 09:30-13:00
          </div>
        </div>
        <div >
          <h1>הצטרפו לשולחן ה-
            <br />
            VIP שלנו
          </h1>
          <p>
            7% הנחה על הקנייה הראשונה,
            <br />
            <br />
            טיפים לעריכות שולחן והטבות שוות לעיניכן-
            <br />בלבד.
          </p>
          <div >
            <br />
            <br />
            <br />
            <input type="email" placeholder="מה המייל שלך" />
          </div>
          <br /><br /><br /> <br /><br /> <br />
        </div>
      </div>

      <div style={{ backgroundColor: "rgba(255, 232, 232, 0.518)", paddingBottom: "5%" }}>
        <div style={{ display: "flex", flexDirection: "row", width: "15%", justifyContent: "space-evenly", marginLeft: "40%" }}>
          <Facebook fontSize="medium" style={{ color: 'black' }} />
          <Instagram fontSize="medium" style={{ color: 'black' }} />
          <YouTube fontSize="medium" style={{ color: 'black' }} />
        </div>
        <br /><br /><br />
        <p style={{ marginLeft: "70%" }}>© 2024, casabella.il . Powered by Brachi Abeles</p>
      </div>
      <Dialog open={openDeleteDialog} onClose={handleCloseDeleteDialog}>
        <DialogContent>
          <DialogActions>
            <br /> <br /> <br /> <br />
            <Button style={{ padding: "3%", border: "none", color: "white", backgroundColor: "black" }} onClick={handleCloseDeleteDialog} color="primary">
              X
            </Button>
          </DialogActions>
          <DialogContentText style={{ color: "black", textAlign: "center" }}>
            סגור זמנית casa bella צ'אט עם נציג
            <br />❤️ בתקווה להבנה
            <br /> <br /> <br />
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>

  );
}

export default App;
