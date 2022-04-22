import {Component} from "react";

class ClassComponent extends Component{
    constructor(props) {
        super(props);
        this.state={a:0, b:25}
    }
    componentDidMount() {
        console.log('componentDidMount');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate');
        console.log('prevProps',prevProps);
        console.log('prevState',prevState);
        console.log('snapshot',snapshot);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    inc(){
        this.setState(prev=>({a:prev.a+1}))
    }
    render() {
        return(
            <div>
                <div>A:{this.props.ssss}</div>
                <div>A:{this.state.a}</div>
                <div>B:{this.state.b}</div>
                <button onClick={()=>this.inc()}>BTN</button>
            </div>
        )
    }
}

export {ClassComponent}