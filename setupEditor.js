import Yace from "yace";

const editor = new Yace("[data-json-request-body]", {
  value: "",
  lineNumbers: true,
});

const textarea = document.querySelector("textarea");
textarea.addEventListener("keydown", (e) => {
  if (e.keyCode == 9) {
    e.preventDefault();
    e.target.value += "\t";
  }
});

// editor.update({ value: data });

// editor.onUpdate((value) => console.log(`new value: ${value}`));
// editor.destroy();
