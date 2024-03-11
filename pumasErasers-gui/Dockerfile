FROM node:20.11.0

COPY pumasErasers-gui /pumasErasers-gui
WORKDIR /pumasErasers-gui

RUN npm install

RUN npm run build
CMD npm run start
