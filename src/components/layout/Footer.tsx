import { Link } from "react-router";

function Footer() {
	return (
		<footer>
			<div className="container">
				<div className="footer">
					<div className="footer__logo">
						<Link to="/">Logo footer</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
