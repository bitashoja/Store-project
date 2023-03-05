import React from "react";
import "./aboutTeam.css";

export default function AboutTeam() {
  return (
    <div className="OnlineShope StylishApp">
      <div className="about-team-mobile">
        <h3>
          About BEYOND <span>IT</span> team
        </h3>
        <img src="./images/team-mobile.svg" alt="Frame102" />
      </div>
      <div className="onlineShope-img" id="about-team-desktop">
        <img src="./images/about-team.svg" alt="Frame102" />
      </div>
      <div className="onlineShope-text">
        <h3 className="title-onlineShope-laptop" id="about-team-text">
          About BEYOND <span>IT</span> team
        </h3>
        <span className="about-text">
          For more than 15 years, our team's experts have been working in the
          field of digital technologies. The experience of these years has shown
          us that digital media can play a key role in increasing the quality of
          life for all of us. It was exactly this view that made us get down to
          business and focus on creating a company. In the hope that we can play
          a small role in the improvement and development of digital media.
          <br />
          <br />
          Our message is simple and clear. A successful collection is not
          created by advertising and millions of prizes. Success will happen
          when you see your customers as real people. Humans who think and make
          decisions. Growth means that you put your thoughts and energy into
          improving the lives of these people. We are going to start a new
          chapter in (digital) business marketing with you. And in the new
          approach we want businesses to have a long-term vision. A vision that
          connects today's income and short-term advertising solutions with
          quality, transparency, education and intimacy. A look that emphasizes
          on creating stable relationships with customers.
        </span>
      </div>
    </div>
  );
}
