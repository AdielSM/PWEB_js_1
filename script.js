const pessoas = [
    { nome: 'Ana', idade: 25, cpf: '123.456.789-00' },
    { nome: 'Carla', idade: 30, cpf: '987.654.321-00' },
    { nome: 'Trísia', idade: 28, cpf: '456.789.123-00' }
];

const listaPessoasElement = document.createElement('ul');
document.body.appendChild(listaPessoasElement);

for (let pessoa of pessoas) {
    inserirPessoaNaLista(pessoa);
}

function inserirPessoa() {
    const inputNomeElement = document.querySelector('#nome');
    const inputIdadeElement = document.querySelector('#idade');
    const inputCpfElement = document.querySelector('#cpf');

    const pessoa = {
        nome: inputNomeElement.value,
        idade: inputIdadeElement.value,
        cpf: inputCpfElement.value
    };

    inserirPessoaNaLista(pessoa);
}

function inserirPessoaNaLista(pessoa) {
    const liElement = document.createElement('li');
    const botaoRemoverElement = document.createElement('button');
    botaoRemoverElement.textContent = 'X';
    botaoRemoverElement.addEventListener('click', (event) => {
        liElement.remove();
    });

    const spanElement = document.createElement('span');
    spanElement.textContent = `Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, CPF: ${pessoa.cpf} `;

    spanElement.addEventListener('click', event => {
        const inputNomeElement = document.createElement('input');
        inputNomeElement.value = pessoa.nome;
        const inputIdadeElement = document.createElement('input');
        inputIdadeElement.value = pessoa.idade;
        const inputCpfElement = document.createElement('input');
        inputCpfElement.value = pessoa.cpf;

        const botaoSalvarElement = document.createElement('button');
        botaoSalvarElement.textContent = 'Salvar';
        botaoSalvarElement.addEventListener('click', () => {
            pessoa.nome = inputNomeElement.value;
            pessoa.idade = inputIdadeElement.value;
            pessoa.cpf = inputCpfElement.value;

            spanElement.textContent = `Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, CPF: ${pessoa.cpf} `;
            liElement.removeChild(editContainer);
            liElement.insertBefore(spanElement, botaoRemoverElement);
        });

        const editContainer = document.createElement('div');
        editContainer.appendChild(inputNomeElement);
        editContainer.appendChild(inputIdadeElement);
        editContainer.appendChild(inputCpfElement);
        editContainer.appendChild(botaoSalvarElement);

        liElement.insertBefore(editContainer, botaoRemoverElement);
        liElement.removeChild(spanElement);
    });

    liElement.appendChild(spanElement);
    liElement.appendChild(botaoRemoverElement);

    listaPessoasElement.appendChild(liElement);
}