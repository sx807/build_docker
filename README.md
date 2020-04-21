# build_docker

从Github上获取项目

```sh
# --recursive 用于拉取子项目
sudo git clone --recursive https://github.com/sx807/build_docker.git
```

项目请放置于系统 /opt 路径下，项目中配置文件及命令所用路径为绝对路径

## 安装docker

## docker更换国内源

可以通过注册阿里云账号，添加阿里云专属加速链接，注册网址：<https://cr.console.aliyun.com/#/accelerator>
以使用163源为例：

```sh
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["http://hub-mirror.c.163.com"]
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker
```

## mysql

拉取镜像，启动容器：
MYSQL_ROOT_PASSWORD= 密码自行修改

```sh
sudo docker run -p 3306:3306 --name graph_mysql -e MYSQL_ROOT_PASSWORD=root -d mysql:8
```

将数据库sql文件拷贝到容器中

```sh
sudo docker cp /opt/build_docker/mysql/callgraph-200410.sql graph_mysql:/tmp
```

进入容器，并配置mysql

```sh
# 进入容器，并使用bash
sudo docker exec -it graph_mysql bash
# 进入mysql进行配置
mysql -u root -p
# 配置node用户 导入数据 密码自行修改
create user 'node'@'%' identified by 'node';
create database callgraph;
grant all privileges on `callgraph`.* to 'node'@'%';
ALTER USER 'node'@'%' IDENTIFIED WITH mysql_native_password BY 'node';
use callgraph;
set names utf8mb4;
source /tmp/callgraph-200410.sql;
```

## nodejs

node内启动服务需要mysql能够正常使用，如启动后使用node用户连接mysql失败，容器会退出，尝试配置好mysql后重新启动node/egg-server容器

使用命令，拉取镜像并启动容器：

```sh
cd /opt/build_docker/egg
# 根据dockerfile创建镜像，注意末尾有 "."，启动后会进行node插件安装，不同网络需要时间不同
sudo docker build -t node/egg-server .
# 启动镜像，并映射文件夹
sudo docker run -d --net=host --name graph_egg -v /opt/build_docker/egg/logs:/opt/egg/logs node/egg-server
```

## nginx

使用命令，拉取镜像，启动容器，启动中会映射路径：

```sh
sudo docker run -p 3000:80 -d --name graph_nginx -v /opt/build_docker/nginx/default.conf:/etc/nginx/conf.d/default.conf -v /opt/build_docker/dist:/usr/share/nginx/html -v /opt/build_docker/nginx/logs:/var/log/nginx -d nginx
```

* 注：如遇到nginx连接node被拒绝 需要修改nginx配置文件中的node服务器ip为对应容器的ip。
* 注2：如需配置多个node服务器进行负载均衡，也通过修改nginx的配置文件，将服务器列表增加到upsteam中，并配置服务器权重。
