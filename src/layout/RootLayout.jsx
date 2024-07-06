import {  Outlet } from "react-router-dom";
import Navbar from "../componets/navbar";

function RootLayout() {
  return (
    <div>
      <Navbar />
      <main className="container ml-auto mr-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
