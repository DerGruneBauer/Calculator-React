import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import OutputBox from './components/outputBox';
import ButtonBox from './components/buttonBox';
import Button from './components/button';
import './themes.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = 
    {
      data: '',
      theme: 'themeOne',
    }
  }

  toggleTheme(e) {
    const value = e.target.getAttribute('value');
    this.setState({ theme: value });
  }

  clickKeypad(e) {
    const value = e.target.getAttribute('data-value');
    if(value == 'reset'){
      this.resetKeypad();
    } else if (value == 'delete'){
      this.deleteEntry();
    } else if(value == ''){
      this.calculate();
    } else {
      this.addEntry(value);
    }
  }

  addEntry(value){
    return this.state.data.length < 10 ? this.setState({ data: this.state.data + value }) : this.setState({ data: this.state.data });
  }

  deleteEntry(){
    try {
      let updatedCalculation = this.state.data.substring(0, this.state.data.length-1);
      this.setState({ data: updatedCalculation});
    } catch {
      console.log("no errors here, buddy");
    }
  }

  resetKeypad(){
    this.setState({ data: '' });
  }

  calculate() {
    try {
      const result = Math.round(eval(this.state.data) * 100) / 100;
      this.setState({ data: result });
    } catch {
      console.log("not gonna work dumbo");
    }
  }

  //find out if this is correct way to pass items down or if toggles should be listed individually as buttons are here
  toggleValues = ["themeOne", "themeTwo", "themeThree"];

  render(){
    return (
      <div className={`App ${this.state.theme}`}>
        <div className="calculator">
        <Header value={this.toggleValues} onClick={this.toggleTheme.bind(this)}></Header>
        <OutputBox data={this.state.data}></OutputBox>
        <ButtonBox>
                <Button onClick={this.clickKeypad.bind(this)} label="7" value="7"></Button>
                <Button onClick={this.clickKeypad.bind(this)} label="8" value="8"></Button>
                <Button onClick={this.clickKeypad.bind(this)} label="9" value="9"></Button>
                <Button onClick={this.clickKeypad.bind(this)} label="DEL" color="blue" value="delete"></Button>

                <Button onClick={this.clickKeypad.bind(this)} label="4" value="4"></Button>
                <Button onClick={this.clickKeypad.bind(this)} label="5" value="5"></Button>
                <Button onClick={this.clickKeypad.bind(this)} label="6" value="6"></Button>
                <Button onClick={this.clickKeypad.bind(this)} label="+" value="+"></Button>

                <Button onClick={this.clickKeypad.bind(this)} label="1" value="1"></Button>
                <Button onClick={this.clickKeypad.bind(this)} label="2" value="2"></Button>
                <Button onClick={this.clickKeypad.bind(this)} label="3" value="3"></Button>
                <Button onClick={this.clickKeypad.bind(this)} label="-" value="-"></Button>

                <Button onClick={this.clickKeypad.bind(this)} label="." value="."></Button>
                <Button onClick={this.clickKeypad.bind(this)} label="0" value="0"></Button>
                <Button onClick={this.clickKeypad.bind(this)} label="/" value="/"></Button>
                <Button onClick={this.clickKeypad.bind(this)} label="x" value="*"></Button>

                <Button onClick={this.clickKeypad.bind(this)} label="RESET" color="blue" size="2" value="reset"></Button>
                <Button onClick={this.calculate.bind(this)} label="=" color="red" size="2" value=""></Button>
        </ButtonBox>
        </div>
      </div>
    );
  }
}

export default App;
