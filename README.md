 # JS 100제 문제집

 ## Prac 2
부족했던 점 : splice를 활용하여 배열의 중간에 값을 삽입
 ```js
  arr.splice(2,0,10000);
 ```
 `splice`를 이용해 index값이 2인 곳에 10000을 삽입

 ## Prac 8
부족했던 점 : 객체에 똑같은 키값이 있으면 아래 있는 값이 덮어쓰게 된다. 즉 , 키 값을 호출하게 되면 객체에서 아래에 있는 value값이 출력된다. 

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
 부족했던 점 : reverse 내장함수에 대해서 알지 못했다. 
 ```js
  let nameReverse = `거꾸로`;

  console.log(nameReverse.split('').reverse().join(''));
 ```
 거꾸로를 split 함수를 통해 배열로 만들고 그 값을 reverse를 통해 뒤집은 다음에 join으로 묶어준다.
 
## prac 20 
부족했던 점 : Set에 대한 개념을 잘 모르고 있어서 정리해봤다. 

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