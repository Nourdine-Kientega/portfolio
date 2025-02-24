import { FooterComponent } from "./FooterComponent";
import { HeaderComponent } from "./HeaderComponent";

interface LayoutProps {

    children: React.ReactNode;
};

export const LayoutComponent = ({ children }: LayoutProps) => {
  return (
    <>
        <HeaderComponent />
        <main>{children}</main>
        <FooterComponent />
    </>
  )
};
