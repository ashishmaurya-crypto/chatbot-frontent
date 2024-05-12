import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ redirectPath = "/login", secretkey = "token", children }) => {
	if (!localStorage.getItem(secretkey)) {
		return <Navigate to={redirectPath} />;
	}

	return children ? children : <Outlet />;
};

export default PrivateRoute;