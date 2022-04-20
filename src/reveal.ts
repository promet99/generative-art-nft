import fs from "fs";
import path from "path";
import { metadataDataGenerator } from "./rename";

const REVEAL_IMAGE_LINK = `ipfs://FUCK`;

const hiddenMetadata = (i: number | string) =>
  `{"name":"BugCity #${i}","description":"BugCity Citizen","image":"ipfs://QmSbpNnNjgvwtb7e2hKz575DPHFRRYKbxRUc35QNXtZKRp","external_url":"https://bugcity.io"}`;
const revealUntil = 305;
const shouldRevealByIndex = [
  0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1,
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
      (shouldRevealByIndex.length <= numIndex && numIndex <= revealUntil);

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
        .replace(/"image": ""/g, `"image": "${REVEAL_IMAGE_LINK}/${index}"`)
        .replace(
          `"ipfs://<— Your CID Code—>/ "`,
          `"${REVEAL_IMAGE_LINK}/${index}"`
        );

      fs.writeFileSync(newMetadataPath, result, "utf8");
    } else {
      fs.writeFileSync(newMetadataPath, hiddenMetadata(index));
    }
  }
};

main();
