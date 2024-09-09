import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="bg-black text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">
            Movie Booking
          </Link>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-300">
                About
              </Link>
            </li>
            {/* Add more navigation items as needed */}
          </ul>
        </div>
      </nav>

      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>

      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Movie Booking. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
