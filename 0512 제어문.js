//1번 문제
//1. 변수 x가 10보다 크고 20보다 작을 때 변수 x를 출력하는 조건식을 완성하라
let x = 15;
if (x > 10, x < 20) {
  console.log(x)
}


//2번 문제
//2. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.
for (let i = 0; i < 10; i += 2) {
    console.log(i)
  }


//3번 문제
//3. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 문자열로 출력하시오.
let Num1 = new Array();

for (let i = 0; i < 10; i += 2) {
  Num1[i / 2] = i;
}
let a = Num1.join('')
console.log(a)


//4번 문제
//4. for문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
for (let i = 9; i > 0; i -= 2) {
    console.log(i)
  }


//5번 문제
//5. while문을 사용하여 0 부터 10 미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.
let i = 0;
while (i < 10) {
  console.log(i)
  i += 2
}


//6번 문제
//6. while문을 사용하여 0 부터 10 미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
let i = 9;
while (i > 0) {
  console.log(i)
  i -= 2
}

//7번 문제
//7. for 문을 사용하여 0부터 10미만의 정수의 합을 출력하시오.
let sum = 0;
for (let i = 0; i < 10; i++) {
  sum += i;
}
console.log(sum);


//8번 문제
//8. 1부터 20 미만의 정수 중에서 2 또는 3의 배수가 아닌 수의 총합을 구하시오.
let sum2 = 0;
for (let i =1; i < 20; i++) {
  if (i % 2 !== 0 && i % 3 !== 0) {
    sum2 += i;
  }
}
console.log(sum2);


//9번 문제
//9. 1부터 20 미만의 정수 중에서 2 또는 3의 배수인 수의 총합을 구하시오.
let sum3 = 0;
for (let i = 1; i < 20; i++) {
  if (i % 2 === 0 || i % 3 === 0) {
    sum3 += i;
  }
}
console.log(sum3);



//10번 문제
//10. 두 개의 주사위를 던졌을 때, 눈의 합이 6이 되는 모든 경우의 수를 출력하시오.

for (let i = 1; i < 7; i++) {
  for (let j = 1; j < 7; j++) {
    const sum4 = i + j;
    if (sum4 === 6) {
      console.log(`[${i},${j}]`)
    }
  }
}
  

//11번 문제
//11. 삼각형 출력하기 - pattern 1
//다음을 참고하여 *(별)로 높이가 5인(var line = 5) 삼각형을 문자열로 완성하라. 개행문자(‘\n’)를 사용하여 개행한다. 완성된 문자열의 마지막은 개행문자(‘\n’)로 끝나도 관계없다.

for (let i = 0; i < 5; i++)
{
  const a = Array(i + 2).join('*')
  console.log(`${a}\n`);

}


//12번 문제
//12. 삼각형 출력하기 - pattern 2
//다음을 참고하여 *(별)로 트리를 문자열로 완성하라. 개행문자(‘\n’)를 사용하여 개행한다. 완성된 문자열의 마지막은 개행문자(‘\n’)로 끝나도 관계없다.

for (let i = 5; i > 0; i--)
{
  const a = Array(i+1).join('*')
  const b = " ".repeat(5-i)
  console.log(b + a);

}


//13번 문제
//13. 삼각형 출력하기 - pattern 3
//다음을 참고하여 *(별)로 트리를 문자열로 완성하라. 개행문자(‘\n’)를 사용하여 개행한다. 완성된 문자열의 마지막은 개행문자(‘\n’)로 끝나도 관계없다.

*****
for (let i = 5; i > 0; i--)
{
  const a = Array(i + 1).join('*')
  console.log(`${a}\n`);

}


//14번 문제
//14. 삼각형 출력하기 - pattern 4
//다음을 참고하여 *(별)로 트리를 문자열로 완성하라. 개행문자(‘\n’)를 사용하여 개행한다. 완성된 문자열의 마지막은 개행문자(‘\n’)로 끝나도 관계없다.
for (let i = 0; i < 5; i++)
{
  const a = Array(i + 2).join('*')
  const b = ' '.repeat(5 - i)
  console.log(b + a);

}

//15번째 문제
//15. 정삼각형 출력하기
for (let i = 0; i < 10; i += 2)
{
  const a = Array(i+2).join('*')
  const b = ' '.repeat(parseInt((9 - i) / 2, 10))
  console.log(b + a + b);

}


//16번 문제
//16. 역정삼각형 출력하기
for (let i = 10; i > 0; i -= 2)
{
  const a = Array(i).join('*')
  const b = ' '.repeat(parseInt((10 - i) / 2, 10))
  console.log(b + a + b)
}