import * as React from "react";

import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="mt-28">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
