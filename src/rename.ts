import fs from "fs";
import path from "path";

export const metadataDataGenerator = (index: number) => ({
  name: `BugCity #${index}`,
  description: "BugCity Citizen",
});

const main = () => {
  // TODO: 2. 0~2499로 만들어진 후, name, description, image(ipfs주소) 업데이트하기

  const array: number[] = new Array(2500).fill(undefined).map((e, i) => i);

  for (const index in array) {
    const originalMetadataPath = path.join(
      "finalOutput",
      "metadata",
      index.toString()
    );
    const newMetadataPath = path.join(
      "finalOutput",
      "updatedMetadata",
      index.toString()
    );

    const { name, description } = metadataDataGenerator(parseInt(index));

    const data = fs.readFileSync(originalMetadataPath, "utf8");
    var result = data
      .replace(/"name": ""/g, `"name": "${name}"`)
      .replace(/"description": ""/g, `"description": "${description}"`);
    fs.writeFileSync(newMetadataPath, result, "utf8");
  }
};

main();
