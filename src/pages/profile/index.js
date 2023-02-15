const user = JSON.parse(window.localStorage.getItem("requestUser"));
const repositories = JSON.parse(
  window.localStorage.getItem("repositoriesUser")
);

import {
  renderUser,
  renderRepositories,
} from "../../scripts/creatDomElement.js";

renderUser(user);
renderRepositories(repositories);
