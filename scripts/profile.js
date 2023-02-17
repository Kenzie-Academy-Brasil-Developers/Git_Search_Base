import { renderUser, renderRepositories } from "./render.js";
import { requestRepository } from "./requests.js";
import { standartString } from "./usefulFunctions.js";

const user = JSON.parse(localStorage.getItem("requestUser"));

const repository = await requestRepository(standartString(user.login));

renderUser(user);
renderRepositories(repository);
