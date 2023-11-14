import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import CarCardPlace from "../components/CarCardPlace/CarCardPlace";

const Mainpage = () => {
    return (
        <div className="page">
            <Navbar />
            <CarCardPlace />
            <Footer />
        </div>
    )
}

export default Mainpage;
