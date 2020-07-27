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
        if( e.target.name === 'prev' && this.state.count !== 0){
            const count = this.state.count - 1
            this.setState({count})
        }

        
    }

    render(){ 
        const pageData = this.handlePageData()
        const data =[]   
        const value =  this.props.newslist.length/this.state.perpage - 1 === (  this.state.count ) ? true : false 
   
        return(
            <div className ='container justify-text-center'>
            {
                this.props.newslist.length ?
                <table border='1' id="dtBasicExample">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Comments</th>
                            <th>Vote Count</th>
                            <th>UpVote</th>
                            <th>News Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            pageData.map( (news,i) =>{
                                 const {domain,topLevelDomains}  = parseDomain(fromUrl(news.url))
                                 const topdomain = topLevelDomains ? topLevelDomains[0] : '' 
                                  data.push([news.objectID,news.points])
                                                                      
                                return(<tr key = {i+1}>
                                     <td>{news.objectID}</td>
                                    <td>{news.num_comments}</td>
                                    <td>{news.points}</td>
                                    <td>&#8710;</td>
                                    <td>{news.title} {news.url ? <a href = {news.url} target ='blank'>  {`(${domain}.${topdomain})`}</a>
                                       :'' }</td>

                                </tr>)
                            })
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <td> <button name='prev' onClick = {this.handlepagination}
                                     disabled = {this.state.count === 0? true : false}> Previous </button> |  
                                <button name ='next' onClick = {this.handlepagination}  disabled = {value}
                                    > Next</button> 
                            </td>
                        </tr>
                    </tfoot>
                </table>
            : <h2> Loading Data.....</h2>            
            }
            
           <NewsFeedChart data = {data} />
            
        </div>
        
        )
    }
}


const mapStateToProps = (state) =>{     
    return{
        newslist : state.newslist
    }
}
export default connect(mapStateToProps)(NewsFeedTable)
 