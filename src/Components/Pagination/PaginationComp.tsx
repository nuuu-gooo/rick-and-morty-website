import React from "react";
import { Pagination } from "antd";

export const PaginationComp = ({
  allCharactersLength,
  onChange,
  pageSize,
}: any) => {
  return (
    <Pagination
      pageSize={pageSize}
      total={allCharactersLength}
      onChange={onChange}
    />
  );
};
