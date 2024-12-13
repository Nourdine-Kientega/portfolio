import { HomeComponent } from "../components/HomeComponent";
import { ServicesComponent } from "../components/ServicesComponent";
import '../assets/css/portfolio.css';
import { ContactComponent } from "../components/ContactComponent";

export const HomePage = () => {
  return (
    <div>
        <h1>Welcome to My Portfolio</h1>
        <HomeComponent />
        <ServicesComponent />
        <ContactComponent />
    </div>
  )
};
