function quizValid() {
    
	var quiztietle = document.getElementById("title").value;
    var passScore = document.getElementById("passscore").value;
    var skillType = document.getElementById("skillType").value;
    if(quiztietle==""||passScore==""||skillType==""){
        
       
         return false;
    }
   else{
       return true;
    }
}
function qustionValid(num){
    
    for(var i=0;i<=num;i++){
            var st=i.toString();
            var namequ="namequiestion";
            namequ+=st;
            var ans_1="ans1";
            ans_1+=st;
            var ans_2="ans2";
             ans_2+=st;
            var ans_3="ans3";
             ans_3+=st;
            var flage="flage";
            flage+=st;
    var nameequ = document.getElementById(namequ);
    var anss_1 = document.getElementById(ans_1);
    var anss_2 = document.getElementById(ans_2);
    var anss_3 = document.getElementById(ans_3);
    var flagee = document.getElementById(flage);
    if(nameequ==""||anss_1==""||anss_2==""||anss_3==""||flagee==""){
        return false;
        
    }
        return true;
    
}

}