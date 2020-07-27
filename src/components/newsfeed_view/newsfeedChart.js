import React from 'react'
import {Chart} from 'react-google-charts'
import {connect} from 'react-redux'
 
 class NewsFeedChart extends React.Component {
  
  render() { 
    const charData = this.props.data
    charData.unshift(['x','vote'])
    
    return (
      <div>
       <Chart
            chartType="LineChart"
            width="100%"
            height="400px"
            loader={<div>Loading Chart</div>}
            data={charData}
            className = 'linechar_newsfeed'
            options={{
                hAxis: {
                  title: 'ID',
                },
                vAxis: {
                  title: 'Vote',
                },
              }}
              rootProps={{ 'data-testid': '1' }}
        />
      </div>
    );
  }
}
 
export default connect()(NewsFeedChart)
 