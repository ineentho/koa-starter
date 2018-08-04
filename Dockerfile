# 
# Multi-stage build with support for compiling native packages
# 

FROM node:10.8-alpine
RUN apk add --no-cache make gcc g++ python 
WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm install --production
COPY src /app

FROM node:10.8-alpine
WORKDIR /app
COPY --from=0 /app /app
CMD npm start
EXPOSE 3000
