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