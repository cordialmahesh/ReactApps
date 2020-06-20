import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { Button } from 'react-bootstrap'

class Todo extends Component{
    constructor(){
        super()
        this.state = {
        task : '',
        outTask : [],
        inputValidataion : false

       }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.deleteTask=this.deleteTask.bind(this);

    }
    handleChange(event) {
        this.setState({
            task : event.target.value
        })
    }
    handleSubmit() {
       
        let outTask = this.state.outTask
         outTask.push(this.state.task)
               this.setState({
                    outTask,
                    task : ' ',
            
                })
 
    }
     deleteTask = () => {
       let deleteTask=this.state.outTask
       deleteTask.pop(this.state.task)
       this.setState({
        deleteTask
         })
       
     }
    
    render(){
        return(
            <div className="container alert-info">
                <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-12 text-center"><h5>TODO APP</h5></div>
                </div>
                <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                <input type="text" id="inText" className="form-control" value={this.state.task} onChange={this.handleChange}/>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                <button  className="btn btn-primary mr-2" onClick={this.handleSubmit}>ADD</button>
                <button  className="btn btn-danger" onClick={ this.deleteTask}>DELETE</button>
                </div>
                </div>
                <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4 col-12" id="taskOutput" >
                <table>
                <tbody>
                    {
                            this.state.outTask.map((task)=>
                             <tr>
                               <td className="task-box-style">{task}</td>
                             </tr>
                    )}
                </tbody>
                </table>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-8 col-8"></div>
                </div> 
                
                
                
            </div>
        )
    }
}

export default Todo