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
        this._listaNegociacoes = new ListaNegociacoes();
    }
    
    adiciona(event) {
        event.preventDefault();

        this.ListaNegociacoes.adiciona(this._criaNegociacao());
        console.log(this._listaNegociacoes.Negociacao);
        /*
        let diaMesAno = DateHelper.dataParaTexto(this._inputData.value);
        console.log(negociacao);
        */
    }

    _criaNegociacao(){
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value);
    }

    // esse metodo so pode ser chamado por essa classe
    _limpaFormulario(){
        this._inputData = '';
        this._inputQuantidade = 1;
        this._inputValor = 0.0;

        this._inputData.focus();
    }
}