import AboutContainer from "@/components/(about)/AboutContainer"
import Head from "next/head"

const AboutPage: React.FC = () => (
    <>
        <Head>
            <title>About | Pranshu05</title>
            <meta name="og:description" content="Portfolio website of Pranshu Patel." />
            <meta name="og:title" content="Palaksh | Portfolio" />
        </Head>
        <AboutContainer />
    </>
)

export default AboutPage
