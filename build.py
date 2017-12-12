from shutil import rmtree, copyfile
from os import mkdir

from jinja2 import Environment, FileSystemLoader, select_autoescape, Markup # jinja2: see http://jinja.pocoo.org/docs/2.10/api/ and http://jinja.pocoo.org/docs/2.10/templates/#extends

BUILD_DIR = '_build'

banner_snippet = Markup("<a href='1.html'>italian 1</a> | <a href='2.html'>italian 2</a> | <a href='3.html'>italian 3</a> | <a href='vocab.html'>italian vocabulary</a>")
course_name_to_info = {
	'1': {
		'bgcolor': "#efefef",
		'text': "#282828",
		'link': "#414141",
		'vlink': "#353535",
		'alink': "#ffaaff",
	},
	'2': {
		'bgcolor': "#5028c9",
		'text': "#ffff00",
		'link': "white",
		'vlink': "white",
		'alink': "white",
	},
	'3': {
		'bgcolor': "black",
		'text': '#33ccff',
		'link': 'blue',
		'vlink': 'blue',
		'alink': 'white',
	},
	'vocab': {
		'bgcolor': "#900909",
		'text': 'white',
		'link': '#eee',
		'vlink': "#ddd",
		'alink': 'black',
	},
	'∞': {
		'bgcolor': "cyan",
		'text': 'navy',
		'link': 'blue',
		'vlink': 'blue',
		'alink': 'white',
	},
}

# remove build dir and replace with empty build dir
rmtree(BUILD_DIR)
mkdir(BUILD_DIR)

# generate the HTML files using jinja2 templates
env = Environment(
	loader=FileSystemLoader('.'),
	autoescape=select_autoescape(['html']))
for course_name, dic in course_name_to_info.items():
	dic.update({
		'course_name': course_name.capitalize(),
		'banner_snippet': banner_snippet,
	})
	template = env.get_template('content/{}.html'.format(course_name))
	rendered_html = template.render(dic)
	rel_output_path = '{}/{}.html'.format(BUILD_DIR, course_name)
	with open(rel_output_path, 'w') as file:
		file.write(rendered_html)

# copy the JS files into place
for fileprefix in ['translator', 'verb-conjugator']:
	copyfile('{}.js'.format(fileprefix), '{}/{}.js'.format(BUILD_DIR, fileprefix))
