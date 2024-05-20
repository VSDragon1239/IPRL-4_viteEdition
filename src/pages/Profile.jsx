import {Link, matchPath, useLocation} from 'react-router-dom';
import ProfileBackground from '../images/profile/background.png'
import ProfilePicture from '../images/profile/main-image.jfif'

import '../css/Profile.css';
import ProfileHome from "./Profile/ProfileHome.jsx";

// eslint-disable-next-line react/prop-types
function Profile({isOpenSidebar}) {

    const location = useLocation();
    const isProfileHomePage = !!matchPath(location.pathname, '/profile/home/');
    console.log(isProfileHomePage)

    return (
        <div className="profile">
            <div className="profile-header">
                <img src={ProfileBackground} alt="Profile Banner" className={isOpenSidebar ? ("profile-banner-1") : ("profile-banner-2")} />
                <div className="user-icon-text-block">
                    <img src={ProfilePicture} alt="Profile" className="profile-picture" />
                    <div className="user-names">
                            <h2>VSDragon1239</h2>
                            <p>@userid</p>
                    </div>
                </div>

            </div>
            <div className={isOpenSidebar ? ("profile-sidebar-1") : ("profile-sidebar-2")}>
                <Link to="/profile/home" className={isOpenSidebar ? ("profile-sidebar-item-1") : ("profile-sidebar-item-2")}>Главная</Link>
                <Link to="/profile/gallery" className={isOpenSidebar ? ("profile-sidebar-item-1") : ("profile-sidebar-item-2")}>Галерея</Link>
                <Link to="/profile/projects" className={isOpenSidebar ? ("profile-sidebar-item-1") : ("profile-sidebar-item-2")}>Проекты</Link>
                <Link to="/profile/portfolio" className={isOpenSidebar ? ("profile-sidebar-item-1") : ("profile-sidebar-item-2")}>Портфолио</Link>
                <Link to="/profile/templates" className={isOpenSidebar ? ("profile-sidebar-item-1") : ("profile-sidebar-item-2")}>Шаблоны</Link>
                <Link to="/profile/training" className={isOpenSidebar ? ("profile-sidebar-item-1") : ("profile-sidebar-item-2")}>Обучение</Link>
                <Link to="/profile/achievements" className={isOpenSidebar ? ("profile-sidebar-item-1") : ("profile-sidebar-item-2")}>Достижения</Link>
            </div>
            <div className="profile-main-link-block">
                {isProfileHomePage ? (
                    <>
                        <ProfileHome />
                    </>
                ) : (
                    <>

                    </>
                )}
            </div>
        </div>
    );
}

export default Profile;
