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
