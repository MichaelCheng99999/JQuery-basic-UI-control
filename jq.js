	$(function(){

		var num=0;
		


		$("#b1").click(function(){
			
		 		$(this).css('background-color', 'green');
		 		num++;
		 		if(num>=7&&(num/7)%2==0)
			 	{

			 		
			 			$(".basic").css('background-color', 'red');
			 		
			 		var time=500;
			 		var i=0;
			 		$("button").each(function(i){
			 			$(this).delay(time*(i)).animate({backgroundColor: "#fff"}, time);
			 			++i;
			 			
			 		})
			 		$(".basic").delay(time*6+250).animate({backgroundColor: "yellow"}, 0);

			 		
			 	}


		 	
		});
		$("#b2").click(function(){
			 	$(this).css('background-color', 'green');
			 	num++;
			});
		$("#b3").click(function(){
			 	$(this).css('background-color', 'green');
			 	num=num+1;
			});
		$("#b4").click(function(){
			 	$(this).css('background-color', 'green');
			 	num=num+1;
			});
		$("#b5").click(function(){
			 	$(this).css('background-color', 'green');
			 	num=num+1;
			});
		$("#b6").click(function(){
			 	$(this).css('background-color', 'green');
			 	num=num+1;
			});
		$("#b7").click(function(){
				
			 	$(this).css('background-color', 'green');
			 	num=num+1;
			 	console.log(num);
			 	

			 	if(num>=7&&(num/7)%2==1)
			 	{

			 		
			 			$(".basic").css('background-color', 'red');
			 		
			 		var time=500;
			 		var i=0;
			 		$("button").each(function(i){
			 			$(this).delay(time*(6-i)).animate({backgroundColor: "#fff"}, time);
			 			++i;
			 			
			 		})
			 		$(".basic").delay(time*6+250).animate({backgroundColor: "yellow"}, 0);

			 		
			 	}


			 	
			 	
			});
		
			

			

			
		})

