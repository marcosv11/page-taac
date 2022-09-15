const desc = document.querySelector("#descricao");
const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  let resultados = validador();
  if (resultados == true) {
    setSuccessFor(desc, "Deu certo a validação");
    console.log("resultados");
  } else {
    console.log("nn");
    errorvalidation(desc, resultados[1]);
  }
}

function errorvalidation(text, message) {
  const formControl = text.parentElement;
  const small = formControl.querySelector("small");
  small.innerText = message;
  formControl.className = "form-control error";
}

function setSuccessFor(a, message) {
  const formControl = a.parentElement;
  formControl.className = "form-control sucess";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

function validador() {
  if (regexValue(/\phases:/g)) {
    console.log("validou certo");
    if (regexValue(/\s+build:/g)) {
      console.log("validou build");
      if (regexValue(/\s+commands:\s+.+/g)) {
        console.log("validou commands");
        if (regexValue(/\s+reports:/g)) {
          console.log("validou reports");
          if (regexValue(/\s+arn:aws:codebuild/g)) {
            console.log("validou arn");
            if (regexValue(/\s+files:/g)) {
              console.log("validou files");
              if (regexValue(/\s+files:\s+.+/g)) {
                console.log("validou files");
              } else {
                return [
                  false,
                  "Caminho reports -> arn:aws:codebuild... -> files - Não contem arquivos especificados",
                ];
              }
              return true;
            } else {
              return [
                false,
                "Caminho reports -> arn:aws:codebuild... -> files - Não contem arquivos especificados",
              ];
            }
          } else {
            return [
              false,
              "Caminho reports -> arn:aws:codebuild... não encontrado",
            ];
          }
        } else {
          return [false, "Caminho reports não encontrado"];
        }
      } else {
        return [false, "Caminho phases -> Build - Não encontrado"];
      }
    } else {
      return [false, "Caminho Build não encontrado"];
    }
  } else {
    console.log("nao validou");
    return [false, "Caminho phases não encontrado"];
  }
}

function regexValue(rege) {
  let valorTextArea = desc.value;
  var validado = rege.test(valorTextArea);
  return validado;
}
