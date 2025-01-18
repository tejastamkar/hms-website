import Navbar from "../../components/navbar";

/**
 * AdminDashboard
 *
 * This is the main component for the admin dashboard.
 *
 * @returns {React.ReactElement} The admin dashboard component.
 */
export default function AdminDashboard() {
  return (
    <div>
      {/* Renders the navbar component */}
      <Navbar />
      <div className="min-h-screen flex items-center justify-center">
        {/* Displays a message indicating that the component is coming soon */}
        <h1 className="text-6xl font-bold">Coming Soon</h1>
      </div>
    </div>
  );
}
