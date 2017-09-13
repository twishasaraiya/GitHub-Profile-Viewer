import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
class App extends React.Component{
    render(){
        return(<div className='container'>
                <Header />
                <Main />
                <Footer />
            </div>);
    }
}
export default App;
ReactDOM.render(<App />,document.getElementById('root'));
