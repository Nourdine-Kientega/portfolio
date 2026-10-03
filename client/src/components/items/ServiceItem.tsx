
interface ServiceItemProps {
    iconClassName: string;
    title: string;
    content: string;
}

export const ServiceItem = ({ iconClassName, title, content}: ServiceItemProps) => {
  return (
    <div className="services-box">
    <i className={iconClassName}></i>
    <h3>{title}</h3>
    <p>{content}</p>
  </div>
  )
};
