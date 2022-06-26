FROM node:16 as build-stage

# ARGUMENTS
ARG BASE_URL
ARG ENCRYPTION_SALT
ARG ENCRYPTION_PASSWORD
ARG ENCRYPTION_IV
ARG ALGORITHM_KEY_LEN
ARG ITERATION_COUNT
ARG ENCRYPTION_CIPHER_ALGORITHM
ARG VERIFY_URL


# Create work directory => app
ENV APP_HOME=/usr/src/app
RUN mkdir -p $APP_HOME

WORKDIR $APP_HOME

# ENVIRONMENT VARIABLES
ENV BASE_URL = $BASE_URL
ENV BASE_URL=$BASE_URL
ENV ENCRYPTION_SALT=$ENCRYPTION_SALT
ENV ENCRYPTION_PASSWORD=$ENCRYPTION_PASSWORD
ENV ENCRYPTION_IV=$ENCRYPTION_IV
ENV ALGORITHM_KEY_LEN=$ALGORITHM_KEY_LEN
ENV ITERATION_COUNT=$ITERATION_COUNT
ENV ENCRYPTION_CIPHER_ALGORITHM=$ENCRYPTION_CIPHER_ALGORITHM
ENV VERIFY_URL=$VERIFY_URL

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)

COPY package.json $APP_HOME
COPY package-*.json $APP_HOME
# COPY yarn.lock /app

RUN npm install

# If we are building for production
COPY . $APP_HOME
# Bundle app source
# This will copy all of our project codes
RUN npm ci --only-production && npm run build

ENV PORT=80
ENV HOST 0.0.0.0

# Expose our app port
EXPOSE 80

CMD ["npm", "start"]


# Production Stage
# FROM nginx:stable-alpine as production-stage

# # ARGUMENTS
# ARG BASE_URL
# ARG ENCRYPTION_SALT
# ARG ENCRYPTION_PASSWORD
# ARG ENCRYPTION_IV
# ARG ALGORITHM_KEY_LEN
# ARG ITERATION_COUNT
# ARG ENCRYPTION_CIPHER_ALGORITHM
# ARG VERIFY_URL

# ENV APP_HOME=/usr/src/app

# COPY --from=build-stage $APP_HOME/dist /usr/share/nginx/html

# # Copy nginx configuration
# COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# RUN chown nginx:nginx /usr/share/nginx/html

# # ENVIRONMENT VARIABLES
# ENV BASE_URL = $BASE_URL
# ENV BASE_URL=$BASE_URL
# ENV ENCRYPTION_SALT=$ENCRYPTION_SALT
# ENV ENCRYPTION_PASSWORD=$ENCRYPTION_PASSWORD
# ENV ENCRYPTION_IV=$ENCRYPTION_IV
# ENV ALGORITHM_KEY_LEN=$ALGORITHM_KEY_LEN
# ENV ITERATION_COUNT=$ITERATION_COUNT
# ENV ENCRYPTION_CIPHER_ALGORITHM=$ENCRYPTION_CIPHER_ALGORITHM
# ENV VERIFY_URL=$VERIFY_URL

# # set environment variable for port
# ENV PORT=80

# # Expose our app port
# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]
