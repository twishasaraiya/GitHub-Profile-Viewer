import React from 'react';
/*global $*/
class LeftComponent extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.username);
        this.state={
            username:props.username,
            githubData:[]
        };
    }
    componentWillReceiveProps(nextProps,nextContext){
        console.log('nextContext', nextContext);
        console.log('nextProps', nextProps);
        this.setState({
            username:nextProps.username
        });
    }
    componentWillUpdate(){
        this.createCards();
    }
    shoulComponentUpdate(nextProps,nextState){
        return this.props.username!==nextProps.username
    }
    createCards(){
        console.log(this.state.username);
        var url='https://api.github.com/users/'+this.state.username;
        console.log(url);
        var r=[];
        var that =this;
        $.getJSON(url,function(data){
                //console.log(data);
                //console.log(data.avatar_url+'.jpg');
                r.push(data.avatar_url);
                r.push(data.login);
                r.push(data.followers);
                r.push(data.following);
                r.push(data.bio);
                r.push(data.location);
                r.push(data.name);
                that.setState({
                    githubData: r
                });
        });
    }
    componentDidMount(){
        this.createCards();
    }
    render(){
        if(!this.state.githubData) return(<p>Loading...</p>);
        return(<div className='profile text-center'>
            <img className='img-responsive' alt='user-profile' src={this.state.githubData[0]} />
            <h3>{this.state.githubData[6]}</h3>
            <h5> @{this.state.githubData[1]}</h5>
            <hr />
            <p className='text-left'>Followers:{this.state.githubData[2]}</p>
            <p className='text-left'>Following:{this.state.githubData[3]}</p>
            <p className='text-left'>{this.state.githubData[4]}</p>
            <p className='text-left'><i className='fa fa-map-marker' aria-hidden='true'></i>  {this.state.githubData[5]}</p>
            </div>);
    }
}
export default LeftComponent
