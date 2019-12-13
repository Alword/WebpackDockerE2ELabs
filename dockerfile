# Stage 1
FROM node:8 as react-build
WORKDIR /app
COPY . ./
RUN npm install

# Stage 2
RUN npm run build
RUN npm run test

# Stage 3
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=react-build /app/docs /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]