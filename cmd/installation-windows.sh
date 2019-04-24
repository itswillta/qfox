#################################################################
#PLEASE DO NOT TOUCH THIS FILE UNLESS YOU KNOW WHAT YOU'RE DOING#
#################################################################

#!/bin/bash

#WORKDIR: Project Root

docker-compose down

cd backend

#WORKDIR: backend

rm -rf ./vendor
docker container run --rm -v "/$(PWD)":/app composer install
cp .env.example .env

cd ../frontend

#WORKDIR: frontend

rm -rf ./node_modoules
rm -rf ./dist
rm -rf ./.cache
docker container run --rm -v "/$(PWD)":/app node:11-alpine sh -c "cd /app && npm install"

cd ..

#WORKDIR: Project Root

docker volume rm qfox_dbdata
docker volume rm qfox_els-data

docker-compose build --force-rm --no-cache
docker-compose up -d

docker-compose exec app php artisan cache:clear
docker-compose exec app php artisan route:clear
docker-compose exec app php artisan config:clear
docker-compose exec app php artisan optimize
docker-compose exec app composer dump-autoload
docker-compose exec app php artisan migrate:refresh --seed
docker-compose exec app php artisan jwt:secret
docker-compose exec app php artisan key:generate
docker-compose exec app php artisan config:cache

docker-compose down
