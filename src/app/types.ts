export type SliderItemPropsType = {
  image: {
    imageUrl: string,
    height: number,
    width: number,
  }
  text: string,
};

export type InfoCardPropsType =  {
  title: string,
  descriptions: string[],
}

export type InfoRowPropsType = {
  title: string,
  infoCards: InfoCardPropsType[],
}

export type InfoPropsType = {
  title: string,
  infoRows: InfoRowPropsType[],
}

export type MemeText = {
  text: string,
  substringArray: number[]
}

export type MemeListPropsType = {
  definition: string,
  textList: MemeText[]
}