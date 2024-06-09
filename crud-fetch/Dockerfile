FROM docker.devops.somosdigital.io/node:18-alpine3.15

RUN apk add --update \
  openssh \
  python3 \
  make \
  g++ \
  && rm -rf /var/cache/apk/*

WORKDIR /app

COPY . ./
RUN npm rebuild --target_platform=linux --target_arch=x64
COPY ./npm_custom/umzug-2.3.0/migration.js ./node_modules/umzug/lib/migration.js
CMD ["node", "-r", "newrelic", "dist/index.js"]
