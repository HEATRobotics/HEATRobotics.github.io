import React, {useEffect} from 'react';
import SkewedDiv from "../../components/Container/container";
import PageTitle from "../../components/PageTitle/page-title";
import Parallax from "../../components/Parallax/parallax";




function Main() {

  return (
      <div className="reset-styles">

          <PageTitle title="HEAT Robotics"
            description="Welcome to Heat Robotics! We're developing innovative robotics solutions to assist firefighters in cold trailing, helping them navigate and detect hazards more effectively in challenging environments."></PageTitle>

          <Parallax image={`wildfire-1.jpg`} />

          <SkewedDiv>
              <h2>EMBR</h2>
              <p>EMBR is a robotic system designed to assist firefighters in post-wildfire situations by detecting hotspots and navigating challenging terrains. Equipped with advanced thermal and LIDAR sensors, EMBR can quickly identify underground fires, helping to prevent further spread. Its robust suspension system allows it to traverse rough, uneven ground, such as thick brush and fallen logs, making it an ideal tool for navigating forests and other difficult environments where traditional vehicles might struggle.</p>
              <br/>
              <p>The robot operates autonomously with real-time communication to a base station, providing data such as GPS location, sensor readings, and camera footage. EMBR’s manual override feature allows for remote control in case of emergencies, and it is designed to operate efficiently in extreme conditions, with a focus on agility, speed, and obstacle avoidance. EMBR aims to enhance firefighter safety and improve response times by providing detailed, real-time environmental information in hazardous post-wildfire terrain</p>

              <br/>
              <h3>Future Development</h3>
              <br/>
              <p>Work is underway to enhance EMBR’s obstacle avoidance system, and extend its battery life. Future developments will focus on further improving its fire detection accuracy, enhancing its route planning and pathfinding capabilities, and ensuring it can operate in diverse environmental conditions.</p>

          </SkewedDiv>

          <Parallax image={`wildfire-4.jpg`} />

      </div>
  );
}

export default Main;