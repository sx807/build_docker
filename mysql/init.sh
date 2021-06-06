#!/bin/sh

USERNAME="root"
PASSWORD="root"
# 进入mysql进行配置
mysql -u${USERNAME} -p${PASSWORD} -e 'create user "node"@"%" identified by "node"'

mysql -u${USERNAME} -p${PASSWORD} -e 'create database callgraph'

mysql -u${USERNAME} -p${PASSWORD} -e 'grant all privileges on callgraph.* to "node"@"%"'

mysql -u${USERNAME} -p${PASSWORD} -e 'ALTER USER "node"@"%" IDENTIFIED WITH mysql_native_password BY "node"'

mysql -u${USERNAME} -p${PASSWORD} -e 'use callgraph;set names utf8mb4;source /tmp/callgraph_210603.sql;'
