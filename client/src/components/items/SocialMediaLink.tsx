
interface SocialMediaLinkProps {
    href: string;
    title: string;
    iconClassName: string;
};

export const SocialMediaLink = ({ href, title, iconClassName }: SocialMediaLinkProps) => {
    return (
        <a href={href} rel="noopener noreferrer" target="_blank" title={title}>
            <i className={iconClassName}></i>
        </a>
    )
};
