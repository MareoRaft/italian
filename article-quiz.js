// this should be a separate file:
let LEXICON = ['settimana', 'anno', 'calendario', 'secondo', 'ora', 'minuto', 'orologio', 'birra', 'vino', 'acqua', 'manzo', 'pollo', 'agnello', 'infermiera', 'impiegato', 'cuoco']

let ARTICLE_TYPES = ['definite', 'indefinite', 'beautiful']
let PLURALITIES = ['singular', 'plural']
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

function startsWith() {
	// see if in lodash
}

function endsWith() {
	// see if in lodash
}

function print(string) {

}

function randNoun() {
	// get a random noun from the noun lexicon
	let rand_index = Math.floor(Math.rand() * LEXICON.length)
	return LEXICON[rand_index]
}

function randArticleType() {
	let rand_index = Math.floor(Math.rand() * 2)
	return ARTICLE_TYPES[rand_index]	
}

function randPlurality() {
	let rand_index = Math.floor(Math.rand() * 2)
	return PLURALITIES[rand_index]
}

function applyPlurality(noun, plurality) {
	if (plurality === 'singular') {
		return noun
	}
	else if (plurality === 'plural') {
		let gender = getGender(noun)
		if (gender === 'masculine') {
			return noun.splice() + 'i'
		}
		else if (gender === 'feminine') {
			return noun.splice() + 'e'
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
	let whitespace = (article ends with ')? '': ' '
	return `${article}${whitespace}`
}

function getGender(noun) {
	// can ONLY handle REGULAR nouns in the sense that the ENDING should tell if it's masculine or feminine
	if (endsWith(noun, 'a')) {
		return 'feminine'
	else if (endsWith(noun, 'o')) {
		return 'masculine'
	}
	else {
		throw 'Unrecognized ending for a singular noun.'
	}
}

function getStartsWithType(noun, gender) {
	if (gender === 'masculine' && startsWith(STARTS_WITH_TYPE_DICT['special'])) {
		return 'special'
	}
	else if (startsWith(STARTS_WITH_TYPE_DICT['vowel'])) {
		return 'vowel'
	}
	else {
		return 'other'
	}
}

function round() {
	let noun = randNoun()
	let gender = getGender(noun)
	let starts_with_type = getStartsWithType(noun, gender)
	let article_type = randArticleType()
	let plurality = randPlurality()
	let article = ARTICLE_DICT[gender][starts_with_type][article_type]
	let correct_article_with_whitespace = applySpace(article)
	let correct_noun = applyPlurality(noun, plurality)
	let string = `${correct_article_with_whitespace}${correct_noun}`
	print(string)
}

function main() {
	print('directions.  choose if you want to work with 'the', 'a', or 'bel'.  read the noun.  determine the article.  determine the plural version of the noun and article.')
	while (true) {
		round()		
	}
}

main()
