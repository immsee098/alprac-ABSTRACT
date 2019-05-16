function evenOrOdd(num) {
    if (num % 2 == 0){
      return("Even")
    }
  
    else{
      return("Odd")
    }
  
  }
  
  console.log(evenOrOdd(2)); // Even
  console.log(evenOrOdd(3)); // Odd
  console.log(evenOrOdd(1000)); // Even
  
  function evenOrOdd(num) {
    return (num % 2 == 0) ? "Even" : "Odd"
  }
  
  console.log(evenOrOdd(2)); // Even
  console.log(evenOrOdd(3)); // Odd
  console.log(evenOrOdd(1000)); // Even
  
  
  //(hint) 문자열 중 n번째에 있는 문자 : str.charAt(n) or str[n]
  // var sum1 = 0;
  // function getCount8 () {
  //   for(var i = 1; i < 10000; i++){
  //     str1 = i + ""
  //     for (var j=0; j < i; j++){
  //       if (str1.charAt(j) == "8"){
  //         sum1++  
  //       }
  //     }
  //   }
  //   return sum1;
  // }
  
  // console.log(getCount8()); // 4000
  
  
  var sum = 0;
  var str = '';
  function getCount8 () {
    for(var k = 1; k < 10000; k++){
      str +=k
    }
    for (var m=0; m < str.length; m++){
      if (str.charAt(m) == "8"){
        sum++  
      }
    }
      return sum;
  }
  
  console.log(getCount8());
  
  
  function alphaString46(s) {
    toNum = s*1
    // long = s.length
    // return(long)
    // return(toNum)
    
    if(isNaN(toNum) || (toNum ==0)){
      return(false)
    }
  
    else if (s.length<4){
      return(false)
    }
  
    else{
      return(true)
    }
  
  
  }
  
  
  
  console.log(alphaString46('1234'))//true
  console.log(alphaString46('9014'))//true
  console.log(alphaString46('723'))//false
  console.log(alphaString46('a234'))//false
  console.log(alphaString46('')) //false
  console.log(alphaString46()) //false