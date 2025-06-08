import React from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./Sidebar.module.css";
import logo from "../assets/images/logo.png"; // Adjust path as needed

function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.logoContainer}>
                <Link to="/">
                    <img src={logo} alt="codecli logo" className={styles.logo} />
                </Link>
            </div>
            <nav className={styles.menu}>
                <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                        isActive ? styles.activeMenuItem : styles.menuItem
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/features"
                    className={({ isActive }) =>
                        isActive ? styles.activeMenuItem : styles.menuItem
                    }
                >
                    Features
                </NavLink>
                <NavLink
                    to="/blog"
                    className={({ isActive }) =>
                        isActive ? styles.activeMenuItem : styles.menuItem
                    }
                >
                    Blog
                </NavLink>
            </nav>
        </aside>
    );
}

export default Sidebar;
