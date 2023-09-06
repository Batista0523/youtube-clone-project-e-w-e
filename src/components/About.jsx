import React from "react";
import "./about.css";

const About = () => {
  const creatorData = [
    {
      name: "Elisaul Batista",
      email: "elisaulbatista@pursuit.org",
      
    },
    {
      name: "Erick Tolentino",
      email: "Ericktolentino@pursuit.org",
    },
    {
      name:"Winder Marte",
      email3: "winderjoelmarte@pursuit.org",
    }
  ];
  return (
    <div className="card">
      <h1>Creators</h1>
      <div className="batista">
        <p>{creatorData[0].name}</p>
        <p>{creatorData[0].email}</p>
        <a href="https://github.com/Batista0523" target="_blank">
          Elisaul Batista's Github
        </a>
      </div>
      <div className="tolentino">
        <p>{creatorData[1].name}</p>
        <p>{creatorData[1].email}</p>
        <a href="https://github.com/Ericktolentino94" target="_blank">
          Erick Tolentino's Github
        </a>
      </div>
      <div className="marte">
        <p>Winder Marte:</p>
        <a href=""></a>
      </div>
    </div>
  );
};

export default About;
