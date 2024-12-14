import React from "react";
import { HeaderComponent } from "./HeaderComponent";
import { FooterComponent } from "./FooterComponent";

interface LayoutProps {
    children: React.ReactNode;
}

export const LayoutComponent: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
        <HeaderComponent />
            <main>{ children }</main>
        <FooterComponent />
    </div>
  )
};
