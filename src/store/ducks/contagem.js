import firebase from "react-native-firebase";
import r from "../../util/references";
import {converteDia} from "../../util";
import uuid from "uuid/v1";
import {AsyncStorage} from "react-native";
import {CONTADOR_STORAGE_KEY} from "../../util/consts";

//tipos actions 
const Types={
//deve expecificar a duck
    MODIFICA_DATA_TEXTO: "contagem/MODIFICA_DATA_TEXTO",
    MODIFICA_CONTADOR: "contagem/MODIFICA_CONTADOR"
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
        case Types.MODIFICA_CONTADOR:
            return{
                ...state,
                contador:action.payload
            }     
        default: return state
    }

}

//actions
//payload são os dados passados
//action dispara o reducer 
export function mudaDataTexto(data,texto){
    return {
        type: Types.MODIFICA_DATA_TEXTO, payload:{data,texto}}
}

// action para mudar o contador do store (redux)
export function mudaContador(contador) {
    return { type: Types.MODIFICA_CONTADOR, payload: contador };
}
/*
    Outra forma de construir a função acima

    export const mudaDataTexto=(data,texto) => {return {type: Types.MODIFICA_DATA_TEXTO, payload:{data,texto}}

    Outra forma de construir a função acima (quando tem somente uma ação)

    export const mudaDataTexto=(data,texto) => ({type: Types.MODIFICA_DATA_TEXTO, payload:{data,texto}})  
*/


//actions não podem ser assíncronas (não pode usar async)
export function escreveDataBase(identidade, dia){
    
//caso utilizar await dentro da função é necessário explicitar que é uma função assíncrona usando "async"
//dispatch é utilizado para disparar o tipo e o dado da action    
    return async function(dispatch){
        try{
            const ingressos = await firebase.database().ref(r.INGRESSOS).orderByChild('dia').once('value');
            const ingressosLista = [];
            const diaNumero = converteDia(dia);
            let ingressoID;
            ingressos.forEach(c => {
                const ingresso = c.val();
                ingressosLista.push(ingresso);
            });
    
            for(let i=0; i<ingressosLista.length; i++){
                if(diaNumero === String(ingressosLista[i].dia)) {
                ingressoID = ingressosLista[i].id;
                break;
                }
            }
    
            const idChecking = uuid();
    
            //salva o checkin no firebase
            await firebase.database().ref(r.CHECKING.concat(idChecking)).set({ id: idChecking, ingressoId: ingressoID, usuarioId: identidade});
            //atribui a contador os dados salvos na mémoria interna do celular
            // para cada dia deve existir uma KEY com o contador salvo ou seja existem 5 valores salvo na memoria do celular são eles:
            // CONTADOR_STORAGE_KEY#1 - contador do primeiro dia
            // CONTADOR_STORAGE_KEY#2 - contador do segundo dia
            // CONTADOR_STORAGE_KEY#3 - contador do terceiro dia
            // CONTADOR_STORAGE_KEY#4 - contador do quarto dia
            // CONTADOR_STORAGE_KEY#5 - contador do quinto dia
            // apenas foi concatenado o dia ao final da KEY para facilitar
            let contador = await AsyncStorage.getItem(CONTADOR_STORAGE_KEY.concat('#').concat(diaNumero));
            //teste para determinar se a variavel contador já existe, caso sim incrementa 1, caso não inicializa a variavel com 1. (nos dois casos salva a variavel na memoria do celular)
            if(contador !== null){
                const novoContador = Number(contador)+1;
                await AsyncStorage.setItem(CONTADOR_STORAGE_KEY.concat('#').concat(diaNumero), String(novoContador));
                contador = novoContador;
            }else{
                const novoContador = 1;
                await AsyncStorage.setItem(CONTADOR_STORAGE_KEY.concat('#').concat(diaNumero), String(novoContador));
                contador = novoContador;
            }
            
            dispatch({
                type: Types.MODIFICA_CONTADOR,
                payload: contador
            });
        } catch(e){
            throw e;
        }
    }

    
}
