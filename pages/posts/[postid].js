import React  from 'react'
import axios from 'axios'
import {Container , Button , Spinner} from 'react-bootstrap'

function post({post,Comment}) {

    
  return (
   <>
   <Container>
   <div className='display-6 text-center'>Post Details</div>
    <h1> <p>{post.id}. {post.title}</p></h1>
            <div>
                  <div key={post.id}>
                    <hr />
                    <div> <h3>Post Body :</h3> <br /> {post.body}</div>
                    <hr />
                    <div><h3>Comments : </h3> <br />
                    {
                        Comment.map(Comment=>{
                         if(Comment.postId == post.id){
                       
                            return (
                                <>

                                <div> {Comment.body}</div> 
                                <hr />
                                </>
                            )
                         }
                        })
                    }
                    </div>

                </div>
            </div>
   </Container>
   
   </>
  )
}

export async function getStaticPaths(){
    const postlist = await axios.get('https://jsonplaceholder.typicode.com/posts')

    const post = postlist.data;
    const paths = post.map(post =>{
       return{
         params : {
            postid : `${post.id}`
        }
       }
    })

return {
    paths : paths,
    fallback : false
}
 }

export async function getStaticProps(context){
    const {params} = context
   const postBody = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.postid}`)
   const comments = await axios.get(`https://jsonplaceholder.typicode.com/comments`)
    return {
     props :{
         post : postBody.data,
         Comment : comments.data
     }
    }
 }

export default post