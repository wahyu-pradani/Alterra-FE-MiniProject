import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./pages/user/about/index";
import Login from "./pages/admin/login";
import Contact from "./pages/user/contact/index";
import { auth } from "../firebase";
import Home from "./pages/user/home";
import Ordering from "./pages/user/order";
import { onAuthStateChanged } from "firebase/auth";
import PrivateRoute from "./helper/PrivateRoute";
import Display from "./pages/admin/display-order/index";
import Add from "./pages/admin/add-order";
import ChatBot from "./pages/user/chatGeminiAI";
import Edit from "./pages/admin/update-order";
import ServiceDisplay from "./pages/admin/services/display-service";
import UpdateService from "./pages/admin/services/update-service";
import ServiceAdd from "./pages/admin/services/add-service";
import HomeAdmin from "./pages/admin/home";

function App() {
  const [user, setUser] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsFetching(false);
        console.log(user);
        return;
      }

      setUser(null);
      setIsFetching(false);
    });
    return () => unsubscribe();
  }, []);

  if (isFetching) {
    return <h2>Loading...</h2>;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/ordering" element={<Ordering></Ordering>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/chatAI" element={<ChatBot></ChatBot>}></Route>
        <Route
          path="/service"
          element={
            <PrivateRoute user={user}>
              <ServiceDisplay></ServiceDisplay>
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/addService"
          element={
            <PrivateRoute user={user}>
              <ServiceAdd></ServiceAdd>
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/updateService/:id"
          element={
            <PrivateRoute user={user}>
              <UpdateService></UpdateService>
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/admin"
          element={
            <PrivateRoute user={user}>
              <HomeAdmin></HomeAdmin>
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/update/:id"
          element={
            <PrivateRoute user={user}>
              <Edit></Edit>
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/addOrder"
          element={
            <PrivateRoute user={user}>
              <Add></Add>
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/display"
          element={
            <PrivateRoute user={user}>
              <Display></Display>
            </PrivateRoute>
          }
        ></Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
