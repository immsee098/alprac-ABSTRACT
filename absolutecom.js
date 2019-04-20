//절대비교기법-->함수

//그러나 아래 코드는 모든 상황에서 쓸 수 없다. 일회용 코드임

// function is_equal(a,b){
//     return Math.abs(a-b)<= 1e-10;
// }

// function main(){
//     var a =0.3;
//     var b =0.1*3;


//     if(is_equal(a,b)){
//         console.log("the same");
//     }

//     else{
//         console.log("not the same");
//     }
// }

// function is_equal1(a,b){
//     return Math.abs(a-b)<= 1e-10;
// }


function is_equal2(a,b,allowed=0){
    var ep= Number.EPSILON
    var diff=Math.abs(a-b);

    return diff <= Math.max(Math.abs(a), Math.abs(b))*ep*Math.pow(2,allowed);


}

function main(){
    var sum = 0;

    for(var i =0; i<100; i++){
        sum+=0.01;
    }

    if(is_equal2(sum, 1.0, 2)){
        console.log("THE SAME")
    }
    else{
        console.log("NOT THE SAME")
    }



}