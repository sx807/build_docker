#!/bin/sh

docker stop graph_vue 
docker rm graph_vue
#根据dockerfile创建镜像，注意末尾有 "."，启动后会进行node插件安装，不同网络需要时间不同
sudo docker build -t node/vue ./vue
# 启动镜像，并映射文件夹
sudo docker run -d --name graph_vue -v $(pwd)/dist:/opt/vue/dist node/vue

