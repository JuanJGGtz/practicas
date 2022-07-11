const palindromo = str => {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] && str[i] != " ") {
            newStr += str[i];
        }
    }

    let j = newStr.length - 1;
    for (let i = 0; i < newStr.length; i++) {
        if (newStr[i].toLowerCase() != newStr[j].toLowerCase()) return 'NO PALINDROMO';
        j--;
    }
    return 'PALINDROMO';
};


//console.log(palindromo("La ruta nos aporto otro paso natural"));
console.log(palindromo("La ruta          nos aporto otro paso natural"));