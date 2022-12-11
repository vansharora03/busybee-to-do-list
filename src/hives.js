/**
 * Create a task for a hive
 */
const task = function(title, description, dueDate, priority) {
    let _index = 0;
    return{
        setTitle : function(newTitle) {
            title = newTitle;
        },
        getTitle : function() {
            return title;
        },
        setDescription : function (newD) {
            description = newD;
        },
        getDescription : function () {
            return description;
        },
        setDueDate : function (newDate) {
            dueDate = newDate;
        },
        getDueDate : function () {
            return dueDate;
        },
        getPriority : function () {
            return priority;
        },
        setPriority : function (newP) {
            priority = newP;
        },
        setIndex : function(i) {
            _index = i;
        },
        getIndex : function () {
            return _index;
        }
    }
}

/**
 * Create a hive that hosts tasks
 */
const hive = function(title) {
    let _index;
    let _tasks = [];
    return{
        setTitle : function (newT) {
            title = newT;
        },
        getTitle : function () {
            return title;
        },
        registerTask : function(task) {
            _tasks.push(task);
        },
        getTasks : function () {
            return _tasks;
        },
        removeTask : function (i) {
            _tasks.splice(i, 1);
        },
        getIndex : function () {
            return _index;
        },
        setIndex : function(i) {
            _index = i;
        }
    }
}


export {task, hive};