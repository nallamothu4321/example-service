FROM docker.io/binxio/ssm-get-parameter:0.2.3 AS ssm

FROM node:16
COPY --from=ssm /ssm-get-parameter  /usr/local/bin
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 6000
CMD [ "node", "app.js" ]
ENTRYPOINT [ "/usr/local/bin/entrypoint" ]
