#!/bin/sh
cd /application && yarn install && yarn build
service nginx restart
tail -F /dev/null