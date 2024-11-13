import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@mui/base";
import "./Home.css"
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import { Facebook, Instagram, YouTube } from '@mui/icons-material';
// import { Button } from '@mui/base';
const Home = () => {
    useEffect(() => {
        window.scrollTo({ top: 0});
        // setPage(1);
    }, []);
    const [currentImage, setCurrentImage] = useState(0);

    // רשימת התמונות
    const images = [
        "https://casabella.co.il/cdn/shop/files/web_8.jpg?v=1704711270&width=2000",
        "https://casabella.co.il/cdn/shop/files/web_2_95de5d05-9ad5-4b63-9ed8-5286a60f5ae6.jpg?v=1704715420"
    ];

    // קביעת התמונה הנוכחית
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage(currentImage => (currentImage + 1) % images.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);
    return (<>
         {images.map((image, index) => (
            <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                style={{ marginTop: "-3%", width: "100%", height: "600px", display: index === currentImage ? 'block' : 'none' }}
            />
        ))}
        <div>
        </div>
        <Link to="/products/אגרטל">
            <img src="/IMG_5748-Edit_ffac277d-26ff-4143-b3db-feb6e76be8da.webp" style={{ marginTop: "0.4%", width: "100%", height: "600px" }} />
        </Link>
        <Link to="/products/צלחת" style={{ display: "flex", justifyContent: "space-between" }}>
            <img src="/Casa_bella_chagim_21_128_D7_A1_D7_A4_D7_98_D7_9E_D7_91_D7_A8_09_2021-79.webp" style={{ marginTop: "0.2%", width: "49.8%", height: "600px" }} />
            <img src="/IMG_0092_7740d790-cee2-48ae-a3df-d1bb8a8449d3.webp" style={{ marginTop: "0.2%", width: "49.8%", height: "600px" }} />
        </Link>

        <Link to="/products/מפית" style={{ textDecoration: "none", display: "flex", justifyContent: "space-around" }}>
            <img src="/D7_A0_D7_A8-_D7_95_D7_A0_D7_99_D7_9C-4.webp" style={{ marginTop: "0.3%", width: "24.6%", height: "310px" }} />
            <img src="/D7_A8_D7_91_D7_99_D7_A2_D7_99_D7_99_D7_AA-_D7_90_D7_92_D7_A8_D7_98_D7_9C_D7_99_D7_9D-_D7_96_D7_9B_D7_95_D7_9B_D7_99_D7_AA-_D7_97_D7_95_D7_9C-3.webp" style={{ marginTop: "0.3%", width: "24.6%", height: "310px" }} />
            <img src="/IMG_6893_6b893f06-21be-4b68-8d06-f3f1ae3b355a.webp" style={{ marginTop: "0.3%", width: "24.6%", height: "310px" }} />
            <img src="/5_d41ec896-66a5-4040-b666-c68bfb26369c.webp" style={{ marginTop: "0.3%", width: "24.6%", height: "310px" }} />
        </Link>
            <img src="/93510d13a93c84e1db4f7e7e1597c6e9.webp" style={{ marginTop: "0.3%", width: "100%", height: "350px" }} />
   
      <div className="phone">
            <h1>חברות וארגונים</h1>
            <p>רוצה למכור את המוצרים שלנו? רוצה לפנק את העובדים שלך?</p>
            <h3>יש לנו מחירים מיוחדים לחנויות, וועדי עובדים, בתי מלון ועוד</h3>
            <div className="button-phone" variant="contained" color="primary">
                ליצירת קשר
                <br />  053-452-6874
            </div>
        </div>
    {/* </div> */}

    </>);
}

export default Home;