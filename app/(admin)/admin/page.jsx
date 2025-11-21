'use client';
import React, { useEffect, useState } from "react";
import DashboardCard from "./AdminComponents/DashboardCard";
import axios from "axios";

export default function page() {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
 
  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      setLoading(true);
      setError("");
      const res = await axios.get(`${BASE_URL}/api/dashboarddata`);

      if (res.data.success) {
        setDashboardData(res.data.data);
      } else {
        setError("Failed to load dashboard data");
      }
    } catch (err) {
      console.error("Dashboard load error:", err);
      setError("Failed to load dashboard data");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <div className="grid gap-4 lg:gap-8 md:grid-cols-3 pr-6">
        <DashboardCard title={"Total Images"} value={dashboardData?.totalImages?.total} />
        <DashboardCard title={"Last Updated"} value={dashboardData?.lastUpdated?.formatted} />
        <DashboardCard title={"Storage Usage"} value={dashboardData?.storageUsage?.formatted_size} />
        {/* <DashboardCard title={"Total"} value={"100"} /> */}
      </div>
    </div>
  );
}
