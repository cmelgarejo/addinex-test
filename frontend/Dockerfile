FROM node:15.12-alpine

ENV USER=node
ENV PATH="/home/node/.npm-global/bin:${PATH}"
ENV NPM_CONFIG_PREFIX="/home/node/.npm-global"
USER "${USER}"

RUN mkdir -p "${NPM_CONFIG_PREFIX}/lib"
WORKDIR /usr/src/app
COPY package.json package-lock.json ./

RUN npm --global config set user "${USER}" \
    && npm --global --quiet --no-progress install \
    && npm cache clean --force

COPY --chown=node:node . .

# start app
RUN npm run build

EXPOSE 3000

CMD npm run start