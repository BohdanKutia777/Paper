const emailInputElem = document.querySelector('#email');
const passwordInputElem = document.querySelector('#password');

const emailErrorElem = document.querySelector('.error-text_email')
const passwordErrorElem = document.querySelector('.error-text_password');

const isRequired = value => value ? undefined : 'Required';

const isEmail = value => value.includes('@') ? undefined : 'Should be an email';

const validatorsByField = {
    email: [isRequired, isEmail],
    password: [isRequired],
};
const validate = (fieldname, value) => {
    const validators = validatorsByField[fieldname];
    return validators
    .map(validator => validator(value))
    .filter(errorText => errorText)
    .join(', ');
};


const OnEmailChange = event => {
    const errorText = validate('email', event.target.value);
    console.log(event.target.value);
    emailErrorElem.textContent = errorText;
}

const onPasswordChange =  event => {
    const errorText = validate('password', event.target.value);
    passwordErrorElem.textContent = errorText;
}

emailInputElem.addEventListener('input', OnEmailChange);
passwordInputElem.addEventListener('input', onPasswordChange);


const formElem = document.querySelector('.login-form');

const onFormSubmit = event => {
    event.preventDefault();
    const formData = [... new FormData(formElem)]
    .reduce((acc, [field,value]) => ({...acc, [field]: value}), {})
    alert(JSON.stringify(formData));
}

formElem.addEventListener('submit', onFormSubmit);
