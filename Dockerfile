#production build


# 1- build react client

FROM node as client
# working directory
WORKDIR /usr/app/client/

COPY client/package*.json ./

# install dependenices
RUN yarn install
#copy local files to app folder
COPY client/ ./

RUN yarn build
FROM node:10.16-alpine

WORKDIR /usr/src/app/
COPY --from=client /usr/app/client/build/ ./client/build/

WORKDIR /usr/src/app/server/
COPY server/package*.json ./
RUN npm install -qy
COPY server/ ./

ENV PORT 8000

EXPOSE 8000

CMD ["npm", "start"]