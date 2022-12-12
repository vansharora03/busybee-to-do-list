import {hive, task} from "./hives";

/**
 * Take a DOM object as a parameter and returns functions allowing rendering of hives
 */
const renderer = function(content) {

    /**
     * Store the current hives
     * @type {*[]}
     * @private
     */
    let _hives = [];

    /**
     * Render a hive
     * @param hive
     */

    let _numberOfTasks = 0;
    const renderHive = function(hive) {
        //Update _hives and set the hive index property
        hive.setIndex(_hives.length);
        _hives.push(hive);
        //Begin rendering of hive
        const renderedHive = document.createElement('div');
        renderedHive.classList.add('renderedHive');
        renderedHive.id = 'hive-' + hive.getIndex();

        const renderedTitle = document.createElement('h2');
        renderedTitle.classList.add('renderedTitle');
        renderedTitle.textContent = hive.getTitle();
        renderedHive.appendChild(renderedTitle);

        //Render delete hive button
        const deleteHiveBtn = document.createElement('button');
        deleteHiveBtn.classList.add('deleteHiveBtn');
        deleteHiveBtn.textContent = '-';
        deleteHiveBtn.id = hive.getIndex() + "";
        deleteHiveBtn.addEventListener('click', (e) => {
            //delete current hive
            _hives.splice(parseInt(e.target.id), 1);
            document.querySelector('#hive-'+e.target.id).remove();
        });
        renderedHive.appendChild(deleteHiveBtn);

        //Render add task button
        const addTaskBtn = document.createElement('button');
        addTaskBtn.textContent = 'Add Task';
        addTaskBtn.setAttribute('id', hive.getIndex()+"");
        console.log('hive index: ' + addTaskBtn.id)
        addTaskBtn.classList.add('addTaskBtn');
        addTaskBtn.addEventListener('click', _addTaskBtnEvent);
        renderedHive.appendChild(addTaskBtn);

        content.appendChild(renderedHive);
    }
    const _addTaskBtnEvent = function (e) {
        //Query task
        const addTaskBtn = e.target;
        addTaskBtn.remove();

        const addTaskForm = document.createElement('div');
        addTaskForm.classList.add('addTaskForm');

        const addTaskTitle = document.createElement('input');
        addTaskTitle.classList.add('addTaskTitle');
        addTaskTitle.id = 'addTaskTitle';
        addTaskTitle.placeholder = 'Task Title';
        addTaskForm.appendChild(addTaskTitle);

        const addTaskDescription = document.createElement('textarea');
        addTaskDescription.classList.add('addTaskDescription');
        addTaskDescription.id = 'addTaskDescription';
        addTaskDescription.placeholder = 'Task Description';
        addTaskForm.appendChild(addTaskDescription);

        const addTaskDueDate = document.createElement('input');
        addTaskDueDate.classList.add('addTaskDueDate');
        addTaskDueDate.id = 'addTaskDueDate';
        addTaskDueDate.placeholder = 'Task Due Date';
        addTaskForm.appendChild(addTaskDueDate);

        const addTaskPriority = document.createElement('input');
        addTaskPriority.classList.add('addTaskPriority');
        addTaskPriority.id = 'addTaskPriority';
        addTaskPriority.placeholder = 'Task Priority';
        addTaskForm.appendChild(addTaskPriority);

        const addTaskSubmitBtn = document.createElement('button');
        addTaskSubmitBtn.classList.add('addTaskSubmitBtn');
        addTaskSubmitBtn.id = e.target.id;
        addTaskSubmitBtn.textContent = "+";
        addTaskSubmitBtn.addEventListener('click', e => {
            addTaskForm.remove();
            const newTask = task(addTaskTitle.value, addTaskDescription.value, addTaskDueDate.value, addTaskPriority.value);
            const currentHive = _hives[parseInt(e.target.id)];
            currentHive.registerTask(newTask);
            _renderTask('#hive-'+e.target.id, newTask);
            document.querySelector('#hive-'+e.target.id).appendChild(addTaskBtn);
        });
        addTaskForm.appendChild(addTaskSubmitBtn);

        document.querySelector('#hive-' + e.target.id).appendChild(addTaskForm);
        console.log('#hive-' + e.target.id);
    }

    /**
     * Renders a task to the hive DOM
     * @param hiveID
     * @param newTask
     * @private
     */
    const _renderTask = function(hiveID, newTask) {
        console.log(hiveID);
        const renderedTask = document.createElement('div');
        renderedTask.classList.add('renderedTask');
        renderedTask.setAttribute('id', "task-"+_numberOfTasks);

        const renderedTaskTitle = document.createElement('h3');
        renderedTaskTitle.classList.add('renderedTaskTitle');
        renderedTaskTitle.textContent = newTask.getTitle();
        renderedTask.appendChild(renderedTaskTitle);

        const renderedTaskDescription = document.createElement('p');
        renderedTaskDescription.classList.add('renderedTaskDescription');
        renderedTaskDescription.textContent = newTask.getDescription();
        renderedTask.appendChild(renderedTaskDescription);

        const renderedTaskDueDate = document.createElement('p');
        renderedTaskDueDate.classList.add('renderedTaskDueDate');
        renderedTaskDueDate.textContent = 'Due: ' + newTask.getDueDate();
        renderedTask.appendChild(renderedTaskDueDate);

        const renderedTaskPriority = document.createElement('p');
        renderedTaskPriority.classList.add('renderedTaskPriority');
        renderedTaskPriority.textContent = "Priority: " + newTask.getPriority();
        renderedTask.appendChild(renderedTaskPriority);

        const deleteTaskBtn = document.createElement('button');
        deleteTaskBtn.classList.add('deleteTaskBtn');
        deleteTaskBtn.textContent = '-';
        deleteTaskBtn.setAttribute('id', _numberOfTasks+"");
        deleteTaskBtn.addEventListener('click', (e) => {
            const currentHive = _hives[parseInt(hiveID.substring(5))];
            currentHive.removeTask(newTask);
            document.querySelector('#task-' + e.target.id).remove();
        })
        renderedTask.appendChild(deleteTaskBtn);

        document.querySelector(hiveID).appendChild(renderedTask);
        _numberOfTasks++;
    }

    /**
     * Create a button with the ability to add a new hive
     * @private
     */
    const _addHiveBtn = function() {
        const addHiveBtn = document.createElement('button');
        addHiveBtn.classList.add('addHiveBtn');
        addHiveBtn.id = 'addHiveBtn';
        addHiveBtn.textContent = '+';
        addHiveBtn.addEventListener('click', _addHiveBtnEvent);
        content.appendChild(addHiveBtn);
    }
    const _addHiveBtnEvent = function() {
        const addHiveBtn = document.querySelector('#addHiveBtn');
        addHiveBtn.remove();
        const addHiveForm = document.createElement('div');
        addHiveForm.classList.add('addHiveForm');
        addHiveForm.id = "addHiveForm";

        const newHiveTitle = document.createElement('input');
        newHiveTitle.setAttribute('placeholder', 'Title');
        newHiveTitle.id = "newHiveTitle";
        newHiveTitle.classList.add('newHiveTitle');
        addHiveForm.appendChild(newHiveTitle);

        const addHiveSubmit = document.createElement('button');
        addHiveSubmit.textContent = '+';
        addHiveSubmit.classList.add('addHiveSubmit');
        addHiveSubmit.addEventListener('click', () => {
            const newHive = hive(document.querySelector('#newHiveTitle').value === ""? "New Project": document.querySelector('#newHiveTitle').value );
            renderHive(newHive);
            addHiveForm.remove();
            content.appendChild(addHiveBtn);
        });
        addHiveForm.appendChild(addHiveSubmit);

        content.appendChild(addHiveForm);
    }
    const load = function () {
        const blankHive = hive('New Project');
        renderHive(blankHive);
        _addHiveBtn();
    }
    return {
        load
    }
}

export {renderer};