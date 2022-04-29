import "./projects.css";
import kohls_img from "../images/kohls landing page.png";
import internshala_img from "../images/internshala landing page.png";
import heroku_img from "../images/heroku-icon.svg";
import github_img from "../images/github-icon.svg";
export const Projects = () => {
  return (
    <div id='projects' className='projects_section'>
      <div className='projects_head'>
        <h1>Projects</h1>
      </div>
      <div className='projects_container'>
        <div className='projects'>
          <div>
            <div className='project_img'>
              <a href='https://internshaala.herokuapp.com/' target='_blank'>
                <img src={internshala_img} alt='internshala_img' />
              </a>
            </div>
            <div className='project_desc'>
              <h1>Internshala Clone</h1>
              <p>
                Internshala is an online training platform that provides
                internships for students and courses to master one's skills.
              </p>
              <p>
                A collaborative project, built in 5 days by a team of 6
                developers.
              </p>
              <p>HTML | CSS | Javascript | Node | Express | MongoDB</p>
            </div>
            <div className='project_links'>
              <div>
                <a href='https://internshaala.herokuapp.com/' target='_blank'>
                  <img
                    style={{ width: "44px" }}
                    src={heroku_img}
                    alt='netlify.com'
                  />
                </a>
                <br />
                <b>website</b>
              </div>
              <div>
                <a
                  href='https://github.com/Mitul-778/Backend-Internshaala'
                  target='_blank'
                >
                  <img src={github_img} alt='github.com' />
                </a>
                <br />
                <b>Github</b>
              </div>
            </div>
          </div>
          <div>
            <div className='project_img'>
              <a
                href='https://hashmat-noorani.github.io/Kohl-s/index.html'
                target='_blank'
              >
                {" "}
                <img src={kohls_img} alt='kohls_img' />
              </a>
            </div>
            <div className='project_desc'>
              <h1>Kohl's Clone</h1>
              <p>
                Kohl's is an American department store retail chain and it is
                the largest department store chain in the U.S.
              </p>
              <p>
                A collaborative project, built in 5 days by a team of 6
                developers.
              </p>
              <p>HTML | CSS | Javascript</p>
            </div>
            <div className='project_links'>
              <div>
                <a
                  href='https://hashmat-noorani.github.io/Kohl-s/index.html'
                  target='_blank'
                >
                  <img src={github_img} alt='netlify.com' />
                </a>
                <br />
                <b>website</b>
              </div>
              <div>
                <a
                  href='https://github.com/Hashmat-Noorani/Kohl-s'
                  target='_blank'
                >
                  <img src={github_img} alt='github.com' />
                </a>
                <br />
                <b>Github</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
