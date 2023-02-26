import { Link } from "react-router-dom";

const ProjectItem = ({project}) => {
    // title, description, videoUrl, thumbnailUrl

    return (
        <article>
            <img src={project.thumbnailUrl} alt={project.title} />
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <menu>
                <Link to="edit">Edit</Link>
                <button>Delete</button>
            </menu>
        </article>
    );
};


export default ProjectItem;