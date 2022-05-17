 # JS 100제 문제집

 ## Prac 2
📚 : splice를 활용하여 배열의 중간에 값을 삽입
 ```js
  arr.splice(2,0,10000);
 ```
 `splice`를 이용해 index값이 2인 곳에 10000을 삽입

 ## Prac 8
📚 : 객체에 똑같은 키값이 있으면 아래 있는 값이 덮어쓰게 된다. 즉 , 키 값을 호출하게 되면 객체에서 아래에 있는 value값이 출력된다. 

 ```js
  var d = {
    'height':180,
    'weight':78,
    'weight':84,
    'temperature':36,
    'eyesight':1
  };

  console.log(d['weight']); // 84
 ```

 ## Prac 16
 📚 : reverse 내장함수에 대해서 알지 못했다. 
 ```js
  let nameReverse = `거꾸로`;

  console.log(nameReverse.split('').reverse().join(''));
 ```
 거꾸로를 split 함수를 통해 배열로 만들고 그 값을 reverse를 통해 뒤집은 다음에 join으로 묶어준다.
 
## prac 20 
📚 : Set에 대한 개념을 잘 모르고 있어서 정리해봤다. 

개념 : Set은 중복이 허용되지 않는 객체이다. 안에 이미 같은 값이 존재한다면 추가되지 않는다.
### Set 생성 방법
```js
const x = new Set();
console.log(x); // {}
```
```js
const x = new Set([1,2,3,4,5])
console.log(x); // {1,2,3,4,5}
```
```js
const x = new Set('javascript');
console.log(x); // {'j', 'a', 'v','a','s', 'c', 'r', 'i', 'p', 't'};
```
### 메소드 활용
+ 추가
  ```js
  const x = new Set([1,2,3,4,5]); // {1,2,3,4,5}
  x.add(6);
  console.log(x); // {1,2,3,4,5,6}
  ```

+ 삭제 
  ```js
  const x = new Set([1,2,3,4,5]); // {1,2,3,4,5}
  x.delete(5);
  console.log(x); // {1,2,3,4}
  ```


+ 값 확인
  ```js
  const x = new Set([1,2,3,4,5]); // {1,2,3,4,5}
  x.has(6); // false
  ```

+ 길이 
  ```js
  const x = new Set([1,2,3,4,5]); // {1,2,3,4,5}
  console.log(x.size); // 5
  ```
+ 값 전부 삭제 
  ```js
  const x = new Set([1,2,3,4,5]); // {1,2,3,4,5}
  x.clear();
  console.log(x); // {}
  ```

## prac 30

📚 : `indexOf`에 대한 개념이 부족했다. 

+ arr.indexOf(value) => arr 배열에서 주어진 값과 일치하는 값이 있으면 그 index를 출력하고 존재하지 않으면 -1을 출력한다.
  
### 만일 배열안에 있는 값이 숫자 , 문자열 , boolean이라면 찾을 수 있지만 객체나 배열이면 찾을 수 없다. 
따라서 `findIndex`를 이용해야 한다.

+ arr.findIndex(함수) => 파라미터로 함수를 입력받아 , 특정 조건을 만족하면 만족하는 원소가 몇 번째인지 알려주는 함수이다.

```js
const arr = [1, 'blabla' , {name:'hp'}];

const idx1 = arr.indexOf(1);
const idx2 = arr.indexOf('blabla');
const idx3 = arr.findIndex(obj => obj.name === 'hp');

console.log(idx1); // 0
console.log(idx2); // 1
console.log(idx3); // 2
```

## prac 31
📚 : 내장 함수에 대한 정리가 필요했다. 

1. O(1) : `push` , `pop`
2. O(n) : `shift` , `unshift` ,`splice` , `concat` , `slice` , `indexOf` , `forEach` , `map` , `filter` , `reduce`
3. O(n log(n)) : `sort`