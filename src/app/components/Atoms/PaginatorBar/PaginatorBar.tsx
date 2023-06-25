"use client";
import { Pagerequest } from "@/app/typing";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface IPaginatorBar {
  currentPage: number;
  pageInfo: Pagerequest;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const PaginatorBar: React.FC<IPaginatorBar> = ({
  currentPage,
  pageInfo,
  setPage,
}: IPaginatorBar) => {
  console.log(currentPage, pageInfo);
  return (
    <div className="flex w-full items-center justify-between p-5 text-[#EDAE1D]">
      <button
        className="hover:text-[#EEF0F2] active:text-[#065A82] disabled:text-[#065A82]"
        onClick={() => setPage(currentPage - 1)}
        disabled={pageInfo.previous === null}
      >
        <ArrowBackIosNewIcon />
      </button>
      <button
        className="hover:text-[#EEF0F2] active:text-[#065A82] disabled:text-[#065A82]"
        onClick={() => setPage(currentPage + 1)}
        disabled={pageInfo.next === null}
      >
        <ArrowForwardIosIcon />
      </button>
    </div>
  );
};

export default PaginatorBar;
