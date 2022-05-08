// 별찍기 문제 
let n = 5;
let tree = '';

// 문제를 접근할때 공백을 몇칸을 만들고 *의 개수를 그 뒤에 적는거다 
// 예를들어 i = 1일때는 공백을 4칸만들고 거기 뒤에 *1개 공백을 3칸만들고 그 뒤에 *3개 ....
for(let i = 1 ;i <= n; i++){
  let star = '';
  for (let j = 1 ;j<=n-i;j++){
    star+=' ';
  }
  for(let k = 1 ; k<=2*i-1 ; k++){
    star += '*';
  }
  tree += star +'\n';
  // console.log(star);
}
console.log(tree);
