let success = document.getElementById("success");
let error = document.getElementById("error");
let studentMessage  = document.getElementById("Mymessage").value;

studentMessage = studentMessage;

function SendMessage(){

	let studentMessage = document.getElementById("Mymessage").value.trim();

	if (studentMessage === ""){

		error.classList.add("show-error");
		setTimeout(() => {

	    	error.classList.remove("show-error")
			}, 2000);
	}else if(studentMessage == studentMessage){

	
	
		// let studentMessage  = document.getElementById("Mymessage").value;
		let sentMessage = document.querySelector("#Sent-form");
		// // let humanChoice = ['paper.png'];
		let studentImg = document.getElementById("sender").src;
				
		// let previous = document.getElementById("previous").innerHTML = ;
		let div = document.getElementById('Sent-form').value = `
		<div class="sent-message">
			<div class="sender" id="sender">
				<img src="./images/beluga.jpg" width="45px">
			</div>

			<div class="sender-message" id="Sent-Messages">
				<p >${studentMessage}</p>
			</div>

			<div class="remove-message" onclick = "RemPopUp()">
				<ion-icon name="trash-outline"></ion-icon>
			</div>
		</div>`;
		let taskitem = document.createElement("div");
		taskitem.innerHTML = div;
		sentMessage.appendChild(taskitem);
		console.log(div+"Is Successfully added to Sent");

		success.classList.add("show-success");
		setTimeout(() => {

	    	success.classList.remove("show-success")
		}, 2000);
	}
}






// cancel reomve
let cancels = document.getElementById("removeMessage");
function cancel() {
	cancels.classList.remove("showMessageCont");
}

// ope opup
let pop = document.getElementById("removeMessage");
function RemPopUp(){
	pop.classList.add("showMessageCont");
	taskitem.classList.remove("sent-message");
}


// send remove meesage to trash
// let removeMessage = document.getElementById("sent-message");
let moveMessage = document.getElementById("sent-message");
let removeCont = document.getElementById("Trash-form"); 

function remove(){
		removeCont.classList.add("remove-trash");
		pop.classList.remove("showMessageCont");
		
		// removeMessage.classList.remove("sent-message");
		let studentMessage  = document.getElementById("Mymessage").value;
		let trashMessage = document.querySelector("#Trash-form");
		// // let humanChoice = ['paper.png'];
		let studentImg = document.getElementById("sender").src;
				
		// let previous = document.getElementById("previous").innerHTML = ;
		let div = document.getElementById('Trash-form').value = `
		<div class="trash-message">
			<div class="sender" id="sender">
				<img src="./images/beluga.jpg" width="45px">
			</div>

			<div class="sender-message" id="Sent-Messages">
				<p >${studentMessage}</p>
			</div>

			<div class="remove-message" onclick = "Permremove()">
				<ion-icon name="trash-outline"></ion-icon>
			</div>
		</div>`;
		let taskitem = document.createElement("div");
		taskitem.innerHTML = div;
		trashMessage.appendChild(taskitem);
		console.log(div+"Is Successfully added to Trash");

	}

	let perma = document.getElementsByClassName("trash-message");

	function Permremove() {
		perma.classList.remove("trash-message");
	}


