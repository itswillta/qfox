# React & Laravel Boilerplate

This React & Laravel boilerplate was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), [Parcel](https://parceljs.org/), [Composer](https://getcomposer.org/), [Laravel](https://laravel.com/), and [Docker](https://docker.com).

## Installation

### Linux

#### Prerequisites

Your Linux system should have the following installed first:

- GIT
- Docker >= 18.09.3 (follow [this guide](https://docs.docker.com/install/linux/docker-ce/ubuntu/) to install Docker on Ubuntu)
- Docker Compose >= 1.23.2 (follow [this guide](https://docs.docker.com/compose/install/) to install Docker Compose)

#### Steps to Install

- First, fork [this repository](https://gitlab.com/h3ba/react-laravel-boilerplate) and clone it to your local machine (replace `YOUR_USERNAME` with your Gitlab account's username).

```shell
$ git clone https://gitlab.com/YOUR_USERNAME/react-laravel-boilerplate
$ cd react-laravel-boilerplate
```

- Then, run the following command and go grab a cup of water 🥤 while waiting for it to finish (it will take a few minutes):

```shell
$ sudo bash ./cmd/installation-linux.sh
```

- Once the command finishes, run this one last command and you're good to go:

```shell
$ docker-compose up
```

- Open your browser and head to [http://localhost:1234](http://localhost:1234). Enjoy coding 🎉!

### Windows

#### Prerequisites

Your Windows system should have the following installed first:

- GIT
- A console emulator (GIT Bash or [Cmder](https://github.com/cmderdev/cmder))
- Docker >= 18.09.3 (follow [this guide](https://docs.docker.com/docker-for-windows/install/) to install Docker on Windows)
- Docker Compose >= 1.23.2 (you can skip installing Docker Compose as it is already included along with Docker Desktop for Windows)

#### Steps to Install

All of the following commands below must be run within GIT Bash or Cmder.

- First, fork [this repository](https://gitlab.com/h3ba/react-laravel-boilerplate) and clone it to your local machine (replace `YOUR_USERNAME` with your Gitlab account's username).

```shell
$ git clone https://gitlab.com/YOUR_USERNAME/react-laravel-boilerplate
$ cd react-laravel-boilerplate
```

- Then, run the following command and go grab a cup of water 🥤 while waiting for it to finish (it will take a few minutes):

```shell
$ bash ./cmd/installation-windows.sh
```

- Once the command finishes, run this one last command and you're good to go:

```shell
$ docker-compose up
```

- Open your browser and head to [http://localhost:1234](http://localhost:1234). Enjoy coding 🎉!

**Notes**: Share your drive with Docker Desktop should it ask you to do so.

## F.A.Q

### How do I install/reinstall every PHP package listed in **backend/composer.json**?

Just navigate to the **backend** folder and run the following command:

- For Linux:

```shell
$ docker run --rm -v $(pwd):/app composer install
```

- For Windows:

```shell
$ docker container run --rm -v "/$(PWD)":/app composer install
```

### How do I add a new PHP package to my Laravel project?

Just navigate to the **backend** folder and run the following command:

- For Linux:

```shell
$ docker run --rm -v $(pwd):/app composer require PACKAGE
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

### How do I resolve "Permission denied" errors?

This is a common error on Linux systems. Just navigate to the project root and run the following command:

```shell
$ sudo chown -R $USER:$USER .
```
