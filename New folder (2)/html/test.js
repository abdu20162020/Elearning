
$(document).ready(function() {
    var counter=0;
	$("#addquiz").click(function() {          
            var vv=counter.toString();
            $("#addpage").empty();
            $("#addpage").show(500);
			$('#addquiz').attr("disabled", true);
            
            var va="<button id=\"addquistion\" class=\"btn btn-primary\">addquistion</button>"
            + "<div class=\"form-group\">"
          +"<div class=\"form-group row\">"
            + "<div class=\"col-xs-3\">"
            +"<label for=\"ex2\">Skill type</label>"
            +"<input class=\"form-control\" id=\"skillType\" type=\"text\">"
            +"</div>"
            +"</div>";
			var v="<div class=\"addquiz\">"
            +"<label for=\"ex2\">title</label>"
             +"<input id=\"title\" class=\"form-control\" name=\"title\" type=\"text\" placeholder=\"qui.. title\"></input>"
           +"<label for=\"ex2\">pass score</label>"
                +"<div class=\"form-group row\">"              
                +"<div class=\"col-xs-1\">"
                +"<input id=\"passscore\" class=\"form-control\" name=\"answer2\" type=\"text\" placeholder=\"50\" ></input>"
                +"</div>"
                +"</div>"
				 +"<label for=\"ex2\">question</label>"
				+"<input id=\"namequiestion"+vv+"\" class=\"form-control\" name=\"quistionname\" type=\"text\" placeholder=\"qui.. Name\"></input>"
				 +"<label for=\"ex2\">Answer</label>"
                +"<div class=\"form-group row\">"
                +"<div class=\"col-xs-4\">"
				+"<input id=\"ans1"+vv+"\" class=\"form-control\" name=\"answer1\" type=\"text\" placeholder=\"answer1\" ></input>"
                +"</div>"
                +"<div class=\"col-xs-4\">"
                +"<input id=\"ans2"+vv+"\" class=\"form-control\" name=\"answer2\" type=\"text\" placeholder=\"answer2\" ></input>"
                +"</div>"
                +"<div class=\"col-xs-4\">"
                +"<input id=\"ans3"+vv+"\" class=\"form-control\" name=\"answer3\" type=\"text\" placeholder=\"answer3\" ></input>"
                +"</div>"
                +"</div>"
			+"<p><b>number of correct answer</b></p>"
                +"<div class=\"form-group row\">"              
                +"<div class=\"col-xs-1\">"
                +"<input id=\"flage"+vv+"\" class=\"form-control\" name=\"answer2\" type=\"text\" placeholder=\"1\" ></input>"
                +"</div>"
                +"</div>"
				+"</div>";
             $("#addpage").append(va);
            $("#addpage").append(v);
            $("#submite").show(1000);
            $("#cancel").show(1000);
        counter++;          
});
   
     $(document).on("click", "#addquistion", function(){
        var vv=counter.toString();
         var v="<div class=\"addquiz\">"
				 +"<label for=\"ex2\">Question</label>"
				+"<input id=\"namequiestion"+vv+"\" class=\"form-control\" name=\"quistionname\" type=\"text\" placeholder=\"qui.. Name\"></input>"
				 +"<label for=\"ex2\">Answer</label>"
                +"<div class=\"form-group row\">"
                +"<div class=\"col-xs-4\">"
				+"<input id=\"ans1"+vv+"\" class=\"form-control\" name=\"answer1\" type=\"text\" placeholder=\"answer1\" ></input>"
                +"</div>"
                +"<div class=\"col-xs-4\">"
                +"<input id=\"ans2"+vv+"\" class=\"form-control\" name=\"answer2\" type=\"text\" placeholder=\"answer2\" ></input>"
                +"</div>"
                +"<div class=\"col-xs-4\">"
                +"<input id=\"ans3"+vv+"\" class=\"form-control\" name=\"answer3\" type=\"text\" placeholder=\"answer3\" ></input>"
                +"</div>"
                +"</div>"
                +"<p><b>number of correct answer</b></p>"
                +"<div class=\"form-group row\">"              
                +"<div class=\"col-xs-1\">"
                +"<input id=\"flage"+vv+"\" class=\"form-control\" name=\"answer2\" type=\"text\" placeholder=\"1\" ></input>"
                +"</div>"
                +"</div>"
				+"</div>";
       $("#addpage").append(v);  
       counter++;
     });
    $("#submite").click(function(){
        if(quizValid()==true && qustionValid(counter)==true){
        var quiz_ID;
        var count=counter.toString();
            
        var vquiz={"title": $("#title").val() , "pass_score": $("#passscore").val(), "num_quistions": counter , "skill_type": $("#skillType").val() };
            
           $.ajax({
               type: "POST",
               contentType : 'application/json; charset=utf-8',
               dataType : 'json',
               url: "http://localhost:8080/addquiz",                
               data: JSON.stringify(vquiz),
               success : function(data){
                   if(data>-1){
                       alert('Add quiz Success :)');
                            quiz_ID=data;
                       
                     var log_history={"person_id": 1 , "person_Action": "QUIZ CREATED" };
                       
                       

                       $.ajax({
                           type: "POST",
                           contentType : 'application/json; charset=utf-8',
                           dataType : 'json',
                           url: "http://localhost:8080/addlog",                
                           data: JSON.stringify(log_history),
                           success : function(data){


                                        }        
                             });

                       

                     for(var i=0;i<counter;i++){
                    var st=i.toString();
                    var namequ="#namequiestion";
                    namequ+=st;
                    var ans_1="#ans1";
                    ans_1+=st;
                    var ans_2="#ans2";
                     ans_2+=st;
                    var ans_3="#ans3";
                     ans_3+=st;
                    var flage="#flage";
                    flage+=st;
                    var vmcq={"quistionStatement": $(namequ).val() , "answer_1": $(ans_1).val(), "answer_2": $(ans_2).val(), "answer_3": $(ans_3).val(),"num_of_correct_answer": $(flage).val(),"quiz_id":quiz_ID}; 

                     $.ajax({
                       type: "POST",
                       contentType : 'application/json; charset=utf-8',
                       dataType : 'json',
                       url: "http://localhost:8080/addmcq",                
                       data: JSON.stringify(vmcq),
                       success : function(data){
                   if(data>-1){
                        $("#addpage").fadeOut(1000);
                   }
                   
                   
                                }        
				  });

                                    }
                        counter=0;
                   
                   }
				    else
                    {
				    		  alert('quiz already exits :)');
                           }
                          
				 }        
				  });

        }
        else{
            
            alert('please fill all fields :)');
        }
        
        $("#submite").fadeOut(1000);
         $("#cancel").fadeOut(1000);
        $('#addquiz').attr("disabled", false);
       
    });

    $("#cancel").on("click", function(){
    $('#addquiz').attr("disabled", false); 
    $("#addpage").fadeOut(1000,function(){ $("#addpage").empty();});     
    $("#submite").fadeOut(1000);
    $("#cancel").fadeOut(1000);        
    });
     $(document).on('click', '#deletee', function() { 
         
     var quizID= $(this).val();
     var ID_st=quizID.toString();
    
     var vv="http://localhost:8080/deletequiz/";
     vv+=ID_st; 
     var quistionde="http://localhost:8080/deletequistion/";
     quistionde+= ID_st;
          
          $.ajax({
          url: quistionde,
          type: 'DELETE',
          success: function(resultt) {
              if(resultt==true){
                            var log_history={"person_id": 1 , "person_Action": "QUIZ DELETED" };



                               $.ajax({
                                   type: "POST",
                                   contentType : 'application/json; charset=utf-8',
                                   dataType : 'json',
                                   url: "http://localhost:8080/addlog",                
                                   data: JSON.stringify(log_history),
                                   success : function(data){


                                                }        
                                     });
                                      var ca=".card"+ID_st;
                                      $(ca).fadeOut(800);}
               }   
         
        });     
     $.ajax({
          url: vv,
          type: 'DELETE',
          success: function(result) {
              if(result==true){
                  var log_history={"person_id": 1 , "person_Action": "QUISTIOS OF QUIZ DELETED" };



                               $.ajax({
                                   type: "POST",
                                   contentType : 'application/json; charset=utf-8',
                                   dataType : 'json',
                                   url: "http://localhost:8080/addlog",                
                                   data: JSON.stringify(log_history),
                                   success : function(data){


                                                }        
                                     });
                  var ca=".card"+ID_st;
                  $(ca).fadeOut(800);
                   }   
          }
        });
  
                                              
      
     });
    $("#delete").click(function(){
                  
        $("#submite").fadeOut(1000);
        $("#cancel").fadeOut(1000);
        $("#addpage").empty();
        $("#addpage").show(500);
        $('#addquiz').attr("disabled", false);
                 
        $.getJSON("http://localhost:8080/quiz", function(data) {       
             for ( var i in data) {
				 var div="<div class=\"card card"+data[i].id+"\">"
                           +" <h5 class=\"card-header\">"+data[i].title+"</h5>"
                           +"<div class=\"card-body\">"
                           +"<h5 class=\"card-title\">"+data[i].pass_score+"</h5>"
                           +"<p class=\"card-text\">the pass score in this quiz is" +data[i].skill_type+"</p>"
                           +" <button id=\"deletee\" class=\"btn btn-danger\" name=\"btnedit\" value="+data[i].id+">delete</button>"
                           +"</div>"
                           +"</div>";
                    
                   
                    $("#addpage").append(div);
								}    
                                                                  });         
            $("#addpage").fadeIn(1000);           
                       
                });
    $(document).on('click', '#ubdatee', function() { 
         $("#addpage").fadeIn(1000);    
     var quizID= $(this).val();
     var ID_st=quizID.toString();
     var vv="http://localhost:8080/findquizbyid/";
     vv+=ID_st;
              $.ajax({
          url: vv,
          type: 'GET',
          success: function(resultt) {
              if(resultt!=null){
            $("#addpage").empty();
            $("#addpage").show(500);
              var va= "<div class=\"form-group\">"
            +"<div class=\"form-group row\">"
            + "<div class=\"col-xs-3\">"
            +"<label for=\"ex2\">Skill type</label>"
            +"<input class=\"form-control\" id=\"skillType\" type=\"text\" value=\""+resultt.skill_type+"\">"
            +"</div>"
            +"</div>"
            +"<div class=\"addquiz\">"
            +"<label for=\"ex2\">title</label>"
            +"<input id=\"title\" class=\"form-control\" name=\"title\" type=\"text\" value=\""+resultt.title+"\">"
            +"<label for=\"ex2\">pass score</label>"
            +"<div class=\"form-group row\">"              
            +"<div class=\"col-xs-1\">"
            +"<input id=\"passscore\" class=\"form-control\" name=\"answer2\" type=\"text\"value=\""+resultt.pass_score+"\">"
            +"</div>"
            +"</div>"
            +"</div>";
             $("#addpage").append(va);
                 
                  var findQuistion="http://localhost:8080/findQuistionByQuizId/";
                  findQuistion+=resultt.id;
             $.ajax({
          url: findQuistion,
          type: 'GET',
          success: function(result) {
             for ( var i in result) { 
                 
                 var v="<div class=\"addquiz\">"
				 +"<label for=\"ex2\">Question</label>"
				+"<input id=\"namequiestion"+i+"\" class=\"form-control\" name=\"quistionname\" type=\"text\" value=\""+result[i].quistionStatement+"\">"
				 +"<label for=\"ex2\">Answer</label>"
                +"<div class=\"form-group row\">"
                +"<div class=\"col-xs-4\">"
				+"<input id=\"ans1"+i+"\" class=\"form-control\" name=\"answer1\" type=\"text\" value=\""+result[i].answer_1+"\">"
                +"</div>"
                +"<div class=\"col-xs-4\">"
                +"<input id=\"ans2"+i+"\" class=\"form-control\" name=\"answer2\" type=\"text\" value=\""+result[i].answer_2+"\">"
                +"</div>"
                +"<div class=\"col-xs-4\">"
                +"<input id=\"ans3"+i+"\" class=\"form-control\" name=\"answer3\" type=\"text\" value=\""+result[i].answer_3+"\">"
                +"</div>"
                +"</div>"
                +"<p><b>number of correct answer</b></p>"
                +"<div class=\"form-group row\">"              
                +"<div class=\"col-xs-1\">"
                +"<input id=\"flage"+i+"\" class=\"form-control\" name=\"flag\" type=\"text\" value=\""+result[i].num_of_correct_answer+"\">"
                +"</div>"
                +"</div>"
				+"</div>";
       $("#addpage").append(v); 
                
             }
              var vvv= " <button id=\"submite2\" class=\"btn btn-primary\" value=\""+resultt.id+"\">SubmiteEdete</button>"
                  
             $("#addpage").append(vvv); 
               }   
         
        });
                  
  
               }   
      

     }
     }); 
        });
     $(document).on('click', '#submite2', function() {
          
           var quizID= $(this).val();
      
     var ID_st=quizID.toString();
     var vv="http://localhost:8080/updatequiz/";
     vv+=ID_st; 
        var vquiz={"title": $("#title").val() , "pass_score": $("#passscore").val(), "skill_type": $("#skillType").val() };
           $.ajax({
               type: "PUT",
               contentType : 'application/json; charset=utf-8',
               dataType : 'json',
               url: vv,                
               data: JSON.stringify(vquiz),
               success : function(data){
              
             arr = [];
             for(var i=0;i<data.num_quistions;i++){
                var namequ="#namequiestion";
                 namequ+=i;
                 var ans_1="#ans1";
                 ans_1+=i;
                 var ans_2="#ans2";
                 ans_2+=i;
                 var ans_3="#ans3";
                 ans_3+=i;
                 var flage="#flage";
                 flage+=i;      
                var vmcq={"quistionStatement": $(namequ).val() , "answer_1": $(ans_1).val(), "answer_2": $(ans_2).val(), "answer_3": $(ans_3).val(),"num_of_correct_answer": $(flage).val()};
                 arr.push(vmcq);
               
             }     
                   var quisionUp="http://localhost:8080/findquistion/";
                   quisionUp+= ID_st;
                   $.ajax({
               type: "PUT",
               contentType : 'application/json; charset=utf-8',
               dataType : 'json',
               url: quisionUp,                
               data: JSON.stringify(arr),
               success : function(data2){
                   
                   if(data2!=null){
                       var log_history={"person_id": 1 , "person_Action": "QUIZ UPDATED" };



                               $.ajax({
                                   type: "POST",
                                   contentType : 'application/json; charset=utf-8',
                                   dataType : 'json',
                                   url: "http://localhost:8080/addlog",                
                                   data: JSON.stringify(log_history),
                                   success : function(data){


                                                }        
                                     });
                       alert('quiz update sccess :)');
                       $("#addpage").fadeOut(1000);
        
                   }
                   
                   
               }
                   
                  });  
               }
    
           });
          });
    
      $("#Update").click(function(){
        $("#submite").fadeOut(1000);
        $("#cancel").fadeOut(1000);
        $("#addpage").empty();
        $("#addpage").show(500);
        $('#addquiz').attr("disabled", false);                  
        $.getJSON("http://localhost:8080/quiz", function(data) { 
                   for ( var i in data) {
              				 var div="<div class=\"card card"+data[i].id+"\">"
                           +"<label for=\"ex2\">Title</label>"
                           +" <h5 class=\"card-header\">"+data[i].title+"</h5>"
                           +"<div class=\"card-body\">"
                           +"<label for=\"ex2\">Pass score</label>" 
                           +"<h5 class=\"card-title\">"+data[i].pass_score+"</h5>"
                           +"<label for=\"ex2\">Skill type</label>" 
                           +"<p class=\"card-text\">" +data[i].skill_type+"</p>"
                           +" <button id=\"ubdatee\" class=\"btn btn-primary\" name=\"btnedit\" value="+data[i].id+">update</button>"
                           +"</div>"
                           +"</div>";
                            $("#addpage").append(div);
								    }    
                                });
        
           // $("#addpage").fadeIn(1000);           
                       
      });
    
    });
