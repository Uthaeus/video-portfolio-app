
import classes from './Home.module.css';

const HomePage = () => {
    return (
        <>
            <h1>Video Editor Portfolio</h1>
            <p>Welcome to my portfolio! Here are some of my recent projects:</p>
            <div className={classes.thumbnails}>
                <div className={classes.thumbnail}>
                    <img src="project1.jpg" alt="Project 1" />
                    <p>Project 1</p>
                </div>
                <div className={classes.thumbnail}>
                    <img src="project2.jpg" alt="Project 2" />
                    <p>Project 2</p>
                </div>
                <div className={classes.thumbnail}>
                    <img src="project3.jpg" alt="Project 3" />
                    <p>Project 3</p>
                </div>
            </div>
        </>
    );
};


export default HomePage;