import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import '../css/Header.css'; // Подключаем стили для Header
import ProfileIcon from "../images/account.png"
import SidebarHeaderButton from "../images/sidebar-button.png"
import MessengerHeaderLink from "../images/messenger.png"
import changeThemeIcon from "../images/change-theme.png"

// eslint-disable-next-line react/prop-types
function Header({ toggleSidebar }) {
    const { isAuth, setIsAuth } = useAuth();

    const handleThemeToggle = () => {
        alert('Theme toggle is not implemented yet.');
    };

    const handleLogout = () => {
        setIsAuth(false);
    };
    const [isOpen, setIsOpen] = useState(false);


    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    return (
        <header className="header">
            <div className="header-button-theme-toggle header-block-1">
                <button className="icon-button color-button-sidebar" onClick={toggleSidebar}>
                    <img src={SidebarHeaderButton} alt=""/>
                </button>
            </div>
            <div className="header-block-2">
                <div className="logo">
                    3D-Dashboard
                </div>
            </div>
            <div className="header-block-3">
                <div className="header-buttons">
                    <input type="text" placeholder="Поиск" className="search-bar" />
                    <div className="links">
                        {isAuth ? (
                            <>
                                <Link to="/profile/messengers" className="messenger-margin-right icon-links header-btn">
                                    <img src={MessengerHeaderLink} alt=""/>
                                </Link>
                                <div
                                    className="profile-dropdown"
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <Link to="/profile" className="icon-links header-btn">
                                        <img src={ProfileIcon} alt=""/>
                                    </Link>
                                    {/* Показываем меню, если isOpen === true */}
                                    {isOpen && (
                                        <div className="dropdown-content menu-btn">
                                            <button onClick={handleLogout}>Выйти</button>
                                            {/* Другие пункты меню */}
                                        </div>
                                    )}
                                </div>
                            </>
                        ) : (
                            <>
                                <Link to="/login" className="auth-button">Войти</Link>
                                <Link to="/register" className="auth-button">Зарегистрироваться</Link>
                            </>
                        )}
                    </div>
                </div>
                <div className="header-button-theme-toggle">
                    <button className="icon-button color-button-theme" onClick={handleThemeToggle}>
                        <img src={changeThemeIcon} alt=""/>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;

