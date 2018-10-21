import React, { Component } from 'react';

class Palindrome extends Component {

    constructor(){
        super();

        this.state={
            userinput:'',
            Palindrome:''
        };
    }

    handleChange(val){
        this.setState({userInput:val}); // what does this do
    }

    isPalinDrome(userInput){
        var forwards=userInput;
        var backwards=userInput;
        backwards=backwards.split('');
        backwards=backwards.reverse();
        backwards=backwards.join('')

        if(forwards===backwards){
            this.setState({Palindrome:'true'});
        } else {
            this.setState({Palindrome:'false'});
        }
    }
  render() {
    return (
        <div className="puzzleBox palindromePB">
        <h4> Palindrome </h4>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () => this.isPalindrome(this.state.userInput) }> Check </button>
        <span className="resultsBox"> Palindrome: { this.state.palindrome } </span>
      </div>
    )
  }
}
export default Palindrome;