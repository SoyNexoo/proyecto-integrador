import { ADDFAVORITE, DELETEFAVORITE, ORDER, FILTER, SHOWALL } from "./types"
import axios from "axios";

//! ACTIONS CREATORS

// export function addFavorite (objCharacter){
//     return {type: ADDFAVORITE, payload: objCharacter}
// }


// ACTION | addFav
export const addFavorite = (character) => {
   const endpoint = 'http://localhost:3001/favorites/';
   return async (dispatch) => {
      try{
      const response = await axios.post(endpoint, character)
         const { data} = response
         return dispatch({
            type: ADDFAVORITE,
            payload: data,
         });
      } catch(error){
         alert(error.message)
      }}
   };



export function deleteFavorite (id){
   const endpoint = 'http://localhost:3001/favorites/' + id
   return async (dispatch) => {
      try {
         const response = await axios.delete(endpoint)
         const {data} = response
         return({
            type: DELETEFAVORITE,
            payload: data
         })
      } catch (error) {
         alert(error.message)
      }
   }

}

export function filterCards(gender){
    return {type: FILTER, payload: gender}
}

export function orderCards(order){
    return {type: ORDER, payload: order}
}

export function showAll(){
   return {type: SHOWALL}
}