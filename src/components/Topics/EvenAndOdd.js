import React, {Component} from 'react'

class EvenAndOdd extends Component{
    
    constructor(){
        super()
        this.state={
            evenArray:[],
            OddArray:[],
            userInput:''
        }
    }
    
    handleChange(value){
        this.setState({userInput:value});
    }

    assignEvenAndOdds(userInput){
        var arr=userInput.split(',');
        var evens=[];
        var odds=[];
        //console.log(odds);
        for(var i=0; i<arr.length; i+=1){
            if(arr[i] % 2===0){
                evens.push(arr[i]);
            } else {
                odds.push(arr[i]);
            }
        }
        this.setState({evenArray:evens, OddArray:odds});
        //console.log(evens);
    }
        

    render(){
        return(
        <div className='puzzleBox evenAndOddPB'>
            <h4>Evens and Odds</h4>
            <input className='inputLine' onChange={(e)=>this.handleChange(e.target.value)}></input>
            <button className='confirmationButton' onClick={()=>{this.assignEvenAndOdds(this.state.userInput)}}>Split</button>
            <span className='resultsBox' >Evens:{JSON.stringify(this.state.evenArray)}</span>
            <span className='resultsBox'> Odds:{JSON.stringify(this.state.OddArray)}}</span>
        </div>
        )
    }
}
export default EvenAndOdd;