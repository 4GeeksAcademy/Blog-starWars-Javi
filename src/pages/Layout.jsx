import React from "react";
import ScrollToTop from "../components/ScrollToTop";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom"; // Necesario para renderizar las rutas hijas

const Layout = () => {
    return (
        <>
            <ScrollToTop />
            <Navbar />
            <Outlet /> {/* Aquí se renderizan Home o Favorites */}
            <Footer />
        </>
    );
};

export default Layout;
