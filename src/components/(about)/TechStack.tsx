import { FaPython, FaLinux, FaGithub } from 'react-icons/fa';
import { SiMysql, SiApachespark, SiApacheairflow, SiDatabricks, SiVisualstudiocode, SiVisualstudio, SiMongodb, SiApachehadoop, SiMicrosoftazure, SiVim, SiObsidian } from 'react-icons/si';

const techs = [
    { icon: <FaPython />, name: 'Python' },
    { icon: <SiMysql />, name: 'Mysql' },
    { icon: <FaLinux />, name: 'Linux' },
    { icon: <SiApachehadoop />, name: 'Hadoop' },
    { icon: <SiDatabricks />, name: 'Databricks' },
    { icon: <SiApachespark />, name: 'Spark' },
    { icon: <SiApacheairflow />, name: 'Airflow' },
    { icon: <SiMongodb />, name: 'MongoDB' },
    { icon: <SiMicrosoftazure />, name: 'Azure' },
    { icon: <FaGithub />, name: 'GitHub' },
];

const TechStack: React.FC = () => (
    <div className="flex my-8 gap-2 md:gap-3 flex-wrap">
        {techs.map(({ icon, name }, index) => (
            <a key={index} className="flex items-center justify-center p-2 gap-2 md:gap-3 bg-transparent outline outline-[2px] outline-zinc-700 rounded-lg" href={href} target="_blank" rel="noopener noreferrer">{icon}{name}</a>
        ))}
    </div>
);

export default TechStack;
