import React from 'react'
import GitHub from './GitHub'
import LeftComponent from './LeftComponent'
class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username:'twishasaraiya'
        };
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(event){
        var val = event.target.value;
        this.setState({
            username: val
        });
    }
    render(){
        return(<div className='row main'>
            <div className='search-bar text-center'>
                <input type='text'
                placeholder='twishasaraiya'
                onClick={this.handleChange}
                ></input>
                <i className='fa fa-search' aria-hidden='true'></i>
            </div>
            <div className='col-md-4'>
                {console.log(this.state.username)}
                <LeftComponent username={this.state.username}></LeftComponent>
            </div>
            <div className='col-md-6'>
            {console.log(this.state.username)}
                <GitHub username={this.state.username}></GitHub>
            </div>
        </div>);
    }
}
export default Main
