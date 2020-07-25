import React from 'react'
import { connect } from 'react-redux' 
import {Link} from 'react-router-dom'

class SearchByID extends React.Component{
    constructor(){
        super()
        this.state = {
            newsid : ''
        }
    }
 
    handleChange = (e)=>{
        this.setState ({
            [e.target.name]  : e.target.value
        })
    }

    // handleSearch = () =>{
    //     const id  = this.state.newsid
    //     const redirect = () =>{
    //         return window.location.href = `/newsfeed/${id}`            
    //     }
        
    //     this.props.dispatch(getNewsinfoByID(id , redirect))
    // }

    render(){
        return(
            <div>
                <label htmlFor = 'newsid' > News ID : </label>
                <input type = 'text' placeholder = 'Enter news ID' name ='newsid' id = 'newsid' value = {this.newsid} 
                    onChange = {this.handleChange} />
                <Link to = {`/newsfeed/${this.state.newsid}`} > Search </Link>

            </div>
        )
    }
}


const mapStateToProps = (state) =>{
    return{
        newslist : state.newslist
    }
}
export default connect(mapStateToProps)(SearchByID)