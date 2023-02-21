let dash  = document.querySelector("#dashboard");
let schedule  = document.querySelector("#incoming-lesson-container");
let groups  = document.querySelector("#Groups-container");
let subs  = document.querySelector("#Subject-container");
let grade  = document.querySelector("#Grades-container");
let inbox  = document.querySelector("#Inbox-container");
let profile  = document.querySelector("#student-content");




// ================================================================
// adding and removing active to li
// myFunction = function(event) {
//   // reset all menu items
//   document.querySelectorAll(".active").forEach(function(item) {
//   item.classList.remove('active');
// })
//   // mark as active selected menu item
//   event.target.classList.add("active");
// };

myFunction = function(event) {
  // reset all menu items
  document.querySelectorAll(".active").forEach(function(item) {
    item.classList.remove('active');
  });
  // mark as active selected menu item
  if (event.target.nodeName === 'LI') {
    event.target.classList.add("active");
  } else if (event.target.nodeName === 'I') {
    event.target.parentNode.classList.add("active");
    // event.stopPropagation(); // prevent the event from bubbling up
  }
};


// ================================================================


// ==========================================================================
// showing side bar menu content

function dashboard() {
	dash.classList.remove("hide-dashboard");
	schedule.classList.remove("show-incoming-lesson");
	groups.classList.remove("show-Groups-container");
	subs.classList.remove("show-Subject-container");
	grade.classList.remove("show-Grades-container");
	inbox.classList.remove("show-Inbox-container");
	profile.classList.remove("show-student-content");

}

function calendar() {
	dash.classList.add("hide-dashboard");
	schedule.classList.add("show-incoming-lesson");
	groups.classList.remove("show-Groups-container");
	subs.classList.remove("show-Subject-container");
	grade.classList.remove("show-Grades-container");
	inbox.classList.remove("show-Inbox-container");
	profile.classList.remove("show-student-content");

}
function people() {
	dash.classList.add("hide-dashboard");
	schedule.classList.remove("show-incoming-lesson");
	groups.classList.add("show-Groups-container");
	subs.classList.remove("show-Subject-container");
	grade.classList.remove("show-Grades-container");
	inbox.classList.remove("show-Inbox-container");
	profile.classList.remove("show-student-content");

}
function subject() {
	dash.classList.add("hide-dashboard");
	schedule.classList.remove("show-incoming-lesson");
	groups.classList.remove("show-Groups-container");
	subs.classList.add("show-Subject-container");
	grade.classList.remove("show-Grades-container");
	inbox.classList.remove("show-Inbox-container");
	profile.classList.remove("show-student-content");

}
function grades() {
	dash.classList.add("hide-dashboard");
	schedule.classList.remove("show-incoming-lesson");
	groups.classList.remove("show-Groups-container");
	subs.classList.remove("show-Subject-container");
	grade.classList.add("show-Grades-container");
	inbox.classList.remove("show-Inbox-container");
	profile.classList.remove("show-student-content");


}
function inboxs() {
	dash.classList.add("hide-dashboard");
	schedule.classList.remove("show-incoming-lesson");
	groups.classList.remove("show-Groups-container");
	subs.classList.remove("show-Subject-container");
	grade.classList.remove("show-Grades-container");
	inbox.classList.add("show-Inbox-container");
	profile.classList.remove("show-student-content");


}

function showStudent(){
	dash.classList.add("hide-dashboard");
	schedule.classList.remove("show-incoming-lesson");
	groups.classList.remove("show-Groups-container");
	subs.classList.remove("show-Subject-container");
	grade.classList.remove("show-Grades-container");
	inbox.classList.remove("show-Inbox-container");
	profile.classList.add("show-student-content");
}
// =========================================================================



// show all function from subject

function showAll(){
	dash.classList.add("hide-dashboard");
	schedule.classList.add("show-incoming-lesson");
	document.querySelectorAll('li.active').forEach(function(item) {
  item.classList.remove('active');
})
  // mark as active selected menu item
  event.target.classList.add("active");
};



let sideicon = document.getElementById("sidebar-icon");
let sidebar  = document.getElementById("sidebar");
function menu(){
	sidebar.classList.toggle("sidebr-close");
	sideicon.classList.toggle("sideicon-show");
}





// message us script

let compose = document.getElementById("message-from");
let message = document.getElementById("Inbox-from");
let sent = document.getElementById("Sent-form");
let trash = document.getElementById("Trash-form");

function Message(){
	compose.classList.remove("hide-compose");
	message.classList.remove("show-inbox");
	sent.classList.remove("show-sent");
	trash.classList.remove("show-trash");

}
function Inbox(){
	compose.classList.add("hide-compose");
	message.classList.add("show-inbox");
	sent.classList.remove("show-sent");
	trash.classList.remove("show-trash");
}
function Sent(){
	compose.classList.add("hide-compose");
	message.classList.remove("show-inbox");
	sent.classList.add("show-sent");
	trash.classList.remove("show-trash");
}
function Trash(){
	compose.classList.add("hide-compose");
	message.classList.remove("show-inbox");
	sent.classList.remove("show-sent");
	trash.classList.add("show-trash");
}


