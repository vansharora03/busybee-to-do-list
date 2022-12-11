import {task, hive} from "./hives";
import {renderer} from "./hivesDOM";

const content = document.querySelector('#content');
const addHiveBtn = document.querySelector('#addBtn');
addHiveBtn.addEventListener('click', renderer(content).renderAddForm);

const hive1 = hive('New Hive');
const task1 = task('Task 1', 'This is the first task.', 'December 8, 2023', 'ksk');
const task2 = task('Task 2', 'This is the second task.', 'December 9, 2023', 'ksk');
hive1.registerTask(task1);
hive1.registerTask(task2);

renderer(content).renderHive(hive1);