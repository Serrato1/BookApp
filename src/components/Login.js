import React, {Component} from 'react'
import { Route, Redirect } from 'react-router'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {authenticateLogin} from '../actions'
class Login extends Component{
  onChange = (e)=>{
    let input = e.target.value;
    let target = e.target.name;
    console.log("Input : ",input,"\nTarget: ",target)
  }
  authenticateLogin = ()=>{
    this.props.authenticateLogin();
  }
  render(){
    return(
      <div>
        <div className="nav-bar bg-dark color-white">
          <div>BookStore Login</div>
        </div>
        <form className="form center grid-col-1" onSubmit={(e)=>{e.preventDefault();console.log("redirecting");<Redirect to="/"/>}}>
          <input className="item-center" name="user_name" type="text" placeholder="Enter Username" onChange={this.onChange}/>
          <input className="item-center" name="password" type="text" placeholder="Enter Password" onChange={this.onChange}/>
          <Link to="/" className="item-center" onClick={this.authenticateLogin}><input className="item-center" type="submit" placeholder="" value="LOGIN"  /> </Link>
        </form>
      </div>
    )
  }
}
const mapDispatchToProps = dispatch =>{
  return bindActionCreators({
    authenticateLogin : authenticateLogin
  },dispatch)
}
export default connect(null,mapDispatchToProps)(Login);
