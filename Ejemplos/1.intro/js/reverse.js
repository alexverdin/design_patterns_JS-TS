// string reverse con recursividad

const str = "pozole";

//console.log(str.slice(0, 1)); // first character
//console.log(str.slice(1)); // first character


function reverse(pal){
    if(pal.length != 0){
        let revPal = pal.slice(0, 1);
        
        return reverse(pal.slice(1)) + revPal;
    }
    return '';
}

console.log(reverse(str));