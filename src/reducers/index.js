



import {combineReducers} from 'redux'
import {FETCH_BOOKS, ADD_BOOK,REMOVE_BOOK,MARK_BOOK ,   SEARCH_BOOK  ,  AUTHENTICATE} from '../actions'

function books(state = [], action){
  switch(action.type){
    case FETCH_BOOKS:
      let books = action.books;
      books = books.map((book)=>{
        book.isSold = false
        return book
      })
      return [...state, ...books]
    case ADD_BOOK:
      return [...state,action.book]
    case REMOVE_BOOK:
      let newState = state.filter((book)=>{
        return book.id !== action.bookId
      })
      return [...newState]
    case MARK_BOOK:
      let stateNew = state.map((book)=>{
        console.log("book")
        if(book.id == action.bookId){
          console.log("------");
          book.isSold = !book.isSold
          return book;
        }
        return book;
      })
      return [...stateNew]
    default:
      return state
  }
}
function searchTerm(state = '',action){
  switch(action.type){
    case SEARCH_BOOK:
      return action.searchTerm
    default:
      return ''
  }
}
function authState(state = false,action){
  switch(action.type){
    case AUTHENTICATE:
      return true
    default:
      return false
  }
}
export default combineReducers({
  books,
  searchTerm,
  authState
})
