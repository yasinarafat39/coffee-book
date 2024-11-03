import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";

export default function MainLayout () {
    return (
        <div>
            {/* Navbar */}
            <Navbar />
            {/* Dynamic sections */}
            <div className="min-h-[calc(100vh-288px)] container py-12 mx-auto">
                <Outlet /> 
            </div>
            {/* Footer */}
            <Footer />

            {/* react hot toast */}
            <Toaster />
        </div>
    )
}