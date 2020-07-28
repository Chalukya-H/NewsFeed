import React from 'react'
import {Chart} from 'react-google-charts'
import {connect} from 'react-redux'
 
 class NewsFeedChart extends React.Component {
  
  render() { 
    const charData = this.props.data
    charData.unshift(['x','vote'])    
    return (
      <div >
        <hr/>
       <Chart
            chartType="LineChart"
            width="auto"
            height="auto" 
            data={charData}
            className = 'linechar_newsfeed'
            margin = '0px'
            options={{
                hAxis: {
                  title: 'ID',
                  titleTextStyle :{
                    bold:true,
                    fontSize :20
                  },
                  slantedText:true,
                  textPosition:true,
                  slantedTextAngle : 90,
                  gridlines :20
                },
                vAxis: {
                  title: 'Votes',
                  baseline  : 0,
                  interval:1,
                  titleTextStyle :{
                    bold:true,
                    fontSize :20
                  }
                },
                pointSize : 5,
                width:'auto',
               height:500,
                backgroundColor :'ivory', 
                fontSize :12 ,    
                legend:'none',
                baseline :0,
                chartArea:{
                  left:100, right: 20 ,top: 10 ,bottom:100,
                  backgroundColor: {
                    stroke: 'black',
                    strokeWidth: 1
                }
                }
                
              }}
               
        />
         <hr/>
      </div>
    );
  }
}
 
export default connect()(NewsFeedChart)
 