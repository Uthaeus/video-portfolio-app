
import classes from '../styles/About.module.css';

const AboutPage = () => {
    return (
        <div className={classes['about-me']}>
          <h1>About Me</h1>
          <img
            src="https://via.placeholder.com/200x200"
            alt="Profile"
            className={classes['profile-picture']}
          />
          <div className={classes.socials}>
            <button><i>1</i></button>
            <button><i>2</i></button>
            <button><i>3</i></button>
            <button><i>4</i></button>
          </div>
          <p>
            Hi there! My name is Dude and I'm a video editor with over 5 years
            of experience. I specialize in creating engaging and visually stunning
            videos for a wide variety of clients. My work has been featured in
            several major publications and I've won numerous awards for my
            contributions to the industry.
          </p>
          <p>
            When I'm not editing videos, you can find me exploring the great
            outdoors or playing with my dog. I'm also an avid reader and
            enjoy curling up with a good book on rainy days.
          </p>
        </div>
      );
};


export default AboutPage;