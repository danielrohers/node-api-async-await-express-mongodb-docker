FROM node:8.1.2

RUN curl -o- -L https://yarnpkg.com/install.sh | bash

ENV HOME=/home/app/node-api-async-await-express-mongodb-docker

WORKDIR $HOME

COPY package.json yarn.lock $HOME/
RUN yarn

COPY . $HOME

CMD [ "yarn", "start" ]
