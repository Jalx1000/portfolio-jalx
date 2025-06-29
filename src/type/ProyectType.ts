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

enum Stack {
  HTML = "html",
  CSS = "css",
  TAILWIND = "taildwind",
  BOOTSTRAP = "bootstrap",
  JAVASCRIPT = "javascript",
  TYPESCRIPT = "typescript",
  REACTJS = "reactjs",
  GIT = "git",
  GITHUB = "github",
  DOCKER = "docker",
  DOCKER_COMPOSE = "docker compose",
  RTK = "rtk",
  FRAMER = "framer",
  FIGMA = "figma",
  DJANGO = "django",
  DRF = "drf",
  MYSQL = "mysql",
  PHP = "php",
  JQUERY = "jquery",
  UBUNTU_SERVER = "ubuntu server",
  WORDPRESS = "wordpress",
  CPANEL = "cpanel",
  ANGULAR = "angular",
  PYTHON = "python",
}

export const stackList = Object.values(Stack).map((name) => ({
  name,
  url: `/assets/skills/${name}.webp`,
}));

export interface ProjectDTO {
  name: string;
  url: string;
  stacks: Stack[]; // importante: array de enum Stack
}

export const projects: ProjectDTO[] = [
  {
    name: "Wibel",
    url: "https://Wibel.net",
    stacks: [
      Stack.WORDPRESS,
      Stack.PHP,
      Stack.MYSQL,
      Stack.UBUNTU_SERVER,
      Stack.CPANEL,
    ],
  },
  {
    name: "Tecbel",
    url: "https://Tecbel.net",
    stacks: [
      Stack.WORDPRESS,
      Stack.PHP,
      Stack.MYSQL,
      Stack.UBUNTU_SERVER,
      Stack.CPANEL,
    ],
  },
  {
    name: "Agrocas",
    url: "https://agrocas.net",
    stacks: [
      Stack.WORDPRESS,
      Stack.PHP,
      Stack.MYSQL,
      Stack.UBUNTU_SERVER,
      Stack.CPANEL,
    ],
  },
  {
    name: "Academia",
    url: "https://academia.wibel.net/",
    stacks: [
      Stack.WORDPRESS,
      Stack.PHP,
      Stack.MYSQL,
      Stack.UBUNTU_SERVER,
      Stack.CPANEL,
    ],
  },
  {
    name: "Labeltech",
    url: "https://www.labeltech.com.bo/",
    stacks: [Stack.WORDPRESS, Stack.PHP, Stack.MYSQL, Stack.UBUNTU_SERVER],
  },
  {
    name: "Optel",
    url: "https://optel.zuraso.com/",
    stacks: [Stack.WORDPRESS, Stack.PHP, Stack.MYSQL, Stack.UBUNTU_SERVER],
  },
  {
    name: "Cygenlabs",
    url: "https://www.cygenlabs.com.bo/",
    stacks: [Stack.WORDPRESS, Stack.PHP, Stack.MYSQL, Stack.UBUNTU_SERVER],
  },
  {
    name: "MisCuentas - Modulos",
    url: "https://web.miscuentas.com.bo/modules",
    stacks: [Stack.FIGMA, Stack.ANGULAR],
  },
  {
    name: "MisCuentas - Sitio Web",
    url: "https://miscuentas.com.bo/",
    stacks: [Stack.FIGMA, Stack.ANGULAR],
  },
  {
    name: "Pagosnet - Sitio Web",
    url: "https://pagosnet.com.bo/",
    stacks: [Stack.FIGMA, Stack.ANGULAR],
  },
  {
    name: "Generador de certificados",
    url: "https://github.com/Jalx1000/Certificados-din-micos",
    stacks: [Stack.PYTHON],
  },
];
