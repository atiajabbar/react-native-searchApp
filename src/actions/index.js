


import axios from 'axios';
// const API_KEY = 'AIzaSyBBe5TRWdsVy4dZlw_nC5Ch7czRaln4Mhs';
// const SEARCH_ID= '009750979193800334184:qh0_6h3vtc8';
//const ROOT_URL = `https://google.com/movies?appid=${API_KEY}`;

export const FETCH_KEYWORD = 'FETCH_KEYWORD';

const ROOT_URL = `https://www.googleapis.com/customsearch/v1?key=AIzaSyBBe5TRWdsVy4dZlw_nC5Ch7czRaln4Mhs&num=9&lr=lang_en&safe=medium&cx=009750979193800334184:qh0_6h3vtc8&cr=PAK&alt=json`

export function fetchKeyword(search) {
  const url =`${ROOT_URL}&q=${search}`;
  return (dispatch) => {
    const res = axios.get(url)
    .then(response => {
      dispatch({type: FETCH_KEYWORD, payload: response.data.items});
    })
      .catch(error => {
        console.log(error.response.data);
      });
 
  };
  }
  
  
  
  
  
  
  
  //  //const data = null;


  //  const request = axios.get(url)
  // .then(request => {
  //  //request = data;


  // // realm.save(request)
  // console.log('Request:', request);

  // return {
  //   type: FETCH_KEYWORD,
  //   payload: request
  // };
  // })
  // .catch(err => {
  //   console.log(err);
  // });
  






