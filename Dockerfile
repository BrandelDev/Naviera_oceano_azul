FROM node:latest as build

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build --prod

FROM nginx:latest

COPY --from=build /app/dist/Naviera_oceano_azul /usr/share/nginx/html

