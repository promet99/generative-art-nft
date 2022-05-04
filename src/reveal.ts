import fs from "fs";
import path from "path";
import { metadataDataGenerator } from "./rename";

const REVEAL_IMAGE_LINK = `ipfs://QmX6HgTCRmd8wGQGYUeFKKWbkguTLtWzAEjig1vhCgDGCa`;

const hiddenMetadata = (i: number | string) =>
  `{"name":"BugCity #${i}","description":"BugCity Citizen","image":"ipfs://QmSbpNnNjgvwtb7e2hKz575DPHFRRYKbxRUc35QNXtZKRp","external_url":"https://bugcity.io"}`;
const revealUntil = 308;
const shouldRevealByIndex = [
  0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1,
];
const revealList = [
  309, 195, 388, 156, 170, 157, 414, 415, 416, 438, 146, 245, 482, 483, 484,
  485, 490, 491, 400, 515, 543, 544, 439, 287, 274, 374, 285, 147, 234, 148,
  235, 458, 459, 318, 319, 320, 321, 586, 523, 524, 525, 526, 398, 652, 653,
  575, 178, 176, 177, 358, 359, 360, 361, 430, 375, 561, 562, 380, 381, 616,
  617, 618, 619, 160, 214, 171,
];

const main = () => {
  // ? shouldReveal && revealUntil을 따른다.
  // ? reveal 대상인 경우, premint/image에 있으면 해당 이미지를,
  // ?   없으면 finalOutput/image에서 가져온다.
  // ? reveal 대상인 경우, premint/metadata에 있으면 가져오고,
  // ?   없으면 finalOutput/image에서 가져온다.
  // ? 아닌 경우, metadata만 생성한다.

  const array: number[] = new Array(2500).fill(undefined).map((e, i) => i);

  for (const index in array) {
    const numIndex = parseInt(index);
    const shouldReveal: boolean =
      shouldRevealByIndex[numIndex] === 1 ||
      (shouldRevealByIndex.length <= numIndex && numIndex <= revealUntil) ||
      revealList.includes(numIndex);

    const originalMetadataPath = path.join(
      "finalOutput",
      "updatedMetadata",
      index.toString()
    );
    const newMetadataPath = path.join(
      "revealOutput",
      "metadata",
      index.toString()
    );

    if (shouldReveal) {
      const originalRevealImagePath = path.join(
        "premint",
        "image",
        index.toString() + ".png"
      );
      const originalRevealMetadataPath = path.join(
        "premint",
        "metadata",
        index.toString()
      );
      const premintExists = fs.existsSync(originalRevealImagePath);

      const originalImgPath = path.join(
        "finalOutput",
        "image",
        index.toString() + ".png"
      );
      const newImgPath = path.join(
        "revealOutput",
        "image",
        index.toString() + ".png"
      );

      fs.copyFileSync(
        premintExists ? originalRevealImagePath : originalImgPath,
        newImgPath
      );

      // * Metadata
      const data = fs.readFileSync(
        premintExists ? originalRevealMetadataPath : originalMetadataPath,
        "utf8"
      );
      const { name, description } = metadataDataGenerator(parseInt(index));
      const result = data
        .replace(/"name": ""/g, `"name": "${name}"`)
        .replace(/"description": ""/g, `"description": "${description}"`)
        .replace(/"image": ""/g, `"image": "${REVEAL_IMAGE_LINK}/${index}.png"`)
        .replace(
          `"ipfs://<— Your CID Code—>/ "`,
          `"${REVEAL_IMAGE_LINK}/${index}.png"`
        );

      fs.writeFileSync(newMetadataPath, result, "utf8");
    } else {
      fs.writeFileSync(newMetadataPath, hiddenMetadata(index));
    }
  }
};

main();
