import { Button, TextField, Typography, Container, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useForm } from 'react-hook-form';
import { login } from './userApi';
import { useDispatch } from 'react-redux';
import { userIn } from './userSlice';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Login.css";
const Login = () => {
    useEffect(() => {
        window.scrollTo({ top: 0 });
        // setPage(1);
    }, []);
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    let navigate = useNavigate();
    const save = (data) => {
        login(data)
            .then((res) => {
                if (res.data.role == "user")
                    alert("ברוך שובך " + res.data.userName);
                else
                    alert("ברוכה הבאה המנהל " + res.data.userName);
                dispatch(userIn(res.data));
                console.log(res);
            })
            .catch((err) => {
                alert('משתמש לא קיים. תרצה להירשם?');
                if (err)
                    navigate("/signUp")
                console.log(err);
            });
    };

    return (
        <Container style={{ marginBottom: "3%", backgroundColor: "rgb(242, 240, 240)", padding: "2%", paddingTop: "8%", paddingBottom: "8%", width: "45%", direction: "rtl", marginTop: "0%" }}>
            <Typography variant="h4" align="center" gutterBottom fontWeight="bolder">
                כניסה לאזור האישי שלי
            </Typography>
            <br />
            <br />
            <form onSubmit={handleSubmit(save)}>

                <TextField
                    style={{ width: "70%", outline: 0, marginRight: "14%", textAlign: "center" }}
                    variant="outlined"
                    margin="normal"
                    {...register("email")}
                    InputProps={{
                        placeholder: "מה המייל שלך",

                        style: { textAlign: "center" }
                    }}
                />
                <TextField
                    style={{ width: "70%", marginRight: "14%", textAlign: "center" }}
                    type={showPassword ? 'text' : 'password'}
                    variant="outlined"
                    margin="normal"
                    {...register("password")}
                    InputProps={{
                        placeholder: "סיסמה",

                        style: { textAlign: "center" },
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton style={{ color: "rgb(224, 193, 186)" }}
                                    aria-label="toggle password visibility"
                                    onClick={handleTogglePasswordVisibility}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <Button
                    fullWidth
                    variant="contained"
                    type="submit"
                    color="primary"
                    size="large"
                    style={{ marginTop: '1rem', backgroundColor: 'rgb(224, 193, 186)', boxShadow: "none", padding: "2%", width: "70%", marginRight: "14%", textAlign: "center", transition: "background-color 0.3s" }}
                    onMouseOver={(e) => { e.target.style.backgroundColor = "white"; e.target.style.border = "2px solid rgb(224, 193, 186)"; e.target.style.color = "rgb(224, 193, 186)" }}
                    onMouseOut={(e) => { e.target.style.backgroundColor = "rgb(224, 193, 186)"; e.target.style.color = "white" }}
                >
                    כניסה
                </Button>

                <br />
                <br />
                <br />
                <Link to="/signUp" className="link" style={{ marginRight: "37%", color: "black" }}
                    onMouseOver={(e) => { e.target.style.textDecoration = "underline"; }}
                    onMouseOut={(e) => { e.target.style.textDecoration = "none" }} >
                    הרשמה לאזור האישי
                </Link>
            </form>
        </Container>
    );
};

export default Login;
