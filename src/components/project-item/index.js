import { Dropdown } from "../dropdown";
import { Item } from "../item";

const MENU_BUTTON_ID = "project-button";

export class ProjectItem extends Item{
  constructor({
    id,
    description,
    status,
    userImg,
    creator,
    createTime,
    lastEditor,
    editTime,
  }) {
    super();

    this.id = id;
    this.description = description;
    this.userImg = userImg;
    this.status = status;
    this.creator = creator;
    this.createTime = createTime;
    this.lastEditor = lastEditor;
    this.editTime = editTime;
    this.buttonId = `${MENU_BUTTON_ID}-${this.id}`

    this.render();
    this.initListeners();
  }
}
