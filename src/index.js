// import main index.html for webpack
import html from "./index.html";

// import main style.scss for webpck
import "./style.scss";

// import images for webpack
import user from "./assets/images/user.png";

// import components
import { Dropdown } from "./components/dropdown/index.js";
import { Tooltip } from "./components/tooltip/index.js";
import { EmptyPage } from "./components/empty-page/index.js";
import { Navigation } from "./components/navigation/index.js";
import { ProjectItem } from "./components/project-item/index.js";
import { TaskItem } from "./components/task-item/index.js";

// import data for components
import { PROJECT_DATA, TASK_DATA, EMPTY_PAGE_DATA } from "./data.js";

const app = document.getElementById("app");

const taskContainer = document.createElement("div");
taskContainer.id = "container";

const navigation = new Navigation();
const projectItem = new ProjectItem(PROJECT_DATA);
const taskItem = new TaskItem(TASK_DATA);
const emptyPage = new EmptyPage(EMPTY_PAGE_DATA);

taskContainer.append(projectItem.element);
taskContainer.append(taskItem.element);
taskContainer.append(emptyPage.element);

app.append(navigation.element);
app.append(taskContainer);

document.addEventListener("click", (event) => {
  const closestButton = event.target.closest('[data-dropdown="button"]');
  const closestList = event.target.closest('[data-dropdown="list"]');
  const list = document.querySelector('[data-dropdown="list"]');

  if (!closestButton && !closestList && list) {
    switch (true) {
      case navigation.menu.isOpen:
        navigation.menu.close();
      case projectItem.menu.isOpen:
        projectItem.menu.close();
      case taskItem.menu.isOpen:
        taskItem.menu.close();
    }
  }
});
