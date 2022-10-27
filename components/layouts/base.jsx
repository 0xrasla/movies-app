import React from "react";
import Navebar from "../navebar";

export default function Base({ children }) {
  return (
    <div className="h-screen w-full">
      <Navebar />
      {children}
    </div>
  );
}
