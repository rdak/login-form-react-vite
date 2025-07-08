import { NavLink } from "react-router";

interface IHeaderMenuLinkProps {
    label: string;
    url: string;
    onClick: () => void;
}

const HeaderMenuLink: React.FC<IHeaderMenuLinkProps> = ({
    label,
    url,
    onClick,
}) => {
    return (
        <li>
            <NavLink
                className={({ isActive }) =>
                    isActive
                        ? "header-menu__link header-menu__link--active"
                        : "header-menu__link"
                }
                to={url}
                onClick={onClick}
            >
                {label}
            </NavLink>
        </li>
    );
};

export default HeaderMenuLink;
