help:
	@echo "make venv"
	@echo "make resize"
	@echo "make server"
	@echo "make generate"

venv:
	@virtualenv --no-site-package venv
	@source venv/bin/activate && pip install -r requirements.txt

resize:
	@rm -Rf static/works/*/thumb_*
	@python tools/resize.py

server:
	@python index.py

generate:
	@python tools/generator.py
