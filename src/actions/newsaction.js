import axios from 'axios'


export const addNewsInfo = (newsinfo) =>{
    return {type: 'CREATE_NEWS' ,  payload:newsinfo}
}

export const getNewsinfoByID = (id , redirect) =>{
    
    return(dispatch) =>{
        axios.get(`http://hn.algolia.com/api/v1/items/${id}`)
        .then(response =>{           
            
            dispatch( addNewsInfo(response.data)) 
            redirect()            
        })

        .catch(err =>{
            console.log(err)
        })
    }
}