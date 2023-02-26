import { Link } from "react-router-dom";

import classes from './ProjectItem.module.css';

const ProjectItem = ({project}) => {
    // title, description, videoUrl, thumbnailUrl

    return (
        <article className={classes.project}>
            <img src={project.thumbnailUrl} alt={project.title} />
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <menu className={classes.actions}>
                <Link to="edit">Edit</Link>
                <button>Delete</button>
            </menu>
        </article>
    );
};


export default ProjectItem;