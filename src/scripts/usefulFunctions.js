/* normatizar uma string para comparacao */

export function standartString(name) {
  let standart = name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ /g, "")
    .trim();

  return standart;
}
