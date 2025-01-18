import { useUserContext } from "../context/userContext";
import { logout } from "../services/auth.service";

/**
 * The Navbar component is used to display the user information and provide a logout button
 * @returns {JSX.Element} The JSX element for the Navbar component
 */
export default function Navbar() {
  /**
   * The user context is used to get the user information
   * @type {object}
   */
  const { user } = useUserContext();

  /**
   * The handleLogout function is used to logout the user
   */
  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="bg-white p-2">
      <div className="  flex justify-between items-start">
        <span className="text-2xl font-bold text-black font-bold">
          {user ? `Welcome ${user.name}` : "Welcome to HMS"}
        </span>
        {user && (
          <button
            className="bg-red-500 hover:bg-red-700 text-white  font-bold py-2 px-4 rounded"
            onClick={handleLogout}
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
