import React from "react";
import "./style.css";

class App extends React.Component{
  constructor()
  {
    super();
    this.state={
      users: null
    }
  }
  componentDidMount()
  {
    fetch('https://reqres.in/api/users/').then((resp)=>
    {
      resp.json().then((result)=>
      {
        console.warn(result.data)
        this.setState({users:result.data})
      })
    })
  }
render()
    {
      return(
        <div>
        <h1> fetch api </h1>
        <table >
  <tr>
    <th>id no</th>
    <th>Firstname</th>
    <th>Lastname</th>
  <th>email</th>
  </tr>
  </table>
        {
          
          this.state.users ?
          this.state.users.map((item,i)=>
         <div>
         <table >
  <tr>
    <td>{i}</td>
    <td>{item.first_name}</td>
    <td>{item.last_name}</td>
     <td>{item.email}</td>
  </tr>
</table> </div>
          )
          : 
          null
        }
         </div>
      )
    }

}
export default App;