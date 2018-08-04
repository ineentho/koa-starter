#!/bin/bash
set -e

(cd koa-starter && npm i --unsafe-perm=true)


shopt -s dotglob
mv koa-starter/* installed-koa-starter-dev/
