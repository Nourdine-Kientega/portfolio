
interface SkillItemProps {
    imgClassName?: string;
    src: string;
    alt: string;
    label: string;
};

export const SkillItem = ({ imgClassName, src, alt, label }: SkillItemProps) => {
    return (
        <div className="skills-box">
            <img className={imgClassName} src={src} alt={alt}/>
            <h3>{label}</h3>
        </div>
    )
};
