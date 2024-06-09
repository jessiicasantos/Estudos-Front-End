SHELL := /bin/bash # Use bash syntax

up:
	docker-compose run  --service-ports --rm jessica

down:
	docker-compose down

build:
	docker-compose build

setdb:
	bash setup_mysql_local.sh

destroy:
	docker-compose down
	docker rmi jessica
	docker volume rm api-cms_mysqldata_master
	docker volume rm api-cms_nodemodules
