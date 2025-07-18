import { useAuth } from "../context/AuthContext";
import TrackOrder from "./TrackOrder";
import { Lock } from "lucide-react"; // Optional icon for UX

const SomePage = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      {user ? (
        <TrackOrder />
      ) : (
        <div className="bg-white shadow-md rounded-xl p-10 text-center max-w-md w-full">
          <Lock className="mx-auto text-red-500 mb-4" size={48} />
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Access Restricted</h2>
          <p className="text-gray-600 mb-4">
            You must be logged in to view your orders.
          </p>
         
        </div>
      )}
    </div>
  );
};

export default SomePage;
