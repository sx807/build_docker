#!/bin/sh

docker stop graph_egg
docker rm graph_edd
# 根据dockerfile创建镜像，注意末尾有 "."，启动后会进行node插件安装，不同网络需要时间不同
sudo docker build -t node/egg ./egg
# 启动镜像，并映射文件夹
sudo docker run -d --net=host --name graph_egg -v $(pwd)/egg/logs/egg:/opt/egg/logs/egg node/egg


