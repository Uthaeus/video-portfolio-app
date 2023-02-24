import React, { useState } from "react";

function ProjectThumbnail(props) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    setIsPlaying(true);
  };

  const handleMouseLeave = () => {
    setIsPlaying(false);
  };

  return (
    <div
      className="thumbnail"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isPlaying ? (
        <video
          src={props.videoUrl}
          autoPlay
          controls
          width="400"
          height="300"
        />
      ) : (
        <>
          <img src={props.thumbnailUrl} alt={props.title} />
          <p>{props.title}</p>
        </>
      )}
    </div>
  );
}

export default ProjectThumbnail;