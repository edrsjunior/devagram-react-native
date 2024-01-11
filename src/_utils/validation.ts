const validateName = (name: string) : boolean => {
    return name.length > 2;
};

const validateEmail = (email: string) : boolean => {
    const regexExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return regexExp.test(email);
};

const validatePassword = (password: string) : boolean =>{
    return password.length > 5;
};

const validateConfirmPassword = (pass: string, confirmPass: string) : boolean =>{
    return pass === confirmPass;
};
