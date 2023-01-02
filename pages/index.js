import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import {Container,Button } from 'react-bootstrap'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
 const handleLoading = () =>{
    document.getElementById("btn").innerHTML = '<i class="fa fa-spinner fa-spin" style="font-size:24px;background-color:#0dcaf0"></i>'
 }

  return (
    <>
   <Container>
     <Link href='/posts' legacyBehavior>
     <Button variant='info' id='btn' onClick={handleLoading}>
      Go to Posts 
     </Button>
    </Link>
   </Container>
    </>
  )
}
