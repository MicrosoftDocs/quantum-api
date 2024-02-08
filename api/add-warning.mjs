// @ts-check

import { readFileSync, readdirSync, writeFileSync } from "node:fs";

const apiWarning = `
> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.`;

const magicWarning = `
> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> The Modern QDK only supports the '%%qsharp' magic command.`;

const updateLimit = 100000;

updateFiles("iqsharp-magic", magicWarning);
updateFiles("qsharp", apiWarning);

/**
 * @param {string} dirName
 * @param {string} warningText
 */
function updateFiles(dirName, warningText) {
  // loop over all files in the "qsharp" directory
  const files = readdirSync(dirName);
  let updatedFiles = 0;

  for (const file of files) {
    if (!file.endsWith(".md")) continue;

    const fileName = `${dirName}/${file}`;

    // read the file
    const content = readFileSync(fileName, "utf8");

    // Find the location of the second line consistenting of just "---"
    const lines = content.split("\n");
    let dashesFound = 0;
    let headerFound = false;
    let insertIndex = 0;
    for (const line of lines) {
      ++insertIndex;
      if (line === "---") {
        dashesFound++;
        if (dashesFound > 2) {
          throw Error(
            "Found more than two lines of dashes in the file before the main header"
          );
        }
      }
      if (line.startsWith("# ") && dashesFound === 2) {
        headerFound = true;
        break;
      }
    }

    // Throw an error if not found
    if (!headerFound) {
      throw new Error("Didn't find the main header in the file");
    }

    // Insert a warning message
    lines.splice(insertIndex, 0, warningText);
    // Write the file back to disk
    writeFileSync(fileName, lines.join("\n"));

    if (++updatedFiles > updateLimit) throw new Error("Update file limit reached");
  }
}
