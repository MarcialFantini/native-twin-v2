"use client";

import { ChangeEvent, useState } from "react";
import {
  searchTailwindClasses,
  TailwindClassResult,
} from "@/Utils/searchTailwindClasses";
import { Text, View } from "react-native";

export const SearchButton = () => {
  const [list, setList] = useState<TailwindClassResult[]>([]);

  const handlerChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const searchResults = searchTailwindClasses(event.target.value);
    searchResults.length = 4;
    setList(searchResults);
  };

  const handlerGoUrl = (search: string) => () => {};

  return (
    <View>
      <View>
        <button className=" text-[24px] min-h-[54px] text-center w-full flex items-center  py-1 rounded-lg bg-[#1F2937] cursor-pointer ">
          Quick search...
        </button>
      </View>
      <View className="sm:max-w-[425px]">
        <View>
          <Text>Search Class</Text>
          <input onChange={handlerChangeSearch} className="p-2" type="text" />
        </View>
        <div className="grid gap-4 py-4">
          {list.map((item, index) => {
            return (
              <button
                onClick={handlerGoUrl(item.route)}
                className="bg-[#1a1a0a] p-2 text-start"
                key={index + item.class}
              >
                {item.class}
              </button>
            );
          })}
        </div>
      </View>
    </View>
  );
};
