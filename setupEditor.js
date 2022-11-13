import Yace from "yace";

const responseEditor = new Yace("[data-json-response-body]", {
  value: "",
  lineNumbers: false,
});

export let requestJSON = "";
const requestEditor = new Yace("[data-json-request-body]", {
  value: requestJSON,
  lineNumbers: false,
});

requestEditor.onUpdate((value) => (requestJSON = value));

// allow tabs on text area
const textarea = document.querySelector("textarea");
textarea.addEventListener("keydown", (e) => {
  if (e.keyCode == 9) {
    e.preventDefault();
    e.target.value += "\t";
  }
});

// replacer function for stringify
const replacer = (key, value) => {
  if (key === "id") return `id-${value}`;
  return value;
};

export function updateResponseEditor(data) {
  responseEditor.update({ value: JSON.stringify(data, null, 2) });
}
