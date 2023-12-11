import React, { createContext, useContext } from "react";
import useCamera from "../hooks/camera"; // Sesuaikan path jika diperlukan

const CameraContext = createContext(undefined);

export const CameraProvider = ({ children }) => {
  const cameraHook = useCamera();

  return (
    <CameraContext.Provider value={{ cameraHook }}>
      {children}
    </CameraContext.Provider>
  );
};

export const useCameraContext = () => {
  const context = useContext(CameraContext);
  if (!context) {
    throw new Error("useCameraContext must be used within a CameraProvider");
  }
  return context;
};
