//tipos actions 
const Types={
//deve expecificar a duck
    MODIFICA_DATA_TEXTO: "contagem/MODIFICA_DATA_TEXTO"
};

//estado de contagem
const ESTADO_INICIAL={
    data:"",
    texto:"",
    contador:0
};
 
//reducer
//atualiza os dados quando o action dispara
//spread (...) passa os atributos de um objeto para outro, e atualiza os atributos iguais
export default function reducer(state=ESTADO_INICIAL,action){
    switch(action.type){
        case Types.MODIFICA_DATA_TEXTO: 
            return {
                ...state,
                data:action.payload.data,
                texto:action.payload.texto 
            } 
        default: return state
    }

}

//actions
//payload são os dados passados
//action dispara o reducer 
export function mudaDataTexto(data,texto){
    return {type: Types.MODIFICA_DATA_TEXTO, payload:{data,texto}}
}

/*
    Outra forma de construir a função acima

    export const mudaDataTexto=(data,texto) => {return {type: Types.MODIFICA_DATA_TEXTO, payload:{data,texto}}

    Outra forma de construir a função acima (quando tem somente uma ação)

    export const mudaDataTexto=(data,texto) => ({type: Types.MODIFICA_DATA_TEXTO, payload:{data,texto}})  
*/

