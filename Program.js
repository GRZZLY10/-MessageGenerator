const phrases={
greetings:['Tuve una cita con ', 'Cante con ', 'Sali a comer con ', 'Le robe el corazon a'],
names:['Andrea', ' Paulina ','Constanza',' Arantza '],
term : [' en mis suenos',' en buenas y Santas',' en oaxtepec',' en un tabledance']
}

let random = (num) =>{ 
    return Math.floor(Math.random()*num)};

let myPhrase=[];
for(let prop in phrases){
    let indexOfProp=random(phrases[prop].length)
    switch(prop){
        case 'greetings':
            myPhrase.push(phrases[prop][indexOfProp]);
            break;
        case 'names':
            myPhrase.push(phrases[prop][indexOfProp]);
            break;
        case 'term':
            myPhrase.push(phrases[prop][indexOfProp]);
            break
        default:
            console.log('No tuviste nada hermano')
    }
    
}

let makeYourPhrase= (phrase1)=> {
    console.log(myPhrase.join(""));
  }

makeYourPhrase(myPhrase);







