import React from 'react'
import {connect} from 'react-redux'
import {getNewsinfoByID} from '../../actions/newsaction'

class NewsFeedTable extends React.Component {

    componentDidMount = () =>{
        const id = 100
        console.log(this.props , 'hello')
        this.props.dispatch(getNewsinfoByID(id)) 
        
    }

    render(){
        console.log( this.props.newslist,'Hello' )
        return(
            <div>
                <table border='1'>
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
                                        <td> {news.children.length} </td>
                                        <td> {news.points} </td>
                                        <td> + </td>
                                        <td> {news.title} </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
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
 