import TechStack from '@/components/(about)/TechStack'
import Projects from './Projects'
import CurrentGame from '@/components/(about)/CurrentGame'

const AboutContainer: React.FC = () => {
    return (
        <div className="w-11/12 md:w-4/5 lg:w-3/4 xl:w-2/3 2xl:w-1/2 mx-auto">
            <div className="pb-8">
                <h1 className="text-3xl font-bold text-zinc-100">About me!</h1>
            </div>
            <p>Hey there! 👋🏻 I&apos;m Palaksh, <br /><br />I have two years of experience with Python, SQL, and ETL tools, focusing on building data pipelines that make operations more efficient. I design and implement data models while ensuring modern modelling and warehousing techniques leveraging cloud platforms(AWS,Azure) to optimize performance and scalability.</p>
            <h2 className="text-2xl font-bold my-4 text-zinc-100">Tech Stack</h2>
            <p>Below is a list of technologies which I use for ETL/ELT and programming purpose. Including languages, frameworks, IDEs, apps and various softwares.</p>
            <TechStack />
            <h2 className='text-2xl font-bold my-4 text-zinc-100'>My work</h2>
            <p>I have worked on various projects and have experience with Azure, Databricks(PySpark), and ELT/ETL pipelines. I&apos;ve listed some of my projects below.</p>
            <Projects />
            <p>I am always open to learning new technologies and love to work on new projects. If you have any project ideas or want to collaborate, feel free to reach out to me on{' '}<a className="link" href="https://www.linkedin.com/in/palakshdave/" target="_blank" rel="noopener noreferrer">LinkedIn</a>{' '}[I may be delayed in responding at times].</p>
            <CurrentGame />
        </div>
    )
}

export default AboutContainer
