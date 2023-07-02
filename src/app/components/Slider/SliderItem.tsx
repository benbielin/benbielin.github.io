'use client'

import { SliderItemPropsType } from "@/app/types";

const SliderItem = ({sliderItem}:{sliderItem: SliderItemPropsType}) => {

  return (
    <div>{sliderItem.text}</div>
  )


}

export default SliderItem;