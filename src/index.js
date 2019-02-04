import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
var max_id=3;
var tasks = [
    {text: "Уборка", id: "001"},
    {text: "Готовка", id: "002"},
    {text: "Уроки", id: "003"} 
]

class AddTaskForm extends React.Component{
    constructor(props){
        super(props);
        this.create=props.create;
    }
    render() {
        return (
            <div className="add_task_form">
            <input type="text" placeholder="Add new task" className="task"></input>
            <button className="add" onClick={() => this.create()}>Add</button>
            </div>
        )
    }
}
class Task extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      };
      this.id = props.id;
      this.props=props
    }
    destroy(id){
        tasks.splice(tasks.findIndex(p => p.id === id), 1);
        console.log(tasks);
        document.getElementById(id).remove();
    }
    render() {
      return (
<div className='task' id = {this.id}>
            <p className='task'>{this.props.text}</p>
            <img alt="Delete" onClick={() => this.destroy(this.id)} className='del' src= 'https://st2.depositphotos.com/4520249/7735/v/950/depositphotos_77359134-stock-illustration-recycle-bin-icon.jpg'></img>
            <p className="status"><input type="checkbox" value="Finished"/>Finished</p>
          </div>
      );
    }
  }	

class App extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            tasks:[
            {text: "Уборка", id: "001"},
            {text: "Готовка", id: "002"},
            {text: "Уроки", id: "003"} 
        ]
    };
    }
    create(){
        max_id++;
        var h_id="0"*(3-max_id.toLocaleString().length)+max_id;
        tasks.push({text: document.getElementsByTagName("input").item(0).value, id: h_id});
        //document.getElementById('app').appendChild(React.createElement("Task",{id : h_id,key : h_id, text : document.getElementsByTagName("input").item(0).value}));
        //document.getElementById('app').innerHTML+="<task id = {h_id} key = {h_id} text = {document.getElementsByTagName('input').item(0).value} />";
        //document.getElementById('app').appendChild(document.createElement("<task id = {h_id} key = {h_id} text = {document.getElementsByTagName('input').item(0).value} />"));
        //appendChild(<task id = {h_id} key = {h_id} text = {document.getElementsByTagName("input").item(0).value} />)
        //React.createElement("Task",{id : h_id,key : h_id, text : document.getElementsByTagName("input").item(0).value})
        ReactDOM.render(
            <App/>,document.getElementById('root')
        );
        //this.setState({tasks});
        
    }

    render() {
        return (
            <div className="app" id = "app">
            <AddTaskForm create={this.create}/>
            {
            tasks.map((task, index) => {
            return <Task
                id ={task.id}
                key={task.id}
                text={task.text}/>
           })
         }
       </div>
        )
        
    }
}

  ReactDOM.render(
      <App/>,document.getElementById('root')
  );
  