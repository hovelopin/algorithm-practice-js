const studentName = prompt('이름 공백 입력').split(' ');
const studentScores = prompt('수학 점수 입력').split(' ');

const obj ={};
// obj[studentName[0]] = studentScores[0];
// obj[studentName[1]] = studentScores[1];

for(let i =0 ;i<MediaKeySession.length;i++){
  obj[studentName[i]] = parseInt(studentScores[i] , 10);
}

console.log(obj);
