// import main index.html for webpack
import "src/index.html";

// import main style.scss for webpck
import "src/style.scss";

// import images for webpack
import "src/assets/images/user.png";

// import components
import "src/components/dropdown/index.js";
import "src/components/tooltip/index.js";
import { EmptyPage } from "src/components/empty-page/index.js";
import { Navigation } from "src/components/navigation/index.js";
import { ProjectItem } from "src/components/project-item/index.js";
import { TaskItem } from "src/components/task-item/index.js";

// import data for components
import { PROJECT_DATA, TASK_DATA, EMPTY_PAGE_DATA } from "src/data.js";

// Adding components to the app
const renderApp = () => {
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

  // Global event listener for closing drop-down menus
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
};

renderApp();
