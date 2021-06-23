export class ConversaoResponse{
    constructor(
        public base: string,
        public date: string,
        public rates: any,
    ){}
}

//{"base": "USD", "date": "2017/-03-08", "rates": {"BRL":3.1405}}

//Este exemplo acima é oque a consulta irá me retornar