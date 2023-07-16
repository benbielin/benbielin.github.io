"use client";

import { MemeListPropsType } from "@/app/types";

const MemeList = ({list}:{list?:MemeListPropsType}) => {
  if (!list) {
    return <div>{"meme missing"}</div>;
  }
  return <div><ul>
      {list?.text.map((line) => {
        return <li key={line}>{line}</li>
      })}
    </ul></div>;
};

export default MemeList;
