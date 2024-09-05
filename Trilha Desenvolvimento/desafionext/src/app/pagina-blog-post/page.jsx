import Styles from './styles.module.css'

import Header from "@/app/components/Header/page"
import Footer from "@/app/components/footer/page"
import PostInfo from '../components/mainPostBlog/page'
import PostText from '../components/mainTextBlogPost/page'

export default function Blog(){
    return(
        <>
            <Header />
            <main className={Styles.content}>
                <PostInfo />
                <PostText />
            </main>
            <Footer />
        </>
    )
}