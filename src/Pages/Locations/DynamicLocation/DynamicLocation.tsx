import React from "react";
import { useParams } from "react-router-dom";

export const DynamicLocation = () => {
  const { singleLocationId } = useParams();

  return (
    <div>
      <p>{singleLocationId}</p>
    </div>
  );
};
