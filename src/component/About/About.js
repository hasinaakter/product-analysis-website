import React from "react";

const About = () => {
  return (
    <div>
      <h1>About LENOVO ideapad 320 </h1>

      <div className="home-container">
        <div className="laptop-details">
          <h3>Powerful hybrid storage</h3>
          <p>
            Choose between the ample storage of up to 2 TB SATA HDD or
            performance-enhancing hybrid storage, with up to 128 GB PCIe SSD
            plus 1 TB SATA HDD. You'll have more than enough room to build your
            collection of photos, movies and more — without spending extra
            money.
          </p>
        </div>
        <div className="laptop-images">
          <img src="images/lenovo-ideapad-d.jpg" alt="" />
        </div>
      </div>
      <div className="home-container">
        <div className="laptop-images">
          <img src="images/lenovo-ideapad-320-15-G.jpg" alt="" />
        </div>
        <div className="laptop-details">
          <h3>Advanced graphics power with NVIDIA </h3>
          <p>
            The Ideapad 320 offers a range of graphics options, including a
            powerful NVIDIA® GeForce™ 940MX graphics card. Discrete graphics
            cards rely on their own processing power, so you'll experience
            smoother graphics, less screen tearing and better gaming performance
            without compromising overall speed and responsiveness. Whether
            you're playing a game or creating or editing content, you'll enjoy
            crisp visuals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
