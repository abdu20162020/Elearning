$(document).ready(function(){
  
     
     $(document).on("mouseenter", ".col-4-lg", function()
   {
        
       $(this).css("margin-top", "-0.5%");
        
        
    })
      $(document).on("mouseleave", ".col-4-lg", function()
   {
        
      $(this).css("margin-top", "1%");
    })
            
     $(document).on('click', '#getQuizes', function() {
        var Skill= $(this).val();
        var api="http://localhost:8080/Quiz/category/";
        api+=Skill;
        $(".col-4-lg").fadeOut();                 
        $.getJSON(api, function(data) { 
                   for ( var i in data) {
                      var card= "<div class=\"card\">"+
                          "<h5 class=\"card-header\">"+data[i].skill_type+"</h5>"+
                          "<div class=\"card-body\">"+
                          "<h5 class=\"card-title\">"+data[i].title+"</h5>"+
                          " <p class=\"card-text\">For pass in this quiz u must answer about "+data[i].pass_score+ "%"+"</p>"+
                          " <button id=\"showQuiz\" class=\"btn btn-primary\" value="+data[i].id+">Go to quiz</button>"+
                          "</div>"+
                          " </div>";
                            $(".row").append(card);
				           }    
                                });
        
         
    
    
     });
        
        
             $(document).on('click', '#showQuiz', function() {
               $(".card").fadeOut();
              var quizID=$(this).val();
              console.log(quizID);
              var api="http://localhost:8080/findQuistionByQuizId/";
              api+=quizID;
             var var1=1;
             var  var2=2;
              var var3=3;
               var ff=  "<input type=\"hidden\" value="+quizID+" name=\"correct\" id=\"correct\"><\input>";
                 

                 $(ff).attr('type','hidden').appendTo('.row');
                $.getJSON(api, function(data) { 
                   for ( var i in data) {
                       var num=parseInt(i)+1;
                      
                                  var card=  "<div class=\"form\">"+ "<h4>Quistion: "+num+" "+data[i].quistionStatement+"</h4>"+
                                              "<form>"+
                                             
                                              "<label class=\"radio-inline\">"+
                                              "<input class=\"choiese\" type=\"radio\" name=\"optradio\" value="+var1+">"+data[i].answer_1+
                                              "</label>"+
                                              "<br>"+
                                              "<label class=\"radio-inline\">"+
                                              "<input class=\"choiese\" type=\"radio\" name=\"optradio\" value="+var2+">"+data[i].answer_2+
                                              "</label>"+
                                              "<br>"+
                                              "<label class=\"radio-inline\">"+
                                              "<input class=\"choiese\" type=\"radio\" name=\"optradio\"value="+var3+">"+data[i].answer_2+
                                              "</label>"+
                                              "<br>"+
                                              "</form>"+"</div>";
                            $(".row").append(card);
				           }
                 var bt="<button type=\"button\" class=\"btn btn-secondary btn-lg btn-block\" id=\"submituser\">Submite</button>";
                    $(".row").append(bt);
                                });
              
         
         });
        $(document).on('click', '#submituser', function() {

                    var favorite = [];

                    $.each($("input[name='optradio']:checked"), function(){            

                        favorite.push($(this).val());

                    });


                    var x=$("#correct").val();
                    var api="http://localhost:8080/findCorrectByQuizId/";
                    api+=x;
                    var conter_correct=0;
                     var conter_favorite=0;
                    $.getJSON(api, function(data) {
                    if(data.length==favorite.length){
                    for ( var i in data){

                            if(data[i]==favorite[conter_favorite]){
                               conter_correct++; 

                            }
                        conter_favorite++;
                       
                        }
                        }
                        else{
                            
                             alert('plz answer all the quiestions :)');
                        }
                        //for example only
                        if(data.length==favorite.length&&(conter_correct/data.length)*100>=50){
                             var usergrad={"user_id": 1 , "Quiz_id":parseInt(x) , "user_grade": (conter_correct/data.length)*100};
                            console.log(usergrad);
                                   $.ajax({
                                   type: "POST",
                                   contentType : 'application/json; charset=utf-8',
                                   dataType : 'json',
                                   url: "http://localhost:8080/addgrade",                
                                   data: JSON.stringify(usergrad),
                                   success : function(ali){ 
                                   if(ali==200){
                                     alert('Congratulation u pass in this Quiz :)');
                                       var log_history={"person_id": 1 , "person_Action": "USER ENTER INTO QUIZ" };



                               $.ajax({
                                   type: "POST",
                                   contentType : 'application/json; charset=utf-8',
                                   dataType : 'json',
                                   url: "http://localhost:8080/addlog",                
                                   data: JSON.stringify(log_history),
                                   success : function(data){
                                              window.location.href = "user.html";

                                                }        
                                     });
                                   
                                   }
                                   
                                   }

                               });

                            
                        }
                        if(data.length==favorite.length&&(conter_correct/data.length)*100<50){
                            alert('U R So stupied :)');
                            
                        }
                
                 
                
                  });
          

        });
   
    
    
});
