
const tasklist = document.querySelector("#taskList");
const taskInput = document.querySelector("#taskInput");

let allTasks = []
crossed = false;
function Additem() {
  allTasks.push(taskInput.value);
  getArray()
}

function getArray() {
  tasklist.innerHTML = ''
  for (let i = 0; i < allTasks.length; i++) {
    tasklist.innerHTML += `      <li  >
        <span onclick="done(${i})" class="">${allTasks[i]}</span>
        <button  onclick="edit(${i})" class="edit">Edit</button>
        <button onclick="deletee(${i})">Delete</button>
      </li>`;

  }

}
function edit(i) {
  allTasks[i] = prompt("Please enter ", allTasks[i])
  getArray()
}

function deletee(e) {
  allTasks.splice(e, 1)
  getArray()
}
function done(i)  {

  // allTasks[i] = `<s>${allTasks[i]}</s>`;
  // getArray()\
  crossed = true

if (crossed == true){
  allTasks[i] = `<s>${allTasks[i]}</s>`;
  getArray()
}
//  else if (crossed == false) {
//   getArray()
// }

}
