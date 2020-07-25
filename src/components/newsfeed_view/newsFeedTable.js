import React from 'react'
import {connect} from 'react-redux'
import {getNewsinfoByID} from '../../actions/newsaction' 
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import * as ReactBootStrap from 'react-bootstrap'

class NewsFeedTable extends React.Component {
    constructor(){
        super()
        this.state = {
            columns : [
                {dataField : 'num_comments' , text : 'Comments'},
                {dataField : 'points' , text : 'Vote Count'},
                {dataField : '^' , text : 'UpVote'},
                {dataField : 'title' , text : 'News Details'}
            ]
        }
    }
    componentDidMount = () =>{          
        this.props.dispatch(getNewsinfoByID())         
    }

    render(){
        console.log( this.props.newslist,'Hello' )
        return(
            <div>
                {/* <table border='1'>
                    <thead>
                        <tr>
                            <th>Comments</th>
                            <th>Vote Count</th>
                            <th>UpVote</th>
                            <th>News Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.newslist.map((news,i) =>{
                                return(
                                    <tr key={i+1}>
                                        <td> {news.num_comments} </td>
                                        <td> {news.points} </td>
                                        <td> + </td>
                                        <td> {news.title} </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
             */}
            
            <BootstrapTable
                keyField ='Comments'
                data = {this.props.newslist}
                columns = {this.state.columns}
                pagination  = {paginationFactory()}
            /> 
            </div>
        )
    }
}


const mapStateToProps = (state) =>{
    console.log(state ,'State')
    return{
        newslist : state.newslist
    }
}
export default connect(mapStateToProps)(NewsFeedTable)
 