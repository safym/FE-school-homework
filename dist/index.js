!function(){"use strict";var t={91:function(t){t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),e.hash&&(t+=e.hash),e.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(t)?'"'.concat(t,'"'):t):t}},649:function(t,e,n){t.exports=n.p+"b88d04fba731603756b1.scss"}},e={};function n(s){var i=e[s];if(void 0!==i)return i.exports;var o=e[s]={exports:{}};return t[s](o,o.exports,n),o.exports}n.m=t,n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var s=e.getElementsByTagName("script");if(s.length)for(var i=s.length-1;i>-1&&!t;)t=s[i--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t}(),n.b=document.baseURI||self.location.href,function(){var t=n(91),e=n.n(t),s=new URL(n(649),n.b);e()(s),n.p;class i{element;isOpen;dropdownButton;buttonId;activeClass;list;listHtml;onClick=t=>{t.target.closest(`#${this.buttonId}`)&&(this.isOpen?this.element&&this.close():this.open())};constructor(t,e,n,s){this.isOpen=!1,this.list=n,this.dropdownButton=t,this.buttonId=e,this.activeClass=s,this.render()}render(){this.element=this.getElement()}getElement(){const t=document.createElement("div"),e=this.getListHtml(this.list);return t.innerHTML=this.getTemplate(e),t.firstElementChild}getTemplate(t){return`\n    <div class="dropdown__menu" data-dropdown="list">\n      ${t}\n    </div>\n    `}getListHtml(t){const e=document.createElement("ul");e.classList.add("dropdown__list");for(const n of t){const t=document.createElement("div");t.innerHTML=this.getListItemTemplate(n),e.appendChild(t.firstElementChild)}return e.outerHTML}getListItemTemplate(t){return`\n    <li class="dropdown__list-item">\n      <a class="dropdown__link dropdown__link_style_${t.type}" href="#">${t.label}</a>\n    </li>\n    `}open(){this.isOpen=!0,this.dropdownButton.parentElement.append(this.element),this.dropdownButton.classList.add(this.activeClass)}close(){this.isOpen=!1,this.dropdownButton.classList.remove(this.activeClass),this.element.remove()}remove(){this.element&&this.element.remove()}destroy(){this.element.remove(),this.element=null}}class o{element;constructor(){this.render()}onPoinerOver=t=>{const e=t.target.closest("[data-tooltip]");if(e&&this.hasEllipsis(e)){const t=e.dataset.tooltip;this.updateElement(t),this.show(),document.addEventListener("pointermove",this.onPointerMove)}};onPointerMove=t=>{if(this.element){const e=this.element.offsetWidth,n=15,{clientX:s,clientY:i}=t,o=i+n;let r=s-e/2;r<0?r=0:r+e>window.innerWidth&&(r=window.innerWidth-e),this.element.style.position="absolute",this.element.style.top=`${o}px`,this.element.style.left=`${r}px`}};onPoinerOut=()=>{this.element&&(this.element.remove(),document.removeEventListener("pointermove",this.onPointerMove))};getElement(){const t=document.createElement("div");return t.innerHTML=this.getTemplate(),t.firstElementChild}render(){this.element=this.getElement()}getTemplate(t=""){return`\n    <div class="tooltip">\n      <div class="tooltip__container">${t}</div>\n    </div>\n    `}hasEllipsis(t){return t.scrollWidth>t.clientWidth||t.scrollHeight>t.clientHeight}updateElement(t){const e=document.createElement("div");e.innerHTML=this.getTemplate(t),this.element=e.firstElementChild}show(){document.body.append(this.element)}remove(){this.element&&this.element.remove()}destroy(){this.element.remove(),this.element=null}}class r{element;id;description;status;userImg;creator;createTime;lastEditor;editTime;dropdownButton;buttonId;menuList=[{label:"Редактировать",type:"normal"},{label:"Удалить",type:"delete"}];menu;tooltip;onMouseleave=t=>{this.menu.isOpen&&(this.menu.isOpen=!1,this.menu.close())};constructor(){}render(){this.element=this.getElement(),this.dropdownButton=this.element.querySelector(`#${this.buttonId}`),this.menu=new i(this.dropdownButton,this.buttonId,this.menuList,"button__style_secondary_active"),this.tooltip=new o}getElement(){const t=document.createElement("div");return t.innerHTML=this.getTemplate(),t.firstElementChild}getTemplate(){return`\n    <div class="item-card">\n      <div class="item-card__body">\n        <div class="item-card__title">\n          <p data-tooltip="${this.description}" class="item-card__name">\n            ${this.description}\n          </p>\n          ${this.getUserImgTemplate(this.userImg)}\n        </div>\n        <div class="item-card__footer">\n          <div class="item-card__create-group">\n            <span data-tooltip="${this.id}" class="item-card__id"\n              >${this.id}</span\n            >\n            <span class="item-card__info-label item-card__info-label__collapsed"\n              >${this.creator} создал(а) ${this.createTime}</span\n            >\n            ${this.getStatusTemplate(this.status)}\n          </div>\n          <div class="item-card__edit-group">\n            <span class="item-card__info-label item-card__info-label__collapsed"\n              >${this.lastEditor} изменил(а) ${this.editTime}</span\n            >\n          </div>\n        </div>\n      </div>\n      <div class="item-card__button-wrapper">\n        <a\n          id="${this.buttonId}"\n          data-dropdown="button"\n          href="#"\n          class="item-card__edit-button button button__style_secondary button__size_small"\n        >\n          <div class="button__icon-container">\n            <svg class="button__icon">\n              <use xlink:href="#dots-svg"></use>\n            </svg>\n          </div>\n        </a>\n      </div>\n    </div>\n    `}getUserImgTemplate(t){return t?'<img\n        class="item-card__image"\n        src="/assets/images/user.png"\n        alt="user image"\n      />':""}getStatusTemplate(t){return t?`<span class="item-card__status item-card__status_draft">\n        ${this.status}\n        </span>`:""}initListeners(){this.dropdownButton.addEventListener("click",this.menu.onClick),this.element.addEventListener("mouseleave",this.onMouseleave),this.element.addEventListener("pointerout",this.tooltip.onPoinerOut),this.element.addEventListener("pointerover",this.tooltip.onPoinerOver)}remove(){this.element&&this.element.remove()}destroy(){this.dropdownButton.removeEventListener("click",this.menu.onClick),this.element.removeEventListener("mouseleave",this.onMouseleave),this.element.removeEventListener("pointerout",this.tooltip.onPoinerOut),this.element.removeEventListener("pointerover",this.tooltip.onPoinerOver),this.element.remove(),this.element=null}}const l=document.getElementById("app"),a=document.createElement("div");a.id="container";const d=new class{element;dropdownButton;buttonId;menuList=[{label:"Профиль",type:"normal"},{label:"Выход",type:"normal"}];menu;constructor(){this.buttonId="nav-button-user",this.render(),this.initListeners()}render(){this.element=this.getElement(),this.dropdownButton=this.element.querySelector(`#${this.buttonId}`),this.menu=new i(this.dropdownButton,this.buttonId,this.menuList,"dropdown_active")}getElement(){const t=document.createElement("div");return t.innerHTML=this.getTemplate(),t.firstElementChild}getTemplate(){return`\n    <header class="header">\n      <nav class="header__nav">\n        <ul class="header__list">\n          <li class="header__list-item">\n            <a class="header__button button button__size_large button__nav button__nav_active" href="#">Проекты</a>\n          </li>\n          <li class="header__list-item">\n            <a class="header__button button button__size_large button__nav" href="#"\n              >Задачи</a\n            >\n          </li>\n          <li class="header__list-item">\n            <a class="header__button button button__size_large button__nav" href="#"\n              >Пользователи</a\n            >\n          </li>\n          <li class="header__list-item">\n            <a id="${this.buttonId}" data-dropdown="button" class="header__user-button button button__size_large button__dropdown dropdown" href="#">\n              <img\n                class="button__image"\n                src="/assets/images/user.png"\n                alt="user image"\n              />\n              <div class="button__icon-container">\n                <svg class="button__icon">\n                  <use xlink:href="#dropdown-arrow-svg"></use>\n                </svg>\n              </div>\n            </a>\n          </li>\n        </ul>\n      </nav>\n    </header>\n    `}initListeners(){this.dropdownButton.addEventListener("click",this.menu.onClick)}remove(){this.element&&this.element.remove()}destroy(){this.dropdownButton.removeEventListener("click",this.menu.onClick),this.element.remove(),this.element=null}},c=new class extends r{constructor({id:t,description:e,status:n,userImg:s,creator:i,createTime:o,lastEditor:r,editTime:l}){super(),this.id=t,this.description=e,this.userImg=s,this.status=n,this.creator=i,this.createTime=o,this.lastEditor=r,this.editTime=l,this.buttonId=`project-button-${this.id}`,this.render(),this.initListeners()}}({id:"2653137653251836235432452513123124",description:"Очень длинное название проекта, создано специального для того чтоб не вместилось в одну строку, что позволит проверить не ломается ли верстка. И еще раз очень длинное название проекта, создано\n  специально чтоб проверить не сломается ли верстка.",status:null,userImg:!1,creator:"Иванов И.И.",createTime:"1 час назад",lastEditor:"Баранов В.В.",editTime:"1 минуту назад"}),m=new class extends r{constructor({id:t,description:e,status:n,userImg:s,creator:i,createTime:o,lastEditor:r,editTime:l}){super(),this.id=t,this.description=e,this.userImg=s,this.status=n,this.creator=i,this.createTime=o,this.lastEditor=r,this.editTime=l,this.buttonId=`task-button-${this.id}`,this.render(),this.initListeners()}}({id:"1",description:"Название",status:"Черновик",userImg:!0,creator:"Иванов И.И.",createTime:"1 час назад",lastEditor:"Баранов В.В.",editTime:"1 минуту назад"}),u=new class{text;addHref;element;constructor({text:t,addHref:e="#"}){this.text=t,this.addHref=e,this.render()}render(){this.element=this.getElement()}getElement(){const t=document.createElement("div");return t.innerHTML=this.getTemplate(),t.firstElementChild}getTemplate(){return`\n    <div class="empty-page">\n      <p class="empty-page__label">${this.text}</p>\n      <a href="${this.addHref}" class="empty-page__button button button__size_large button__style_primary">\n        Добавить\n      </a>\n    </div>\n    `}}({text:"Не создан ни один проект",addHref:"/project/new"});a.append(c.element),a.append(m.element),a.append(u.element),l.append(d.element),l.append(a),document.addEventListener("click",(t=>{const e=t.target.closest('[data-dropdown="button"]'),n=t.target.closest('[data-dropdown="list"]'),s=document.querySelector('[data-dropdown="list"]');if(!e&&!n&&s)switch(!0){case d.menu.isOpen:d.menu.close();case c.menu.isOpen:c.menu.close();case m.menu.isOpen:m.menu.close()}}))}()}();