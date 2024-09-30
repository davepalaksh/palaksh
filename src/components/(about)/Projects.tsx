import { FaGlobe } from "react-icons/fa";

const { FaGithub } = require('react-icons/fa');

const projects = [
    {
        title: 'Formula1 Azure ETL Project',
        description: 'Azure Databricks and PySpark',
        techStack: ['PySpark', 'Databricks', 'Azure Synapse'],
        github: 'https://github.com/davepalaksh/Formula1-ETL-Pipeline-Project-Azure',
    },
    {
        title: 'Tokyo 2020 Olympics Project',
        description: 'Azure Databricks and PySpark',
        techStack: ['PySpark', 'Databricks', 'Azure Synapse', 'PowerBI'],
        github: 'https://github.com/davepalaksh/Olympic-Data-Analytics-Azure-End-To-End-Data-Engineering-Project',
    },
    {
        title: 'Youtube Trending Videos Stream Processing',
        description: 'Real-time Data Processing',
        techStack: ['S3', 'AWS Glue','AWS Athena'],
        github: 'https://github.com/davepalaksh/Data-Engineering-YouTube-Analysis',
    },
    {
        title: 'Stock Market Real-Time Project',
        description: 'Real-Time processing using kafka',
        techStack: ['S3','Glue Crawler','Athena','Apache Kafka'],
        github: 'https://github.com/davepalaksh/Stock-Market-Kafka-Real-Time-Data-DE-Project',
    },
    {
        title: 'Spar Nord Bank ETL Project',
        description: 'Batch processing',
        techStack: ['S3', 'PySpark', 'RedShift'],
        github: 'https://github.com/davepalaksh/ETL-Pipeline-Project-Spar-Nord-Bank',
    },
    {
        title: 'Zomato Dataset Analysis',
        description: 'Exploratory data analysis',
        techStack: ['Python', 'Numpy', 'Pandas'],
        github: 'https://github.com/davepalaksh/Zomato-Case-Study',
    },
]

const Projects: React.FC = () => (
    <div className="w-full my-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map(({ title, description, techStack, github }, index) => (
            <div className="bg-transparent outline outline-[2px] outline-zinc-700 rounded-lg w-full p-4 flex flex-col gap-2" key={index}>
                <div className="text-xl font-bold">{title}</div>
                <div>{description}</div>
                <div className="flex gap-2">{techStack.map((tech, index) => (<div key={index} className="rounded-lg bg-zinc-900 p-[6px] text-sm">{tech}</div>))}</div>
                <div className="flex gap-2 text-xs">
                    {github && <a href={github} target="_blank" className="text-xl my-1"><FaGithub /></a>}
                    {website && <a href={website} target="_blank" className="text-xl my-1"><FaGlobe /></a>}
                </div>
            </div>
        ))}
    </div>
)

export default Projects;
