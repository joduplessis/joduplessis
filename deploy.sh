#!/usr/bin/env bash

lftp -u $FTP_USER,$FTP_PASSWORD $FTP_HOST -e "mirror -R -p ./dist/ public_html ; quit"
