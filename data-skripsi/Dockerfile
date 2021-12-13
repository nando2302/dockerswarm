FROM node:16 as build
RUN mkdir /react-app
WORKDIR /react-app
ENV PATH /data-skripsi/node_modules/.bin:$PATH
COPY package.json /react-app/package.json
RUN npm install --silent
RUN npm install react-script --silent
COPY . /react-app/
RUN npm run build

FROM nginx:latest
COPY --from=build /react-app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY --from=build /react-app/nginx.conf /etc/nginx/conf.d
EXPOSE  80
CMD [ "nginx","-g","daemon off;" ]