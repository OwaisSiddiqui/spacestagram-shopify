import React from "react";
interface HeartIconProps {
  isLiked: boolean;
}

const HeartIcon = ({ isLiked }: HeartIconProps) => {
  return (
    <svg
      fill="none"
      version="1.1"
      width="24"
      viewBox="0 0 22.418 20.058"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m11.221 3.4432-1.087-1.087c-2.1479-2.1479-5.6303-2.1479-7.7782 0s-2.1479 5.6303 0 7.7782l8.8389 8.8388 0.0018-0.0018 0.0263 0.0263 8.8388-8.8388c2.1479-2.1479 2.1479-5.6303 0-7.7782-2.1478-2.1479-5.6302-2.1479-7.7781 0z"
        fill={isLiked ? "red" : "white"}
        stroke={isLiked ? "red" : "black"}
        strokeWidth="1.5"
        clipRule="evenodd"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default HeartIcon;
