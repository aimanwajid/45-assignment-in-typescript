let magician : string[] = ['Harry Potter', 'Hermione Granger', 'Ron Weasley'];
function show_magicians(magicians: string[]){
    magicians.forEach(element => {
        console.log(element);
    });
}

show_magicians(magician)