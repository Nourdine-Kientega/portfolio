interface SocialMediaLinkProps {
    href: string;
    title: string;
    iconClassName: string;
};

export const SocialMediaLink = ({ href, title, iconClassName }: SocialMediaLinkProps) => {

    const API_URL = import.meta.env.VITE_API_URL;

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {

        event.preventDefault();
        window.open(`${API_URL}/${href}`, '_blank');
    };

    return (
        <a href={`https://portfolio/${href}`} rel="noopener noreferrer" target="_blank" title={title} onClick={handleClick}>
            <i className={iconClassName}></i>
        </a>
    )
};
