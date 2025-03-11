
interface ProjectItemProps {
    src: string;
    alt: string;
    description: string;
    title: string;
    link: string;
};

export const ProjectItem = ({ src, alt, description, title, link }: ProjectItemProps) => {
    return (
        <div className="project-box">
            <img className="img" src={src} alt={alt} />

            <div className="data">
                <span className="description">{description}</span>
                <h2 className="title">{title}</h2>
                <a href="#" className="button">{link}</a>
            </div>
        </div>
    )
};
