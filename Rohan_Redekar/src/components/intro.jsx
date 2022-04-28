import "./intro.css";

export const Intro = () => {
  return (
    <div className='intro_container'>
      <div></div>
      <div className='intro_description'>
        <h1>Hi 👨🏽‍💻</h1>
        <h1>
          I'm <span className='name'>Rohan</span>
        </h1>
        <h1>Full Stack</h1>
        <h1>MERN Developer</h1>
        <div className="media_links">
          <a href='https://www.linkedin.com/in/rohan-redekar/'>
            <i class='logo fab fa-linkedin'></i>
          </a>
          <a href='https://github.com/RohanRedekar'>
            <i class='logo fab fa-github-square'></i>
          </a>
        </div>
      </div>
    </div>
  );
};
