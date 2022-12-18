import { renderer } from "./hivesDOM";

const content = document.querySelector("#content");
renderer(content, localStorage).loadHives();
