import React, {Component} from 'react'
import SearchInput from './SearchInput'
import axios from 'axios'
import Imagelist from './imagelist'


class App extends Component{
    state={
        Image:[]
    }
    onSearchSubmit= async(entry)=>{
    
       const response=await axios.get(
            `https://pixabay.com/api/?key=25620855-6ab9f01730f703cd681faaac3&q=${entry}&image_type=photo&pretty=true`
            )

            this.setState({Image:response.data.hits})
    }
    render(){
        return(
            <div className='ui container' style={{marginTop:'30px'}}>
                <SearchInput onSearchSubmit={this.onSearchSubmit}/>
                <Imagelist className='image' Image={this.state.Image} />

            </div>
        )
    }
}
export default App