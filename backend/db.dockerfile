FROM mysql:5.7

ENV MYSQL_DATABASE=laravel \
  MYSQL_ROOT_PASSWORD=1029384756aA

COPY config/mysql/init.sql /docker-entrypoint-initdb.d/
