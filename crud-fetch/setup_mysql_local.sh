#!/bin/bash

priv_stmt='CREATE USER "cms_db_user"@"%" IDENTIFIED BY "S3cret"; GRANT ALL PRIVILEGES ON *.* TO "cms_db_user"@"%"; FLUSH PRIVILEGES;'
docker exec jessica_db sh -c "mysql -u root -pS3cret -e '$priv_stmt'"

