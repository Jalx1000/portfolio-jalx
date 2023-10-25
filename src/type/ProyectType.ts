import html from "../assets/html.png";
import css from "../assets/css.png";
import taildwind from "../assets/taildwind.png";
import bootstrap from "../assets/bootstrap.png";
import javascript from "../assets/javascript.png";
import typescript from "../assets/typescript.png";
import reactjs from "../assets/reactjs.png";
import git from "../assets/git2.png";
import github from "../assets/github.png";
import docker from "../assets/docker.png";
import rtk from "../assets/rtk.png";
import framer from "../assets/framer.png";
import figma from "../assets/figma.png";
import django from "../assets/django.png";
import drf from "../assets/drf.png";
import mysql from "../assets/mysql.png";
import php from "../assets/php.png";
import jquery from "../assets/jquery.png";

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
    stacks: {
      url: reactjs
    } 
  },
];
