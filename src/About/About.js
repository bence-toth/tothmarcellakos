import "./About.css";

import ProfilePicture from "./profile.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="columns">
        <div className="heading">
          <h1>Hi, I’m Elon.</h1>
        </div>
        <div className="info">
          <p>
            I am basically pretty rich. I bought Twitter the other day because I
            was bored.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            fringilla sagittis massa, in efficitur risus congue id. In faucibus
            volutpat tincidunt. Suspendisse feugiat, est vitae dictum ornare,
            orci sapien convallis est, a sollicitudin sapien ex in velit.
            Aliquam in lectus nec massa vehicula dignissim blandit vehicula
            augue.
          </p>
          <p>
            Duis dignissim est eget mi dapibus, id convallis augue auctor. Nulla
            iaculis turpis sit amet nulla porta, a commodo felis varius. Integer
            laoreet nunc velit, quis luctus sem vulputate a. Duis lacinia
            posuere nulla, a faucibus leo vestibulum eget.
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
