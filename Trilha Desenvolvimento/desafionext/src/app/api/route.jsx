import { createClient } from "next-sanity";

import Styles from './styles.module.css'
import Link from "next/link";

const client = createClient({
    projectId: '5ao0nnb7',
    dataset: 'production',
    apiVersion: '2024-01-10',
    useCdn: false,
});

export async function GET(){
    try{
        const posts = await client.getDocument('e1cd746d-d2ef-4767-8caa-f27d6c4c838b')
        const postInfluencia = await client.getDocument('d96ff8de-c776-4c21-82af-f0b0728eb10b')
        const postTrilhaSonora = await client.getDocument('994a0669-cc04-49a8-a7ed-5866292063ec')
        const postArte= await client.getDocument('9ba5546f-a292-4076-9638-c4ef6003cfa3')
        const postDesenvolver = await client.getDocument('a143f35a-b928-4b06-af13-6c943d482a60')
        const postImpacto = await client.getDocument('e3075048-2b8e-4c3a-9353-23109c158291')
        const imageUrl = 'https://cdn.sanity.io/images/5ao0nnb7/production/ac2d43d943d4a268547759b973c93f7b00211e59-610x339.png'
        const imagePostsUrl = 'https://cdn.sanity.io/images/5ao0nnb7/production/2ab6340d6371c5e5ee5e839139e908f68a7d7a07-390x220.png'
        return(
                <main className={Styles.mainContent}>
                    <Link href={'/pagina-blog-post'} className={Styles.link}>
                        <section className={Styles.mainPost}>
                            <img src={imageUrl} alt="foto de um computador anos 90 e um gameboy" className={Styles.imagem}></img>
                            <div className={Styles.textPart}>
                                <h2 className={Styles.title}>{posts.title}</h2>
                                <p className={Styles.author}>{posts.author}</p>
                                <p className={Styles.text}>{posts.text}</p>
                            </div>
                        </section>
                    </Link>
                    <section className={Styles.postsPreview}>
                        <div className={Styles.otherPosts}>
                            <img src={imagePostsUrl} alt="tela de uma televisão com videogame" className={Styles.imagemPost}></img>
                            <p className={Styles.textoPosts}>{postImpacto.text}</p>
                        </div>
                        <div className={Styles.otherPosts}>
                            <img src={imagePostsUrl} alt="tela de uma televisão com videogame" className={Styles.imagemPost}></img>
                            <p className={Styles.textoPosts}>{postDesenvolver.text}</p>
                        </div>
                        <div className={Styles.otherPosts}>
                            <img src={imagePostsUrl} alt="tela de uma televisão com videogame" className={Styles.imagemPost}></img>
                            <p className={Styles.textoPosts}>{postArte.text}</p>
                        </div>
                        <div className={Styles.otherPosts}>
                            <img src={imagePostsUrl} alt="tela de uma televisão com videogame" className={Styles.imagemPost}></img>
                            <p className={Styles.textoPosts}>{postTrilhaSonora.text}</p>
                        </div>
                        <div className={Styles.otherPosts}>
                            <img src={imagePostsUrl} alt="tela de uma televisão com videogame" className={Styles.imagemPost}></img>
                            <p className={Styles.textoPosts}>{postInfluencia.text}</p>
                        </div>
                    </section>
                </main>
            )
    }catch(error){
        console.log('erro ao carregar dados',error)
        return (
            <>
                <p>Um erro aconteceu ao carregar a página, tente novamente</p>
            </>
        )
    }
}
