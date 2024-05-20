// AuthRoutes.jsx
import React from 'react';
import { Route } from 'react-router-dom';
import Profile from '../pages/Profile.jsx';
import ProfileHome from "../pages/Profile/ProfileHome.jsx";
import Gallery from "../pages/Profile/Gallery.jsx";
import Projects from "../pages/Profile/Projects.jsx";
import Portfolio from "../pages/Profile/Portfolio.jsx";
import Templates from "../pages/Profile/Templates.jsx";
import Training from "../pages/Profile/Training.jsx";
import Achievements from "../pages/Profile/Achievements.jsx";
import Favorites from "../components/Favorites.jsx";

const AuthRoutes = () => (
    <React.Fragment>
        <Route path="profile/" element={<Profile />} />
        <Route path="profile/home" element={<ProfileHome />} />
        <Route path="profile/gallery" element={<Gallery />} />
        <Route path="profile/projects" element={<Projects />} />
        <Route path="profile/portfolio" element={<Portfolio />} />
        <Route path="profile/templates" element={<Templates />} />
        <Route path="profile/training" element={<Training />} />
        <Route path="profile/achievements" element={<Achievements />} />
        <Route path="/favorites" element={<Favorites />} />
    </React.Fragment>
);

export default AuthRoutes;
