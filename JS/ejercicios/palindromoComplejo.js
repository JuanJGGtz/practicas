const palindromo = str => {

    let j = str.length - 1;
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {

        //Si es espacio en blanco evalua el siguiente caracter
        if (str[i] == " ") {
            i++;
        }
        //Si es espacio en blanco evalua el siguiente caracter
        if (str[j] == " ") {
            j--;
        }

        if (str[i] != str[j]) {
            console.log(str[i]);
            console.log(str[j]);
            return 'NO ES PALINDROMO'
        }
        j--;
    }

    return 'PALINDROMO'
};

console.log(palindromo("La ruta nos aporto otro paso natural"));