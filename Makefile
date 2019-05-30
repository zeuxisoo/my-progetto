all:
	@echo
	@echo "Command       : Description"
	@echo "------------- : -----------"
	@echo "make dev      : Run the development server"
	@echo "make build    : Build the project in to dist directory"
	@echo "make dist     : Build the project in production mode to dist directory"
	@echo "make data     : Generate the projects.json"
	@echo "make resize   : Reszie the data image and thumb image"
	@echo "make clean    : Clean the generated files and direcotries"
	@echo "make deploy   : Deploy the dist directory to remote server"
	@echo

dev:
	@npm run start

build: clean data resize
	@npm run build

dist: clean data resize
	@echo
	@./node_modules/.bin/ng build --prod

data:
	@node ./scripts/projects.js

resize:
	@node ./scripts/resize.js

deploy: dist
	@node deploy.rsync.js

clean:
	@rm -rf dist
