function promptMe(){
alert("Hey donkey pals, welcome to the love match calculator. \n\nAre you ready to find out who your dream donkey is?")

var inputname1 = prompt("What's your name, wee donkey?");
var inputname2 = prompt("What donkey gets you hot in your barn?");

alert("One sec. We're calculating your future together...")

var lovescore = (Math.random() * 100);
var rounded = Math.round(lovescore);

if(rounded <=30){
    alert("Ach, drats!" + " " + inputname1 + " " + "your chance of love with" + " " + inputname2 + " " + "is..." + " " + rounded + "%." + " " + "\n\nIn all of donkey history there has never been two donkeys so wrong together.");
}
else if(rounded >=30 && rounded < 60){
    alert("Hmm, it's not bad!" + " " + inputname1 + " " + "your chance of love with" + " " + inputname2 + " " + "is..." + " " + rounded + "%." + " " + "\n\nThis could go either way, it all depends on which way the straw blows.");
}
else if(rounded >=60 && rounded < 80){
    alert("Oooh dang!" + " " + inputname1 + " " + "your chance of love with" + " " + inputname2 + " " + "is..." + " " + rounded + "%." + " " + "\n\nThere is a lot of chemistry brewing here, even the pigs and horses think so.");
}
else{
    alert("Hee-haw!" + " " + inputname1 + " " + "your chance of love with" + " " + inputname2 + " " + "is..." + " " + rounded + "%." + " " + "\n\nLooks like we'll leave you randy donkeys to it!");
}
}

