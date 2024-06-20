import React from "react";
import { MainLayout } from "../Layouts";
import Card from "../Components/Card/Card";
import { ImageContainer } from "../Components/ImageContainer";
import pig from "../assets/IMG-20230804-WA0065-removebg.png";
import Tilt from "react-parallax-tilt";
import About from './About'
import { Skills } from "../Components/Skill";
import { motion } from "framer-motion";
import {Analytics} from '@vercel/analytics/react'
// import { ServicesList } from "../Components/Services/ServiceList";

const mySkills = [
  "JavaScript",
  "React",
  "Node.js",
  "HTML",
  "CSS",
  "Python",
  "Java",
];

const Home: React.FC = () => {
  return (
    <MainLayout>
      <div id="home" className="container mx-auto mt-5 p-3 bg-inherit">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold mb-4 m-auto">Hi, I'm Bernard</h1>
            <motion.div
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 35 }}
              id="left"
              className={`flex-1`}
            >
            <Tilt className="w-fit">
              <div className="shadow-md p-5 w-fit rounded-md bg-white dark:bg-yellow-200 dark:text-black">
                <h1 className="text-4xl font-bold mb-4">About Me</h1>
                <p className="text-lg lg:w-[500px]">
                  Hello there! 👋 I'm Bernard, a Computer Science and Engineering student from Ghana 🌍. 
                  I'm passionate about using my skills to help place Africa at the forefront of the global tech space.
                </p>
              </div>
            </Tilt>
            </motion.div>
            <motion.div
              initial={{ x: "100vw" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 35 }}
              className={`flex-1`}
            >
            <Tilt className="w-fit">
              <div className="shadow-md p-5 w-fit rounded-[10px] ml-25 md:ml-36 lg:ml-36 bg-white mt-5 dark:bg-green-200 dark:text-black">
                <h1 className="text-4xl font-bold mb-4">What I Do</h1>
                <p className="text-lg lg:w-[500px]">
                  As a developer 💻, I'm immersed in the world of code and algorithms. I enjoy crafting elegant solutions and bringing innovative ideas to life through web development. I thrive on the challenges of the tech world.
                </p>
              </div>
            </Tilt>
            </motion.div>
            <motion.div
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 35 }}
              className={`flex-1`}
            >
            <Tilt className="w-fit">
              <div className="shadow-md p-5 w-fit rounded-[10px] ml-25 dark:bg-violet-200 dark:text-black bg-white mt-5">
                <h1 className="text-4xl font-bold mb-4">Why Tech?</h1>
                <p className="text-lg lg:w-[500px]">
                 I believe technology is a transformative force for positive change. Whether building user-friendly applications or contributing to open-source, I see it as driving innovation and inclusivity.
                </p>
              </div>
            </Tilt>
            </motion.div>
          </div>
          <ImageContainer
            src={pig}
            className="rounded-md mx-auto lg:ml-8 lg:w-1/2 h-auto drop-shadow-md"
          />
        </div>
        <hr className="shadow-md" />
        <div className="flex flex-col mt-4 mb-4">
          <Skills skills={mySkills} />
        </div>
        <div id="projects" className="flex flex-col mt-4 mb-4">
          <h1 className="text-4xl font-bold mb-4 mx-auto">Projects</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 md:gap-24 gap-12  mx-auto">
            <Card
              title="SMSX"
              content="SMSX is a messaging app designed for seamless communication. It provides a user-friendly interface and advanced features to enhance your messaging experience. Stay connected with SMSX!"
              buttonText="Learn More"
              link="https://github.com/Adjanour/SMSX"
            />
            <Card
              title="Task Tribe"
              content="Task Tribe is a task management platform that helps individuals and teams organize their work efficiently. With features like task assignment, deadlines, and progress tracking, Task Tribe simplifies project management."
              buttonText="Explore Features"
              link="https://github.com/Adjanour/task-tribe-react"
            />
            {/* <Card
              title="TeleX"
              content="TeleX is a video conferencing application that ensures crystal-clear communication. Host virtual meetings, webinars, and collaborative sessions effortlessly. TeleX brings people together, no matter where they are."
              buttonText="Join a Meeting"
            /> */}
            <Card
              title="React Components"
              content="Explore a collection of reusable React components designed to accelerate your frontend development. These components follow best practices, are customizable, and save you time on building common UI elements."
              buttonText="View Components"
              link="https://github.com/Adjanour/ReactComponents"
            />
            <Card
              title="Lite Notes"
              content="Lite Notes is a minimalist note-taking app for capturing your thoughts on the go. It offers a distraction-free writing experience with essential features like markdown support and cloud synchronization."
              buttonText="Start Noting"
            />
            <Card
              title="Task Tribe API"
              content="Integrate Task Tribe into your applications with our powerful API. Access tasks, projects, and user data programmatically. Build custom workflows and extend Task Tribe's functionality with ease."
              buttonText="Explore API"
              link="https://github.com/Adjanour/TaskTribeAPI"
            />
            <Card
              title="Notify"
              content="Stay informed with Notify, a notification service that keeps you updated on important events and alerts. Customize your notification preferences and receive timely information to enhance your productivity."
              buttonText="Stay Informed"
            />
            {/* <Card
              title="SMSX Analytics"
              content="Unlock valuable insights with SMSX Analytics. Monitor message engagement, track user behavior, and optimize your messaging strategy. Make data-driven decisions to enhance communication effectiveness."
              buttonText="Explore Analytics"
            /> */}

            {/* Repeat for other cards */}
          </div>
        </div>
        {/* <hr className="shadow-md" /> */}
        {/* <ServicesList/> */}
        <hr className="shadow-md mt-2" />
        <About />
        <Analytics/>
      </div>
    </MainLayout>
  );
};

export default Home;
