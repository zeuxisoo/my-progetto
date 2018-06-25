# Progetto

Web application to record my projects

## Development

Install the dependencies

    npm install

Run the develop server

    make dev

Generate the project data

    make data

Generate the project photos and thumbs

    make resize

## Release

Run the command

    make dist

## Deploy

Edit the deploy config

    cp deploy.rsync.js.example deploy.rsync.js
    vim deploy.rsync.js

Run the command

    make deploy

## Add Project

Make project directory

    mkdir assets/data/works/[Number]

Copy the default project info into related project directory

    cp assets/data/works/default-info.yaml assets/data/works/[Number]/info.yaml

Edit the project info file

    vim assets/data/works/[Number]/info.yaml

Place the photos into project directory (The image must start with 01-99.png)

    cp -Rf /path/to/my/project/screenshorts/*.png assets/data/works/[Number]/

The run the following command to generate projects data, photos and thumbs again

    make data
    make resize
