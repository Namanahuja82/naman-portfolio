"use client";
import React, { useState, useEffect, useMemo } from 'react';
import { useTheme } from "next-themes";
import {
  Cloud,
  fetchSimpleIcons,
  renderSimpleIcon,
} from "react-icon-cloud";

const cloudProps = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
      paddingBottom: 40, // Added padding at the bottom for better spacing
      backgroundColor: "transparent", // Ensured no background color for the container
    }
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.03, // Decreased speed for a smoother rotation
    minSpeed: 0.01, // Decreased speed for a smoother rotation
  }
};

const renderCustomIcon = (icon, theme) => {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
  const minContrastRatio = theme === "dark" ? 2 : 1.2;
  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e) => e.preventDefault(),
    }
  });
};

const IconCloud = ({ iconSlugs }) => {
  const [data, setData] = useState(null);
  const { theme } = useTheme();

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;
    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, theme || "light")
    );
  }, [data, theme]);

  return (
    <Cloud {...cloudProps}>
      {renderedIcons}
    </Cloud>
  );
};

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

function IconCloudDemo() {
  return (
    <div className="flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

const About = () => {
  return (
    <section className="py-20 bg-gray-900" id="about">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 min-h-[6rem] md:min-h-[4rem] whitespace-nowrap">
            Hi, I am Naman
          </h2>
          <a
            href="/naman-resume.pdf"
            download
            className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-base rounded-full shadow-lg hover:from-purple-600 hover:to-pink-600 transition duration-300 transform hover:scale-105 mb-8"
          >
            Download Resume
          </a>
          <div className="flex justify-center mb-8">
            <IconCloudDemo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
