import React, {Component} from 'react'
import {connect} from 'react-redux'
import Book from './Book.js'
class BookList extends Component{
  render(){
    let bookList = this.props.books;
    let searchTerm = this.props.searchTerm.toLowerCase();
    if(searchTerm ===''){
      bookList = bookList.map((book,indx)=>{
        return <Book key={indx} book={book} ></Book>
      })
    }else{
      bookList = bookList.filter((book)=>{
        let bookTitle = book.title.toLowerCase();
        return bookTitle.indexOf(searchTerm) >= 0
      })
      bookList = bookList.map((book,indx)=>{
        return <Book key={indx} book={book} ></Book>
      })
    }

    return(
      <div className="col-sz-6 grid-col-2 grid-row-2">
        <div className="col-sz-2 grid-col-4 grid-row-5 grid-gap-strong">
          <h2 className='col-sz-4 item-center'>BOOK LIST</h2>
          {bookList}
        </div>
      </div>
    )
  }
}


const mapStateToProps = state=> ({
  books: state.books,
  searchTerm: state.searchTerm
})
export default connect(mapStateToProps,null)(BookList);
