const _ = require('lodash')
const __ = require('./lib/common-utils.js')

// this should be a separate file:
let LEXICON = ['settimana', 'anno', 'calendario', 'secondo', 'ora', 'minuto', 'orologio', 'birra', 'vino', 'acqua', 'manzo', 'pollo', 'agnello', 'infermiera', 'impiegato']

let ARTICLE_TYPES = ['definite', 'indefinite', 'beautiful']
let PLURALITIES = ['singular', 'plural']
let CONSONANTS = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']
let STARTS_WITH_TYPE_DICT = {
	special: ['s + constanant!', 'ps', 'pn', 'gn', 'y', 'z'],
	vowel: ['a', 'e', 'i', 'o', 'u', 'h']
}

let ARTICLE_DICT = {
	masculine: {
		special: {
			definite: {
				singular: 'lo',
				plural: 'gli',
			},
			indefinite: {
				singular: 'uno',
				plural: 'degli',
			},
			beautiful: {
				singular: 'bello',
				plural: 'begli',
			},
		},
		vowel: {
			definite: {
				singular: 'l\'',
				plural: 'gli',
			},
			indefinite: {
				singular: 'un',
				plural: 'degli',
			},
			beautiful: {
				singular: 'bell\'',
				plural: 'begli',
			},
		},
		other: {
			definite: {
				singular: 'il',
				plural: 'i',
			},
			indefinite: {
				singular: 'un',
				plural: 'dei',
			},
			beautiful: {
				singular: 'bel',
				plural: 'bei',
			},
		},
	},
	feminine: {
		vowel: {
			definite: {
				singular: 'l\'',
				plural: 'le',
			},
			indefinite: {
				singular: 'un\'',
				plural: 'delle',
			},
			beautiful: {
				singular: 'bella',
				plural: 'belle',
			},
		},
		other: {
			definite: {
				singular: 'la',
				plural: 'le',
			},
			indefinite: {
				singular: 'una',
				plural: 'delle',
			},
			beautiful: {
				singular: 'bella',
				plural: 'belle',
			},
		},
	},
};

function startsWithOneOf(string, targets) {
	// todo: make your own folds library
	return _.some(_.map(targets, target => _.startsWith(string, target)))
}

function print(string) {
	console.log(string)
}

function randNoun() {
	// get a random noun from the noun lexicon
	return __.randOf(LEXICON)
}

function randArticleType() {
	return __.randOf(ARTICLE_TYPES)
}

function randPlurality() {
	return __.randOf(PLURALITIES)
}

function replaceLastLetter(string, letter) {
	// Replace the last letter of the string with the supplied letter and return the result.
	let head = string.substring(0, string.length - 1)
	let tail = letter
	return `${head}${tail}`
}

function applyPlurality(noun, plurality) {
	if (plurality === 'singular') {
		return noun
	}
	else if (plurality === 'plural') {
		let gender = getGender(noun)
		if (gender === 'masculine') {
			return replaceLastLetter(noun, 'i')
		}
		else if (gender === 'feminine') {
			return replaceLastLetter(noun, 'e')
		}
		else {
			throw 'Unknown gender'
		}	
	}
	else {
		throw 'Unknown plurality'
	}
}

function applySpace(article) {
	let whitespace = (_.endsWith(article, '\''))? '': ' '
	return `${article}${whitespace}`
}

function getGender(noun) {
	// can ONLY handle REGULAR nouns in the sense that the ENDING should tell if it's masculine or feminine
	if (_.endsWith(noun, 'a')) {
		return 'feminine'
	}
	else if (_.endsWith(noun, 'o')) {
		return 'masculine'
	}
	else {
		throw 'Unrecognized ending for a singular noun.'
	}
}

function getStartsWithType(noun, gender) {
	if (gender === 'masculine' && startsWithOneOf(noun, STARTS_WITH_TYPE_DICT['special'])) {
		return 'special'
	}
	else if (gender === 'masculine' && noun.length >= 2 && _.startsWith(noun, 's') && startsWithOneOf(noun[1], CONSONANTS)) {
		return 'special'
	}
	else if (startsWithOneOf(noun, STARTS_WITH_TYPE_DICT['vowel'])) {
		return 'vowel'
	}
	else {
		return 'other'
	}
}

function randQuestion() {
	let noun = randNoun()
	let article_type = randArticleType()
	let plurality = randPlurality()
	return [noun, article_type, plurality]
}

function getAnswer(noun, article_type, plurality) {
	let gender = getGender(noun)
	let starts_with_type = getStartsWithType(noun, gender)
	let article = ARTICLE_DICT[gender][starts_with_type][article_type]
	let correct_article_with_whitespace = applySpace(article)
	let correct_noun = applyPlurality(noun, plurality)
	let string = `${correct_article_with_whitespace}${correct_noun}`
	return string
}

function round() {
	// ask question
	let [noun, article_type, plurality] = randQuestion()
	print({noun, article_type, plurality})

	// show answer
	let answer = getAnswer(noun, article_type, plurality)
	print(answer)
}

function main() {
	round()
}

module.exports = {
	main: main,
}
