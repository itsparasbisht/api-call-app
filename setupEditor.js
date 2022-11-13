// request editor ----------------------

let requestEditorElement = document.querySelector("[data-json-request-body]");

let requestEditor = CodeMirror(requestEditorElement, {
  value: "{\n\t\n}",
});

requestEditor.on("change", (editor) => {
  const text = editor.doc.getValue();
  requestJSON = text;
});

// response editor ----------------------

let responseEditorElement = document.querySelector("[data-json-response-body]");
let responseJSON = "";

export function updateResponseEditor(data) {
  responseEditorElement.innerHTML = "";
  const pEl = document.createElement("p");
  pEl.innerHTML = "<pre>" + JSON.stringify(data, null, 2) + "</pre>";
  responseEditorElement.appendChild(pEl);
}
