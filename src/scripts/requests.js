import { standartString } from "./usefulFunctions.js";
import { renderUser, renderRepositories } from "./creatDomElement.js";

//TODO --> FUNCAO RECEBE VALOR INFORMADO PELO USUÁRIO
//* SE USUÁRIO EXISTE PÁGINA É REDIRECIONADA PARA A PÁGINA PROFILE
//* SE USUÁRIO NAO EXISTE PÁGINA REDIRECIONADA PARA A PÁGINA ERRO

export async function requestUser(userName) {
  const user = await fetch(
    `https://api.github.com/users/${standartString(userName)}`
  )
    .then((response) => response.json())
    .then((res) => {
      if (res.message === "Not Found") {
        /*       window.location.replace("/src/pages/error/index.html"); */
        return `Ooops! Erro 404`;
      } else {
        requestRepository(userName);
        localStorage.setItem("requestUser", JSON.stringify(res));
        window.location.replace("/src/pages/profile/index.html");
        renderUser(res);
        return res;
      }
    });
  console.log(user);
  return user;
}

export async function requestRepository(userName) {
  const user = await fetch(
    `https://api.github.com/users/${standartString(userName)}/repos`
  )
    .then((response) => response.json())
    .then((res) => {
      localStorage.setItem("repositoriesUser", JSON.stringify(res));
      renderRepositories(res);
      return res;
    });
  console.log(user);
  return user;
}
