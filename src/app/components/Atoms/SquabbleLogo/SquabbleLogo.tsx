"use client";
import TextsmsIcon from "@mui/icons-material/Textsms";

interface ISquabbleLogo {
  customize?: string;
  textClass?: string;
}

const SquabbleLogo: React.FC<ISquabbleLogo> = (props: ISquabbleLogo) => {
  const { customize, textClass } = props;
  return (
    <div className={"flex items-center gap-3 text-[#F0BC42] " + customize}>
      <TextsmsIcon color="inherit" fontSize="large" />
      <div className={"pb-2 text-lg font-bold xl:block " + textClass}>
        Squabble
      </div>
    </div>
  );
};

export default SquabbleLogo;
