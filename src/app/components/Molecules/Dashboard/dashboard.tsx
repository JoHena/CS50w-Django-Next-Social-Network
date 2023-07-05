import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";

interface INavbar {
  user: number | undefined;
  personalize?: string;
  setCodeValue: React.Dispatch<React.SetStateAction<number>>;
}

const Dashboard: React.FC<INavbar> = (props: INavbar) => {
  const { user, personalize, setCodeValue } = props;
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    const data = {
      content: inputValue,
      user: user,
    };

    axios.post("http://127.0.0.1:8000/api/posts/", data).then((response) => {
      setInputValue("");
      setCodeValue(response.data.code);
    });
  };

  return (
    <div className={`flex w-full gap-5 ${personalize}`}>
      <div className="relative h-10 min-h-[2.4rem] w-10 min-w-[2.4rem]">
        <Image className="rounded-full" src={"/pfp.png"} fill alt="wad" />
      </div>

      <div className="flex w-full flex-col items-end gap-5">
        <input
          className="w-full appearance-none bg-transparent text-white focus:outline-none"
          type="text"
          placeholder="What's going on?"
          id="fname"
          name="fname"
          value={inputValue}
          onChange={handleInputChange}
          autoComplete="off"
        />
        <button
          className="rounded-full bg-[#EDAE1D] px-5 py-1 font-bold text-black transition-colors hover:text-[#EEF0F2] active:bg-[#065A82] active:text-white disabled:bg-[#065A82] disabled:text-white"
          onClick={handleButtonClick}
          disabled={inputValue.length === 0}
        >
          {inputValue.length > 0 ? "Squabble" : "Concur"}
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
