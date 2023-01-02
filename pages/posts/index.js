import axios from 'axios'
import React from 'react'
import Link from 'next/link'
import Card from 'react-bootstrap/Card';
import {Container , Button , Spinner} from 'react-bootstrap'
 

function PostLists({posts}) {
const handleLoading = (e) =>{
  document.getElementById(`${e.target.id}`).innerHTML = '<i class="fa fa-spinner fa-spin" style="font-size:24px;background-color:#198754"></i>'
}
  return (
    <>
     <div className='display-6 text-center'>List of Posts</div>
   <Container className='d-flex flex-row flex-wrap justify-content-center'>
     {
        posts.map(post =>{
            return(
                    <div className="col-md-3 col-12 m-2" key={post.id}>
                      <Card className='card' key={post.id}>
                    <Card.Body>
                      <Card.Text>{post.id}. {post.title}</Card.Text>
                 <Link href={`posts/${post.id}`} passHref>
                    <Button variant='success' id={post.id} onClick={handleLoading}> See More</Button>
                </Link>
                  
                     </Card.Body>
                   </Card>
                    </div>
            )
        })
     }
   </Container>
     
   </>
  )
}

 export async function getStaticProps(){
   const postlist = await axios.get('https://jsonplaceholder.typicode.com/posts')

    return {
     props :{
         posts : postlist.data
     }
    }
 }

export default PostLists