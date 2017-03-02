var fun = new function() {
	document.querySelector('button').onclick= function(){

		document.querySelector('button').disabled= true;
		var arrayLen = document.getElementById("len");
		var arr = [];

		for(var i=0; i<arrayLen.value; i++){
			var input= document.createElement("input");
			input.type= "text";
			input.id= "arr"+i;
			document.getElementById("divUnsortedArray").appendChild(input);
		}

		var sortButton= document.createElement("button");
		var btnText= document.createTextNode("Click to Sort Array");
		sortButton.appendChild(btnText);
		document.getElementById("divUnsortedArray").appendChild(sortButton);

		var br= document.createElement("br");
		document.getElementById("divUnsortedArray").appendChild(br);

		sortButton.onclick = function(){
			sortButton.disabled= true;
			for(var i=0; i<arrayLen.value; i++){
				var a= document.getElementById("arr"+i);
				arr.push(a.value);
			}
			for(var i=0; i<arrayLen.value; i++){
				for(var j=1; j<arrayLen.value; j++){
					if(arr[j]<arr[j-1]){
						var temp= arr[j];
						arr[j]=arr[j-1];
						arr[j-1]= temp;
					}
				}
			}
			var divText= document.getElementById("divSortedArray");
			divText.innerHTML = divText.innerHTML + "<br><b>Sorted Array<b><br>";
			for (var i = 0; i < arr.length; i++) {
				var sorted_input= document.createElement("input");
				sorted_input.type="text";
				sorted_input.value= arr[i];
				document.getElementById("divSortedArray").appendChild(sorted_input);
			}
		}
	}
}
