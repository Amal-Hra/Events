"use client";
import ToggleTheme from "../toggleTheme/ToggleTheme";
import Links from "./links/Links";
import Styles from "./navbar.module.css";

const Navbar = () => {
	return (
		<div className={Styles.container}>
			<div className={Styles.logo}>ArtEclat</div>
			<div style={{ display: "flex", gap: "30px", justifyContent: "center" }}>
				<ToggleTheme />
				<Links />
			</div>
		</div>
	);
};
export default Navbar;
