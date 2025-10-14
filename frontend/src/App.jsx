import { useState, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { homeIcon, aboutIcon, projectsIcon, contactIcon, emailIcon, phoneIcon, locationIcon, my_pfp, a6, a7, weather_app, github_icon, linkedin_icon, discord_icon, facebook_icon } from './portfolio-images';
function App() {

  async function userInfo(formData) {
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    const data = { name, email, subject, message };

    try {
      const res = await fetch("http://localhost:3003/frontend/userInfo",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
      const result = await res.text();
      console.log(result);
      alert("Form submitted and saved!");
    }
    catch (err) {
      console.error("Error submitting form: ", err);
    }
  }

  function VideoPlayer({ src }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);
    /**
     * Toggles the video playback between playing and paused.
     * 
     * When the video is currently playing, it will be paused.
     * When the video is currently paused, it will be played.
     */
    function handleClick() {
      const nextIsPlaying = !isPlaying;
      setIsPlaying(nextIsPlaying);

      if (videoRef.current) {
        if (nextIsPlaying) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      }
    }
    return (
      <div className="col-md-4 mb-3">
        <div className="card" style={{ width: "18rem" }}>
          <video ref={videoRef}>
            <source
              src={src}
              type="video/mp4"
            />
          </video>
          <div className="card-body" style={{ backgroundColor: "rgb(250, 250, 250)" }}>
            <h5 className="card-title">Card title</h5>
            <button onClick={handleClick}>
              {isPlaying ? 'Pause' : 'Play'}
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="App border" style={{ backgroundColor: "rgb(255, 255, 255)", boxShadow: "0 0 20px rgba(203, 221, 231, 0.87)" }}>
      <header className="bg-dark text-white py-3 sticky-top border">
        <div className="container text-center">
          <div className="row align-items-center">
            {/* Left side */}
            <div className="col-auto">
              <strong>Portfolio</strong>
            </div>

            {/* Right side */}
            <div className="col d-flex justify-content-end gap-4">
              <div>
                <img src={homeIcon} alt="home" className="icon" />&nbsp;
                <a href="#Home">Home</a>
              </div>&nbsp;
              <div>
                <img src={aboutIcon} alt="about" className="icon" />&nbsp;
                <a href="#About">About</a>
              </div>&nbsp;
              <div>
                <img src={projectsIcon} alt="projects" className="icon" />&nbsp;
                <a href="#Projects">Projects</a>
              </div>&nbsp;
              <div>
                <img src={contactIcon} alt="contact" className="icon" />&nbsp;
                <a href="#Contact">Contact</a>
              </div>
            </div>
          </div>

        </div>
      </header>

      <main>
        <div className="container text-center">
          <div className="row" style={{ borderRadius: "10px", textAlign: "center", padding: "20px", backgroundColor: "rgba(103, 193, 237, 1)", boxShadow: "0 0 20px rgba(10, 147, 232, 0.8)" }}>
            <div className="col d-flex flex-column align-items-start">
              <h2>Hey, I'm Colin Okafor</h2>
              <br />
              <p>I am an aspiring software engineer, that specializes in mobile and web development using tools like React.JS and Node.JS<br /><br />
                <a href="#Projects"><button type="button" class="btn btn-outline-primary">view projects</button></a>&nbsp;&nbsp;
                <a href="mailto:colinokafor116@gmail.com"><button type="button" class="btn btn-primary" style={{ boxShadow: "0 0 10px rgba(0, 123, 255, 0.8)" }}>Contact me</button></a>
              </p>
            </div>
            <div className="col d-flex flex-column align-items-end">
              <img src={my_pfp} className="border" alt="pfp" style={{ width: "170px", height: "170px", borderRadius: "50%" }} />
            </div>
          </div>
          <br />
          <br />

          <section id="About" className="border" style={{ backgroundColor: "rgb(240, 240, 240)", boxShadow: "0 0 20px rgba(203, 221, 231, 0.87)", borderRadius: "10px" }}>
            <h2 style={{ padding: "20px", boxShadow: "0 0 20px rgba(15, 140, 207, 0.87)" }}>About Me</h2>
            <div className="border">
              <p>I'm a passionate web developer with a knack for creating dynamic and responsive web applications. I possess experience in full stack development using tools like reactJs, Node, Java, php, Javascript etc. I also possess knowledge in devops using Azure cloud services. </p>
              <p>I am passionate about learning new technologies and hope to advance my skills even further in the future.</p>
            </div>
          </section>
          <br />
          <br />

          <section id="skills" className="border" style={{ backgroundColor: "rgb(240, 240, 240)", boxShadow: "0 0 20px rgba(203, 221, 231, 0.87)", borderRadius: "10px" }}>
            <h2 style={{ padding: "20px", boxShadow: "0 0 20px rgba(15, 140, 207, 0.87)" }}>My Skills</h2>
            <div className="row">
              <div className="col">

                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title">Python</h5>
                    <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar" style={{ width: "80%" }}></div>
                    </div>
                  </div>
                </div>

              </div>
              <div className="col">

                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title">React</h5>
                    <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar" style={{ width: "65%" }}></div>
                    </div>
                  </div>
                </div>

              </div>
              <div className="col">
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title">HTML/CSS</h5>
                    <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title">SQL</h5>
                    <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar" style={{ width: "75%" }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title">Java</h5>
                    <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar" style={{ width: "75%" }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title">Systems Analysis and Design</h5>
                    <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar" style={{ width: "80%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title">Software Testing</h5>
                    <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar" style={{ width: "70%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title">Azure Cloud Services</h5>
                    <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar" style={{ width: "70%" }}></div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>
          <br />
          <br />

          <section id="Projects" className="border" style={{ backgroundColor: "rgb(240, 240, 240)", boxShadow: "0 0 20px rgba(203, 221, 231, 0.87)", borderRadius: "10px" }}>
            <h2 style={{ padding: "20px", boxShadow: "0 0 20px rgba(15, 140, 207, 0.87)" }}>Featured projects</h2>
            <div className=" row  text-center">

              <VideoPlayer src={a6} />

              {/* ✅ use public path for the large file */}
              <VideoPlayer src={weather_app} />

              <VideoPlayer src={a7} />

            </div>
          </section>
          <br />
          <br />

          <section id="Contact" className="border" style={{ backgroundColor: "rgb(240, 240, 240)", boxShadow: "0 0 20px rgba(203, 221, 231, 0.87)", borderRadius: "10px" }}>
            <h2 style={{ padding: "20px", boxShadow: "0 0 20px rgba(15, 140, 207, 0.87)" }}>Get In Touch</h2>
            <div className="row border" style={{ width: "700px" }}>
              <div className="col-md-8 border" style={{ borderRadius: "10px", padding: "20px", backgroundColor: "rgb(250, 250, 250)" }}>
                <form className="text-start" onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target);
                  userInfo(formData);
                }}
                  name="userInfo" method="post">
                  <div className="mb-3" >
                    <label htmlFor="exampleInputName1" className="form-label">Name:</label>
                    <input type="text" name="name" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" />
                    <div id="nameHelp" className="form-text">Please enter your full name.</div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address:</label>
                    <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="exampleSubjectName1" className="form-label">Subject:</label>
                    <input type="text" name="subject" className="form-control" id="exampleSubjectName1" aria-describedby="subjectHelp" />
                    <div id="subjectHelp" className="form-text">Please enter the subject of your message.</div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="exampleInputMessage1" className="form-label">Message:</label>
                    <textarea className="form-control" name="message" id="exampleInputMessage1" rows="3" aria-describedby="messageHelp"></textarea>
                    <div id="messageHelp" className="form-text">Please enter your message.</div>
                  </div>

                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>

              <div className="col-md-4 border text-start" style={{ borderRadius: "10px", padding: "20px", backgroundColor: "rgb(250, 250, 250)" }}>
                <h5><strong>Contact Information</strong></h5>
                <br />
                <div>
                  <h6><img src={emailIcon} className="icon" alt="an email" /> &nbsp; Email</h6>
                  <p><a href="mailto:colinokafor116@gmail.com">colinokafor116@gmail.com</a></p>
                </div>
                <br />
                <div>
                  <h6><img src={phoneIcon} className="icon" alt="phone" /> &nbsp; Phone</h6>
                  <p><a href="tel:+13653362629">(365)336-2629</a></p>
                </div>
                <br />
                <div>
                  <h6><img src={locationIcon} className="icon" alt="location" /> &nbsp; Location</h6>
                  <p>Hamilton, ON</p>
                </div>
                <br />
                <h6>
                  <p>Follow me</p>
                  <div>
                    <a href="https://github.com/ColinOkafor"><img src={github_icon} className="icon" alt="github" /> </a> &nbsp;
                    <a href="https://www.linkedin.com/in/colin-okafor-54aa95332/"><img src={linkedin_icon} className="icon" alt="linkedin" /></a>&nbsp;
                    <a href="https://discord.com/users/1173337106043654144"><img src={discord_icon} className="icon" alt="discord" /></a>&nbsp;
                    <a href="https://www.facebook.com/colin.okafor.2025"><img src={facebook_icon} className="icon" alt="facebook" /></a>&nbsp;
                  </div>
                </h6>
              </div>
            </div>
          </section>

        </div>

      </main>
      <footer className="border text-center py-3 bg-dark text-white" >
        <p>© 2025 Colin</p>
      </footer>

    </div>
  )
}

export default App
