import Head from "next/head";
import Date from "../../components/date"
import utilStyles from "../../styles/utils.module.css"

function Post(){
    return (
        <>
            <Head>
                <title>This is head</title>
            </Head>
            <article>
                <div className={utilStyles.background}>
                    <div className={utilStyles.center}>
                        <h1 className={utilStyles.heading2Xl}>LIGHT. CAMERA. ACTION!</h1>
                        <h2 className={utilStyles.headingXl}>How the Hawaiian bobtail squid brings a creative vision to its maritime world of small big screens</h2>
                        <span className={utilStyles.span}>biology</span>
                        <p>
                            written by Edward Chen
                            <br></br>
                            figures by Jovana Andrejevic
                            <br></br>
                            <Date dateString='2021-07-05'/> | 8 min read
                        </p>
                    </div>
                </div>
                <div className={utilStyles.center}>
                    content goes here
                </div>
            </article>
        </>
    )
}

export default Post