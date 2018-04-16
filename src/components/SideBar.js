import React, { Component } from 'react';
import { Provider } from 'react-redux'
import {connect} from 'react-redux'

import {addBook , searchBook} from '../actions'
import {bindActionCreators} from 'redux'
class SideBar extends Component {
  state = {
    searchTerm : '',
    title: '',
    subtitle: '',
    author: '',
    publisher: '',
    website: '',
    description: ''
  }



  onSearch = (e)=>{
    e.preventDefault();
    let searchTerm = e.target.value;
    this.setState({
      searchTerm
    })
    this.props.searchBook(searchTerm)
  }
  onSubmit = (e)=>{
    e.preventDefault();
    console.log(this.state);
    this.props.addBook(this.state)
  }
  onChange = (e)=>{
    let input = e.target.value;
    let target = e.target.name;
    console.log(`Input : ${input} \nTarget: ${target}`)
    let newState = this.state;
    newState[target] = input;
    this.setState(newState)
  }
  render() {
    return (
      <div className="sidebar bg-white color-black">
        <div className="text-center"> SEARCH</div>
        <div className =  'form grid-col-1' onSubmit={this.searchSubmit}>
           <input type="text" placeholder="Search a Book" className="item-center" onChange={this.onSearch}></input>
        </div>
        <div className="text-center"> Add New Book </div>
        <form className="form grid-col-1" onSubmit =  {this.onSubmit}>
          <input className="item-center" type="text" name="title" placeholder="Title" onChange={this.onChange}></input>
          <input className="item-center" type="text" name="subtitle" placeholder="Subtitle" onChange={this.onChange}></input>
          <input className="item-center" type="text" name="author" placeholder="Author" onChange={this.onChange}></input>
          <input className="item-center" type="text" name="publisher" placeholder="Publisher" onChange={this.onChange}></input>
          <input className="item-center" type="text" name="website" placeholder="Website" onChange={this.onChange}></input>
          <textarea  className="item-center" name="description" placeholder="Description" onChange={this.onChange}></textarea>
          <input className="item-center" type="submit" value="Create Book"></input>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch)=>{
  return bindActionCreators({
    addBook : addBook,
    searchBook: searchBook
  },dispatch)
}
export default connect(null,mapDispatchToProps)(SideBar);
