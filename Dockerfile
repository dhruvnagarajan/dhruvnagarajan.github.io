FROM node
# COPY /src /src
# COPY /public /public
COPY /build /build
COPY package.json .
RUN yarn
# RUN yarn build
RUN yarn global add serve
# RUN serve -s build
EXPOSE 5000