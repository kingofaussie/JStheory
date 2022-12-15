// \n: 줄바꿈 , \t :tap , \\:백슬래쉬한개
string = '안녕!\n엘리야!';
console.log(string);

// 템플릿 리터럴 ``

let id = 'elli1';
let greetings = `안녕! 
${id}`;
console.log(greetings);

// 이모지 단축키 : 커맨드 컨트롤 스페이스 🅾️


console.clear();
// 객체 - 참조값 복사

let apple = { name: 'apple' };
let orange = apple;

orange.name = 'orange';
console.log(apple);

// let vs const
// let 재할당 가능


// const 재할당 불가 
// 1. 상수
const MAX_FRUITS = 5;
// 2. 재할당 불가 상수변수 또는 변수
const cake = {
  name: 'apple',
  color: 'red',
  display: '🍎',
};

// let 재할당가능 , 객체내 변경가능
// const 재할당불가 , 객체내 변경가능
