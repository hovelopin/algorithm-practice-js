// 객체에 똑같은 key 값이 있으면 아래값이 덮어씌어져 밑에 있는 값이 나온다. 
var d = {
  'height':180,
  'weight':78,
  'weight':84,
  'temperature':36,
  'eyesight':1
};

console.log(d['weight']);