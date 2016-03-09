# My Progetto

	A static generator for demo your projects

## Installation

Install requirements

	make venv

Create folder `works` in `static` directory

	mkdir static/works

Copy `tools/default-info.yaml` to `static/works` directory

	cp -rf tools/default-info.yaml static/works/

Run preview server

	make server

Browse website

	open http://localhost:8081/

## Add Demo

Create folder named `1` in `static/works`

	mkdir static/works/1

Copy screen capture to `static/works/1` and named `01.png`, `02.png` to `NN.png`

	mv path/to/screenshots/*.png static/works/1/*

Generate and resize the images

	make resize

## Add demo infomation

Copy `tools/default-info.yaml` to `static/works/[WORK]`

	cp tools/default-info.yaml static/works/[WORK]/

Rename `default-info.yaml` to `info.yaml` and edit it

	mv static/works/[WORK]/default-info.yaml static/works/[WORK]/info.yaml

	vim static/works/[WORK]/info.yaml

## Generate static website

Ran the following commands in console

	make generate

- The static content will generated into `tools/generate` directory

## Deploy static website

Copy deploy config and edit it

	cp fabfile_config.py.example fabfile_config.py

	vim fabfile_config.py

Ran the commands to deploy

	make deploy
