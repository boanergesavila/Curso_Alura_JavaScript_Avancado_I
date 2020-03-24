class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);

        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");

    }
    
    adiciona(event) {
        event.preventDefault();

        console.log(typeof (this._inputData.value));
        console.log(this._inputData.value);
        let data = new Date(...
            this._inputData.value
                .split("-")
                .map(function(item, indice){
                    return item -indice % 2;
                })
        );

        console.log(data);
        /*
        let negociacao = new Negociacao(
            this._inputData .value,
            this._inputQuantidade.value,
            this._inputValor.value
        );
            
        // adicionar a negopciação em uma lista
        console.log(negociacao);

        console.log(this.inputData.value);
        console.log(this.inputQuantidade.value);
        console.log(this.inputValor.value);*/
    }
}