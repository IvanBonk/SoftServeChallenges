////////////////////////////////////////
// Letter Changes

function LetterChanges(str) {
    let buff = str.split('');
    for(let i = 0; i < buff.length; i++) {
        if(/[a-zA-Z]/.test(buff[i])) {
            let code = buff[i].charCodeAt();
            if(code === 90 || code === 122) {
                buff[i] = code === 90 ? 
                String.fromCharCode(65) : 
                String.fromCharCode(97);
            } else {
                buff[i] = String.fromCharCode(code + 1);
            }
        }
        if (/[aouei]/.test(buff[i])) {
            buff[i] = buff[i].toUpperCase();
        }
        
    }
    return buff.join('');
}
console.log(LetterChanges('hello*3'));
console.log(LetterChanges('fun times!'));


/////////////////////////////////////////
// Correct Path

function CorrectPath(str) {
    let buff = str.split(''),
        sides = ['u','r','d','l'];

        function checkPath(path) {
            let curPos = [0, 0],
                field = [[1,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
            for(let i = 0; i < path.length; i++) {
                switch (path[i]) {
                    case 'u': {
                        if (curPos[0] > 0 && field[curPos[0]-1][curPos[1]] !== 1) {
                            curPos[0]--;
                            field[curPos[0]][curPos[1]] = 1;
                        }else {
                            return 0;
                        }
                        break;
                    }
                    case 'r': {
                        if (curPos[1] < 4 && field[curPos[0]][curPos[1]+1] !== 1) {
                            curPos[1]++;
                            field[curPos[0]][curPos[1]] = 1;
                        } else {
                            return 0;
                        }
                        break;
                    }
                    case 'd': {
                        if (curPos[0] < 4 && field[curPos[0]+1][curPos[1]] !== 1) {
                            curPos[0]++;
                            field[curPos[0]][curPos[1]] = 1;
                        } else {
                            return 0;
                        }
                        break;
                    }
                    case 'l': {
                        if (curPos[1] > 0 && field[curPos[0]][curPos[1]-1] !== 1) {
                            curPos[1]--;
                            field[curPos[0]][curPos[1]] = 1;
                        } else {
                            return 0;
                        }
                        break;
                    }
                    case '?': {
                        for (let j = 0; j < sides.length; j++) {
                            path[i] = sides[j];
                            if (checkPath(path) === 0) {
                                path[i] = '?';
                            } else {
                                return path.join('');
                            }
                        }
                        break;
                    }
                    default : {
                        return 0;
                    }
                }
            }
            if (curPos[0] === 4 && curPos[1] === 4) {
                return 1;
            } else {
                return 0;
            }
        }
    return checkPath(buff);
}
console.log(CorrectPath('r?d?drdd')); //rrdrdrdd
console.log(CorrectPath('???rrurdr?')); //Output: dddrrurdrd
console.log(CorrectPath('drdr??rrddd?')); //Output: drdruurrdddd

console.log(CorrectPath('rr?ldrr?lll?rrr?')); //rrdldrrdllldrrrr
console.log(CorrectPath('ddr?u?rr?lldd?l?r?r?')); //ddruurrrdllddlldrrrr

///////////////////////////////////////
// Binary to decimal

function BinToDem(num) {
    let buff = String(num).split('').reverse(),
        res =  0;
    for(let i = 0; i < buff.length; i++) {
        if(+buff[i] === 1){
            res += Math.pow(2, i);
        } 
    }
    return res;
}
console.log(BinToDem(100001111)); //271
console.log(BinToDem(11111)); //31