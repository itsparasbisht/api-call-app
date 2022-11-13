import Yace from "yace";

const responseEditor = new Yace("[data-json-response-body]", {
  value: "",
  lineNumbers: false,
});

export let requestJSON = "";

export function updateResponseEditor(data) {
  responseEditor.update({ value: JSON.stringify(data, null, 2) });
}

let requestEditorElement = document.querySelector("[data-json-request-body]");

let requestEditor = CodeMirror(requestEditorElement, {
  value: "{\n\t\n}",
});

requestEditor.on("change", (editor) => {
  const text = editor.doc.getValue();
  requestJSON = text;
});
