// components/layouts/Header.tsx
import Link from "next/link";
import Button from '../common/Button';
import { usePathname } from "next/navigation";
import { useCount } from "@/context/CountContext";

const Header: React.FC = () => {
    
  const pathname = usePathname();
  const { count } = useCount();

  // Handle cases where pathname might be null (during SSR)
  const isCounterAppPage = pathname === "/counter-app";

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8">
        <Link href="/" className="text-2xl md:text-4xl font-bold text-gray-800 tracking-tight hover:text-gray-600 transition-colors">
          Splash App
        </Link>

        {/* Button Group */}
        <div className="flex gap-4 items-center">
          {!isCounterAppPage ? (
            <>
              <Button
                buttonLabel="Sign In"
                buttonBackgroundColor="red"
              />
              <Button
                buttonLabel="Sign Up"
                buttonBackgroundColor="blue"
              />
            </>
          ) : (
            <div className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-lg">
              <span className="text-gray-700 font-medium">Current count:</span>
              <span className="text-xl font-bold text-blue-600">{count}</span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;