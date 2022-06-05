import "./About.css";

import ProfilePicture from "./profile.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="columns">
        <div className="heading">
          <h1>Hi, I’m Marcell.</h1>
        </div>
        <div className="info">
          <p>
            I am a graphic designer, illustrator and digital artist. I enjoy
            creating art, whether it be about issues personal to me, things that
            relate to our world at large, or simply something beautiful to
            share.
          </p>
          <p>
            The thing I value above all else is humanity and I try to bring it
            to whatever project I’m working on. I find it important to stand up
            for human rights and try to be an ally to those who need one. When
            it comes to editorial work, I hope to shine a light on politics’
            injustices, face people’s privileges and prejudices – including my
            own – and show the importance of taking mental health seriously. I
            love to observe the world of artists, which easily keeps me humble
            and ever curious.
          </p>
        </div>
        <div className="profile">
          <img
            className="profilePicture"
            src={ProfilePicture}
            alt="Tóth Marcell Ákos"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
