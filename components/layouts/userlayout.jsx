import React from "react";
import TopBar from "../topbar";

export default function Base({ children }) {
  return (
    <div className="h-screen w-screen">
      <TopBar />
      {children}
    </div>
  );
}
