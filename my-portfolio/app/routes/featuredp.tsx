import React from "react";
import { Link } from "react-router";

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Verifact - AI Rumor Verification Platform",
      description:
        "A web platform using AI to verify the authenticity of news and claims. Built with React, Node.js, and OpenAI.",
      image: "../../assets/verifact-thumbnail.png",
    },
    {
      id: 2,
      title: "DeenWise - Tutor & Student Platform",
      description:
        "An Islamic learning platform where tutors upload video lessons and manage assignments. Built using React and Spring Boot.",
      image: "/assets/deenwise-thumbnail.png",
    },
    {
      id: 3,
      title: "AgroScan: AI-Powered Crop Diagnosis Platform for Farmers",
      description:
        "A platform where farmers can easily upload a picutre of their crops and get the current health status. Text and SMS-based diagnosis is also supported.",
      image: "",
    },
    // {
    //   id: 4,
    //   title: "UniHustle - WhatsApp Vendor Bot",
    //   description: "A chatbot built with Twilio to connect students with trusted vendors. Features dynamic product listing and vendor sign-up.",
    //   image: "/assets/unihustle-thumbnail.png"
    // },
  ];

  return (
    <section className="mb-8">
      <h2 className="text-[#0d141c] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 text-center text-3xl">
        Featured Projects
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-4 p-4">
        {projects.map((project) => (
          <div key={project.id} className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
              style={{
                backgroundImage: `url("${project.image}")`,
              }}
            ></div>
            <div>
              <p className="text-[#0d141c] text-base font-medium leading-normal">
                {project.title}
              </p>
              <p className="text-[#49739c] text-sm font-normal leading-normal">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="px-4 flex justify-end">
        <Link
          to="/projects"
          className="inline-flex items-center justify-center rounded-lg bg-[#39FF99] px-6 py-3 text-sm md:text-base font-semibold text-[#0a2540] shadow-md transition-all duration-300 hover:bg-[#39FF14] hover:text-white hover:scale-105"
        >
          See more →
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProjects;
