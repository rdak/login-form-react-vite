import { useCallback, useMemo, useState } from "react";
import { NavLink } from "react-router";
import HeaderMenuLink from "./HeaderMenuItem";
import Logo from "../../logo.svg?react";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const onClick = useCallback(() => {
        setIsMenuOpen((prevState) => !prevState);
    }, []);

    const onMenuItemClick = useCallback(() => {
        setIsMenuOpen(false);
    }, []);

    const menuList = useMemo(() => {
        const user = localStorage.getItem("token");
        /**
         * unfortunately, this doesn't work correctly
         * because user is not changed here
         * because Header wasn't re-rendered
         *
         * We need to listen to the localStorage(we can't use it actually)
         * or add a context provider for it - would be better
         */
        const menuList = [
            {
                label: "Home",
                url: "/",
            },
            {
                label: "About",
                url: "/about",
            },
        ];

        if (user) {
            menuList.push(
                {
                    label: "User",
                    url: "/user",
                },
                {
                    label: "Logout",
                    url: "/logoutMock",
                },
            );
        } else {
            menuList.push({
                label: "Login",
                url: "/login",
            });
        }

        return menuList;
    }, []);

    return (
        <header>
            <a className="skip-link" href="#main">
                Skip to content
            </a>
            <div className="container">
                <div className="header">
                    <div className="header__logo">
                        <NavLink to="/" aria-label="Home page">
                            <Logo /> <span>Logo</span>
                        </NavLink>
                    </div>
                    <div className="header-menu">
                        <button
                            className="header-menu__toggle"
                            onClick={onClick}
                        >
                            ☰
                        </button>
                        <nav aria-label="Main">
                            <ul
                                className={`header-menu__list ${
                                    isMenuOpen ? "header-menu__list--open" : ""
                                }`}
                            >
                                {menuList.map(({ url, label }) => {
                                    return (
                                        <HeaderMenuLink
                                            key={label}
                                            label={label}
                                            url={url}
                                            onClick={onMenuItemClick}
                                        />
                                    );
                                })}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
