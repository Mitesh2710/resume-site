let isEditing = false;

function enableEditing() {
  const container = document.querySelector(".resume-container");
  if (!isEditing) {
    container.setAttribute("contenteditable", "true");
    container.focus();
    isEditing = true;
  }
}

function saveResume() {
  const container = document.querySelector(".resume-container");
  container.setAttribute("contenteditable", "false");
  localStorage.setItem("resumeContent", container.innerHTML);
  alert("Changes saved locally. Reload the page to see them persist.");
  isEditing = false;
}

window.addEventListener("DOMContentLoaded", () => {
  const savedContent = localStorage.getItem("resumeContent");
  if (savedContent) {
    document.querySelector(".resume-container").innerHTML = savedContent;
  }
});