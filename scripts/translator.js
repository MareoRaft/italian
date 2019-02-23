var inputToOutput = {
	'avere': 'have',
	'have': 'avere',
	'abitare': 'live',
	'live': 'abitare',
	'andare': 'go',
	'go': 'andare',
	'arrivare': 'arrive',
	'arrive': 'arrivare',
	'ballare': 'dance',
	'dance': 'ballare',
	'cantare': 'sing',
	'sing': 'cantare',
	'cominciare': 'begin',
	'begin': 'cominciare',
	'comprare': 'buy',
	'buy': 'comprare',
	'dare': 'give',
	'give': 'dare',
	'dimenticare': 'forget',
	'forget': 'dimenticare',
	'dire': 'talk',
	'talk': 'dire',
	'dovere': 'have to',
	'have to': 'dovere',
	'essere': 'be',
	'be': 'essere',
	'fare': 'do',
	'do': 'fare',
	'frequentare': 'attend',
	'attend': 'frequentare',
	'guidare': 'drive',
	'drive': 'guidare',
	'guardare': 'watch',
	'watch': 'guardare',
	'imparare': 'learn',
	'learn': 'imparare',
	'insegnare': 'teach',
	'teach': 'insegnare',
	'lavorare': 'work',
	'work': 'lavorare',
	'mangiare': 'eat',
	'eat': 'mangiare',
	'parlare': 'talk',
	'talk': 'parlare',
	'potere': 'be able to',
	'be able to': 'potere',
	'ricordare': 'remember',
	'remember': 'ricordare',
	'sapere': 'know a fact',
	'know a fact': 'sapere',
	'spiegare': 'explain',
	'explain': 'spiegare',
	'studiare': 'study',
	'study': 'studiare',
	'uscire': 'go out',
	'go out': 'uscire',
	'venire': 'come',
	'come': 'venire',
	'volere': 'want',
	'want': 'volere',
}

function translateword(){
	var input = trans.word.value
	var output = undefined
	if (input in inputToOutput) {
		output = inputToOutput[input]
	}
	else {
		output = 'word not found'
	}
	trans.answer.value = output
}
