const Mask = {
    cpfCnpj(input) {
        let value = input.value;
        value.replace(/\D/, "");
        if (value.length > 14) {
            value = value.slice(0, -1)
        }
        value = value.replace(/(\d{2})(\d{3})(\d{3}(\d{4}))/, "$1.$2$.$3/$4-$5");
        input.value = value;
    },
    cep(input) {
        let value = input.value;
        value = value.replace(/\D/, "");
        if (value.length > 8) {
            value = value.slice(0, -1);
        }
        value = value.replace((/(\d{5})(\d{3})/), "$1-$2");
        input.value = value;
    }
}
const Validate = {
    isEmail(input){
        //apagar mensagens de erro;
        Validate.clearErrors(input);
        let value = input.value;
        let error = null;
        const formatEmail = /^\w+([\.-_]?\w+)*@\w+([\.-_]?\w+)*(\.\w{2,3})+$/;
        if(!value.match(formatEmail)){
            error = "Email invalido";
            Validate.displayError(input,error);
            return;
        }
        input.value = value;
    },
    isCPF_CNPJ(input){
        Validate.clearErrors(input);
        let value = input.value;
        let error = null;
        const CleanValues = value.replace(/\D/g,'');
        if(CleanValues.length < 14 && CleanValues.length != 14){
            error = "CNPJ incorreto";
        }
         if(error){
            Validate.displayError(input,error);
            return;
        }
        input.value = value;
    },
    isCEP(input){
        Validate.cleanErrors(input);
        let value = input.value;
        let error = null;
        const CleanValues = value.replace(/\S/g,'');
        if(CleanValues.length != 8){
            error = "CEP incorreto";
            Validate.displayError(input,error);
        }
    },
    clearErrors(input) {
        const errorDiv = input.parentNode.querySelector('.error');
        if (errorDiv) {
            errorDiv.remove()
        }
    },
    displayError(input, error){
        const div = document.createElement('div');
        div.classList.add('error'); 
        div.innerHTML = error;
        input.parentNode.appendChild(div);
        input.focus();
    }

}