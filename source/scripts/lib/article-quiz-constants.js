let LEXICON = [
// Masculine
// special
'yogurt',
'spumante',
'gnomo',
'specchio',
'stadio',
'psicologo',
'zero',
'pneumatico',
'zucchero',
'zio',

// vowel
'anno',
'orologio',
'agnello',
'impiegato',
'antipasto',
'ombrello',
'appartamento',
'aglio',
'albero',
'aereo',

// other
'secondo',
'minuto',
'vino',
'pollo',
'cuoco',
'manzo',
'letto',
'momento',
'professore',
'telefono',

// Feminine
// vowel
'ora',
'acqua',
'infermiera',
'amica',
'arancia',
'insalata',
'maglietta',
'uva',
'oliva',
'zucca',

// other
'settimana',
'birra',
'zuppa',
'porta',
'signora',
'bottiglia',
'candela',
'stanza',
'tavola',
'finestra',
'zia',
]

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
}

module.exports = {
	ARTICLE_DICT,
	STARTS_WITH_TYPE_DICT,
	CONSONANTS,
	PLURALITIES,
	ARTICLE_TYPES,
	LEXICON,
}
