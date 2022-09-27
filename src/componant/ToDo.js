import React, { Component } from "react";



class ToDo extends Component {
    state = {
        completed : this.props.task.Component
    }
    toggelCpmleted = () => {
        this.setState(prevState => ({
            completed : !prevState.completed
        }))
        this.props.onToggleCompleted(this.props.task.id)
    }

    render () {
        return (
            <>
                <li className="list-group-item d-flex align-tiems-center justify-content-between" style={this.state.completed? {backgroundColor : 'green'} : null}>
                    {this.props.task.name} 
                    <button className="btn btn-sm ml-auto btn-outline-success" onClick={() => {this.toggelCpmleted()}}  style={this.state.completed? {backgroundColor : 'green'} : {backgroundColor : 'white'}}>&#x2713;</button>
                </li>
            </>
        );
    }
}


export default ToDo