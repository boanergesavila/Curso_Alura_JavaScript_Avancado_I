class Mensagem {
    constructor(texto = '') { //valor padrão se não passar um texto no construtor da classe
        this._texto = texto;
    }

    get texto() {
        return this._texto;
    }

    set texto(texto) {
        this._texto = texto;
    }
}