import React from "react";
import { AIUsage } from "./_components/ai-usage";
import Sidebar from "./_components/Sidebar";

const DashboardLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="bg-gray-50 h-screen">

      <div className="md:w-64 hidden md:flex flex-col fixed h-full overflow-y-auto">
        <Sidebar />
        <div className="mt-6"> 
          <AIUsage />
        </div>
      </div>

      <div className="md:ml-64 bg-gray-50 h-fit pb-5">{children}</div>
    </div>
  );
};

export default DashboardLayout;