const _ = require('lodash')
const __ = require('./lib/common-utils.js')
const {LEXICON, ARTICLE_TYPES, PLURALITIES, CONSONANTS, STARTS_WITH_TYPE_DICT, ARTICLE_DICT} = require('./lib/article-quiz-constants.js')

// GLOBALS
question = undefined
answer = undefined

// FUNCTIONS
function print(string) {
	console.log(string)
}

function startsWithOneOf(string, targets) {
	// todo: make your own folds library
	return _.some(_.map(targets, target => _.startsWith(string, target)))
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
		let noun_plural = undefined
		let gender = getGender(noun)
		if (gender === 'masculine') {
			noun_plural = replaceLastLetter(noun, 'i')
		}
		else if (gender === 'feminine') {
			noun_plural = replaceLastLetter(noun, 'e')
		}
		else {
			throw 'Unknown gender'
		}
		// orologio, for example, should become orologi, not orologii
		if (_.endsWith(noun_plural, 'ii') && noun !== 'zio') {
			noun_plural = replaceLastLetter(noun_plural, '')
		}
		return noun_plural
	}
	else {
		throw 'Unknown plurality'
	}
}

function getWhitespace(article) {
	let whitespace = (_.endsWith(article, '\''))? '': ' '
	return whitespace
}

function getGender(noun) {
	// can ONLY handle REGULAR nouns in the sense that the ENDING should tell if it's masculine or feminine
	if (_.endsWith(noun, 'a')) {
		return 'feminine'
	}
	else if (_.endsWith(noun, 'o')) {
		return 'masculine'
	}
	else if (_.endsWith(noun, 'e')) {
		// let's assume 'e' endings are masculine, for now
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

class RandQuestion {
	constructor() {
		this.noun = randNoun()
		this.article_type = randArticleType()
		this.plurality = randPlurality()
	}

	toString() {
		return `${this.article_type} ${this.noun} ${this.plurality}`
	}

	answer() {
		let noun_original = this.noun
		let article_type = this.article_type
		let plurality = this.plurality

		let gender = getGender(noun_original)
		let starts_with_type = getStartsWithType(noun_original, gender)
		let article = ARTICLE_DICT[gender][starts_with_type][article_type][plurality]
		let whitespace = getWhitespace(article)
		let noun_final = applyPlurality(noun_original, plurality)
		let answer = `${article}${whitespace}${noun_final}`
		return answer
	}
}

function showNewQuestion() {
	// generate random question and show on screen
	question = new RandQuestion()
	articlequiz.question.value = question.toString()

	// clear out the old answer, to avoid confusion
	articlequiz.answer.value = ''
}

function showAnswer() {
	// show the answer of the current question
	answer = question.answer()
	articlequiz.answer.value = answer
}

module.exports = {
	showNewQuestion,
	showAnswer,
}
