// components/layouts/Layout.tsx
import { ReactNode } from "react";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
    </div>
  );
};

export default Layout;