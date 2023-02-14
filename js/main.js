let dash  = document.querySelector("#dashboard");
let schedule  = document.querySelector("#incoming-lesson-container");
let groups  = document.querySelector("#Groups-container");
let subs  = document.querySelector("#Subject-container");
let grade  = document.querySelector("#Grades-container");
let inbox  = document.querySelector("#Inbox-container");




// ================================================================
// adding and removing active to li
myFunction = function(event) {
  // reset all menu items
  document.querySelectorAll('li.active').forEach(function(item) {
  item.classList.remove('active');
})
  // mark as active selected menu item
  event.target.classList.add("active");
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
}

function calendar() {
	dash.classList.add("hide-dashboard");
	schedule.classList.add("show-incoming-lesson");
	groups.classList.remove("show-Groups-container");
	subs.classList.remove("show-Subject-container");
	grade.classList.remove("show-Grades-container");
	inbox.classList.remove("show-Inbox-container");
}
function people() {
	dash.classList.add("hide-dashboard");
	schedule.classList.remove("show-incoming-lesson");
	groups.classList.add("show-Groups-container");
	subs.classList.remove("show-Subject-container");
	grade.classList.remove("show-Grades-container");
	inbox.classList.remove("show-Inbox-container");
}
function subject() {
	dash.classList.add("hide-dashboard");
	schedule.classList.remove("show-incoming-lesson");
	groups.classList.remove("show-Groups-container");
	subs.classList.add("show-Subject-container");
	grade.classList.remove("show-Grades-container");
	inbox.classList.remove("show-Inbox-container");
}
function grades() {
	dash.classList.add("hide-dashboard");
	schedule.classList.remove("show-incoming-lesson");
	groups.classList.remove("show-Groups-container");
	subs.classList.remove("show-Subject-container");
	grade.classList.add("show-Grades-container");
	inbox.classList.remove("show-Inbox-container");
}
function inboxs() {
	dash.classList.add("hide-dashboard");
	schedule.classList.remove("show-incoming-lesson");
	groups.classList.remove("show-Groups-container");
	subs.classList.remove("show-Subject-container");
	grade.classList.remove("show-Grades-container");
	inbox.classList.add("show-Inbox-container");
}
// =========================================================================



// show all function from subject

function showAll(event){
	dash.classList.add("hide-dashboard");
	schedule.classList.add("show-incoming-lesson");

	document.querySelectorAll('li.active').forEach(function(item) {
  	item.classList.remove('active');
})
  // mark as active selected menu item
  event.target.classList.add("active");
};

