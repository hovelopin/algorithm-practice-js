const seq = prompt('문자열 속 문자 찾기').split('');
const findSeq = prompt('같은 문자 찾기');

// minus = seq.length-findSeq.length;

// for(let i =0; i<minus ;i++){
//   console.log(seq.slice(i,i+findSeq.length).join(''));
//   if(seq.slice(i,i+findSeq.length).join('') === findSeq){
//     console.log(i);
//     break;
//   }
// }

console.log(seq.indexOf(findSeq));