import React from "react";
import Box from "../Box/Box";
import ShinyCard from "../ShinyCard/ShinyCard";
import "./client.css";

const profiles = [
  { id: 1, cover: "./images/ali.png", name: "Ali Shoja", job: "UIUX designer" },

  {
    id: 2,
    cover: "./images/profile1.svg",
    name: "Hossein Bagherzadeh",
    job: "product manager",
  },
  {
    id: 3,
    cover: "./images/profile2.svg",
    name: "Jason  Williams",
    job: "Digital Camera Winner",
  },
  {
    id: 4,
    cover: "./images/profile3.svg",
    name: "Jason  Williams",
    job: "Digital Camera Winner",
  },
  {
    id: 5,
    cover: "./images/profile4.svg",
    name: "Jason  Williams",
    job: "Digital Camera Winner",
  },
  {
    id: 6,
    cover: "./images/profile5.svg",
    name: "Jason  Williams",
    job: "Digital Camera Winner",
  },
];

export default function Client() {
  return (
    <div className="client">
      <Box isMiddleColumn>
        <div className="container">
          <div className="commentsProfile">
            <h3 className="comments">Comments of some of our customers...</h3>
            <p className="paraComments">
              Team consists of professional and experienced consultants,
              technicians, engineers, designers and solution architects who work
              with you to find the best possible solution for your IT
              environment.
            </p>
          </div>
          {profiles.map((user, index) => (
            <ShinyCard index={index}>
              <div className="clientBox" key={user.id}>
                <div className="clientBoxProfile">
                  <div className="clientBoxImg">
                    <img src={user.cover} alt="Client" />
                  </div>
                  <div className="clientBoxName">
                    <p className="profileName">{user.name}</p>
                    <p className="job">{user.job}</p>
                  </div>
                </div>
                <div>
                  <p className="descPara">
                    Most of the IT projects demand the deployment of their key
                    developer’s onsite at the client’s location followed by
                    their deployment at the ....
                  </p>
                </div>
              </div>
            </ShinyCard>
          ))}
        </div>
      </Box>
    </div>
  );
}
