import {Navigate, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {pageRoutes} from "./routes";

//REDUXXXXXXXXXXXXXXX

const ProtectedRoute = ({children}) => {
    const location = useLocation();
    const authenticated = useSelector((state) => state.auth.authenticated)

    if (!authenticated) {
        return <Navigate to={pageRoutes.login} state={{path: location.pathname}}/>;
    }

    return children;
};

export default ProtectedRoute;