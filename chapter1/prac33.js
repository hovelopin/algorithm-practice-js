const number = prompt('입력').split(' ');

result = '';
for(let i = number.length-1 ; i >= 0 ;i--){
  result += `${number[i]} `
}
console.log(result);

/*
reverse() 메소드를 통해서 배열의 모든 값들을 거꾸로 바꿔줄수있음
*/