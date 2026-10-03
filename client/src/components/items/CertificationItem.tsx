
interface CertificationItemProps {
    src: string;
    alt: string;
};

export const CertificationItem = ({ src, alt }: CertificationItemProps) => {
    return (
        <div className="certifications-box">
            <img src={src} alt={alt}/>
        </div>
    )
};
