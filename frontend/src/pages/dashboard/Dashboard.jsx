// src/pages/Dashboard.jsx
import WelcomeBox from "../../components/dashboard/WelcomeBox";
import DashboardCard from "../../components/dashboard/DashboardCard";

// icons
import { MdShoppingCart, MdGroup, MdAttachMoney, MdInventory } from "react-icons/md";

const Dashboard = () => {
  const cards = [
    {
      title: "Orders",
      value: "1,245",
      icon: <MdShoppingCart />,
      bgColor: "bg-red-500",
    },
    {
      title: "Customers",
      value: "732",
      icon: <MdGroup />,
      bgColor: "bg-blue-500",
    },
    {
      title: "Revenue",
      value: "$58,400",
      icon: <MdAttachMoney />,
      bgColor: "bg-green-500",
    },
    {
      title: "Products",
      value: "120",
      icon: <MdInventory />,
      bgColor: "bg-yellow-500",
    },
  ];

  return (
    <div className="space-y-4 min-h-screen">
      <WelcomeBox />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {cards.map((card, index) => (
          <DashboardCard
            key={index}
            title={card.title}
            value={card.value}
            icon={card.icon}
            bgColor={card.bgColor}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
