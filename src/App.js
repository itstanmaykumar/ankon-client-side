import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import NotFound from "./pages/NotFound/NotFound";
import Navbar from "./pages/Shared/Navbar/Navbar";
import SignIn from "./pages/Login/SignIn/SignIn";
import SignUp from './pages/Login/SignUp/SignUp';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Gallery from './pages/Gallery/Gallery/Gallery';
import Footer from './pages/Shared/Footer/Footer';
import PaintingDetails from './pages/Gallery/PaintingDetails/PaintingDetails';
import Pay from './pages/Dashboard/Pay/Pay';
import MyOrders from './pages/Dashboard/MyOrders/MyOrders';
import Review from './pages/Dashboard/Review/Review';
import ManageOrders from './pages/Dashboard/ManageOrders/ManageOrders';
import ManageProducts from './pages/Dashboard/ManageProducts/ManageProducts';
import AddPainting from './pages/Dashboard/AddPainting/AddPainting';
import MakeAdmin from './pages/Dashboard/MakeAdmin/MakeAdmin';
import AdminRoute from './pages/Login/AdminRoute/AdminRoute';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Navbar></Navbar>
          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route exact path="/home">
              <Home></Home>
            </Route>

            <PrivateRoute exact path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>

            <PrivateRoute exact path="/pay">
              <Pay></Pay>
            </PrivateRoute>

            <PrivateRoute exact path="/myorders">
              <MyOrders></MyOrders>
            </PrivateRoute>

            <PrivateRoute exact path="/review">
              <Review></Review>
            </PrivateRoute>

            <AdminRoute exact path="/allorders">
              <ManageOrders></ManageOrders>
            </AdminRoute>

            <AdminRoute exact path="/allpaintings">
              <ManageProducts></ManageProducts>
            </AdminRoute>

            <AdminRoute exact path="/addpainting">
              <AddPainting></AddPainting>
            </AdminRoute>

            <AdminRoute exact path="/mkadmin">
              <MakeAdmin></MakeAdmin>
            </AdminRoute>

            <Route exact path="/gallery">
              <Gallery></Gallery>
            </Route>

            <PrivateRoute exact path="/paintings/:paintingId">
              <PaintingDetails></PaintingDetails>
            </PrivateRoute>

            <Route exact path="/signin">
              <SignIn></SignIn>
            </Route>

            <Route exact path="/signup">
              <SignUp></SignUp>
            </Route>

            <Route path="/">
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
