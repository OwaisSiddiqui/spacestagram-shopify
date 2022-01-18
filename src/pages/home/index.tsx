import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { MessageProvider } from "../../providers/MessageProvider";
import { PhotoViewerProvider } from "../../providers/PhotoViewerProvider";

const Home = () => {
  return (
    <>
      <Navbar />
      <PhotoViewerProvider>
        <MessageProvider>
          <Outlet />
        </MessageProvider>
      </PhotoViewerProvider>
    </>
  );
};

export default Home;
