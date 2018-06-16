all:
	@echo
	@echo "Command       : Description"
	@echo "------------- : -----------"
	@echo "make dev      : Run the development server"
	@echo "make build    : Build the project in to dist directory"
	@echo "make data     : Generate the projects.json"
	@echo

dev:
	@npm run start

build:
	@npm run build

data:
	@node ./scripts/projects.js
