### Requestments

- Bottle (>=0.8)
- PyYaml (inclued 3.08)
- PIL    (for resize tools)

### Installation

Install requirements 

	virtualenv --no-site-package venv
	source venv/bin/activate
	
	pip install -r requirements.txt

Create folder `works` to `static/works`

	mkdir static/works

Copy `tools/default-info.yaml` to `static/works`

	cp -rf tools/default-info.yaml static/works/

Run preview server

	make server

Browse website
	
	open http://localhost:8081/

### Add Demo

Create folder named `1` to `static/works` like `static/works/1`

	mkdir static/works/1

Copy screen capture to `static/works/1` and named `1.png` **…** `N.png`

	cp path/to/screens/*.png static/works/1/*

Create demo image by `resize tools`

	make resize

### Add Work Infomation

Copy `tools/default-info.yaml` to `static/works/[works-id]`

	cp tools/default-info.yaml static/works/[works-id]/

Rename to `info.yaml` and edit it

	mv static/works/[works-id]/default-info.yaml static/works/[works-id]/info.yaml

### Resize Tools

In root directory, type command `make resize`

1. It will remove all thumb images
2. And then create two thumbnail image automatically

Size of two thumb image
 
1. 300 x 150 and named thumb_*
2. 750 x auto height and named 1 ... N

### Generate static profile website

In root directory, ran `make generate` in console

- The static content will generated into `tools/generate` directory
- Deploy all files to your host from `tools/generate`
