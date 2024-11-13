import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRouteForManager = ({ children }) => {
    const user = useSelector(st => st.user.currentUser);


    if (!user || user.role == "user") {
        return <Navigate to="/products/אגרטל" />;
    }
    else {
        return children;
    }

}

export default ProtectedRouteForManager;