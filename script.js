const form = document.getElementById('contact-form')
const contactName = document.getElementById('contact-name');
const contactNumber = document.getElementById('contact-number');
let names = [];
let numbers = [];
let linhas = "";

form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log(contactName.value);
    console.log(contactNumber.value);
    addLinha();
    atualizarTabela();
});

function addLinha() {

    if (names.includes(contactName.value)) {
        alert(`Contato ${contactName.value} já foi adicionado`);
    } else {
    names.push(contactName.value);
    numbers.push(formatPhoneNumber(contactNumber.value));
    
    let linha = `<tr>`;
    linha += `<td>${contactName.value}</td>`;
    linha += `<td>${numbers[numbers.length - 1]}</td>`;
    linha += `</tr>`;

    linhas += linha;
    }
}

function atualizarTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
function formatPhoneNumber(number) {
    // Remove any non-digit characters
    number = number.replace(/\D/g, '');
    
    // Add formatting if it has the correct length
    if (number.length === 10) {
        number = number.replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3');
    } else if (number.length === 11) {
        number = number.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    }
    
    return number;
}