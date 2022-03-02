# Oikos Pilot App

## About

This application is a pilot project to create a congregation management service.

## Pre - Requisites
- Installed lts version of `docker` and `docker-compose`

## Installation

- Clone this repository

- Ensure ./database/data folder **exists** and **empty**. Also ensure this folder belongs to the current user. **NOT ROOT**.


- Run the following command for running dev environment locally
```bash
$ docker-compose --profile dev up --build -d
```

- Open `http://localhost:5000`. Ensure its **http**, not **https**.

## Quality of Life

- Adminer is installed via docker and running in port **8080**

- For those using VSCode, open the project via **Open Workspace from File** and choose the workspace file. Then, install the recommended extensions.

- Run the following command for running production environment locally
```bash
$ docker-compose --profile prod up --build -d
```