import "./skills.css";
import html_img from "../images/html-5.svg";
import css_img from "../images/css-3.svg";
import javascript_img from "../images/javascript.svg";
import react_img from "../images/react.svg";
import redux_img from "../images/redux.svg";
import mongodb_img from "../images/mongodb.svg";
import express_img from "../images/express.svg";
import github_img from "../images/github-icon.svg";

const skills = [
  html_img,
  css_img,
  javascript_img,
  react_img,
  redux_img,
  mongodb_img,
  express_img,
  github_img,
];

export const Skills = () => {
  return (
    <div id='skills' className='skills'>
      <div>
        <h1>Skills</h1>
      </div>
      <div className='skills_images'>
        {skills.map((skill) => (
          <div>
            <img src={skill} alt='' />
          </div>
        ))}
      </div>
    </div>
  );
};
