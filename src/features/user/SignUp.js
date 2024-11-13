import { Button, TextField, Typography, Container, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useForm } from 'react-hook-form';
import { addUser as signUpToServer } from './userApi';
import { userIn } from './userSlice';
import { useDispatch } from 'react-redux';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    useEffect(() => {
        window.scrollTo({ top: 0});
        // setPage(1);
    }, []);
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [userName, setUserName] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const save = (data) => {
        signUpToServer(data)
            .then((res) => {
                dispatch(userIn(res.data));
                setUserName(res.data.userName)
                console.log(res);
            })
            .catch((err) => {
                alert('  לא הצליח להרשם   ' + err.response.data.message);
                console.log(err);
            });
    };

    return (
        <Container style={{ marginBottom: "3%", backgroundColor: "rgb(242, 240, 240)",  padding: "2%", paddingTop:"8%", paddingBottom:"8%", width: "45%", direction: "rtl" }}>
            <Typography variant="h4" align="center" gutterBottom fontWeight="bolder">
                היי, מתרגשת לראות <br />אותך במועדון
            </Typography>
            <br />
            <Typography textAlign={"center"}>{userName != null && <h2>איזה כיף שהצטרפת אלינו {userName} 💖</h2>}</Typography>
            <form onSubmit={handleSubmit(save)}>
                <TextField
                    style={{ width: "70%", marginRight: "15%" }}
                    variant="outlined"
                    margin="normal"
                    InputProps={{
                        placeholder: "שם פרטי",
                        style: { textAlign: "center" }
                    }}
                    {...register("userName", { required: "שדה חובה" })}
                    error={!!errors.userName}
                    helperText={errors.userName ? errors.userName.message : ''}
                />
                <TextField
                    style={{ width: "70%", marginRight: "15%", textAlign: "center" }}
                    variant="outlined"
                    margin="normal"
                    {...register("email", { required: "שדה חובה" })}
                    error={!!errors.email}
                    helperText={errors.email ? errors.email.message : ''}
                    InputProps={{
                        placeholder: "מה המייל שלך",

                        style: { textAlign: "center" }
                    }}
                />
                <TextField
                    style={{ width: "70%", marginRight: "15%", textAlign: "center" }}
                    type={showPassword ? 'text' : 'password'}
                    variant="outlined"
                    margin="normal"
                    {...register("password", { required: "שדה חובה" })}
                    error={!!errors.password}
                    helperText={errors.password ? errors.password.message : ''}
                    InputProps={{
                        placeholder: "סיסמה",

                        style: { textAlign: "center" },
                        endAdornment: (
                            <InputAdornment>
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
                <Button fullWidth variant="contained" type="submit" color="primary" size="x-large" style={{ marginTop: '1rem', backgroundColor: 'rgb(224, 193, 186)', boxShadow: "none", padding: "3%", width: "70%", marginRight: "15%", textAlign: "center" }}
                                    onMouseOver={(e) => {e.target.style.backgroundColor = "white" ;e.target.style.border = "2px solid rgb(224, 193, 186)"; e.target.style.color = "rgb(224, 193, 186)"}} 
                                    onMouseOut={(e) => {e.target.style.backgroundColor = "rgb(224, 193, 186)";e.target.style.color = "white"}} 
                >
                    צור חשבון
                </Button>
                <br />
                <br />
                <br />

                <Link to="/login" style={{ marginRight: "35%", color: "black", textDecoration: "underline" }}
                onMouseOver={(e) => {e.target.style.textDecoration = "underline";}} 
                onMouseOut={(e) => {e.target.style.textDecoration = "none"}} >
                    כניסה לאזור האישי שלי
                </Link>
            </form>
        </Container>
    );
};

export default SignUp;
