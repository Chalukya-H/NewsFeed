import React from 'react'
import SearchByID from './seachbyid'

class SearchOptions extends React.Component{
    constructor(){
        super()
        this.state = {
            searchoption : 'searchbyid'
        }
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render(){
        return(
            <div className = 'serachoptionpage'>
                 
                <input type ='radio' name ='searchoption' id = 'searchbyid' value = 'searchbyid' defaultChecked = {true} onChange = {this.handleChange} />
                <label htmlFor = 'searchbyid'> SearchByID </label>
                <input type ='radio' name ='searchoption' id = 'otheroption' value = 'otheroption' onChange = {this.handleChange} />
                <label htmlFor = 'otheroption'> Other Options </label>
                {
                    this.state.searchoption === 'searchbyid' ? <SearchByID/> : <h1> Hello </h1>
                }
            </div>
        )
    }
}

export default SearchOptions