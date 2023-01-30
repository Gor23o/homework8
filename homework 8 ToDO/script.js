document.querySelector("#push").onclick = function () {
  if (document.querySelector("#newtask input").value.length == 0) {
    alert("Please Enter Task Name");
  } else {
    document.querySelector("#tasks").innerHTML += `
          <div class="task">
              <span id="taskname">
                  ${document.querySelector("#newtask input").value}
              </span>
              <button class="delete"> X
                  <i class="far fa-trash-alt">
                  </i>
              </button>
          </div>
      `;

    let currentTasks = document.querySelectorAll(".delete");
    for (let i = 0; i < currentTasks.length; i++) {
      currentTasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }
  }
};
