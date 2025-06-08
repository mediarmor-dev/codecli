import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
import logo from "../assets/images/logo.png"; // Adjust path to your logo file

function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.logoContainer}>
                <img src={logo} alt="codecli logo" className={styles.logo} />
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
