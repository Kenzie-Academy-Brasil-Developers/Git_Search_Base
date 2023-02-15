import { requestUser, requestRepository } from "./requests.js";

export async function renderUser(user) {
  const renderToContainer = document.querySelector(".container__user");
  renderToContainer.innerHTML = "";

  renderToContainer.appendChild(creatProfile(user));

  return renderToContainer;
}

export function creatProfile(user) {
  const userContainer = document.createElement("div");
  const imgUser = document.createElement("img");
  const nameUser = document.createElement("h2");

  userContainer.classList.add("box__user");
  imgUser.classList.add("img__user");
  nameUser.classList.add("title__user");
  imgUser.setAttribute("src", user.avatar_url);
  nameUser.innerText = user.login;

  console.log(imgUser);
  console.log(nameUser);

  userContainer.appendChild(imgUser);
  userContainer.appendChild(nameUser);

  return userContainer;
}

export function creatRepository(repository) {
  const listRepositories = document.querySelector(".list__repositories");
  const itemRepository = document.createElement("li");
  const titleRepository = document.createElement("h2");
  const textRepository = document.createElement("p");
  const ancorOpenRepository = document.createElement("ancor");

  itemRepository.classList.add("item__repository");
  titleRepository.classList.add("title__repository");
  textRepository.classList.add("text__repository");
  ancorOpenRepository.classList.add("button_repository");

  titleRepository.innerText = repository.name;
  textRepository.innerText = repository.description;
  ancorOpenRepository.innerText = "Repositório";
  ancorOpenRepository.setAttribute("href", repository.html_url);

  listRepositories.appendChild(itemRepository);
  itemRepository.append(titleRepository, textRepository, ancorOpenRepository);
  return listRepositories;
}

export function renderRepositories(array) {}
