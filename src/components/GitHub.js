import React from 'react';
/*global $*/
class GitHub extends React.Component{
    constructor(props){
        super(props);
        this.state={
            githubData:[],
            username: props.username
        };
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            username: nextProps.username
        });
    }
    componentWillUpdate(){
        this.createCards();
    }
    shoulComponentUpdate(nextProps,nextState){
        return this.props.username!==nextProps.username
    }
    createCards(){
        var url='https://api.github.com/users/'+this.state.username+'/repos';
        var r=[];
        var that =this;
        $.getJSON(url,function(data){
                //console.log(data);
                for(var i=0;i<data.length;i++){
                    r.push(<div key={i} className='repo'>
                    <h3><a href={data[i].html_url}>{data[i].name}</a></h3>
                    <p>{data[i].description}</p>
                    <div className='row'>
                        <span className='circle col-xs-1'></span>
                        <div className='col-xs-4'>{data[i].language}</div>
                    </div>
                    </div>);
                }
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
        return(<div className='text-left'>
                <div>{this.state.githubData}</div>
            </div>);
    }
}
export default GitHub
