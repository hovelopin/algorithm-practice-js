var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';

// concat을 사용해서 문자열들도 이어서 붙일 수 있다. 
// 하지만 템플릿 리터럴을 이용해서 풀이하는게 깔끔하긴 하다.
var result = year.concat('/', month, '/', day, ' ', hour, ':', minute, ':', second);

console.log(result);