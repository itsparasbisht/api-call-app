import Yace from "yace";

const editor = new Yace("[data-json-response-body]", {
  value: "",
  lineNumbers: false,
});

const textarea = document.querySelector("textarea");
textarea.addEventListener("keydown", (e) => {
  if (e.keyCode == 9) {
    e.preventDefault();
    e.target.value += "\t";
  }
});

// const replacer = (key, value) => {
//   if (key === "id") return `id-${value}`;

//   return value;
// };

export function updateResponseEditor(data) {
  editor.update({ value: JSON.stringify(data, null, 2) });
}

// editor.onUpdate((value) => console.log(`new value: ${value}`));
// editor.destroy();
