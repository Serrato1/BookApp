import React, {Component} from 'react'
import {connect} from 'react-redux'
import {removeBook,markBook} from '../actions'

import {bindActionCreators} from 'redux'
class Book extends Component{

  markBook = (id)=>{
    this.props.markBook(id)
  }
  removeBook = (id) =>{
    this.props.removeBook(id)
  }
  render(){
    console.log("Book Properties : ",this.props)
    let {title, description, author, published,id,isSold} = this.props.book;
    return(
      <div  className="book grid-col-1 bg-light bg-grey border-color-none edges-weak"  >
          <div><b>{title}</b></div>
          <div><i>{description}</i></div>
          <div className="grid-col-2 grid-row-1">
            <div className="item-center border-weak" onClick={(event)=>{this.markBook(id)}}>{isSold ? <div>Out of Stock</div> : <div>Mark Sold</div> } </div>
            <div className="item-center border-weak" onClick={(event)=>{this.removeBook(id) }}>DELETE</div>
          </div>

      </div>
    )
  }
}


const mapStateToProps = state=> ({
  books: state.books
})
const mapDispatchToProps = dispatch =>{
  return bindActionCreators({
    removeBook: removeBook,
    markBook : markBook,
  },dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Book);
