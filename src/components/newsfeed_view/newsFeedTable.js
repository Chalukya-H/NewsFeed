import React from 'react'
import {connect} from 'react-redux'
import {getNewsinfoByID} from '../../actions/newsaction' 
import {parseDomain,fromUrl} from "parse-domain"
import NewsFeedChart from './newsfeedChart' 
 
class NewsFeedTable extends React.Component {
    constructor(){
        super()
        this.state ={
            chartData : [],             
            count : 0,
            perpage : 20
        }
    }
    componentDidMount = () =>{          
        this.props.dispatch(getNewsinfoByID()) 
    }

    handlePageData = () =>{
        if(this.props.newslist.length){             
            const pageData = this.props.newslist.slice(this.state.count * this.state.perpage ,
                    (this.state.count * this.state.perpage) + this.state.perpage  )
           return pageData
        }
    }

    handleChartData = (data)=>{
        const chartData = this.state.data.concat(data)
        this.setState({chartData})
    }

    handlepagination = (e) =>{
        if( e.target.name === 'next'){
            const count = this.state.count + 1
            this.setState({count})
        }
        if( e.target.name === 'previous' && this.state.count !== 0){
            const count = this.state.count - 1
            this.setState({count})
        } 
    }

    handleUpVote = (id) =>{
        localStorage.setItem(id, parseInt(localStorage.getItem(id)) + 1 )
        console.log(id,localStorage.getItem(id))
        window.location.reload()
        
    }

    render(){ 
        const pageData = this.handlePageData()
        const data =[]   
        const value =  this.props.newslist.length/this.state.perpage - 1 === (  this.state.count ) ? true : false 
   
        return(
            <div className ='container-fluid'>
            {
                this.props.newslist.length ?
                    <table  id = 'newsfeed-table'  className="table table-striped table-sm" >
                        <thead id ='newsfeed-table-header'>
                            <tr>                                 
                                <th id='newsfeed-comments'>Comments</th>
                                <th id='newsfeed-votes' >Vote Count</th>
                                <th id='newsfeed-upvote' >UpVote</th>
                                <th id='newsfeed-details'>News Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                pageData.map( (news,i) =>{
                                    // Getting Domain name from URL
                                    const {domain,topLevelDomains}  = parseDomain(fromUrl(news.url))
                                    const topdomain = topLevelDomains ? topLevelDomains[0] : '' 
                                    // Adding VotesCount to LocalStorage
                                    localStorage.getItem(news.objectID) === null ? 
                                            localStorage.setItem(news.objectID, news.points) : localStorage.getItem(news.objectID)                                      
                                            data.push( [news.objectID, parseInt( localStorage.getItem(news.objectID) ) ] )   
                                            
                                    // Return the Row with needed details  
                                    return(<tr key = {i+1}>                                         
                                        <td id= 'newsfeed-data-comments'>{news.num_comments}</td>
                                        <td id='newsfeed-data-votes' >{localStorage.getItem(news.objectID)}</td>
                                        <td id = 'newsfeed-data-upvote'> < button className ='btn btn-link btn-sm' id='btn-upvote' onClick = { ()=>{ this.handleUpVote(news.objectID) }}>&#8710;</button></td>
                                        <td id='newsfeed-data-details'>{news.title} {news.url ? <a href = {news.url} target ='blank'>  {`(${domain}.${topdomain})`}</a>
                                        :'' }</td>

                                    </tr>)
                                })
                            }
                        </tbody>

                    </table>
                : <h4> No Data Found.....</h4>            
            } 
            {/* pagination buttons like previous & next */}
            <div className = 'float-sm-right'>
                <div className="row ">               
                    <div className="col-lg" id='pagination-col'>
                        <button name='previous' onClick = {this.handlepagination} id = 'btn-previous' className = 'btn btn-light  botton-previous'
                                disabled = {this.state.count === 0? true : false}> Previous </button>|
                        <button name ='next' onClick = {this.handlepagination} id = 'btn-next' className = 'btn btn-light botton-next' 
                                disabled = {value} > Next</button> 
                    </div>
                </div>
            </div>
            <br/>
            {/* Line Chart which shows graph based on data displayed on current page */}
            <NewsFeedChart data = {data} />
             
        </div>
        
        )
    }
}

// Fetach Data from store and pass it to class using connect
const mapStateToProps = (state) =>{     
    return{
        newslist : state.newslist
    }
}
export default connect(mapStateToProps)(NewsFeedTable)
 