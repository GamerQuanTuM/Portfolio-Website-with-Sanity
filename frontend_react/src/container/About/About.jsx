import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap } from "../../Wrapper";
import "./About.scss";
import { urlFor, client } from "../../client";
// import { images } from "../../constants";

// const abouts = [
//   {
//     title: "Frontend Developer",
//     description: "I am good at frontend development",
//     imgUrl: images.about01,
//   },
//   {
//     title: "NodeJS Developer",
//     description: "I am good at backend development",
//     imgUrl: images.about02,
//   },
//   {
//     title: "Full-Stack Developer",
//     description: "I am good at web development",
//     imgUrl: images.about03,
//   },
//   {
//     title: "MERN Stack Developer",
//     description: "I am a MERN stack developer",
//     imgUrl: images.about04,
//   },
// ];

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type=="abouts"]';
    client.fetch(query).then((response) => setAbouts(response));
  }, []);

  return (
    <>
      <h2 className="head-text">
        I Know that <span>Good Apps</span>
        <br />
        means <span>Good Business</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(About,'about');
