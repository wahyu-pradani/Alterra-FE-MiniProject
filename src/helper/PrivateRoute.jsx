
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, user }) => {
  //jika user sudah login akan menampilkan children jika belum akan balik ke home
  return user ? children : <Navigate to="/"></Navigate>;
};

export default PrivateRoute;