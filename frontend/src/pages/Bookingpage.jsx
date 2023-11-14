import Bookingform from "../components/Bookingform/Bookingform";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Bookingpage = () => {
    return (
        <div className="page">
            <Navbar />
            <Bookingform />
            <Footer />
        </div>
    )
}

export default Bookingpage;