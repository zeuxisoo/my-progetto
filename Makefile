help:
	@echo "make resize"
	@echo "make server"
	@echo "make generate"

resize:
	@rm -Rf static/works/*/thumb_*
	@python tools/resize.py

server:
	@python index.py

generate:
	@python tools/generator.py
