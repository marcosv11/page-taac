const desc = document.querySelector("#descricao");
const form = document.querySelector("#form");


form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  let resultados = validador();
  if (resultados == true) {
    setSuccessFor(desc, "Validação Correta ✅");
  } else {
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
    if (regexValue(/\s+build:/g)) {
      if (regexValue(/\s+commands:\s+.+/g)) {
        if (regexValue(/\echo\s+'Testes executados manualmente'/g)) {
          return [
            false,
            "Você declarou que os testes foram executados manualmente. Para seguir com esta implantação, é necessário informar o ID do Plano de Execução do Silk no agendamento da GMUD para validação do Motor de Confibilidade",
          ];
        }
        if (
          regexValue(/\echo\s+'Impossibilidade técnica para exercutar testes'/g)
        ) {
          return [false, "TEXTO 2"];
        }
        if (regexValue(/\echo\s+'Seguir sem testes com DA superintendente'/g)) {
          return [false, "texto 3"];
        }
        if (regexValue(/\s+reports:/g)) {
          if (regexValue(/\s+arn:aws:codebuild/g)) {
            if (regexValue(/\s+files:/g)) {
              if (regexValue(/\s+files:\s+.+/g)) {
              } else {
                return [
                  false,
                  "❌ Caminho reports -> arn:aws:codebuild... -> files - Não contem arquivos especificados ",
                ];
              }
              return true;
            } else {
              return [
                false,
                "❌ Caminho reports -> arn:aws:codebuild... -> files - Não contem arquivos especificados",
              ];
            }
          } else {
            return [
              false,
              "❌ Caminho reports -> arn:aws:codebuild... não encontrado",
            ];
          }
        } else {
          return [false, "❌ Caminho reports não encontrado"];
        }
      } else {
        return [false, "❌ Caminho build não encontrado"];
      }
    } else {
      return [false, "❌ Caminho Build não encontrado"];
    }
  } else {
    return [false, "❌ Caminho phases não encontrado"];
  }
}

function regexValue(rege) {
  let valorTextArea = desc.value;
  var validado = rege.test(valorTextArea);
  return validado;
}

const teste1 = document.querySelector("#descricao1");
const teste2 = document.querySelector("#form1");

teste2.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs1();
});

function checkInputs1() {
  let resultados = validador1();
  if (resultados == true) {
    setSuccessFor1(teste1, "Deu certo a validação");
  } else {
    errorvalidation(teste1, resultados[1]);
  }
}

function errorvalidation(text, message) {
  const formControl = text.parentElement;
  const small = formControl.querySelector("small");
  small.innerText = message;
  formControl.className = "form-control error";
}

function setSuccessFor1(a, message) {
  const formControl = a.parentElement;
  formControl.className = "form-control sucess";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

function validador1() {
  if (regexValue1(/\phases:/g)) {
    if (regexValue1(/\s+install:/g)) {
      if (regexValue1(/\s+build:\s+.+/g)) {
        if (regexValue1(/\s+commands:/g)) {
          if (regexValue1(/\echo\s+'Testes executados manualmente'/g)) {
            return [
              false,
              "❌Você declarou que os testes foram executados manualmente. Para seguir com esta implantação, é necessário informar o ID do Plano de Execução do Silk no agendamento da GMUD para validação do Motor de Confibilidade",
            ];
          }
          if (
            regexValue1(
              /\echo\s+'❌Impossibilidade técnica para exercutar testes'/g
            )
          ) {
            return [false, "TEXTO 2"];
          }
          if (
            regexValue1(/\echo\s+'Seguir sem testes com DA superintendente'/g)
          ) {
            return [false, "texto 3"];
          }
          if (regexValue1(/\s+artifacts:/g)) {
            return true;
          } else {
            return [false, "Caminho artifacts não encontrado"];
          }
        } else {
          return [false, "Caminho commands não encontrado"];
        }
      } else {
        return [false, "Caminho phases -> Build - Não encontrado"];
      }
    } else {
      return [false, "Caminho install não encontrado"];
    }
  } else {
    return [false, "Caminho phases não encontrado"];
  }
}

function regexValue1(rege) {
  let valorTextArea = teste1.value;
  var validado = rege.test(valorTextArea);
  return validado;
}
