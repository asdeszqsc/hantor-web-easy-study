// console.log('Hi javascript!');

// let a = 20;
// console.log(a);
// a= 30;
// console.log(a);

// let str = '안윤회';
// let str2 = "javascript";
// let str3 = `강의`; //String

// console.log(typeof(str), typeof(str2), typeof(str3));

// let a =1;

// console.log(typeof(a));

// let i = [];
// let j = {};

// console.log(typeof(i) , typeof(j));

// console.log(typeof(undefined));
// console.log(typeof(null));

// let a = 10;
// let b = '20';

// // string에서 사용하는 + 연산자


// console.log(str1+str2);

// console.log(a+b); //string으로 자동형변환
// console.log(a*b); // number로 자동형변환

// let a = 10;
// let b = '10';

// // === (일치연산자, type까지 비교)

// console.log(a !== b);


// console.log('30'+10);
// console.log(Number('30')+10);

// const a = prompt('주소는?', '수원시 팔달구');
// console.log(a);

// const b = confirm('학생 맞지?');
// console.log(b);

// let age= 19;

// age > 19 ? console.log('하위') : console.log('나가');

// let age = 19;
// let name = '안윤회';
// let name2 = '';

// if(age > 19 || name==='안윤회'){
//   console.log('맞다');
// }
// else{
//   console.log('아니다');
// }

// if(!name2) console.log('없어');
// else console.log('있어');

// let arr = [1,2,3,4,5];
// let i =0;

// for(let i =0; i<5; i++){
//   console.log(arr[i]);
// }

// while(i<5){
//   console.log(arr[i]);
//   i++;
// }



// function add(num1, num2){
//   return num1+num2;
// }

// divide = (num1,num2) => (num1/num2);
// divide2 = (num1,num2) => {return num1/num2;};

// let divide3 = (num1,num2) => (num1/num2);
// let plus = num => (num+3);

// console.log(add(1,2));
// console.log(divide(1,2));
// console.log(divide2(1,2));
// console.log(plus(3));


// 호이스팅 함수랑 var 변수

// let a = new Date();

// console.log(a);

// let b = new Object();

// console.log(b);
// b.name = '이순신';
// b.age = 18;


// function person(name, age){
//   this.name = name;
//   this.age = age;
// }

// let human1 = new person('안윤회', 18);
// console.log(human1);

// let node = document.createElement('li');
// node.innerHTML = 'gg';

// console.log(node);
// node.onclick = function add(a,b){return a+b};
// console.log(node);

// console.log(document.querySelectorAll('li.odd'));

changeText = (element) =>{
  if(element.innerHTML === '문자열 바꼈어요'){
    element.innerHTML = '그만 눌러';
  }
  else{
    element.innerHTML = '문자열 바꼈어요';
  }
}



