import { Navigate } from "react-router-dom";
import { login } from "./routeConstances";
const Protected = ({ isLoggedIn, children }) => {
 if (!isLoggedIn) {
 return <Navigate to={login} replace />;
 }
 return children;
};
export default Protected;