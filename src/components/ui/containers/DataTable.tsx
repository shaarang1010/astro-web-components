import React from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const DataCard = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(0);
  const { data, isLoading, error } = useSWR(
    "https://www.data.act.gov.au/resource/d56a-2nhi.json",
    fetcher
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  if (data) console.log(data);
  return <div>See console.log for the data</div>;
};
