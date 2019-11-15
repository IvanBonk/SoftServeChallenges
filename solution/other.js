 function solution(str){
    let buff = str.split(''),
        res = [];
   
    for(let i = 0; i < buff.length; i+=2) {
      if(buff[i+1] === undefined) {
        res.push(buff[i] + '_');
      } else {
        res.push(buff[i] + buff[i+1]);
      }
    }
    
    return res;
 }

 function solution(str) {
     return (str.length % 2 ? str + '_' : str).match(/../g);
 }

 console.log(solution('abc'));
 console.log(solution('abcdef'));

 // Draw Stairs 

function drawStairs(count) {
    let res = '';
    for (let i = 0; i < count; i++) {
        if(count === 1) {
            res += 'I';
            break;
        } else if((i + 1) === count) {
            res += 'I';
            break;
        } else {
            res += 'I\n';
            for(let j = 0; j <= i; j++) {
                res += ' ';
            }
        }
    }
    return res;
}

console.log(drawStairs(7));
console.log(drawStairs(3));
console.log(drawStairs(1));