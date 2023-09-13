import React, { ChangeEvent, ReactNode, useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

interface Props {
  page: number;
  total: number;
  setPage: (pageNum: number) => void;
}

const ComicPagination = ({ page, total, setPage }: Props) => {

  const handlePageChange = (e: ChangeEvent<unknown>, pageNum: number) => {
    setPage(pageNum)
  }

  return (
    <Stack
      spacing={2}
      width={1}
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"center"}
      my={3}
    >
      <Pagination
        count={total}
        page={page}
        onChange={handlePageChange}
        color="primary"
      />
    </Stack>
  );
};

export default ComicPagination;
