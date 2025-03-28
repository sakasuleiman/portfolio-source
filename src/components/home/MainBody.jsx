import React from "react";
import Container from "react-bootstrap/Container";
import Typist from 'react-typist-component';
import { Jumbotron } from "./migration";
import { education, about, repos, leadership, skills, research, experience } from "../../editable-stuff/config";
import EducationPage from "./EducationPage";
import AboutMe from "./AboutMe";
import Project from "./Project";
import Leadership from "./Leadership";
import Skills from "./Skills";
import Research from "./Research";
import Experience from "./Experience";

const MainBody = React.forwardRef(
  ({ gradient, title, message, icons }, ref) => {
    React.useEffect(() => {
      const handleHashScroll = () => {
        const hash = window.location.hash;
        if (hash) {
          setTimeout(() => {
            const element = document.querySelector(hash);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
        }
      };

      window.addEventListener('load', handleHashScroll);
      return () => window.removeEventListener('load', handleHashScroll);
    }, []);

    return (
      <>
        {/* Hero Section */}
        <Jumbotron
          fluid
          id="home"
          style={{
            background: `linear-gradient(136deg,${gradient})`,
            backgroundSize: "1200% 1200%",
          }}
          className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
        >
          <div id="stars"></div>
          <Container className="text-center">
            <h1 ref={ref} className="display-1">
              {title}
            </h1>
            <Typist>
              <div className="lead typist">
                {message}
              </div>
            </Typist>
            <div className="p-5">
              {icons.map((icon, index) => (
                <a
                  key={`social-icon-${index}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={icon.url}
                  aria-label={`My ${icon.image.includes('fa-') ? icon.image.split("-")[1] : 'researchgate'}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    margin: '0 10px',
                  }}
                >
                  {icon.image.startsWith('fa-') ? (
                    <i 
                      className={`fab ${icon.image} fa-3x socialicons`} 
                      style={{ 
                        fontSize: '40px',
                        verticalAlign: 'middle'
                      }}
                    />
                  ) : (
                    <img 
                      src={icon.image} 
                      alt="ResearchGate" 
                      style={{ 
                        width: '40px', 
                        height: '40px', 
                        verticalAlign: 'middle',
                        filter: 'invert(100%)',
                        transition: 'filter 0.3s ease',
                        cursor: 'pointer'
                      }} 
                      onMouseOver={(e) => e.target.style.filter = 'invert(60%)'}
                      onMouseOut={(e) => e.target.style.filter = 'invert(100%)'}
                    />
                  )}
                </a>
              ))}
            </div>
            <a
              className="btn btn-outline-light btn-lg"
              href="#aboutme"
              role="button"
              aria-label="Learn more about me"
            >
              More about me
            </a>
          </Container>
        </Jumbotron>

        {/* About Section */}
        {about.show && (
          <AboutMe
            heading={about.heading}
            message={about.message}
            link={about.imageLink}
            imgSize={about.imageSize}
            resume={about.resume}
          />
        )}

        {/* Education Section */}
        {education.show && (
          <EducationPage data={education} />
        )}

        {/* Experience Section */}
        {experience && experience.show && (
          <Experience data={experience} />
        )}

        {/* Research Section */}
        {research && research.show && (
          <Research data={research} />
        )}

        {/* Projects Section */}
        {repos.show && (
          <Project
            heading={repos.heading}
            username={repos.gitHubUsername}
            length={repos.reposLength}
            specific={repos.specificRepos}
          />
        )}

        {/* Leadership Section */}
        {leadership.show && (
          <Leadership
            heading={leadership.heading}
            message={leadership.message}
            img={leadership.images}
            imageSize={leadership.imageSize}
          />
        )}

        {/* Skills Section */}
        {skills.show && (
          <Skills
            heading={skills.heading}
            hardSkills={skills.hardSkills}
            softSkills={skills.softSkills}
          />
        )}
      </>
    );
  }
);

export default MainBody;