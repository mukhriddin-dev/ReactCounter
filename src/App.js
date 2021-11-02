import {Component} from 'react';


class App extends Component{


state={
    count:1
}

incer=()=>(
    this.setState({ count: this.state.count+1})
);

dicer=()=>(
    this.setState({ count: this.state.count-1})
);

reset=()=>(
    this.setState({ count: 0})
)




render(){
    return(
        <div className="card">

        <span className="num">{this.state.count}</span>
<div className="kbk">
<button type="button" className="plus" onClick={this.dicer}>-</button>
<button type="button" className="rest" onClick={this.reset}> RESET</button>
<button type="button" className="minus" onClick={this.incer}>+</button>
</div>
        </div>
    )
}

}


export default App;