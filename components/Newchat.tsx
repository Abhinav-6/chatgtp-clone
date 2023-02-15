import React from "react";
import Button from "./Button";

const Newchat = () => {
  return (
    <div className="sticky">
      <Button classs="outline outline-1 outline-gray-100">
        <svg
          className="h-6 w-6 mx-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z"
            clip-rule="evenodd"
          />
        </svg>
        New Chat
      </Button>
    </div>
  );
};

export default Newchat;
