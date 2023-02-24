
import ProjectThumbnail from "../components/ProjectThumbnail";

const ProjectsPage = () => {
    const projects = [
        {
          id: 1,
          title: "Project 1",
          thumbnailUrl: "project1.jpg",
          videoUrl: "project1.mp4",
        },
        {
          id: 2,
          title: "Project 2",
          thumbnailUrl: "project2.jpg",
          videoUrl: "project2.mp4",
        },
        // add more projects as needed
    ];
    
    return (
        <>
          <h1>Projects Page</h1>
          <p>Welcome to my portfolio! Here are some of my recent projects:</p>
          <div className="thumbnails">
            {projects.map((project) => (
              <ProjectThumbnail
                key={project.id}
                title={project.title}
                thumbnailUrl={project.thumbnailUrl}
                videoUrl={project.videoUrl}
              />
            ))}
          </div>
        </>
    );
};


export default ProjectsPage;