#!/bin/sh

# 拉取项目子库
git submodule update --init

# 初始化mysql，shell脚本执行存在问题，需要手动执行数据库初始化脚本
#./init_mysql.sh

# 初始化node容器
./init_node.sh

# 初始化vue页面项目，如不进行修改，可选执行内容
#./init_vue.sh

# 初始化nginx容器
./init_nginx.sh

