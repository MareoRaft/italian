from shutil import rmtree
from os import mkdir

from jinja2 import Environment, FileSystemLoader, select_autoescape, Markup # jinja2: see http://jinja.pocoo.org/docs/2.10/api/ and http://jinja.pocoo.org/docs/2.10/templates/#extends


banner_snippet = Markup("<a href='index.html'>index</a> | <a href='1.html'>italian 1</a> | <a href='2.html'>italian 2</a> | <a href='3.html'>italian 3</a> | <a href='vocab.html'>italian vocabulary</a>")
course_num_to_info = {
	1: {
		'bgcolor': "#efefef",
		'text': "#282828",
		'link': "#414141",
		'vlink': "#353535",
		'alink': "#ffaaff",
	},
	2: {
		'bgcolor': "#5028c9",
		'text': "#ffff00",
		'link': "#ffffff",
		'vlink': "#ffffff",
		'alink': "#ffffff",
	},
	3: {
		'bgcolor': "black",
		'text': '#33ccff',
		'link': 'blue',
		'vlink': 'blue',
		'alink': 'white',
	},
}
# also grab content from 1-content.html and others

env = Environment(
	loader=FileSystemLoader('.'),
	autoescape=select_autoescape(['html']))

# remove build dir and replace with empty build dir
BUILD_DIR = '_build'
rmtree(BUILD_DIR)
mkdir(BUILD_DIR)

for course_num, dic in course_num_to_info.items():
	dic.update({
		'course_num': course_num,
		'banner_snippet': banner_snippet,
	})
	template = env.get_template('{}-content.html'.format(course_num))
	rendered_html = template.render(dic)
	rel_output_path = '{}/{}.html'.format(BUILD_DIR, course_num)
	with open(rel_output_path, 'w') as file:
		file.write(rendered_html)

