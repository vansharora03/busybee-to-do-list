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
        _hives.push(hive);
        hive.setIndex = _hives.length;
        //Begin rendering of hive
        const renderedHive = document.createElement('div');
        renderedHive.id = 'hive-' + hive.getIndex();

        const renderedTitle = document.createElement('h2');
        renderedTitle.textContent = hive.getTitle();
        renderedHive.appendChild(renderedTitle);

        const deleteHiveBtn = document.createElement('button');
        deleteHiveBtn.textContent = '-';
        deleteHiveBtn.id = hive.getIndex() + "";
        deleteHiveBtn.addEventListener('click', (e) => {
            //delete current hive
            _hives.splice(parseInt(e.target.id), 1);
            document.querySelector('#hive-'+e.target.id).remove();
        });
        renderedHive.appendChild(deleteHiveBtn);

        hive.getTasks().forEach(task => {
            //Render task
            const renderedTask = document.createElement('div');
            renderedTask.setAttribute('id', "task-"+_numberOfTasks);

            const renderedTaskTitle = document.createElement('h3');
            renderedTaskTitle.textContent = task.getTitle();
            renderedTask.appendChild(renderedTaskTitle);

            const renderedTaskDescription = document.createElement('p');
            renderedTaskDescription.textContent = task.getDescription();
            renderedTask.appendChild(renderedTaskDescription);

            const renderedTaskDueDate = document.createElement('p');
            renderedTaskDueDate.textContent = 'Due: ' + task.getDueDate();
            renderedTask.appendChild(renderedTaskDueDate);

            const deleteTaskBtn = document.createElement('button');
            deleteTaskBtn.textContent = '-';
            deleteTaskBtn.setAttribute('id', _numberOfTasks+"");
            deleteTaskBtn.addEventListener('click', (e) => {
                hive.removeTask(parseInt(e.target.id));
                document.querySelector('#task-' + e.target.id).remove();
            })
            renderedTask.appendChild(deleteTaskBtn);

            renderedHive.appendChild(renderedTask);
            _numberOfTasks++;
        })

        content.appendChild(renderedHive);
    }
    const renderAddForm = function() {

    }
    return {
        renderHive,
        renderAddForm
    }
}

export {renderer};