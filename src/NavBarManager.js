import { useState } from 'react';
import Box from '@mui/material/Box';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Link } from 'react-router-dom';
import { Button } from '@mui/base';
import { useDispatch, useSelector } from 'react-redux';
import { userOut } from './features/user/userSlice';
export default function NavBarManager() {
  const [value, setValue] = useState(0);
  const user = useSelector((state) => state.user.currentUser);
  let dispatch = useDispatch();
  return (<>
    <img src='/header.png' width="100%" height="2%" />
    <div style={{ display: "flex", flexDirection: "row", width: "97%", position: "sticky", padding: "1.5%", backgroundColor: "white", top: "0%", direction: "rtl" }}>
      <Link to="/">
        <BottomNavigationAction label="" icon={<img src='/casabella.png' width="130px" height="2%" style={{ marginRight: "52%" }} />} />
      </Link>
      <Link style={{ marginRight: "3%", textDecoration: "none", color: "black", fontSize: "large", marginTop: "1.2%", fontWeight: "bolder" }} to="/products/אגרטל"> אגרטלים </Link>
      <Link style={{ marginRight: "8%", textDecoration: "none", color: "black", fontSize: "large", marginTop: "1.2%", fontWeight: "bolder" }} to="/products/צלחת"> צלחות </Link>
      <Link style={{ marginRight: "8%", textDecoration: "none", color: "black", fontSize: "large", marginTop: "1.2%", fontWeight: "bolder" }} to="/products/מפית"> מפיות </Link>
      <Link style={{ marginRight: "8%", textDecoration: "none", color: "black", fontSize: "large", marginTop: "1.2%", fontWeight: "bolder" }} to="/products/ריח"> מפיצי ריח </Link>
      <Link style={{ marginRight: "8%", textDecoration: "none", color: "black", fontSize: "large", marginTop: "1.2%", fontWeight: "bolder" }} to="/order"> הזמנות </Link>
      <Link style={{ marginRight: "8%", textDecoration: "none", color: "black", fontSize: "large", marginTop: "1.2%", fontWeight: "bolder" }} to="/addProduct"> הוספת מוצר </Link>
      <Box sx={{ display: "flex", flexDirection: "row", marginRight: "82%", position: "absolute", justifyContent: "space-between", width: "15%" }}>
        <Link to="/basket" style={{ textAlign: "center", textDecoration: "none", color: "black" }}>
          <BottomNavigationAction label="Favorites" style={{ fontSize: "20px", color: "black" }} icon={<ShoppingBagOutlinedIcon />} />
        </Link>
        <Link to="/login" style={{ textAlign: "center", textDecoration: "none", color: "black", marginTop: "1%" }}>
          <PersonOutlineOutlinedIcon label="Nearby" style={{ fontSize: "xx-large", marginTop: "27%" }} icon={< ShoppingBagIcon />} />
        </Link>
        <Button onClick={() => {dispatch(userOut(user)); alert('נשמח לראותך שוב')}} style={{ backgroundColor: "black", color: "white", width: "35%", marginRight: "10%" }}>יציאה {user.userName}</Button>
      </Box>
    </div>
  </>
  );
}