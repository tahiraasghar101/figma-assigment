import Image from "next/image";
import Card from "./components/card-resendpost";

export default function Home() {
  return (
    <>
      <div className="hero-section">
        <div className="container">
          <div className="main">
            <div className="text-container">
              <h1 className="main-text">
                Hi, I am John,
                Creative Technologist
              </h1>
              <p className="main-para">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                sint. Velit officia consequat duis enim velit mollit. Exercitation veniam
                consequat sunt nostrud amet.</p>
              <button className="resume-btn">Download Resume</button>
            </div>
            <div>
              <div>
                <img src="/image.jpg" width={"300px"} height={"300px"} alt="Image" />
              </div>

            </div>
          </div>

        </div>

      </div>

      <div className="recent-post">
        <div className="container">

          <div className="main">
            <div className="heading">
              <h3>Recent Post</h3>
              <button className="view-all-btn">View All</button>
            </div>

            <div className="card-parent">
              <Card />
              <Card />





            </div>
          </div>

        </div>
      </div>

      <div className="featured-section">
        <div className="container">

          <div className="main">
            <div className="main-heading">
              <h3>Featured Work</h3>
            </div>
            <div className="card-parents">
            <div className="card">
              <img src="/img1.jpg" alt="img1" width="246" height="180" />
              <div className="card-content">
                <h2>Designing Dashboards</h2>
                <div className="badge-parent">
                    <div className="badge">
                         <p>2020</p>
                    </div>
                    <p>Dashboard</p>
                    </div>
                   
                  <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                     Velit officia consequat duis enim velit mollit.
                     Exercitation veniam consequat sunt nostrud amet.</p>
                
              </div>
            </div>

            <div className="card">
              <img src="/img2.jpg" alt="img1" width="246" height="180" />
              <div className="card-content">
                <h2>Designing Dashboards</h2>
                <div className="badge-parent">
                    <div className="badge">
                         <p>2020</p>
                    </div>
                    <p>Dashboard</p>
                    </div>
                   
                  <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                     Velit officia consequat duis enim velit mollit.
                     Exercitation veniam consequat sunt nostrud amet.</p>
                
              </div>
            </div>

            <div className="card">
              <img src="/img3.jpg" alt="img1" width="246" height="180" />
              <div className="card-content">
                <h2>Designing Dashboards</h2>
                <div className="badge-parent">
                    <div className="badge">
                         <p>2020</p>
                    </div>
                    <p>Dashboard</p>
                    </div>
                   
                  <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                     Velit officia consequat duis enim velit mollit.
                     Exercitation veniam consequat sunt nostrud amet.</p>
                
              </div>
            </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};
