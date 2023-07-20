"use client";

import { MemeListPropsType } from "@/app/types";
import { Fragment } from "react";

const MemeList = ({ list }: { list?: MemeListPropsType }) => {
  if (!list) {
    return <div>{"meme missing"}</div>;
  }
  return (
    <div>
      <ul>
        {list.textList.map((memeText) => {
          let start = 0;
          let strikethroughOn = true;
          return (
            <li
              style={{
                display: "flex",
              }}
              key={memeText.text}
            >
              {memeText.substringArray.map((end, index) => {
                const substring = memeText.text.substring(start, end);
                start = end;
                strikethroughOn = !strikethroughOn;
                return (
                  <div
                    key={index}
                    style={{
                      whiteSpace: 'pre',
                      textDecorationLine: strikethroughOn
                        ? "line-through"
                        : "none",
                    }}
                  >
                    {substring}
                  </div>
                );
              })}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MemeList;
