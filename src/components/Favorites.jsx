import React from 'react';
import ProjectCard from "./ProjectCard.jsx";

const Favorites = () => {
    return (
        <div>
            <div className="project-grid">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                {/* Добавьте столько ProjectCard, сколько нужно */}
            </div>
        </div>
    );
};

export default Favorites;