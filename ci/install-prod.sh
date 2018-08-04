#!/bin/bash
set -e

(cd koa-starter && npm i --production --unsafe-perm=true)


shopt -s dotglob
mv koa-starter/* installed-koa-starter-prod/
