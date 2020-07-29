import axios from 'axios'


export const addNewsInfo = (newsinfo) =>{
    return {type: 'CREATE_NEWS' ,  payload:newsinfo}
}

export const getNewsinfoByID = (id) =>{    
    return(dispatch) =>{
        // axios.get(`http://hn.algolia.com/api/v1/items/${id}`)
        axios.get(`https://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=80`)
        .then(response =>{           
            
            dispatch( addNewsInfo(response.data.hits)) 
                         
        })

        .catch(err =>{
            console.log(err)
        })
    }
}