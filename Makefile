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
	@source venv/bin/activate && python tools/resize.py

server:
	@source venv/bin/activate && python index.py

generate:
	@python tools/generator.py

deploy:
	@source venv/bin/activate && fab build deploy
