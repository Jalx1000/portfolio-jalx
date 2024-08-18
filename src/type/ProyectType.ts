import html from "../assets/skills/html.webp";
import css from "../assets/skills/css.webp";
import taildwind from "../assets/skills/taildwind.webp";
import bootstrap from "../assets/skills/bootstrap.webp";
import javascript from "../assets/skills/javascript.webp";
import typescript from "../assets/skills/typescript.webp";
import reactjs from "../assets/skills/reactjs.webp";
import git from "../assets/skills/git2.webp";
import github from "../assets/skills/github.webp";
import docker from "../assets/skills/docker.webp";
import rtk from "../assets/skills/rtk.webp";
import framer from "../assets/skills/framer.webp";
import figma from "../assets/skills/figma.webp";
import django from "../assets/skills/django.webp";
import drf from "../assets/skills/drf.webp";
import mysql from "../assets/skills/mysql.webp";
import php from "../assets/skills/php.webp";
import jquery from "../assets/skills/jquery.webp";

interface StacksConfig {
  name: string;
  version?: string;
}

interface ImageConfig {
  src: string;
  alt: string;
}

export interface ProyectConfig {
  id: number;
  title: string;
  description: string;
  image: ImageConfig;
  route: string;
  stacks: StacksConfig[];
}

export interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

export const stacks = [
  {
    name: "html",
    url: html,
  },
  {
    name: "css",
    url: css,
  },
  {
    name: "taildwind",
    url: taildwind,
  },
  {
    name: "bootstrap",
    url: bootstrap,
  },
  {
    name: "javascript",
    url: javascript,
  },
  {
    name: "typescript",
    url: typescript,
  },
  {
    name: "reactjs",
    url: reactjs,
  },
  {
    name: "git",
    url: git,
  },
  {
    name: "github",
    url: github,
  },
  {
    name: "docker",
    url: docker,
  },
  {
    name: "rtk",
    url: rtk,
  },
  {
    name: "framer",
    url: framer,
  },
  {
    name: "figma",
    url: figma,
  },
  {
    name: "django",
    url: django,
  },
  {
    name: "drf",
    url: drf,
  },
  {
    name: "mysql",
    url: mysql,
  },
  {
    name: "php",
    url: php,
  },
  {
    name: "jquery",
    url: jquery,
  },
];



export const proyects = [
  {
    name: "dashboard mern",
    url: "",
    stacks: [stacks[3],stacks[5],stacks[6],stacks[7],stacks[8],stacks[11]] 
  },
  {
    name: "weather app",
    url: "https://jalx1000.github.io/weatherApp-react-vite/",
    stacks: [stacks[1],stacks[3],stacks[5],stacks[7]] 
  },
  {
    name: "rick and morty",
    url: "https://jalx1000.github.io/vite-rick-and-morty/",
    stacks: [stacks[7]] 
  },
  {
    name: "Web Task",
    url: "https://jalx1000.github.io/vite-app-tasks-deploy-example/",
    stacks: [stacks[7],stacks[3]] 
  },
];
