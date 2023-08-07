# FROM node:lts-bullseye as build
# WORKDIR /app
# COPY package*.json ./
# RUN npm ci
# COPY . .
# RUN npm run build

# ##Stage 2
# FROM nginx:alpine
# ADD ./config/default.conf /etc/nginx/conf.d/default.conf
# COPY --from=build /app/dist /var/www/app/
# EXPOSE 80
# CMD [ "nginx","-g","daemon off;" ]

FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY tsconfig.json ./
COPY tsconfig.node.json ./
COPY vite.config.ts ./
COPY ./ ./
RUN npm i
EXPOSE 5173
CMD ["npm", "run", "dev"]
