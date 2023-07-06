const BASE_URL = "http://45.12.239.156:8081/api";
const NEW_PROJECT_DATA = {
  name: "created project",
  code: "12345",
};

const projectData = {
  name: "name123",
  code: "code123",
};

export class ApiPage {
  element;

  baseUrl;
  userLogin;
  userPassword;
  token;

  projectId;

  onClick(event) {
    const queryButton = event.target.closest("[data-query]");

    if (queryButton) {
      const queryTechnology = queryButton.getAttribute("data-queryTechnology");
      const queryType = queryButton.getAttribute("data-queryType");

      if (queryTechnology === "fetch") {
        this.createProjectFetch(NEW_PROJECT_DATA);
      } else if (queryTechnology === "xml") {
        this.createProjectXML(NEW_PROJECT_DATA);
      }
    }
  }

  constructor(userLogin, userPassword) {
    this.baseUrl = BASE_URL;
    this.userLogin = userLogin;
    this.userPassword = userPassword;

    this.login(this.userLogin, this.userPassword);
    this.render();
    this.initListeners();
  }

  render() {
    this.element = this.getElement();
  }

  getElement() {
    const elementWrapper = document.createElement("div");
    elementWrapper.innerHTML = this.getTemplate();

    return elementWrapper.firstElementChild;
  }

  getTemplate() {
    return `
    <div class="api-page">
      <h1>PROJECT</h1>
      <div class="api-page__group">
        <h2>CREATE<h2>
        <button data-query="true" data-queryTechnology="xml" data-queryType="create">XML</button>
        <button data-query="true" data-queryTechnology="fetch" data-queryType="create">Fetch</button>
        <button data-query="true" data-queryTechnology="axios" data-queryType="create">Axios</button>
      </div>
    </div>
    `;
  }

  async login(login, password) {
    fetch(`${this.baseUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        login: login,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        this.token = data.token;
        console.log("Авторизация успешна. Токен:", data);
      })
      .catch((error) => {
        console.log("Ошибка при авторизации:", error);
      });
  }

  async createProjectFetch(projectBody) {
    fetch(this.baseUrl + "/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
      body: JSON.stringify(projectBody),
    })
      .then((response) => response.json())
      .then((data) => {
        this.showResult("(Fetch) Проект успешно создан:", data);
      })
      .catch((error) => {
        console.log("(Fetch) Ошибка при выполнении запроса:", error);
      });
  }

  createProjectXML(projectBody) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `${this.baseUrl}/projects`);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Authorization", `Bearer ${this.token}`);
    xhr.onload = () => {
      if (xhr.status === 200) {
        this.showResult("(XML) Проект успешно создан:", JSON.parse(xhr.responseText));
      } else {
        console.log("(XML) Ошибка при выполнении запроса:", xhr.status);
      }
    };
    xhr.onerror = () => {
      console.error("(XML) Ошибка при выполнении запроса:", xhr.statusText);
    };
    xhr.send(JSON.stringify(projectBody));
  }

  showResult(textMessage, resultData) {
    console.log(`%c${textMessage}`, "color: #bada55", resultData);
  }

  showError(textMessage, errorData) {
    console.error(`${textMessage}`, errorData);
  }

  initListeners() {
    this.element.addEventListener("click", this.onClick.bind(this));
  }
}
