#!/bin/sh

docker stop graph_mysql
docker rm graph_mysql
docker run -p 3306:3306 --name graph_mysql -e MYSQL_ROOT_PASSWORD=root -d mysql:8
docker cp $(pwd)/mysql/callgraph_210603.sql graph_mysql:/tmp
docker cp $(pwd)/mysql/init.sh graph_mysql:/tmp

# 进入容器，并使用bash 
docker exec -it graph_mysql chmod 775 /tmp/init.sh

# TODO shell脚本执行命令，存在问题，需要改进
# 20210606
#docker exec -it graph_mysql bash /tmp/init.sh


# init脚本，外部执行命令如下
#HOST="127.0.0.1"
#POST="3306"
#USERNAME="root"
#PASSWORD="root"
# 进入mysql进行配置
#docker exec -it graph_mysql bash mysql -u${USERNAME} -p${PASSWORD} -e 'create user "node"@"%" identified by "node"'

#docker exec -it graph_mysql mysql -u${USERNAME} -p${PASSWORD} -e 'create database callgraph'

#docker exec -it graph_mysql mysql -u${USERNAME} -p${PASSWORD} -e 'grant all privileges on callgraph.* to "node"@"%"'

#docker exec -it graph_mysql mysql -u${USERNAME} -p${PASSWORD} -e 'ALTER USER "node"@"%" IDENTIFIED WITH mysql_native_password BY "node"'

#docker exec -it graph_mysql mysql -u${USERNAME} -p${PASSWORD} -e 'use callgraph;set names utf8mb4;source /tmp/callgraph-200410.sql;'
