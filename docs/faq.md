# F.A.Q

## Populating Database

If your local database is somehow empty or broken and you want to recreate a freshly new instance of the database, use the following command:

```shell
$ docker-compose exec app php artisan migrate:refresh --seed
```

## Installing Packages

### How do I install/reinstall every PHP package listed in **backend/composer.json**?

Just navigate to the **backend** folder and run the following command:

- For Linux:

```shell
$ docker container run --rm -v $(pwd):/app composer install
```

- For Windows:

```shell
$ docker container run --rm -v "/$(PWD)":/app composer install
```

### How do I add a new PHP package to my Laravel project?

Just navigate to the **backend** folder and run the following command:

- For Linux:

```shell
$ docker container run --rm -v $(pwd):/app composer require PACKAGE
```

- For Windows:

```shell
$ docker container run --rm -v "/$(PWD)":/app composer require PACKAGE
```

### How do I install/reinstall every npm package listed in **frontend/package.json**?

Just navigate to the **frontend** folder and run the following command:

- For Linux:

```shell
$ docker container run --rm -v $(pwd):/app node:11-alpine sh -c "cd /app && npm install"
```

- For Windows:

```shell
$ docker container run --rm -v "/$(PWD)":/app node:11-alpine sh -c "cd /app && npm install"
```

### How do I add a new dependency to my React project?

Just navigate to the **frontend** folder and run the following command:

- For Linux:

```shell
$ docker container run --rm -v $(pwd):/app node:11-alpine sh -c "cd /app && npm install PACKAGE"
```

- For Windows:

```shell
$ docker container run --rm -v "/$(PWD)":/app node:11-alpine sh -c "cd /app && npm install PACKAGE"
```

## Resolving Errors

### How do I resolve "Permission denied" errors?

This is a common error on Linux systems. Just navigate to the project root and run the following command:

```shell
$ sudo chown -R $USER:$USER .
```
