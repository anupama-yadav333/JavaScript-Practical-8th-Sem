var genderElem = document.getElementById("gender");
if(genderElem) {
	genderElem.addEventListener("change", function() {
		if(genderElem.value=="female"){
			document.getElementById("imageSrc").src = "pictures/female.png";
			document.getElementById("imageSrc").alt = "Female Avatar";
		}
		else if(genderElem.value=="male"){
			document.getElementById("imageSrc").src = "pictures/male.png";
			document.getElementById("imageSrc").alt = "Male Avatar";
		}
		else if(genderElem.value=="others"){
			document.getElementById("imageSrc").src = "pictures/other.png";
		    document.getElementById("imageSrc").alt = "Others Avatar";
		}

	});
}

document.querySelector('button').onclick= function(){
	var fname= document.getElementsByName("nameFormat")[0];
	var roll_no= document.getElementById("rollNoFormat");
	var dob= document.getElementById("DOBFormat");
	var email = document.getElementById("emailIdFormat");
	var pass = document.getElementById("passwordFormat");
	
	var regExpName = new RegExp("([a-zA-Z])$");
	var regExpDOB =  /^[0-9]{1,2}[\/][0-9]{1,2}[\/][0-9]{4}$/g;
	var regExpEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
	var regExpPassword = /^[A-Za-z]\w{7,14}$/;

	if(!regExpName.test(fname.value)){
		alert("Please Enter a Valid Name with Alphabets Only");
	}
	else if((roll_no.value).toString().length!=7 ){
		alert("Please Enter a valid 7 Digit Roll Number");
	}
	else if(!regExpDOB.test(dob.value)){
		alert("Enter Valid DOB");
	}
	else if(!regExpEmail.test(email.value)){
		alert("Please Enter Valid Email Id");
	}
	else if(!regExpPassword.test(pass.value)){
		alert("Please Enter password of length{7 to 14}");
	}
	
}
