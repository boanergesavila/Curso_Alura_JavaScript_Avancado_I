class DateHelper {

    constructor(){
        throw new Error("Esta classe não pode ser instanciada");
    }

    static dataParaTexto(data) {
        return `${data.getDate()}/${(data.getMonth() + 1)}/${data.getFullYear()}`;
            /*data.getDate()
            + '/' + (data.getMonth() + 1)
            + '/' + data.getFullYear();*/
    }
    
    // "..." significa spread operator, a função está preparada para receber N elementos, como se fosse um for
    static textoParaData(texto) {
        if(!/\d{4}-\d{2}-\d{2}/.test(texto)) 
            throw new Error("Deve estar no formato aaaa-mm-dd");
            
        return  data = new Date(...texto.split("-").map((item, indice) => item -indice % 2)); // o mes no javascript vai de 0 à 11
    }

}