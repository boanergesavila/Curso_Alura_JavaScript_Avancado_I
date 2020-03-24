class NegociacaoController {

    constructor() {
        /* alias para não repetir o querySelector
           this não aponta mais para document, assim, 
           O retorno da função bind é a função querySelector, 
           que tem como contexto o document, ou seja, seu this será document.*/
        let $ = document.querySelector.bind(document);

        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");

    }
    
    adiciona(event) {
        event.preventDefault();

        // "..." significa spread operator, a função está preparada para receber N elementos, como se fosse um for
        let data = new Date(...
            this._inputData.value
                .split("-")
                .map((item, indice) => item -indice % 2)
        );
        
        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        );
        
        console.log(negociacao);
    }
}