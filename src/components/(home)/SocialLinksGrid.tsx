import { FaGithub, FaDochub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const socialLinks = [
     { href: 'https://drive.google.com/file/d/1wQQkn_o-AyK60bvvdPwzet-LIYbTHcpR/view?usp=sharing', icon: <FaDochub />, text: 'Resume' },
    { href: 'https://github.com/davepalaksh', icon: <FaGithub />, text: 'GitHub' },
    { href: 'https://linkedin.com/in/palakshdave', icon: <FaLinkedin />, text: 'LinkedIn' },
    { href: 'https://twitter.com/homxsapien', icon: <FaTwitter />, text: 'Twitter' },
];

const SocialLinksGrid: React.FC = () => (
    <div className="my-4 grid gap-2 md:gap-4 grid-cols-2 sm:grid-cols-4 mx-auto">
        {socialLinks.map((item, index) => (
            <a key={index} href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-3 gap-2 bg-transparent outline outline-[2px] outline-zinc-700 rounded-lg"> {item.icon} {item.text}</a>
        ))}
    </div>
);

export default SocialLinksGrid;
