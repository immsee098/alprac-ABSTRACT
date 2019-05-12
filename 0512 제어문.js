//1번 문제
var x = 15;
if (x > 10, x < 20) {
  console.log(x)
}


//2번 문제
for (let i = 0; i < 10; i += 2) {
    console.log(i)
  }


//3번 문제
let Num1 = new Array();

for (let i = 0; i < 10; i += 2) {
  Num1[i / 2] = i;
}
let a = Num1.join('')
console.log(a)


//4번 문제
for (let i = 9; i > 0; i -= 2) {
    console.log(i)
  }


//5번 문제
let i = 0;
while (i < 10) {
  console.log(i)
  i += 2
}


//6번 문제
// let i = 9;
// while (i > 0) {
//   console.log(i)
//   i -= 2
// }

//7번 문제
let sum = 0;
for (let i = 0; i < 10; i++) {
  sum += i;
}
console.log(sum);


//8번 문제
let sum2 = 0;
for (let i =1; i < 20; i++) {
  if (i % 2 !== 0 && i % 3 !== 0) {
    sum2 += i;
  }
}
console.log(sum2);


//9번 문제
let sum3 = 0;
for (let i = 1; i < 20; i++) {
  if (i % 2 === 0 || i % 3 === 0) {
    sum3 += i;
  }
}
console.log(sum3);



//10번 문제

for (let i = 1; i < 7; i++) {
  for (let j = 1; j < 7; j++) {
    const sum4 = i + j;
    if (sum4 === 6) {
      console.log(`[${i},${j}]`)
    }
  }
}
  


//11번 문제

for (let i = 0; i < 5; i++)
{
  const a = Array(i + 2).join('*')
  console.log(`${a}\n`);

}


//12번 문제
for (let i = 5; i > 0; i--)
{
  const a = Array(i+1).join('*')
  const b = " ".repeat(5-i)
  console.log(b + a);

}


//13번 문제
for (let i = 5; i > 0; i--)
{
  const a = Array(i + 1).join('*')
  console.log(`${a}\n`);

}


//14번 문제
for (let i = 0; i < 5; i++)
{
  const a = Array(i + 2).join('*')
  const b = ' '.repeat(5 - i)
  console.log(b + a);

}

//15번째 문제
for (let i = 0; i < 10; i += 2)
{
  const a = Array(i+2).join('*')
  const b = ' '.repeat(parseInt((9 - i) / 2, 10))
  console.log(b + a + b);

}


//16번 문제
for (let i = 10; i > 0; i -= 2)
{
  const a = Array(i).join('*')
  const b = ' '.repeat(parseInt((10 - i) / 2, 10))
  console.log(b + a + b)
}