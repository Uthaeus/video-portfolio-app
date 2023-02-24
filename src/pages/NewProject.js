import React, { useState } from "react";

function NewProject() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleVideoUrlChange = (event) => {
    setVideoUrl(event.target.value);
  };

  const handleThumbnailUrlChange = (event) => {
    setThumbnailUrl(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would implement your logic for adding a new project to the site
    // For example, by making a request to an API
    console.log("Submitted!");
    console.log(title, description, videoUrl, thumbnailUrl);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={handleTitleChange} />
      </label>
      <br />
      <label>
        Description:
        <textarea value={description} onChange={handleDescriptionChange} />
      </label>
      <br />
      <label>
        Video URL:
        <input type="text" value={videoUrl} onChange={handleVideoUrlChange} />
      </label>
      <br />
      <label>
        Thumbnail URL:
        <input type="text" value={thumbnailUrl} onChange={handleThumbnailUrlChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default NewProject;
