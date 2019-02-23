import jinja2

banner_snippet = jinja2.Markup("<a href='1.html'>italian 1</a> | <a href='2.html'>italian 2</a> | <a href='3.html'>italian 3</a> | <a href='infinity.html'>italian infinity</a> | <a href='vocab.html'>italian vocabulary</a>")

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
	'infinity': {
		'bgcolor': "cyan",
		'text': 'navy',
		'link': 'blue',
		'vlink': 'blue',
		'alink': 'white',
	},
}
