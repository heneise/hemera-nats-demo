FROM node:latest
COPY package.json /tmp/
RUN cd /tmp && npm install --quiet
RUN mkdir -p /usr/app && cp -a /tmp/node_modules /usr/app
WORKDIR /usr/app
COPY ./ /usr/app/
