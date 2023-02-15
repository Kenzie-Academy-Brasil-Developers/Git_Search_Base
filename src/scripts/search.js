import { requestUser } from "./requests.js";

const input = document.querySelector(".input__git-search");
const ancor = document.querySelector(".submit__git-search");

ancor.addEventListener("click", (e) => {
  requestUser(input.value);
});
