//철수의 369게임
//3의배수에 맞춰 박수

function 철수(숫자){
    if(숫자%3==0){
        console.log('박수');
    }
    else{
        console.log('통과');
    }
}

철수(3);

//발전된 369게임
//9의 배수에선 박수 두번

function 업글(응){
    if(응%9==0){
        console.log('박수');
    }
    else if(응%3==0){
        console.log('박수x2'); //9의 배수가 아니면 실행
    }
    else{
        console.log('통과');
    }
    
}

//합격 점수알려주기

function 합격(아니야 , 그게맞아){
    if(아니야+그게맞아>=120){
        console.log("합격");
    }
    else if(아니야<40 || 그게맞아<40){
        console.log("불합격");
    }
    else{
        console.log("불합격");
    }

}

//응용: 원래의 369게임 룰
//length-1을 해야 갯수를 세는 length와 string num과의 오차를 없앰

function 새해복(만으로는안돼){
    
    let num = String(만으로는안돼);

    if(num.charAt(num.length-1)==='3'){
        console.log("박수");
    }
    else if(num.charAt(num.length-1)==='6'){
        console.log("박수");
    }
    else if(num.charAt(num.length-1)==='9'){
        console.log("박수");
    }
    else{
        console.log("통과");
    }
}
새해복(365);

//합격판독기에서 장난치지말기
function 장난치지마(y , n){
    if(y+n>=120){
        console.log("합격");
    }
    if(y<0 || y>100 || n<0 || n>100){
        console.log("장난치지마");
    }
    else if(y<40 || n<40){
        console.log("불합격");
    }
    else{
        console.log("불합격");
    }
}

장난치지마(120+1);