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

export default function NavBar() {
//   const [value, setValue] = useState(0);
  const user = useSelector((state) => state.user.currentUser);
  let dispatch = useDispatch();
  return (<>
    <img src='/header.png' width="100%" height="2%" />
    <div style={{ display: "flex", flexDirection: "row", width: "97%", position: "sticky", padding: "1.5%", backgroundColor: "white", top: "0%", direction: "rtl" }}>
      <Link to="/Home">
        <BottomNavigationAction label="" icon={<img src='/casabella.png' width="130px" height="2%" style={{ marginRight: "52%" }} />} />
      </Link>
      <Link style={{ marginRight: "15%", textDecoration: "none", color: "black", fontSize: "large", marginTop: "1.2%", fontWeight: "bolder" }} to="/products/אגרטל"> אגרטלים </Link>
      <Link style={{ marginRight: "10%", textDecoration: "none", color: "black", fontSize: "large", marginTop: "1.2%", fontWeight: "bolder" }} to="/products/צלחת"> צלחות </Link>
      <Link style={{ marginRight: "10%", textDecoration: "none", color: "black", fontSize: "large", marginTop: "1.2%", fontWeight: "bolder" }} to="/products/מפית"> מפיות </Link>
      <Link style={{ marginRight: "10%", textDecoration: "none", color: "black", fontSize: "large", marginTop: "1.2%", fontWeight: "bolder" }} to="/products/ריח"> מפיצי ריח </Link>
      
      {/* <Link style={{ marginRight: "14%", textDecoration: "none", color: "black", fontSize: "large", marginTop: "1%", fontWeight: "bolder" }} to="/giftCard"> גיפט קארד </Link> */}
      
      <Box sx={{ display: "flex", flexDirection: "row", marginRight: "82%", position: "absolute", justifyContent: "space-evenly", width: "15%" }}>
        <Link to="/basket" style={{ textAlign: "center", textDecoration: "none", color: "black" }}>
          <BottomNavigationAction label="Favorites" style={{ fontSize: "20px", color: "black" }} icon={<ShoppingBagOutlinedIcon />} />
          {/* <h1 style={{fontSize:"small"}}>Favorite</h1> */}
        </Link>
        <Link to="/login" style={{ textAlign: "center", textDecoration: "none", color: "black", marginTop: "1%" }}>
          <PersonOutlineOutlinedIcon label="Nearby" style={{ fontSize: "xx-large", marginTop: "27%" }} icon={< ShoppingBagIcon />} />
        </Link>
        <Button onClick={() => {dispatch(userOut(user)); alert('נשמח לראותך שוב')}} style={{ backgroundColor: "black", color: "white", width: "35%", marginRight: "10%" }}>יציאה {user.userName}</Button>
        {/* </BottomNavigation> */}
        {/* <div style={{fontSize: "large",marginRight: "8%", backgroundColor:" black",color:"white", padding:"7%",marginTop: "1.2%", fontWeight: "bolder" }}></div> */}
      </Box>
    </div>
  </>
  );
}