#!/usr/bin/env python3

from sys import version_info
from os import path, mkdir
from shutil import rmtree, copyfile

# jinja2: see http://jinja.pocoo.org/docs/2.10/api/ and http://jinja.pocoo.org/docs/2.10/templates/#extends
from jinja2 import Environment, FileSystemLoader, select_autoescape

from vars import course_name_to_info, banner_snippet
from utils import run, is_server

PATH = dict()
PATH['repo'] = '/Users/Matthew/programming/italian'
PATH['source'] = path.join(PATH['repo'], 'source')
PATH['build'] = path.join(PATH['repo'], '_build')
if is_server():
	PATH['build'] = '/home/freebsd/static-file-server/italian'

def build_js():
	""" generate JavaScript bundle using browserify """
	run(['browserify', './source/scripts/main.js', '-o', './_build/scripts/bundle.js'])

def build_readme():
	""" put a README in the build directory """
	with open(PATH['build'] + '/README.md', 'w') as f:
	    f.write('This directory is where the built website will be populated.\n')

def build_dirs():
	""" remove build dir and replace with empty build dirs """
	rmtree(PATH['build'])
	mkdir(PATH['build'])
	mkdir(path.join(PATH['build'], 'scripts'))

def build_static_files():
	""" copy other needed files into place """
	for filename in ['style.css']:
		path_from = path.join(PATH['source'], filename)
		path_to = path.join(PATH['build'], filename)
		copyfile(path_from, path_to)

def build_html():
	""" generate the HTML files using jinja2 templates """
	env = Environment(
			loader=FileSystemLoader(PATH['source']),
			autoescape=select_autoescape(['html']))
	for course_name, dic in course_name_to_info.items():
		dic.update({
			'course_name': course_name.capitalize(),
			'banner_snippet': banner_snippet,
		})
		template = env.get_template('content/{}.html'.format(course_name))
		rendered_html = template.render(dic)
		rel_output_path = '{}/{}.html'.format(PATH['build'], course_name)
		with open(rel_output_path, 'w') as file:
			file.write(rendered_html)

def build():
	build_dirs()
	build_static_files()
	build_readme()
	build_js()
	build_html()

def main():
	if version_info[0] != 3:
		raise SystemExit('Please use Python 3.')
	build()

if __name__ == '__main__':
	main()

