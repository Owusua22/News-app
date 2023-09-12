import { create } from 'apisauce'

const api = create({
    baseURL: 'https://newsapi.org/v2',
    
  })
  const apiKey="?sources=bbc-news&apiKey=d3c4a895102a4b2f99a17d7fac1ed8bf"
const getTopHeadline = api.get("/top-headlines"+apiKey)
const getByCategory = (category)=>api.get("/everything?q="+category+"&apiKey=d3c4a895102a4b2f99a17d7fac1ed8bf")


export default{
  
    getTopHeadline,
    getByCategory
}
