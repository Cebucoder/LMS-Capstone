// let success = document.getElementById("success");
// let error = document.getElementById("error");
// let studentMessage  = document.getElementById("Mymessage").value;

// studentMessage = studentMessage;

// function SendMessage(){

// 	let studentMessage = document.getElementById("Mymessage").value.trim();

// 	if (studentMessage === ""){

// 		error.classList.add("show-error");
// 		setTimeout(() => {

// 	    	error.classList.remove("show-error")
// 			}, 2000);
// 	}else if(studentMessage == studentMessage){

	
	
// 		// let studentMessage  = document.getElementById("Mymessage").value;
// 		let sentMessage = document.querySelector("#Sent-form");
// 		// // let humanChoice = ['paper.png'];
// 		let studentImg = document.getElementById("sender").src;
				
// 		// let previous = document.getElementById("previous").innerHTML = ;
// 		let div = document.getElementById('Sent-form').value = `
// 		<div class="sent-message">
// 			<div class="sender" id="sender">
// 				<img src="./images/beluga.jpg" width="45px">
// 			</div>

// 			<div class="sender-message" id="Sent-Messages">
// 				<p >${studentMessage}</p>
// 			</div>

// 			<div class="remove-message" onclick = "RemPopUp()">
// 				<ion-icon name="trash-outline"></ion-icon>
// 			</div>
// 		</div>`;
// 		let taskitem = document.createElement("div");
// 		taskitem.innerHTML = div;
// 		sentMessage.appendChild(taskitem);
// 		console.log(div+"Is Successfully added to Sent");

// 		success.classList.add("show-success");
// 		setTimeout(() => {

// 	    	success.classList.remove("show-success")
// 		}, 2000);
// 	}
// }






// // cancel reomve
// let cancels = document.getElementById("removeMessage");
// function cancel() {
// 	cancels.classList.remove("showMessageCont");
// }

// // ope opup
// let pop = document.getElementById("removeMessage");
// function RemPopUp(){
// 	pop.classList.add("showMessageCont");
// 	taskitem.classList.remove("sent-message");
// }


// // send remove meesage to trash
// // let removeMessage = document.getElementById("sent-message");
// let moveMessage = document.getElementById("sent-message");
// let removeCont = document.getElementById("Trash-form"); 

// function remove(){
// 		removeCont.classList.add("remove-trash");
// 		pop.classList.remove("showMessageCont");
		
// 		// removeMessage.classList.remove("sent-message");
// 		let studentMessage  = document.getElementById("Mymessage").value;
// 		let trashMessage = document.querySelector("#Trash-form");
// 		// // let humanChoice = ['paper.png'];
// 		let studentImg = document.getElementById("sender").src;
				
// 		// let previous = document.getElementById("previous").innerHTML = ;
// 		let div = document.getElementById('Trash-form').value = `
// 		<div class="trash-message">
// 			<div class="sender" id="sender">
// 				<img src="./images/beluga.jpg" width="45px">
// 			</div>

// 			<div class="sender-message" id="Sent-Messages">
// 				<p >${studentMessage}</p>
// 			</div>

// 			<div class="remove-message" onclick = "Permremove()">
// 				<ion-icon name="trash-outline"></ion-icon>
// 			</div>
// 		</div>`;
// 		let taskitem = document.createElement("div");
// 		taskitem.innerHTML = div;
// 		trashMessage.appendChild(taskitem);
// 		console.log(div+"Is Successfully added to Trash");

// 	}

// 	let perma = document.getElementsByClassName("trash-message");

// 	function Permremove() {
// 		perma.classList.remove("trash-message");
// 	}




// ==============================================
let AllMessage = [
	// {
	// 	// studentImg: "./images/beluga.jpg",
	// 	// studentMessages: "Hello",
	// 	// // // productPrice: 400
	// }
	
];


// let sentMessage = document.querySelector("#Trash-form");

// adding the item to array

let success = document.getElementById("success");
let error = document.getElementById("error");





function SendMessage(){

	let studentMessage = document.getElementById("Mymessage").value.trim();
	let messages  = document.getElementById("Mymessage").value;
	let img = document.getElementById("sender").src = "./images/beluga.jpg" ;
	let sentMessage = document.querySelector("Sentform");


	// trash
	// let trashMessage = document.querySelector

	

	AllMessage.push({studentMessages: messages});
	// JSON.tringify is to allow you red the the inide the array without jason.stringiy the reslt is object object
	localStorage.setItem("messageStorage", JSON.stringify(AllMessage));
	// showMessage();
	// success.classList.add("show-success");
	success.classList.add("show-success");
		setTimeout(() => {

	    	success.classList.remove("show-success")
		}, 2000);
	

}

let messages  = document.getElementById("Mymessage").value;
let img = document.getElementById("sender").src;
let messageStorages = JSON.parse(localStorage.getItem("messageStorage"));
let sentMessage = document.getElementById("Sentform");
function showMessage(){

	
	// let img
	// adding the amount
	// let totalAmount = 0;
	let itemNumber = 0;
	// let localStorage = "none";
	// getting the  items from a local storage and coberted to object using JSON.parse
	let messages  = document.getElementById("Mymessage").value;
	


	messageStorages.forEach(function(Sentform){
		sentMessage.innerHTML += 

		`
		<div class="sent-message">
			<div class="sender" id="sender">
		<img src="./images/beluga.jpg" width="45px"">
		</div>

		<div class="sender-message" id="Sent-Messages">
				<p >${Sentform.studentMessages}</p>
			</div>

			<div class="remove-message" onclick = "remove(${itemNumber})">
			 	<ion-icon name="trash-outline"></ion-icon>
			 	</div> 		
			</div>
		`;

		itemNumber++;

		// <div class="remove-message" onclick = "removeItem(${itemNumber})">
		// 	 	<ion-icon name="trash-outline"></ion-icon>
		// 	 	</div> 		
		// </div>

		// adding the mount
		// totalAmount += Number(cartItems.productPrice);
	});

	// alert("Total Amount:"+totalAmount);
	// document.getElementById("Sentform").innerHTML = sentMessage;


}
	showMessage();




let pop = document.getElementById("removeMessage");
function remove(itemNumber){


	messageStorages.splice(itemNumber, 1);
	localStorage.setItem("messageStorage", JSON.stringify(AllMessage));
	sentMessage.innerHTML = "";
	pop.classList.remove("showMessageCont");
	showMessage();
}



// popup confirm
// let pop = document.getElementById("removeMessage");
function removeMessages(){
	pop.classList.add("showMessageCont");
	// taskitem.classList.remove("sent-message");
}


function cancel(){
	pop.classList.remove("showMessageCont");

}

