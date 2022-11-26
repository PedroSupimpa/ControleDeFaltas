const inputNome = document.querySelector(".new-cadastro-nome-input");
const inputMatricula = document.querySelector(".new-cadastro-matricula-input");
const inputCurso = document.querySelector(".new-cadastro-cursos");
const addButton = document.querySelector(".new-cadastro-button");
const cadastrosContainer = document.querySelector(".cadastros-container");

const alunoData = [];
const addAluno = (event) => {
  event.preventDefault();
  alunoData.push({
    nome: inputNome.value,
    matricula: inputMatricula.value,
    curso: inputCurso.value,
  });
  inputCurso.value = "";
  inputNome.value = "";
  inputMatricula.value = "";
  listaRender();
};

function listaRender() {
  while (cadastrosContainer.hasChildNodes()) {
    cadastrosContainer.removeChild(cadastrosContainer.firstChild);
  }
  alunoData.forEach((aluno) => {
    const alunoContainer = document.createElement("div");
    alunoContainer.classList.add("aluno-item");

    const nomeContent = document.createElement("p");
    nomeContent.innerHTML = aluno.nome;

    const matriculaContent = document.createElement("p");
    matriculaContent.innerHTML = aluno.matricula;

    const cursoContent = document.createElement("p");
    cursoContent.innerHTML = aluno.curso;

    alunoContainer.appendChild(nomeContent);
    alunoContainer.appendChild(matriculaContent);
    alunoContainer.appendChild(cursoContent);

    cadastrosContainer.appendChild(alunoContainer);
  });
}

/*const alunoContainer = document.createElement("div");
alunoContainer.classList.add("aluno-item");

const nomeContent = document.createElement("p");
nomeContent.innerHTML = inputNome.value;

const matriculaContent = document.createElement("p");
matriculaContent.innerHTML = inputMatricula.value;

const cursoContent = document.createElement("p");
cursoContent.innerHTML = inputCurso.value;

alunoContainer.appendChild(nomeContent);
alunoContainer.appendChild(matriculaContent);
alunoContainer.appendChild(cursoContent);

cadastrosContainer.appendChild(alunoContainer);*/
