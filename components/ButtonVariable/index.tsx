"use client";

export const ButtonVariable = ({
  children,
  color,
}: {
  color: string;
  children: string;
}) => {
  return (
    <button
      style={{ background: color }}
      className=" bg-[#26C6DA]  text-[24px] h-[54px] w-[229px] px-8 py-5 text-white"
    >
      {children}
    </button>
  );
};
