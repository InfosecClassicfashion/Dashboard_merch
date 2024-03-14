
								var currentUser ='';
								var currentUserData ={};
							
										function fetchUser(){
											currentUser = document.getElementById("email").value ;
											window.location.href = "index.html?email=" + encodeURIComponent(currentUser);; 

										}