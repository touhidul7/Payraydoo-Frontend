import React from "react";
import DashboardCard from "./AdminComponents/DashboardCard";

export default function page() {
  return (
    <div>
        <div class="grid gap-4 lg:gap-8 md:grid-cols-4 pr-6">
          <DashboardCard title={"Total"} value={"100"}/>
          <DashboardCard title={"Total"} value={"100"}/>
          <DashboardCard title={"Total"} value={"100"}/>
          <DashboardCard title={"Total"} value={"100"}/>

        </div>
    </div>
  );
}
