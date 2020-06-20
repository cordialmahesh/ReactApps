import React, { Component } from 'react'

class PresDetails extends Component{

    constructor(){
        super()
        this.state = {
            presDetails : []
        }
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/todos").then(out=>out.json()).then(
        output=>{
            this.setState({
            presDetails:output
        })}
        )
    }
    render(){
    return(
        <div>
            <h2>Presentation Details</h2>
            <table>
                <thead>
                    <tr>
                        <th>PM- ID</th>
                        <th>MCP- ID</th>
                        <th>Presentation Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.presDetails.map(pres=>(
                            <tr key ={pres.userId}>
                                <td>{pres.userId}</td>
                                <td>{pres.id}</td>
                            <td>{pres.title}</td>
                            </tr>
                        ))}
                    </tbody>
            </table>
        </div>
        
        
    )
}
}
export default PresDetails