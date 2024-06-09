#!/bin/sh
set -e

cp -u .env.development .env
yarn install

exec "$@"
