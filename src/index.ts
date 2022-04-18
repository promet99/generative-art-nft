import fs from "fs";
import path from "path";

export const resolvePathFromIndex = (i: number): [string, number] => {
  if (i < 1000) {
    return ["Human", i - 0];
  } else if (i < 1564) {
    return ["Buglien", i - 1000];
  } else if (i < 1658) {
    return ["Buglien Animal/Bat", i - 1564];
  } else if (i < 1752) {
    return ["Buglien Animal/Cat", i - 1658];
  } else if (i < 1846) {
    return ["Buglien Animal/Deer", i - 1752];
  } else if (i < 1940) {
    return ["Buglien Animal/Mouse", i - 1846];
  } else if (i < 2034) {
    return ["Buglien Animal/Rabbit", i - 1940];
  } else if (i < 2128) {
    return ["Buglien Animal/Tiger", i - 2034];
  } else if (i < 2190) {
    return ["Animal/Bear", i - 2128];
  } else if (i < 2252) {
    return ["Animal/Bull", i - 2190];
  } else if (i < 2314) {
    return ["Animal/Elephant", i - 2252];
  } else if (i < 2376) {
    return ["Animal/Frog", i - 2314];
  } else if (i < 2438) {
    return ["Animal/Orc", i - 2376];
  } else if (i < 2500) {
    return ["Animal/Tiger", i - 2438];
  }

  return ["", -1];
};
const padImagePath = (index: number) => index.toString().padStart(4, "0");

const shuffle = (array: number[]) => {
  let currentIndex = array.length;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const main = () => {
  // * 1. 0~2499 배열 셔플 후, 14개 종족 합쳐서 번호 다시 붙이고, 0~2499로 만들기

  const array: number[] = new Array(2500).fill(undefined).map((e, i) => i);
  const shuffledArray = shuffle(array);
  // console.log({ shuffledArray });

  for (const index in shuffledArray) {
    const [baseDir, baseIndex] = resolvePathFromIndex(shuffledArray[index]);
    const originalImgPath = path.join(
      "output",
      baseDir,
      "images",
      padImagePath(baseIndex) + ".png"
    );
    const newImgPath = path.join(
      "finalOutput",
      "image",
      index.toString() + ".png"
    );

    const originalMetadataPath = path.join(
      "output",
      baseDir,
      "json",
      baseIndex.toString()
    );
    const newMetadataPath = path.join(
      "finalOutput",
      "metadata",
      index.toString()
    );

    fs.copyFileSync(originalImgPath, newImgPath);
    fs.copyFileSync(originalMetadataPath, newMetadataPath);
  }
};

main();

const rename = () => {
  // TODO: 2. 0~2499로 만들어진 후, name, description, image(ipfs주소) 업데이트하기
};
