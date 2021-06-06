#!/bin/sh

docker stop graph_nginx
docker rm graph_nginx
docker run -p 3000:80 -d --name graph_nginx -v $(pwd)/nginx/default.conf:/etc/nginx/conf.d/default.conf -v $(pwd)/dist:/usr/share/nginx/html -v $(pwd)/nginx/logs:/var/log/nginx -d nginx

