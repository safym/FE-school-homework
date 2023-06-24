# FE-school-homework

## [Задание](https://docs.google.com/document/d/1KLy6PW9UejqnBmf2D3_8_emNyZ5Mu0ru/edit)

## 📑 Комментарии
1. Компоненты представлены классами: 
    - Dropdown
    - EmptyPage
    - Item
    - Navigation
    - ProjectItem - расширяет класс Item
    - TaskItem - расширяет класс Item
2. EventListeners - обработчики событий назначены на конкретные DOM элементы, один глобальный обработчик в src/index.js - закрывает выпадающие меню, если совершается клик не на dropdown или выпадающее меню.
3. Tooltip - вспывает над элементом, когда указан дата атрибут [data-tooltip = "tooltip content"] и элемент скрывается ellipsis. Tooltip content - отображается в теле подсказки.

## 🛠 Команды:

Initially install the packages:
```bash
npm i
```

Start app:
```bash
npm run start
```

Build:
```bash
npm run build
```

Build (dev mode):
```bash
npm run build-dev
```

Webpack watch:
```bash
npm run watch
```

## 📖 Описание

### [Dropdown компонент](/src/components/dropdown)
<p align="center">
  <img height="200px" src="https://github.com/safym/FE-school-homework-1/assets/99616798/4133f924-bf50-4389-a431-66ee2042b695">
  <img height="200px" src="https://github.com/safym/FE-school-homework-1/assets/99616798/f9fdd0e6-8baf-4ad1-8351-437f7996cf30">
</p>


### [Empty-page компонент](/src/components/empty-page)
![image](https://github.com/safym/FE-school-homework-1/assets/99616798/d9d0de44-1445-4f5d-8a14-441b34f98065)
- Адаптивная верстка

### [Navigation компонент](/src/components/navigation)
![image](https://github.com/safym/FE-school-homework-1/assets/99616798/9147cc1b-1db7-42ad-b89a-2f8e7ef98b2f)

### [Item компонент](/src/components/item)
- класс, расширяемый task-item и project-item

### [Task-item компонент](/src/components/task-item)
![image](https://github.com/safym/FE-school-homework-1/assets/99616798/e9001870-f1dd-4417-bdc3-1990c77e722b)
- Описание, id, подписи о создании и редактировании - ellipsis при переполнении
- Адаптивная верстка

### [Project-item компонент](/src/components/project-item)
![image](https://github.com/safym/FE-school-homework-1/assets/99616798/bb35231d-68f1-41a1-9375-0119bc67f6b7)
- Описание, id, подписи о создании и редактировании - ellipsis при переполнении
- Адаптивная верстка

### [Tooltip компонент](/src/components/tooltip)

<p align="center">
  <img height="200px" src="https://github.com/safym/FE-school-homework-1/assets/99616798/a3655786-7e8f-4055-bff4-5e8bd922d124">
  <img height="200px" src="https://github.com/safym/FE-school-homework-1/assets/99616798/400265b5-e23a-4fc3-a68b-e2e8047d312c">
</p>





