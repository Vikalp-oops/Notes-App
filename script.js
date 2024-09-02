// const notesContainer = document.querySelector(".notes-container");
// const createBtn = document.querySelector(".btn");
// let notes = document.querySelectorAll(".input-box");

// const showNotes = function () {
//   notesContainer.innerHTML = localStorage.getItem("notes");
// };

// showNotes();

// const updateStorage = function () {
//   // localStorage.setItem("notes", JSON.stringify(notes));
//   localStorage.setItem("notes", notesContainer.innerHTML);
// };

// createBtn.addEventListener("click", () => {
//   let inputBox = document.createElement("p");
//   let img = document.createElement("img");
//   inputBox.className = "input-box";
//   inputBox.setAttribute("contenteditable", "true");
//   img.src = "images/delete.png";
//   notesContainer.appendChild(inputBox).appendChild(img);
// });

// notesContainer.addEventListener("click", function (e) {
//   if (e.target.tagName === "IMG") {
//     e.target.parentElement.remove();
//     updateStorage();
//   } else if (e.target.tagName === "p") {
//     notes = document.querySelectorAll(".input-box");

//     notes.forEach((nt) => {
//       nt.onkeyup = function () {
//         updateStorage();
//       };
//     });
//   }
// });

// document.addEventListener("keydown", (event) => {
//   if (event.key === "Enter") {
//     event.preventDefault();
//     document.execCommand("insertLineBreak");
//   }
// });

const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = [];

const showNotes = function () {
  const storedNotes = localStorage.getItem("notes");
  if (storedNotes) {
    notes = JSON.parse(storedNotes);
    notes.forEach((note) => {
      const inputBox = document.createElement("p");
      const img = document.createElement("img");
      inputBox.className = "input-box";
      inputBox.setAttribute("contenteditable", "true");
      inputBox.innerText = note.text;
      img.src = "images/delete.png";
      notesContainer.appendChild(inputBox).appendChild(img);
    });
  }
};

showNotes();

const updateStorage = function () {
  const notesArray = [];
  document.querySelectorAll(".input-box").forEach((inputBox) => {
    notesArray.push({ text: inputBox.innerText });
  });
  localStorage.setItem("notes", JSON.stringify(notesArray));
};

createBtn.addEventListener("click", () => {
  const inputBox = document.createElement("p");
  const img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "images/delete.png";
  notesContainer.appendChild(inputBox).appendChild(img);
  updateStorage();
});

notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === "P") {
    const inputBox = e.target;
    inputBox.onkeyup = function () {
      updateStorage();
    };
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    document.execCommand("insertLineBreak");
  }
});
