// src/components/DashboardCard.jsx
const DashboardCard = ({ title, value, icon, bgColor }) => {
  return (
    <div className="bg-[#121212] text-white p-4 rounded-md shadow-sm flex items-center gap-3 hover:bg-[#1e1e1e] transition duration-200">
      <div className={`p-2 rounded-md text-white text-[20px] ${bgColor}`}>
        {icon}
      </div>
      <div>
        <p className="text-xs text-gray-400 leading-tight">{title}</p>
        <h3 className="text-base font-medium">{value}</h3>
      </div>
    </div>
  );
};

export default DashboardCard;
