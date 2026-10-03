
interface CVLinkProps {
    href: string;
    downloadTitle?: string;
    label: string;
};

export const CVLink = ({ href, downloadTitle, label }: CVLinkProps) => {
    return (
        <a rel="noopener noreferrer" target="_blank" href={href} download={downloadTitle} className="btn">
            {label}
        </a>
    )
};
