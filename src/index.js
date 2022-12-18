import { renderer } from "./hivesDOM";
import { task, hive } from "./hives";

const content = document.querySelector("#content");
renderer(content, localStorage).loadHives();
