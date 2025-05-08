# client-test

`client-test` es un proyecto de cliente para una aplicación web desarrollada con React y TypeScript. Utiliza Vite como bundler y TypeScript como lenguaje de programación.

## Instalación

Para instalar las dependencias del proyecto, ejecuta el siguiente comando en la terminal:

```bash
npm install
```

## Scripts Disponibles

- **Desarrollo**: Ejecuta la aplicación en modo de desarrollo.

  ```bash
  npm run dev
  ```

- **Construcción**: Compila el proyecto para producción.

  ```bash
  npm run build
  ```

- **Lint**: Ejecuta el linter ESLint para verificar el código según las reglas definidas.

  ```bash
  npm run lint
  ```

- **Vista Previa**: Muestra una vista previa de la aplicación compilada para producción.
  ```bash
  npm run preview
  ```

## Dependencias Principales

- **React** (`^18.2.0`) y **React DOM** (`^18.2.0`): Bibliotecas principales para construir interfaces de usuario.
- **React Helmet** (`^6.1.0`): Para manejar dinámicamente el encabezado del documento HTML.
- **React Redux** (`^9.1.2`): Para manejar el estado global de la aplicación.
- **React Router DOM** (`^6.23.1`): Para el enrutamiento declarativo en la aplicación React.
- **Styled Components** (`^6.1.11`): Para escribir estilos CSS en los componentes de React de forma más intuitiva.

## Dependencias de Desarrollo

- **TypeScript** (`^5.2.2`): Para agregar tipado estático a JavaScript.
- **Vite** (`^5.2.0`): Bundler de próxima generación para proyectos web modernos.
- **ESLint** (`^8.57.0`) con plugins relacionados: Para el linting del código TypeScript y React.
- **Tailwind CSS** (`^3.4.3`) con PostCSS y Autoprefixer: Para estilos rápidos y responsivos.
- **Dompurify** (`^3.1.4`): Para sanear HTML y prevenir ataques XSS.
- **@types/react**, **@types/react-dom**, **@types/react-helmet**: Tipados para las bibliotecas utilizadas en el proyecto.

## Estructura del Proyecto

```
client-test/
├── node_modules/
├───public/
└───src
    ├───adapters
    ├───app
    ├───assets
    ├───components
    │   ├───button
    │   └───inputs
    ├───contexts
    ├───guard
    ├───hooks
    ├───interceptors
    ├───layout
    │   ├───Content
    │   ├───Headers
    │   ├───Sidebar
    │   └───util
    ├───models
    ├───pages
    │   ├───home
    │   └───Products
    ├───redux
    │   └───state
    ├───routes
    ├───services
    ├───style-components
    └───utilities
```

## Uso de React Helmet

Para utilizar React Helmet en tus componentes, simplemente importa la biblioteca y úsala para modificar el encabezado de la página según sea necesario. Aquí tienes un ejemplo básico de cómo hacerlo:

```javascript
import React from 'react';
import { Helmet } from 'react-helmet';

const MyComponent = () => {
  return (
    <div>
      <Helmet>
        <title>Zuraso - Título Personalizado</title>
        <meta
          name="description"
          content="Esta es una descripción personalizada para mi página."
        />
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      // Contenido de la pagina
    </div>
  );
};

export default MyComponent;
```

Esto asegurará que el título, la descripción y la URL canónica se configuren correctamente en el encabezado de la página según la lógica de tu aplicación.

## Docker

- **Docker build**: Ejecuta la aplicación en modo de desarrollo.

  ```bash
  docker build -t zuraso:v1.0 .
  ```

- **Docker run**: Ejecuta la aplicación en modo de desarrollo.
  ```bash
  docker run -p 4173:4173 zuraso:v1.0
  ```

- **Custom Port**: Cambia el puerto tanto en el dockerfile como en vite.config.ts
