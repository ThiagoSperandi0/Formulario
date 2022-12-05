const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const msgError = 'Informe um valor valido para: ';

function initApp() {
    addEventInElements(firstName, `${msgError} Primeiro nome`);
    addEventInElements(lastName, `${msgError} Sobrenome`);
    addEventInElements(password, `${msgError} Senha`);
    addEventInElements(email, 'Parece que esse email não é valido');
}

function addEventInElements(element, message) {  
    element.addEventListener('blur', function(){
        createObject(element);

        if(element.type === 'text' || element.type === 'password') {
            validateEmptyFields(element, createObject(element, message));
        } else{
            isEmailValid(element, createObject(element, message));
        }
    })
}

function createObject(input, message) {
    return{
        containerErrors: input.parentNode.children[1],
        message: message
    }
}

initApp();