#!/usr/bin/env python
# -*- coding: utf-8 -*-
import os, sys, hashlib

try:
	import yaml
except:
	sys.path.insert(0, os.path.join(os.path.dirname(__file__), 'library'))
	import yaml

from bottle import route, run, debug, template, static_file, abort, default_app, hook
from bottle import request, HTTPError
	
WWW_ROOT   = os.path.abspath(os.path.dirname(__file__))
WORKS_ROOT = '%s/static/works' % WWW_ROOT
CONFIG     = yaml.load(file(WWW_ROOT + '/config.yaml', 'r'))

# custom the auth_basic decorator (ref: 0.12-dev)
def auth_basic(realm="private", text="Access denied"):
	def decorator(func):
		def wrapper(*a, **ka):
			if CONFIG['protect']['status']:
				user, password = request.auth or (None, "")
				password = hashlib.sha256(password).hexdigest()
				if user is None or not (user == CONFIG['protect']['username'] and password == CONFIG['protect']['password']):
					err = HTTPError(401, text)
					err.add_header('WWW-Authenticate', 'Basic realm="%s"' % realm)
					return err
			return func(*a, **ka)
		return wrapper
	return decorator

@route('/')
@auth_basic()
def index():
	folders = sorted([int(folder) for folder in os.listdir(WORKS_ROOT) if folder[0] != '.' and not folder.endswith('.yaml')])
	folders.reverse()
	return template("index", config = CONFIG, folders = folders)

@route('/work/:id#[0-9]+#')
@auth_basic()
def work(id):
	image_folder_path = "%s/%s" % (WORKS_ROOT, int(id))

	if os.path.exists(image_folder_path) and os.path.isdir(image_folder_path):
		
		info = yaml.load(file("%s/default-info.yaml" % WORKS_ROOT, 'r'))
		yaml_path = "%s/info.yaml" % image_folder_path
		if os.path.exists(yaml_path) and os.path.isfile(yaml_path):
			info = yaml.load(file(yaml_path, 'r'))

		return template(
			"work", 
			config = CONFIG,
			images = [image for image in os.listdir(image_folder_path) if image[0] != '.' and image[:6] != 'thumb_' and not image.endswith('.yaml')], 
			id = int(id),
			info = info,
		)
	else:
		abort(401, "Sorry, Access denied")

@route('/static/:path#.+#')
def static_folder(path):
	return static_file(path, root=os.path.join(WWW_ROOT, 'static'))

@route('/robots.txt')
def robots_file():
	return static_file('robots.txt', root=WWW_ROOT, mimetype='text/plain')

if __name__ == "__main__":
	debug(True)
	run(host='localhost', port=8081, reloader=True)
else:
	#os.chdir(os.path.dirname(__file__))
	application = default_app()