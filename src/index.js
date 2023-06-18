import html from "./index.html";
import "./style.scss";

import user from './img/assets/user.png';

import { EmptyPage } from "./components/empty-page/index.js";
import { Navigation } from "./components/navigation/index.js";
import { ProjectItem } from "./components/project-item/index.js";
import { TaskItem } from "./components/task-item/index.js";

const app = document.getElementById("app");

const taskContainer = document.createElement("div");
taskContainer.id = "container";

const navigation = new Navigation();
const projectItem = new ProjectItem();
const taskItem = new TaskItem();
const emptyPage = new EmptyPage();

taskContainer.append(projectItem.element);
taskContainer.append(taskItem.element);
taskContainer.append(emptyPage.element);

app.append(navigation.element);
app.append(taskContainer);
