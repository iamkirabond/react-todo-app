import React from 'react';
import {Component} from 'react';
import './App.css';

function Item(props){
  return(
    <li key={props.value.key} className='todoItem'>
      <input type="checkbox" checked={props.value.checked}
        onChange={() => props.onTodoClick(props.value)} 
      />
      <p>{props.value.text}</p>
    </li>
  )
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lenght: 0,
      taskList: [],
    };
  }
  onTodoClick(item){
    const currentKey = item.key;
    console.log(item, this.state.taskList[item])
  }
  addNewTask(itemText){
    let newTaskList = this.state.taskList.concat([
      {
        text: itemText,
        key: new Date().toLocaleString(),
        checked: false,
      }
    ])
    this.setState({
      lenght: this.state.lenght + 1,
      taskList: newTaskList,
    });
    return ;
  }

  render(){
    const list = this.state.lenght !== 0 ? this.state.taskList.map((item, index) => {
      return (
        <Item 
          key={this.state.taskList[index].key}
          value={this.state.taskList[index]}
          onTodoClick={(item)=>this.onTodoClick(item)}
        />
      ); 
    }) : '';
 
    return (
      <div className="App">
        <h1>to-do list</h1>
        <input 
          className='App-input'
          type='text'
          onKeyPress={event => {
                if (event.key === 'Enter') {
                  this.addNewTask(event.target.value);
                  event.target.value = '';
                }
              }}
          defaultValue=''
        >
        </input>
        <ul className='itemList'>
          {list}
        </ul>
      </div>
    );
  }
}

export default App;
