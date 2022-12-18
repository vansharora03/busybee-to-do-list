import { hive, task } from "./hives";
import { format } from "date-fns";

/**
 * Take a DOM object as a parameter and returns functions allowing rendering of hives
 */
const renderer = function (content, passedStorage) {
  /**
   * Store the current hives
   * @type {*[]}
   * @private
   */
  let _hives = [];
  let _hivesToBeLoaded = [];
  let _numberOfTasks = 0;
  let _defaultColors = [
    "#bef264",
    "#fcd34d",
    "#fda4af",
    "#a5b4fc",
    "#f87171",
    "#86efac",
    "#94a3b8",
  ];
  let _colorRotation = 0;
  let storageValue;

  /**
   *
   * @param hive
   */
  const renderHive = function (hive) {
    //Update _hives and set the hive index property
    hive.setIndex(_hives.length);
    _hives.push(hive);
    //Begin rendering of hive
    const renderedHive = document.createElement("div");
    renderedHive.style.backgroundColor = hive.getColor();
    renderedHive.classList.add("renderedHive");
    renderedHive.id = "hive-" + hive.getIndex();

    const renderedTitle = document.createElement("h2");
    renderedTitle.classList.add("renderedTitle");
    renderedTitle.textContent = hive.getTitle();
    renderedHive.appendChild(renderedTitle);

    //Render expansion functionality
    const clickListen = document.createElement("div");
    clickListen.classList.add("clickListen");
    clickListen.dataset.clickOf = renderedHive.id;
    clickListen.addEventListener("click", _expandHive);
    renderedHive.appendChild(clickListen);

    content.appendChild(renderedHive);

    return renderedHive;
  };
  const deleteHiveBtn = function (renderedHive) {
    //Render delete hive button
    const deleteHiveBtn = document.createElement("button");
    deleteHiveBtn.classList.add("deleteHiveBtn");

    const trashCan = document.createElement("img");
    trashCan.src = "images/trash.svg";
    deleteHiveBtn.appendChild(trashCan);
    deleteHiveBtn.id = renderedHive.id.substring(5);
    deleteHiveBtn.addEventListener("click", () => {
      //delete current hive
      _hives.splice(parseInt(deleteHiveBtn.id), 1);
      renderedHive.remove();
      //update indices of all entries in _hive after current hive to i-1, update their id's
      for (let i = 0; i < _hives.length; i++) {
        const currentHive = document.querySelector(
          "#hive-" + _hives[i].getIndex()
        );
        currentHive.id = "hive-" + i;
        _hives[i].setIndex(i);
        //update clickListen
        currentHive.querySelector(".clickListen").dataset.clickOf =
          currentHive.id;
        //update deleteTaskBtn
        if (currentHive.contains(currentHive.querySelector(".deleteTaskBtn"))) {
          currentHive.querySelectorAll(".deleteTaskBtn").forEach((btn) => {
            btn.dataset.tasksOf = currentHive.id;
          });
        }
      }

      //un-focus deleted hive
      document.querySelector(".blurScreen").remove();
      document.querySelector("body").style.overflowY = "auto";
      content.style.overflowY = "auto";

      //populate in case of hive removal
      populate();
    });
    renderedHive.appendChild(deleteHiveBtn);
  };
  const addTaskBtn = function (renderedHive) {
    //Render add task button
    const addTaskBtn = document.createElement("button");
    addTaskBtn.textContent = "+Task";
    addTaskBtn.setAttribute("id", renderedHive.id.substring(5));
    addTaskBtn.classList.add("addTaskBtn");
    addTaskBtn.addEventListener("click", _addTaskBtnEvent);
    renderedHive.appendChild(addTaskBtn);
  };
  const _addTaskBtnEvent = function (e) {
    //Query task
    const addTaskBtn = e.target;
    addTaskBtn.remove();

    const addTaskForm = document.createElement("div");
    addTaskForm.classList.add("addTaskForm");

    const addTaskTitle = document.createElement("input");
    addTaskTitle.classList.add("addTaskTitle");
    addTaskTitle.id = "addTaskTitle";
    addTaskTitle.placeholder = "Task Title";
    addTaskForm.appendChild(addTaskTitle);

    const addTaskDescription = document.createElement("textarea");
    addTaskDescription.classList.add("addTaskDescription");
    addTaskDescription.id = "addTaskDescription";
    addTaskDescription.placeholder = "Task Description";
    addTaskForm.appendChild(addTaskDescription);

    const addTaskDueDate = document.createElement("input");
    addTaskDueDate.type = "date";
    addTaskDueDate.classList.add("addTaskDueDate");
    addTaskDueDate.id = "addTaskDueDate";
    addTaskDueDate.placeholder = "Task Due Date";
    addTaskForm.appendChild(addTaskDueDate);

    const addTaskPriority = document.createElement("input");
    addTaskPriority.classList.add("addTaskPriority");
    addTaskPriority.id = "addTaskPriority";
    addTaskPriority.placeholder = "Task Priority";
    addTaskForm.appendChild(addTaskPriority);

    const addTaskSubmitBtn = document.createElement("button");
    addTaskSubmitBtn.classList.add("addTaskSubmitBtn");
    addTaskSubmitBtn.id = e.target.id;
    addTaskSubmitBtn.textContent = "+";
    addTaskSubmitBtn.addEventListener("click", (e) => {
      addTaskForm.remove();
      const newTask = task(
        addTaskTitle.value,
        addTaskDescription.value,
        format(addTaskDueDate.valueAsDate, "MM-dd-yyyy"),
        addTaskPriority.value
      );
      const currentHive = _hives[parseInt(e.target.id)];
      currentHive.registerTask(newTask);
      _renderTask("#hive-" + e.target.id, newTask);
      document.querySelector("#hive-" + e.target.id).appendChild(addTaskBtn);
    });
    addTaskForm.appendChild(addTaskSubmitBtn);

    document.querySelector("#hive-" + e.target.id).appendChild(addTaskForm);
  };

  /**
   * Renders a task to the hive DOM
   * @param hiveID
   * @param newTask
   * @private
   */
  const _renderTask = function (hiveID, newTask) {
    const renderedTask = document.createElement("div");
    renderedTask.classList.add("renderedTask");
    renderedTask.setAttribute("id", "task-" + _numberOfTasks);

    const renderedTaskTitle = document.createElement("h3");
    renderedTaskTitle.classList.add("renderedTaskTitle");
    renderedTaskTitle.textContent = newTask.getTitle();
    renderedTask.appendChild(renderedTaskTitle);

    const renderedTaskDescription = document.createElement("p");
    renderedTaskDescription.classList.add("renderedTaskDescription");
    renderedTaskDescription.textContent = newTask.getDescription();
    renderedTask.appendChild(renderedTaskDescription);

    const renderedTaskDueDate = document.createElement("p");
    renderedTaskDueDate.classList.add("renderedTaskDueDate");
    renderedTaskDueDate.textContent = "Due: " + newTask.getDueDate();
    renderedTask.appendChild(renderedTaskDueDate);

    const renderedTaskPriority = document.createElement("p");
    renderedTaskPriority.classList.add("renderedTaskPriority");
    renderedTaskPriority.textContent = "Priority: " + newTask.getPriority();
    renderedTask.appendChild(renderedTaskPriority);

    const deleteTaskBtn = document.createElement("button");
    deleteTaskBtn.classList.add("deleteTaskBtn");
    deleteTaskBtn.textContent = "-";
    deleteTaskBtn.dataset.tasksOf = hiveID.substring(1);
    deleteTaskBtn.setAttribute("id", _numberOfTasks + "");
    deleteTaskBtn.addEventListener("click", (e) => {
      const currentHive =
        _hives[parseInt(deleteTaskBtn.dataset.tasksOf.substring(5))];

      currentHive.removeTask(newTask);
      document.querySelector("#task-" + e.target.id).remove();
      //populate in the case of task removal;
      populate();
    });
    renderedTask.appendChild(deleteTaskBtn);
    //populate in case of task addition
    populate();

    document.querySelector(hiveID).appendChild(renderedTask);
    _numberOfTasks++;
  };

  /**
   * Create a button with the ability to add a new hive
   * @private
   */
  const addHiveBtn = function () {
    const addHiveBtn = document.createElement("button");
    addHiveBtn.classList.add("addHiveBtn");
    addHiveBtn.id = "addHiveBtn";
    addHiveBtn.textContent = "+";
    addHiveBtn.addEventListener("click", _addHiveBtnEvent);
    content.appendChild(addHiveBtn);
  };
  const _addHiveBtnEvent = function () {
    const addHiveBtn = document.querySelector("#addHiveBtn");
    addHiveBtn.remove();
    const addHiveForm = document.createElement("div");
    addHiveForm.classList.add("addHiveForm");
    addHiveForm.id = "addHiveForm";

    const newHiveTitle = document.createElement("input");
    newHiveTitle.setAttribute("placeholder", "Title");
    newHiveTitle.id = "newHiveTitle";
    newHiveTitle.classList.add("newHiveTitle");
    addHiveForm.appendChild(newHiveTitle);

    const newHiveColor = document.createElement("input");
    newHiveColor.type = "color";
    newHiveColor.value = _defaultColors[_colorRotation++];
    _colorRotation = _colorRotation > 6 ? 0 : _colorRotation;
    newHiveColor.classList.add("newHiveColor");
    addHiveForm.appendChild(newHiveColor);

    const addHiveSubmit = document.createElement("button");
    addHiveSubmit.textContent = "+";
    addHiveSubmit.classList.add("addHiveSubmit");
    addHiveSubmit.addEventListener("click", () => {
      const newHive = hive(
        document.querySelector("#newHiveTitle").value === ""
          ? "New Hive"
          : document.querySelector("#newHiveTitle").value,
        newHiveColor.value
      );
      renderHive(newHive);
      //populate in case of hive addition
      populate();
      addHiveForm.remove();
      content.appendChild(addHiveBtn);
    });
    addHiveForm.appendChild(addHiveSubmit);

    content.appendChild(addHiveForm);
  };

  const _expandHive = function (e) {
    const expHive = document.querySelector("#" + e.target.dataset.clickOf);
    expHive.classList.add("expandedHive");
    expHive.removeEventListener("click", _expandHive);
    const clickListen = e.target;
    clickListen.remove();

    document.querySelector("body").style.overflow = "hidden";
    content.style.overflowY = "hidden";

    //Render add task button
    addTaskBtn(expHive);

    //Render delete hive button
    deleteHiveBtn(expHive);

    //show delete task buttons
    if (content.contains(document.querySelector(".deleteTaskBtn"))) {
      expHive.querySelectorAll(".deleteTaskBtn").forEach((btn) => {
        btn.style.visibility = "visible";
      });
    }

    const blurScreen = document.createElement("div");
    blurScreen.classList.add("blurScreen");
    content.appendChild(blurScreen);

    blurScreen.addEventListener("click", () => {
      blurScreen.remove();
      expHive.classList.remove("expandedHive");

      //reverse renderings
      if (expHive.contains(document.querySelector(".addTaskForm"))) {
        expHive.querySelector(".addTaskForm").remove();
      }
      if (expHive.contains(document.querySelector(".addTaskBtn"))) {
        expHive.querySelector(".addTaskBtn").remove();
      }
      if (content.contains(document.querySelector(".deleteTaskBtn"))) {
        expHive.querySelectorAll(".deleteTaskBtn").forEach((btn) => {
          btn.style.visibility = "hidden";
        });
      }
      document.querySelector("body").style.overflowY = "auto";
      content.style.overflowY = "auto";

      expHive.querySelector(".deleteHiveBtn").remove();
      expHive.appendChild(clickListen);
    });
  };

  const getHives = function returnHives() {
    return _hives;
  };

  const populate = function populateStorage() {
    storageValue = "{\n";
    let i = 0;
    _hives.forEach((hive) => {
      storageValue += `"hive-${i}":`;
      storageValue += `{\n"title": "${hive.getTitle()}",\n"color": "${hive.getColor()}",\n"index": "${hive.getIndex()}",\n"tasks": {`;
      hive.getTasks().forEach((task) => {
        storageValue += `"title": "${task.getTitle()}",\n"description": "${task.getDescription()}",\n"dueDate": "${task.getDueDate()}",\n"priority": "${task.getPriority()}"}\n`;
      });
      storageValue += "}\n}\n";
      if (i < _hives.length - 1) {
        storageValue += ",";
      }
      i++;
    });
    storageValue += "\n}";
    passedStorage.setItem("hives", storageValue);
  };

  const set = function setPageFromStorage() {
    const storedHives = JSON.parse(passedStorage.getItem("hives"));
    for (let currentHive in storedHives) {
      const newHive = hive(
        storedHives[currentHive]["title"],
        storedHives[currentHive]["color"]
      );
      newHive.setIndex(_hivesToBeLoaded.length);
      for (let currentTask in storedHives[currentHive]["tasks"]) {
        const newTask = task(
          storedHives[currentHive]["tasks"][currentTask]["title"],
          storedHives[currentHive]["tasks"][currentTask]["description"],
          storedHives[currentHive]["tasks"][currentTask]["dueDate"],
          storedHives[currentHive]["tasks"][currentTask]["priority"]
        );
        newHive.registerTask(newTask);
      }
      _hivesToBeLoaded.push(newHive);
    }
  };

  const loadHives = function loadHivesToScreen() {
    set();
    _hivesToBeLoaded.forEach((hive) => {
      renderHive(hive);
    });
    addHiveBtn();
  };

  const loadInitial = function () {
    const blankHive = hive("My First Hive!", _defaultColors[6]);
    renderHive(blankHive);
    addHiveBtn();
  };
  return {
    loadInitial,
    loadHives,
    getHives,
  };
};

export { renderer };
