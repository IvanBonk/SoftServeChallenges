// Longest Word

function LongestWord(str) {
    let mark = /[\s!@#$%^&*?.,'"/:;~`]/,
        buff = str.split(mark),
        len = 0,
        ind = 0;
    for (let i = 0; i < buff.length; i++) {
        if(buff[i].length > len) {
            len = buff[i].length;
            ind = i;
        }
    }

    return buff[ind];
}
console.log(LongestWord("fun&!! time"));
console.log(LongestWord("I love dogs"));

//////////////////////////////////
//  First Factorial

function FirstFactorial(num) {
    return num ? num * FirstFactorial(num - 1):1;
}

console.log(FirstFactorial(4));
console.log(FirstFactorial(8));

// or

function FirstFactorial(num) {
    let res = 1;
    while(num) {
        res *= num;
        num--;
    }
    return res;
}

console.log(FirstFactorial(4));
console.log(FirstFactorial(8));

/////////////////////////////////
// Simple Adding

function SimpleAdding(num) {
    return num ? num + SimpleAdding(num - 1) : 0;
}

console.log(SimpleAdding(12));
console.log(SimpleAdding(140));

// or

function SimpleAdding(num) {
    let res = 0;
    while(num) {
        res += num;
        num--;
    }
    return res;
}

console.log(SimpleAdding(12));
console.log(SimpleAdding(140));

////////////////////////////////////////
// Letter Capitalize

function LetterCapitalize(str) {
   let res = '';
   for (let i = 0; i < str.length; i++) {
       if(str[i-1] === ' ' || str[i-1] === undefined){
           res += str[i].toUpperCase();
       } else {
           res += str[i];
       }
   }
   return res;
}

console.log(LetterCapitalize('hello world'));
console.log(LetterCapitalize('i ran there'));

/////////////////////////////////////////////////
//First Reverse

function FirstReverse(str) {
    return str.split('').reverse().join('');
}

console.log(FirstReverse('coderbyte'));
console.log(FirstReverse('I Love Code'));

//////////////////////////////////////////////
// Simple Symbols

function SimpleSymbols(str) {
    for (let i = 0; i < str.length; i++) {
        if (/[a-zA-Z]/.test(str[i])) {
            if (i == 0 || str[i - 1] != str[i + 1]) {
                return false;
            } else {
                return true;
            }
        }
    }
}
console.log(SimpleSymbols("+d+=3=+s+"));
console.log(SimpleSymbols("f++d+"));

//////////////////////////////////////////////
// Check Nums

function CheckNums(num1, num2) {
    if(num1 === num2) {
        return -1;
    } else {
        return num1 < num2 ? true : false;
    }
}

console.log(CheckNums(3, 122));
console.log(CheckNums(67, 67));

///////////////////////////////////////////
// Time Convert

function TimeConvert(num) {
    let sec = Math.floor(num%60),
        min = Math.floor((num/60)%60);
    return `${min}:${sec}`;
}

console.log(TimeConvert(126));
console.log(TimeConvert(45));

////////////////////////////////////////
// Alphabet Soup

function AlphabetSoup(str) {
    return str.split('').sort().join('');
}

console.log(AlphabetSoup("coderbyte"));
console.log(AlphabetSoup("hooplah"));