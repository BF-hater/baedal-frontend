
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/Layout'


export default function Main(){
        return (
        <>
            <h1>가구배달</h1>
            <h2>
                <Link href='/'>
                    <a>Back to home</a>
                </Link>
                
            </h2>
        </>
    )
}

