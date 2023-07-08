import { ADDFAVORITE, DELETEFAVORITE, ORDER, FILTER } from "./types"

//! ACTIONS CREATORS

export function addFavorite (objCharacter){
    return {type: ADDFAVORITE, payload: objCharacter}
}

export function deleteFavorite (id){
    return {type: DELETEFAVORITE, payload: id}
}

export function filterCards(gender){
    return {type: FILTER, payload: gender}
}

export function orderCards(order){
    return {type: ORDER, payload: order}
}
