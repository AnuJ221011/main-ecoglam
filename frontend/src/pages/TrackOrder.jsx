import React, { useState } from "react";
import { Package, Check, Truck, Clock, Search, ChevronRight } from "lucide-react";
import { useAuth } from "../context/AuthContext"; // Import the useAuth hook

const orders = [
  {
    id: "ORD123456",
    status: "In Transit",
    estimatedDelivery: "2024-12-30",
    details: "Your package has been dispatched and is on its way to the destination.",
    steps: [
      { title: "Order Placed", completed: true, date: "2024-12-22" },
      { title: "Processing", completed: true, date: "2024-12-23" },
      { title: "Shipped", completed: true, date: "2024-12-24" },
      { title: "In Transit", completed: true, date: "2024-12-26" },
      { title: "Out for Delivery", completed: false, date: null },
      { title: "Delivered", completed: false, date: null }
    ]
  },
  {
    id: "ORD654321",
    status: "Delivered",
    estimatedDelivery: "2024-12-25",
    details: "Your package has been successfully delivered. Thank you for shopping with us!",
    steps: [
      { title: "Order Placed", completed: true, date: "2024-12-18" },
      { title: "Processing", completed: true, date: "2024-12-19" },
      { title: "Shipped", completed: true, date: "2024-12-20" },
      { title: "In Transit", completed: true, date: "2024-12-21" },
      { title: "Out for Delivery", completed: true, date: "2024-12-24" },
      { title: "Delivered", completed: true, date: "2024-12-25" }
    ]
  },
  {
    id: "ORD987654",
    status: "Pending",
    estimatedDelivery: "2024-12-31",
    details: "Your order has been placed and is awaiting shipment confirmation.",
    steps: [
      { title: "Order Placed", completed: true, date: "2024-12-26" },
      { title: "Processing", completed: false, date: null },
      { title: "Shipped", completed: false, date: null },
      { title: "In Transit", completed: false, date: null },
      { title: "Out for Delivery", completed: false, date: null },
      { title: "Delivered", completed: false, date: null }
    ]
  },
];

const StatusIcon = ({ status }) => {
  switch (status) {
    case "Delivered":
      return <Check size={20} className="text-green-500" />;
    case "In Transit":
      return <Truck size={20} className="text-blue-500" />;
    case "Pending":
      return <Clock size={20} className="text-amber-500" />;
    default:
      return <Package size={20} className="text-gray-500" />;
  }
};

const OrderCard = ({ order, onExpandClick }) => {

  const { user } = useAuth(); // Access user data from context


   if (!user) {
    return (
      <div className="text-center mt-20 text-gray-700">
        <p>You must be logged in to view your orders.</p>
      </div>
    );
  }
  const getStatusColor = (status) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-800 border-green-200";
      case "In Transit":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Pending":
        return "bg-amber-100 text-amber-800 border-amber-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const formattedDate = (dateString) => {
    if (!dateString) return "-";
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden border border-gray-100">
      <div className="p-5">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 flex items-center">
              <span className="mr-2">{order.id}</span>
              <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(order.status)}`}>
                {order.status}
              </span>
            </h2>
            <p className="text-sm text-gray-500 mt-1">Expected by {formattedDate(order.estimatedDelivery)}</p>
          </div>
          <StatusIcon status={order.status} />
        </div>
        
        <div className="mb-4">
          <div className="relative w-full h-2 bg-gray-100 rounded-full overflow-hidden">
            {/* Progress bar */}
            <div 
              className={`absolute top-0 left-0 h-full rounded-full ${
                order.status === "Delivered" ? "bg-green-500" :
                order.status === "In Transit" ? "bg-blue-500" : "bg-amber-500"
              }`}
              style={{ 
                width: `${order.status === "Delivered" ? "100" : 
                       order.status === "In Transit" ? "60" : "20"}%` 
              }}
            ></div>
          </div>
        </div>
        
        <p className="text-gray-700 text-sm">{order.details}</p>
        
       
      </div>
    </div>
  );
};

const OrderTimeline = ({ steps }) => {
  return (
    <div className="px-5 pt-2 pb-5">
      <div className="border-t border-gray-100 pt-4">
        <h3 className="text-sm font-medium text-gray-900 mb-4">Shipping Timeline</h3>
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start">
              <div className="relative mr-3">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  step.completed ? "bg-blue-500" : "bg-gray-200"
                }`}>
                  {step.completed && <Check size={14} className="text-white" />}
                </div>
                {index < steps.length - 1 && (
                  <div className={`absolute top-6 left-3 w-0.5 h-full -ml-px ${
                    step.completed && steps[index + 1].completed ? "bg-blue-500" : "bg-gray-200"
                  }`}></div>
                )}
              </div>
              <div className="flex justify-between items-start w-full pb-5">
                <div>
                  <p className={`text-sm font-medium ${step.completed ? "text-gray-900" : "text-gray-500"}`}>
                    {step.title}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">
                    {step.date ? formattedDate(step.date) : "-"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TrackOrder = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedOrders, setExpandedOrders] = useState({});
  
  const handleExpandClick = (orderId) => {
    setExpandedOrders(prev => ({
      ...prev,
      [orderId]: !prev[orderId]
    }));
  };
  
  const formattedDate = (dateString) => {
    if (!dateString) return "-";
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };
  
  const filteredOrders = orders.filter(order => 
    order.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Track Your Orders
        </h1>
        
        <div className="relative mb-8">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg bg-white shadow-sm focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
            placeholder="Search by order number..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="space-y-6">
          {filteredOrders.length > 0 ? (
            filteredOrders.map(order => (
              <div key={order.id} className="transition-all duration-300">
                <OrderCard order={order} onExpandClick={handleExpandClick} />
                {expandedOrders[order.id] && (
                  <div className="mt-2 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <OrderTimeline steps={order.steps} />
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <Package size={48} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No orders found</h3>
              <p className="text-gray-500">We couldn't find any orders matching your search criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;