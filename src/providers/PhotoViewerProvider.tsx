import React, { useState } from "react";
import { createContext } from "react";

interface PhotoViewerContextProps {
  photoViewerData: { show: boolean; url: string };
  setPhotoViewerData(message: PhotoViewerContextProps["photoViewerData"]): void;
}

export const PhotoViewerContext = createContext<PhotoViewerContextProps>({
  photoViewerData: {
    show: false,
    url: "",
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setPhotoViewerData: () => {},
});

interface PhotoViewerProviderProps {
  children: React.ReactNode;
}

export const PhotoViewerProvider = ({ children }: PhotoViewerProviderProps) => {
  const [photoViewerData, setPhotoViewerData] = useState<
    PhotoViewerContextProps["photoViewerData"]
  >({ show: false, url: "" });

  return (
    <PhotoViewerContext.Provider
      value={{ photoViewerData, setPhotoViewerData }}
    >
      {children}
    </PhotoViewerContext.Provider>
  );
};
