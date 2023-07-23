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
