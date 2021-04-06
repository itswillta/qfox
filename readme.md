# QFox

- Live Demo: http://qfox.holy-pond-07793.pktriot.net

This project was bootstrapped with [Parcel](https://parceljs.org/), [Composer](https://getcomposer.org/), [Laravel](https://laravel.com/), and [Docker](https://docker.com).

## Installation

**Warning**: The following steps will do a clean install of the project, and all the existing data related to it will be erased.

### ![Linux Logo](https://i.imgur.com/3iHIGaC.png) Linux

#### Prerequisites

Your Linux system should have the following installed first:

- GIT
- Docker >= 18.09.3 (follow [this guide](https://docs.docker.com/install/linux/docker-ce/ubuntu/) to install Docker on Ubuntu)
- Docker Compose >= 1.23.2 (follow [this guide](https://docs.docker.com/compose/install/) to install Docker Compose)

#### Steps to Install

- First, fork [this repository](https://gitlab.com/h3ba/qfox) and clone it to your local machine (replace `YOUR_USERNAME` with your Gitlab account's username).

```shell
$ git clone https://gitlab.com/YOUR_USERNAME/qfox
$ cd qfox
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

### ![Windows Logo](https://i.imgur.com/2HfZwb4.png) Windows

#### Prerequisites

Your Windows system should have the following installed first:

- GIT
- A console emulator (GIT Bash or [Cmder](https://github.com/cmderdev/cmder))
- Docker >= 18.09.3 (follow [this guide](https://docs.docker.com/docker-for-windows/install/) to install Docker on Windows)
- Docker Compose >= 1.23.2 (you can skip installing Docker Compose as it is already included along with Docker Desktop for Windows)

#### Steps to Install

All of the following commands below must be run within GIT Bash or Cmder.

- First, fork [this repository](https://gitlab.com/h3ba/qfox) and clone it to your local machine (replace `YOUR_USERNAME` with your Gitlab account's username).

```shell
$ git clone https://gitlab.com/YOUR_USERNAME/qfox
$ cd qfox
```

- _Optional step_: If you're using GIT Bash to install, you may have to run the following commands first:

```shell
$ echo "alias docker='winpty docker'" >> ~/.bash_profile
$ echo "alias docker-compose='winpty docker-compose'" >> ~/.bash_profile
$ source ~/.bash_profile
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

**Note**: Share your drive with Docker Desktop should it ask you to do so.
