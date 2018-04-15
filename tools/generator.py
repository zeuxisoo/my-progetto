#!/usr/bin/env python
# -*- coding: utf-8 -*-
import sys
import os
import shutil

path = os.path

try:
	import yaml
except:
	sys.path.insert(0, path.join(path.dirname(path.dirname(path.abspath(__file__))), 'library'))
	import yaml

from bottle import template

WWW_ROOT      = path.abspath(path.dirname(path.dirname(__file__)))
WORKS_ROOT    = '%s/static/works' % WWW_ROOT
CONFIG        = yaml.load(file(WWW_ROOT + '/config.yaml', 'r'))
GENERATE_ROOT = path.join(path.abspath(path.dirname(__file__)), 'generate')

def writer(filename, content):
	f = open(filename, 'w+')
	f.write(content)
	f.close()

def create_directory(directory):
	if not os.path.exists(directory):
		os.makedirs(directory)

def copy_directory(from_path, to_path):
	if os.path.exists(to_path):
		shutil.rmtree(to_path)
	shutil.copytree(from_path, to_path)

def copy_file(from_path, to_path):
	if os.path.exists(to_path):
		os.remove(to_path)
	shutil.copyfile(from_path, to_path)

def load_index():
	folders = sorted([int(folder) for folder in os.listdir(WORKS_ROOT) if folder[0] != '.' and not folder.endswith('.yaml')])
	folders.reverse()
	return template("index", config = CONFIG, folders = folders)

def load_works():
	works = {}
	for folder in os.listdir(WORKS_ROOT):
		if folder[0] != '.' and not folder.endswith('.yaml'):
			image_folder_path = "%s/%s" % (WORKS_ROOT, folder)

			if path.exists(image_folder_path) and path.isdir(image_folder_path):
				info = yaml.load(file("%s/default-info.yaml" % WORKS_ROOT, 'r'))
				yaml_path = "%s/info.yaml" % image_folder_path

				if path.exists(yaml_path) and path.isfile(yaml_path):
					info = yaml.load(file(yaml_path, 'r'))

				works[folder] = template(
					"work",
					config = CONFIG,
					images = sorted([image for image in os.listdir(image_folder_path) if image[0] != '.' and image[:6] != 'thumb_' and not image.endswith('.yaml')]),
					id = folder,
					info = info,
				)
			else:
				continue
	return works

def generate():
	create_directory(GENERATE_ROOT)
	writer(GENERATE_ROOT + '/index.html', load_index())

	works = load_works()

	for work in works:
		work_directory = GENERATE_ROOT + '/work/' + work
		create_directory(work_directory)
		writer(work_directory + '/index.html', works[work])

	copy_directory(WWW_ROOT+'/static', GENERATE_ROOT+'/static')
	copy_file(WWW_ROOT+'/robots.txt', GENERATE_ROOT+'/robots.txt')

if __name__ == "__main__":
	generate()
