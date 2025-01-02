import { useUserContext } from "../context/userContext";
import { logout } from "../services/auth.service";

export default function Navbar() {
  const { user } = useUserContext();
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
