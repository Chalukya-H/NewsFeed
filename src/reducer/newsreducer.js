const newsInitialState = []

const newsReducer = (state = newsInitialState  , action) =>{
     
    switch(action.type){
        case 'CREATE_NEWS':{
            return [].concat(action.payload)
        }

        default :{
            return [].concat(state)
        }
    }
}

export default newsReducer