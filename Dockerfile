FROM node:slim
EXPOSE 8000
COPY src/app.js .
CMD node app.js
