// 4. 문자열 내 p와 y의 개수
// numPY함수는 대문자와 소문자가 섞여있는 문자열 s를 인수로 전달받는다. s에 존재하는 'p'의 개수와 'y'의 갯수를 비교해 같으면 true, 다르면 false를 리턴하도록 함수를 완성하라. 대소문자를 구별하지 않으며 'p', 'y' 모두 하나도 없는 경우는 항상 true를 리턴한다.

// 예를 들어 s가 'pPoooyY'면 true를 리턴하고 'Pyy'라면 false를 리턴한다.
function numPY(s) {
    s = s ? s.toUpperCase() : '';
  
    let sump=0
    let sumy=0
  
    for(let i =0; i<s.length; i++){
      if(s[i]=='P'){
        sump++
     
      }
      else if(s[i]=='Y'){
        sumy++
  
      }
      else{
        continue
      }
    }
    if(sump == sumy){
      return(true)
    }
  
    else if (sump!=sumy){
      return(false)
    }
  
  }
  
  console.log(numPY('pPoooyY')); // true
  console.log(numPY('Pyy'));     // false
  console.log(numPY('ab'));      // true
  console.log(numPY(''));        // true
  console.log(numPY());          // true




// 5. 이상한 문자만들기
// toWeirdCase함수는 문자열을 인수로 전달받는다. 문자열 s에 각 단어의 짝수번째 인덱스 문자는 대문자로, 홀수번째 인덱스 문자는 소문자로 바꾼 문자열을 리턴하도록 함수를 완성하라.

// 예를 들어 s가 'hello world'라면 첫번째 단어는 'HeLlO', 두번째 단어는 'WoRlD'로 바꿔 'HeLlO WoRlD'를 리턴한다.

// 주의) 문자열 전체의 짝/홀수 인덱스가 아니라 단어(공백을 기준)별로 짝/홀수 인덱스를 판단한다.

// function toWeirdCase(s) {
//   var sum = ""
//   var word = s.split(" ")
//   for(let i=0; i<word.length; i++){
//     var change = word[i]
//     sum += " "
//     for(let j=0; j<change.length; j++){
//       if(j%2==0){
//         cw =change[j].toUpperCase()
//         sum+=cw
//       }
//       else{
//         cw=change[j].toLowerCase()
//         sum+=change[j]
//       }
//     }
//   }
// return(sum)
// }

function toWeirdCase(s) {
    const wordArr = s.split(' ');
  
    function toUpperLower(str){
      let res = '';
      for(let i = 0; i<str.length; i++){
        res += i % 2 ? str[i].toLowerCase() : str[i].toUpperCase()
      }
      return res;
    }
  
    for (let i = 0; i<wordArr.length; i++){
      wordArr[i] = toUpperLower(wordArr[i])
    }
    console.log(wordArr)
  return wordArr.join(' ')
  }
  
  console.log(toWeirdCase('hello world'));    // 'HeLlO WoRlD'
  console.log(toWeirdCase('my name is lee')); // 'My NaMe Is LeE'


//   7. 문자열을 숫자로 바꾸기
// strToInt 메소드는 문자열을 인수로 전달받는다. 전달받은 문자열 인수를 숫자로 변환한 결과를 반환하도록 strToInt를 작성하라.

// 예를 들어 str이 ‘1234’이면 1234를 반환하고, ‘-1234’이면 -1234를 반환한다. str은 부호(+,-)와 숫자로만 구성되어 있고, 잘못된 값이 입력되는 경우는 없다.
  
  function strToInt(str) {
    int = str*1
    int2 = parseInt(str, 10)
  
    return(int, int2)
  
  }
  
  console.log(strToInt('1234'));  // 1234
  console.log(strToInt('-1234')); // -1234


//   8. 수박수박수박수박수박수?
// waterMelon 함수는 정수를 인수로 전달받는다. 길이가 n이고, 수박수박수…와 같은 패턴을 유지하는 문자열을 리턴하도록 함수를 완성하라.

// 예를 들어 n이 4이면 ‘수박수박’을 리턴하고 3이라면 ‘수박수’를 리턴한다.
  
  function waterMelon(n) {
    var add = ''
    for(let i=0;i<n;i++)
    if (i%2==0){
      add+='수'
    }
    else{
      add+="박"
    }
    return(add)
  
  }
  
  console.log('n이 3인 경우: '+ waterMelon(3)); //수박수
  console.log('n이 4인 경우: '+ waterMelon(4)); //수박수박


  // 9. 정수제곱근 판별하기
// nextSqaure함수는 정수를 인수로 전달받는다. n이 임의의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 임의의 정수 x의 제곱이 아니라면 ‘no’를 리턴하는 함수를 작성하라.

// 예를 들어 n이 121이라면 이는 정수 11의 제곱이므로 (11+1)의 제곱인 144를 리턴하고, 3이라면 ‘no’을 리턴한다.

function nextSqaure(n){
    let x = Math.sqrt(n)
    if (x**2==n&&n%x==0){
      return((x+1)**2)
    }
    else{
      return('no')
    }
  }
  
  console.log(nextSqaure());    // no
  console.log(nextSqaure(0));   // 1
  console.log(nextSqaure(1));   // 4
  console.log(nextSqaure(2));   // no
  console.log(nextSqaure(3));   // no
  console.log(nextSqaure(121)); // 144
  console.log(nextSqaure(165)); // no
  console.log(nextSqaure(400)); // 441


  //10. 배열의 최대/최소값 구하기
//배열의 요소 중 최대값/최소값을 반환하는 함수를 완성하라.

function getMaxValueFromArray(array) {
    const max = Math.max.apply(null, array);
    return (max)
  
  }
  console.log(getMaxValueFromArray([3, 6, -2, -5, 7, 3])); // 7
  
  function getMinValueFromArray(array) {
    const min = Math.min.apply(null, array);
    return (min)
  
  }
  console.log(getMinValueFromArray([3, 6, -2, -5, 7, 3])); // -5