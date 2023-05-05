import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../Components/Layout";
import {
  docList,
  home,
  pageNotFound,
  dashboard,
  signup,
  login,
  docdetail,
  docpayment,
  legalexpert,
  agreement,
  otpauthentication,
} from "./routeConstances";
// import Home from "../pages/Home";
import DocList from "../Pages/DocList";
import NotFound from "../Pages/NotFound";
import Home from "../Pages/Home/Home";
import Dashboard from "../Pages/Dashboard";
import Signup from "../Pages/Signup/Signup";
import Login from "../Pages/Login/Login";
import DocDetail from "../Pages/DocDetail/DocDetail";
import DocPayment from "../Pages/DocPayment/DocPayment";
import LegalExpert from "../Pages/LegalExpert";
import Agreement from "../Pages/Agreement";
import OtpAuthentication from "../Pages/OtpAuthentication/OtpAuthentication";
import Protected from "./Protected";

function Routing() {
  const [isLoggedIn, setisLoggedIn] = useState(true);

  const logIn = () => {
    setisLoggedIn(true);
  };
  const logOut = () => {
    setisLoggedIn(false);
  };

  return (
    <div>
      {/* <Router> */}
      <Layout>
        <Routes>
          <Route
            path={docList}
            exact
            element={
              <>
                <Protected isLoggedIn={isLoggedIn}>
                  <DocList />
                </Protected>
              </>
            }
          />
          <Route
            path={dashboard}
            exact
            element={
              <>
                <Protected isLoggedIn={isLoggedIn}>
                  <Dashboard />
                </Protected>
              </>
            }
          />
          <Route
            path={docdetail}
            exact
            element={
              <>
                <Protected isLoggedIn={isLoggedIn}>
                  <DocDetail />
                </Protected>
              </>
            }
          />
          <Route
            path={docpayment}
            exact
            element={
              <>
                <Protected isLoggedIn={isLoggedIn}>
                  <DocPayment />
                </Protected>
              </>
            }
          />
          <Route
            path={legalexpert}
            exact
            element={
              <>
                <Protected isLoggedIn={isLoggedIn}>
                  <LegalExpert />
                </Protected>
              </>
            }
          />
          <Route
            path={agreement}
            exact
            element={
              <>
                <Protected isLoggedIn={isLoggedIn}>
                  <Agreement />
                </Protected>
              </>
            }
          />
          <Route
            path={otpauthentication}
            exact
            element={
              <>
                <Protected isLoggedIn={isLoggedIn}>
                  <OtpAuthentication />
                </Protected>
              </>
            }
          />

          <Route path={home} exact element={<Home />} />
          <Route path={signup} exact element={<Signup />} />
          <Route path={login} exact element={<Login />} />

          {/* <Route path={contactus} element={<ContactusPage />} />
            <Route path={`${portfolio}/:title`} element={<PortfolioInner />} />
            <Route path={`${blog}/:slug`} element={<BlogInner />} /> */}
          <Route path={pageNotFound} element={<NotFound />} />
        </Routes>
      </Layout>
      {/* </Router> */}
    </div>
  );
}

export default Routing;
