import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
	return ( 
		<nav className="navbar">
			<div className="container navbar__container">
				<div className="links navbar__links">
					<div className="link navbar__link">
						<Link to="/">Главная</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}
 
export default Navbar;

