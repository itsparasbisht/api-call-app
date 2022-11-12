import Yace from "yace";

const editor = new Yace("[data-json-request-body]", {
  value: "{\n\t\n}",
  lineNumbers: true,
});

editor.update({ value: data });

// editor.onUpdate((value) => console.log(`new value: ${value}`));
// editor.destroy();
