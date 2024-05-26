import React from "react";
import Analytics from "../../components/Analytics/Analytics";
import SideBar from "../../components/shared/SideBar/SideBar";

export default function AnalyticsPage() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "200px" }}>
        <SideBar />
      </div>
      <div style={{ flexGrow: 1, padding: "20px" }}>
        <Analytics />
      </div>
    </div>
  );
}
