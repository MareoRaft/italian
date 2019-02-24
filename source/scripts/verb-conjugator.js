var verb
var tense
var rlength
var root
var io
var tu
var luilei
var noi
var voi
var loro
var kind
var v
var t
var i
var imperfectroot
var essere
var sc
var correctverb

function conjugateVerb()
{
v=0
t=0
verb=conj.verb.value
tense=conj.tense.value
tense=tense.toLowerCase()
verb=verb.toLowerCase()
if(verb.substring(verb.length-3,verb.length)=="rsi")
{reflexive="yes"
verb=verb.substring(0,verb.length-2)+"e"}
else{reflexive="no"}
rlength=(verb.length-3)
root=verb.substring(0,rlength)
kind=verb.substring(rlength,rlength+1)
imperfectroot=verb.substring(0,rlength+1)
if(verb.charAt(rlength-1)=="i"){i="yes"}
else{i="no"}
if(i=="yes"){futureroot=verb.substring(0,rlength-1)}
else{futureroot=root}
if(verb.substring(rlength-2,rlength)=="sc"){sc="yes"}
else{sc="no"}
if(verb=="andare" || verb=="arrivare" || verb=="entrare" || verb=="partire" || verb=="restare" || verb=="ritornare" || verb=="tornare" || verb=="uscire" || verb=="venire" || verb=="restare" || verb=="essere" || verb=="stare" || verb=="sparire" || verb=="scendere" || verb=="cadere" || verb=="salire" || verb=="rimanare" || verb=="morire" || verb=="nascere"){essere="yes"}
else{essere="no"}
if(kind=="a" || kind=="i" || kind=="e"){correctverb="yes"}
else{correctverb="no"}


if(correctverb=="no"){v=2}
if(verb==''){v=1}
if(tense=="present" || tense=="presente" || tense=="past"  || tense=="passato"  || tense=="passato prossimo" || tense=="imperfect"  || tense=="imperfetto"  || tense=="trapassato" || tense=="trapassato remoto"){t=0}
else if(tense=="future anterior" || tense=="futuro anteriore" || tense=="trapassato prossimo" || tense=="past remoto" || tense=="future" || tense=="futuro" || tense=="passato remoto"){t=0}
else{t=2}
if(tense==''){t=1}

if(v==0 && t==0)
{
if(verb.charAt(rlength+1)!="r"){v=2}
else if(verb.charAt(rlength+2)!="e"){v=2}
else
{
io=root
tu=root
luilei=root
noi=root
voi=root
loro=root
if(tense=="present" || tense=="presente"){present()}
else if(tense=="past" || tense=="passato" || tense=="passato prossimo"){past()

if(essere=="yes" || reflexive=="yes")
{io="sono "+io
tu="sei "+tu
luilei="e "+luilei
noi="siamo "+noi
voi="siete "+voi
loro="sono "+loro}

else
{io="ho "+io
tu="hai "+tu
luilei="ha "+luilei
noi="abbiamo "+noi
voi="avete "+voi
loro="hanno "+loro}

if(reflexive=="yes")
{io="mi "+io
tu="ti "+tu
luilei="si "+luilei
noi="ci "+noi
voi="vi "+voi
loro="si "+loro}

}
else if(tense=="imperfect" || tense=="imperfetto"){imperfect()}
else if(tense=="trapassato" || tense=="trapassato prossimo"){past()

if(essere=="yes")
{io="ero "+io
tu="eri "+tu
luilei="era "+luilei
noi="eravamo "+noi
voi="eravate "+voi
loro="erano "+loro}

else
{io="avevo "+io
tu="avevi "+tu
luilei="aveva "+luilei
noi="avevamo "+noi
voi="avevate "+voi
loro="avevano "+loro}

}
else if(tense=="trapassato remoto"){past()

if(essere=="yes")
{io="fui "+io
tu="fosti "+tu
luilei="fu "+luilei
noi="fummo "+noi
voi="foste "+voi
loro="furono "+loro}

else
{io="ebbi "+io
tu="avesti "+tu
luilei="ebbe "+luilei
noi="avemmo "+noi
voi="aveste "+voi
loro="ebbero "+loro}

}
else if(tense=="passato remoto" || tense=="past remoto"){pastremoto()}
else if(tense=="future" || tense=="futuro"){future()}
else if(tense=="future anterior" || tense=="futuro anteriore"){past()

if(essere=="yes")
{io="saro "+io
tu="sarai "+tu
luilei="sara "+luilei
noi="saremo "+noi
voi="sarete "+voi
loro="saranno "+loro}

else
{io="avro "+io
tu="avrai "+tu
luilei="avra "+luilei
noi="avremo "+noi
voi="avrete "+voi
loro="avranno "+loro}

}
}
conj.ioform.value=io
conj.tuform.value=tu
conj.luileiform.value=luilei
conj.noiform.value=noi
conj.voiform.value=voi
conj.loroform.value=loro
}
else if(v==1 && t==1){alert("Please enter a verb and a tense")}
else if(v==2 && t==2){alert("Incorrect verb; Incorrect tense")}
else if(v==1 && t==2){alert("Please enter a verb; Incorrect tense")}
else if(v==2 && t==1){alert("Incorrect verb; Please enter a tense")}
else if(v==1 && t==0){alert("Please enter a verb")}
else if(v==2 && t==0){alert("Incorrect verb")}
else if(v==0 && t==2){alert("Incorrect tense")}
else if(v==0 && t==1){alert("Please enter a tense")}
}

function present()
{
if(kind=="a")
{io+="o"
if(i!="yes"){tu+="i"}
luilei+="a"
if(i!="yes"){noi+="iamo"}
else if(i=="yes"){noi+="amo"}
voi+="ate"
loro+="ano"}
else if(kind=="i")
{io+="o"
if(i!="yes"){tu+="i"}
luilei+="e"
if(i!="yes"){noi+="iamo"}
else if(i=="yes"){noi+="amo"}
voi+="ite"
loro+="ono"}
else if(kind=="e")
{io+="o"
if(i!="yes"){tu+="i"}
luilei+="e"
if(i!="yes"){noi+="iamo"}
else if(i=="yes"){noi+="amo"}
voi+="ete"
loro+="ono"}

if(reflexive=="yes")
{io="mi "+io
tu="ti "+tu
luilei="si "+luilei
noi="ci "+noi
voi="vi "+voi
loro="si "+loro}

if(verb=="avere")
{io="ho"
tu="hai"
luilei="ha"
noi="abbiamo"
voi="avate"
loro="hanno"}

else if(verb=="essere")
{io="sono"
tu="sei"
luilei="e"
noi="siamo"
voi="siete"
loro="sono"}

else if(verb=="fare")
{io="faccio"
noi="facciamo"
loro="fanno"}

else if(verb=="uscire")
{io="esco"
tu="esci"
luilei="esce"
loro="escono"}

else if(verb=="potere")
{io="posso"
tu="puoi"
luilei="puo"
noi="possiamo"
loro="possono"}

else if(verb=="andare")
{io="vado"
tu="vai"
luilei="va"
loro="vanno"}

else if(verb=="volere")
{io="voglio"
tu="vuoi"
luilei="vuole"
noi="vogliamo"
loro="vogliono"}

else if(verb=="dire")
{io="dico"
tu="dici"
luilei="dice"
noi="diciamo"
voi="dite"
loro="dicono"}

else if(verb=="venire")
{io="vengo"
tu="vieni"
luilei="viene"
loro="vengono"}

else if(verb=="dovere")
{io="devo"
tu="devi"
luilei="deve"
noi="dobbiamo"
loro="devono"}

else if(verb=="sapere")
{io="so"
tu="sai"
luilei="sa"
noi="sappiamo"
loro="sanno"}

}

function past()
{

if(kind=="i")
{io+="it"
tu+="it"
luilei+="it"
noi+="it"
voi+="it"
loro+="it"}
else if(sc=="yes")
{io+="i"
tu+="i"
luilei+="i"
noi+="i"
voi+="i"
loro+="i"}
if(kind=="a")
{io+="at"
tu+="at"
luilei+="at"
noi+="at"
voi+="at"
loro+="at"}
else if(kind=="e")
{io+="ut"
tu+="ut"
luilei+="ut"
noi+="ut"
voi+="ut"
loro+="ut"}

if(essere=="yes" || reflexive=="yes")
{io+="o/a"
tu+="o/a"
luilei+="o/a"
noi+="i/e"
voi+="i/e"
loro+="i/e"}

else{io+="o"
tu+="o"
luilei+="o"
noi+="o"
voi+="o"
loro+="o"}

if(verb=="essere")
{io="stato/a"
tu="stato/a"
luilei="stato/a"
noi="stati/e"
voi="stati/e"
loro="stati/e"}

}

function imperfect()
{

if(verb=="fare"){imperfectroot="face"}
else if(verb=="dire"){imperfectroot="dice"}
else if(verb=="bere"){imperfectroot="beve"}

io=imperfectroot
tu=imperfectroot
luilei=imperfectroot
noi=imperfectroot
voi=imperfectroot
loro=imperfectroot

io+="vo"
tu+="vi"
luilei+="va"
noi+="vamo"
voi+="vate"
loro+="vano"

if(verb=="essere")
{io="ero"
tu="eri"
luilei="era"
noi="eravamo"
voi="eravate"
loro="erano"}

}

function pastremoto()
{

io=imperfectroot+"i"
tu=imperfectroot+"sti"
if(kind=="a"){luilei+="o"}
else if(kind=="i"){luilei+="i"}
else if(kind=="e"){luilei+="e"}
noi=imperfectroot+"mmo"
voi=imperfectroot+"ste"
loro=imperfectroot+"rono"

if(verb=="avere")
{io="ebbi"
tu="avesti"
lui="ebbe"
noi="avemmo"
voi="aveste"
loro="ebbero"}

if(verb=="stare")
{io="stetti"
tu="stesti"
lui="stette"
noi="stemmo"
voi="steste"
loro="stettero"}

}

function future()
{

if(verb=="avere" || verb=="andare" || verb=="potere" || verb=="vedere" || verb=="sapere")
{io+="ro"
tu+="rai"
luilei+="ra"
noi+="remo"
voi+="rete"
loro+="ranno"}

else if(verb=="fare" || verb=="dare" || verb=="stare")
{io+="o"
tu+="ai"
luilei+="a"
noi+="emo"
voi+="ete"
loro+="anno"}

else
{io=futureroot+"ero"
tu=futureroot+"erai"
luilei=futureroot+"era"
noi=futureroot+"eramo"
voi=futureroot+"erete"
loro=futureroot+"eranno"}

}

module.exports = {
	conjugateVerb,
}
