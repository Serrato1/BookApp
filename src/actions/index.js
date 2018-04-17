import axios from 'axios'
export const FETCH_BOOKS = 'FETCH_BOOKS'
export const ADD_BOOK = 'ADD_BOOK'
export const REMOVE_BOOK = 'REMOVE_BOOK'
export const MARK_BOOK = 'MARK_BOOK'
export const SEARCH_BOOK = 'SEARCH_BOOK'

export function fetchBooks(){
  return (dispatch) =>{
    axios('http://localhost:8082/api/books')
    .then(({data})=>{
      let books = data;
      console.log('axios data return ', books);
      dispatch({
        type: FETCH_BOOKS,
        books: books
      })
    })

  }
}

export function addBook(bookObj){
  return (dispatch) =>{
      console.log('Received Action addBook. Adding Book : ' , bookObj);
      axios.post('http://localhost:8082/api/books',{
        ...bookObj
      })
      .then((resp)=>{
        console.log('Post Response : ',resp);
        dispatch({
          type: ADD_BOOK,
          book: bookObj
        })
      })

  }
}

export function removeBook(bookId){
  return (dispatch) =>{
      console.log('Received Action addBook. Adding Book : ' , bookId);
      axios.delete(`http://localhost:8082/api/books/${bookId}`)
      .then((resp)=>{
        console.log("Delete Response : ", resp);
        dispatch({
          type: REMOVE_BOOK,
          bookId: bookId
        })
      })

  }
}

export function markBook(bookId){
  return (dispatch) =>{
      console.log('Received Mark Sold . Marking Book as Sold: ' , bookId);
      dispatch({
        type: MARK_BOOK,
        bookId: bookId
      })
  }
}
export function searchBook(searchTerm){
  return (dispatch) =>{
      console.log('Received Mark Sold . Marking Book as Sold: ' , searchTerm);
      dispatch({
        type: SEARCH_BOOK,
        searchTerm: searchTerm
      })
  }
}
export const AUTHENTICATE = "AUTHENTICATE"
export function authenticateLogin(username,password){
  return (dispatch) =>{
      console.log('Received Authentication Action\nUsername: ',username,"\nPassword: ",password);
      dispatch({
        type: AUTHENTICATE,
        userName: username ,
        password: password
      })
  }
}
