#!/bin/sh

git submodule update --init

#
#./init_mysql.sh

#
./init_node.sh

#
./init_vue.sh

#
./init_nginx.sh

