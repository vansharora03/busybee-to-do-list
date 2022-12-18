import { renderer } from "./hivesDOM";
import { task, hive } from "./hives";

const content = document.querySelector("#content");
//localStorage.clear();
renderer(content, localStorage).loadHives();
