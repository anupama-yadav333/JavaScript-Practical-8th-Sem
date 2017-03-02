var array= [];
var arrayLength = array.length;
var ele = document.getElementById("stackDisplay");

var pushButton= document.getElementById("pushButton");
pushButton.addEventListener("click", function() {
	var element= document.getElementById("element");
	element.focus();
	if(element.value==""){

	}else{
		array.push(element.value);
		element.value="";
	}
});

var popElement= document.getElementById("popButton");
popButton.addEventListener("click", function() {
	if(array.length<1){
		ele.innerHTML= ele.innerHTML + "<br><b>***Stack is Empty. Push Elements to pop()***</b><br>";
	}else{
		array.pop();
	}	
});

var displayElements= document.getElementById("displayElements");
displayElements.addEventListener("click", function() {
	if(array.length<1){
		ele.innerHTML= ele.innerHTML + "<br><b>***Stack is Empty***</b><br>";
	}else{
		ele.innerHTML= ele.innerHTML + "<br><b>Current Stack</b><br>";
		for(var i=0; i<array.length; i++){
			ele.innerHTML = ele.innerHTML + "<br>Array Element " + i + " : " + array[i] + "<br>";
		}
	}
	
	
});
