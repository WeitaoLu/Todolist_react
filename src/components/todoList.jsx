import React, { Component, useRef } from 'react';
import { Floot } from './todo';

export class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: '',
      donecount: 0,
      count: 0,
      todolist: new Array(0),
      donelist: new Array(0),
      showstate: 0,
      all: false,
    };

    this.addtodo = this.addtodo.bind(this);
    this.showstate_all = this.showstate_all.bind(this);
    this.showstate_active = this.showstate_active.bind(this);
    this.showstate_completed = this.showstate_completed.bind(this);
  }

  addtodo(e) {
    console.log(e.keyCode);
    if (e.keyCode === 13) {
      const jug = this.state.inputVal;
      if (jug == '') {
      } else {
        let num = this.state.count;
        num += 1;
        const todoli = this.state.todolist.slice();
        const doneli = this.state.donelist.slice();
        const word = this.state.inputVal;
        todoli.push(word);
        doneli.push(false);
        this.setState({
          inputVal: '',
          count: num,
          todolist: todoli,
          donelist: doneli,
        });
      }
    }
  }

  toggleall() {
    const arr = document.getElementsByClassName('toggle');
    let num = this.state.count;
    const copy1 = this.state.donelist.slice();
    const isdoneall = this.state.all;
    for (let i = 0; i < arr.length; ++i) {
      arr[i].checked = !this.state.all;
    }
    for (let i = 0; i < this.state.count; i++) {
      copy1[i] = !this.state.all;
    }
    this.setState({
      donelist: copy1,
      all: !isdoneall,
    });
    if(this.state.all==false){this.setState({donecount:num})}
    else{this.setState({donecount:0})}
  }

  toggle(index) {
    const copy = this.state.donelist.slice();
    copy[index] = !copy[index];
    let num = this.state.donecount;
    if(copy[index]==1&&num>=0){num=num+1;}
    else{num=num-1;}
    this.setState({
      donelist: copy,
      donecount:num
    });
  }
  handleChange = e => {
    this.setState({
      inputVal: e.target.value,
    });
  };

  destroyall() {
    const copy1 = this.state.donelist.slice();
    const copy2 = this.state.todolist.slice();
    let num = this.state.count;
    for (let i = 0; i < this.state.count; ++i) {
      if (copy1[i] === true) {
        copy1.splice(i, 1);
        copy2.splice(i, 1);
        i--;
        num -= 1;
      }
    }
    const arr = document.getElementsByClassName('toggle');
    for (let i = 0; i < arr.length; ++i) {
      if (arr[i].checked) {
        arr[i].checked = false;
      }
    }
    this.setState({
      todolist: copy2,
      donelist: copy1,
      count: num,
      donecount:0
    });
  }

  destroy(index) {
    const copy = this.state.todolist.slice();
    let num = this.state.count;
    num -= 1;
    copy.splice(index, 1);
    this.setState({
      count: num,
      todolist: copy,
    });
  }
  showstate_all() {
    if (this.state.showstate === 0) {
    } else {
      this.setState({
        showstate: 0,
      });
    }
  }

  showstate_active() {
    if (this.state.showstate === 1) {
    } else {
      this.setState({
        showstate: 1,
      });
    }
  }

  showstate_completed() {
    if (this.state.showstate === 2) {
    } else {
      this.setState({
        showstate: 2,
      });
    }
  }

  render() {
    let arr;
    if (this.state.showstate === 0) {
      arr = this.state.todolist.slice();
    } else if (this.state.showstate === 1) {
      arr = [];
      for (let i = 0; i < this.state.count; ++i) {
        if (this.state.donelist[i] !== true) {
          arr.push(this.state.todolist[i]);
        }
      }
    } else {
      arr = [];
      for (let i = 0; i < this.state.count; ++i) {
        if (this.state.donelist[i] === true) {
          arr.push(this.state.todolist[i]);
        }
      }
    }
    return (
      <div className="all">
        <section className="todoapp">
          <div>
            <header className="header">
              <h1>{this.props.children}</h1>
              <input
                type="text"
                className="new-todo"
                placeholder="what needs to be done?"
                onKeyDown={this.addtodo}
                onChange={this.handleChange}
                value={this.state.inputVal}
              />
            </header>
            <section className="main">
              <input type="checkbox" id="toggle-all" className="toggle-all" />
              <label htmlFor="toggle-all" onClick={this.toggleall.bind(this)}>
                ::before
              </label>
              <ul className="todo-list">
                {arr.map((item, index) => (
                  <li
                    key={index}
                    className={
                      (this.state.donelist[index] || this.state.showstate == 2) &&
                      this.state.showstate != 1
                        ? 'completed'
                        : ''
                    }>
                    <input
                      type="checkbox"
                      className="toggle"
                      id={`box${index}`}
                      checked={
                        (this.state.donelist[index] || this.state.showstate == 2) &&
                        this.state.showstate != 1
                      }
                      onClick={this.toggle.bind(this, index)}
                    />
                    <label>{item}</label>
                    <button
                      className="destroy"
                      onClick={this.destroy.bind(this, index)}></button>
                  </li>
                ))}
              </ul>
            </section>
            <Floot
              donecount={this.state.donecount}
              count={this.state.count}
              showstate={this.state.showstate}
              destroyall={this.destroyall.bind(this)}
              showstate_all={this.showstate_all}
              showstate_active={this.showstate_active}
              showstate_completed={this.showstate_completed}
            />
          </div>
        </section>
        <footer class="info">
            <p><a href="https://github.com/tastejs/todomvc/tree/gh-pages/examples/react"> Based on this example and fixed it's bug</a></p>
            <p><a href="https://github.com/sjtuLLWWTT/Todolist_react">Visit My Github</a></p>
        </footer>
      </div>
    );
  }
}
