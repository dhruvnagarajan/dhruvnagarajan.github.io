FROM node as stg1
WORKDIR .
copy . /code
WORKDIR /code
run npm i
cmd ["npm", "start"]