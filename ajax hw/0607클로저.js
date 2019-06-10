// // 함수를 인자로 전달받고 함수를 반환하는 고차 함수
// // 이 함수가 반환하는 함수는 클로저로서 카운트 상태를 유지하기 위한 자유 변수 counter을 기억한다.
// function makeCounter(predicate) {
//     // 카운트 상태를 유지하기 위한 자유 변수
//     let counter = 0;
  
//     // 클로저를 반환
//     return function () {
//       // 인자로 전달 받은 보조 함수에 상태 변경을 위임한다.
//       counter = predicate(counter);
//       return counter;
//     };
//   }
  
//   // 보조 함수
//   function increase(n) {
//     return ++n;
//   }
  
//   // 보조 함수
//   function decrease(n) {
//     return --n;
//   }
  
//   // 함수로 함수를 생성한다.
//   // makeCounter 함수는 보조 함수를 인자로 전달받아 함수를 반환한다
//   const increaser = makeCounter(increase); // ①
//   console.log(increaser()); // 1
//   console.log(increaser()); // 2
  
//   // increaser 함수와는 별개의 독립된 렉시컬 환경을 갖기 때문에 카운터 상태가 연동하지 않는다.
//   const decreaser = makeCounter(decrease); // ②
//   console.log(decreaser()); // -1
//   console.log(decreaser()); // -2





//아래는 위의 문제 힌트.. 둘을 하나의 함수로 합치자


// 함수를 인자로 전달받고 함수를 반환하는 고차 함수
// 이 함수가 반환하는 함수는 클로저로서 카운트 상태를 유지하기 위한 자유 변수 counter을 기억한다.
function makeCounter(predicate) {
    // 카운트 상태를 유지하기 위한 자유 변수
    let counter = 0;
  
    // 클로저를 반환
    return function () {
      // 인자로 전달 받은 보조 함수에 상태 변경을 위임한다.
      counter = predicate(counter);
      return counter;
    };
  }
  
  // 보조 함수
  function increase(n) {
    return ++n;
  }
  
  // 보조 함수
  function decrease(n) {
    return --n;
  }
  
  // 함수로 함수를 생성한다.
  // makeCounter 함수는 보조 함수를 인자로 전달받아 함수를 반환한다
  const counter = makeCounter(); // ①
  console.log(counter(increase)); // 1
  console.log(counter(increase)); // 2
  
  // increaser 함수와는 별개의 독립된 렉시컬 환경을 갖기 때문에 카운터 상태가 연동하지 않는다.
  console.log(counter(decrease)); // -1
  console.log(counter(decrease)); // -2