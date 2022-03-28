// $("#signupform").submit(function(event){
// 	event.preventDefault();
// 	var datatopost = $(this).serializeArray();
// 	console.log(datatopost);
// 	$.ajax({
// 		url:"signup.php",
// 		type:"POST",
// 		data: datatopost,
// 		success: function(data){
// 			if(data){
// 				$(".fetched").html(data);
// 			}
// 		},
// 		error: function(data){
// 			if(data){
// 				$(".fetched").html(data);
// 			}
// 		}
// 	});
// });
$("#signupform").submit(function(event){
	event.preventDefault();
	var datatopost = $(this).serializeArray();
	console.log(datatopost);
	$.ajax({
		url:"signup.php",
		type:"POST",
		data: datatopost,
		success: function(data){
			if(data){
				$(".fetched").html(data);
			}
		},
		error: function(data){
			if(data){
				$(".fetched").html(data);
			}
		}
	});
});

/*const login = document.getElementById('loginform');

login.addEventListener('submit', function(e){
	e.preventDefault();

	var formInputs = login.querySelectorAll("input");
	
	var formData = new FormData();

	for(var i = 0; i <2; i++){
		formData.append(formInputs[i].name , formInputs[i].value);
	} 

	var http = new XMLHttpRequest();
	var url = "login.php";

	http.open("POST", url, true);

	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	
	http.onreadystatechange = function(){
		if(http.readyState == 4 && http.status == 200){
			alert(http.responseText);
		}
	}
	
	http.send(formData);

});*/

$("#loginform").submit(function(event){
	event.preventDefault();
	var datatopost = $(this).serializeArray();
	console.log(datatopost);
	$.ajax({
		url:"login.php",
		type:"POST",
		data: datatopost,
		success: function(data){
			if(data){
				$(".fetched2").html(data);
			}
		},
		error: function(data){
			if(data){
				$(".fetched2").html(data);
			}
		}
	});
});
