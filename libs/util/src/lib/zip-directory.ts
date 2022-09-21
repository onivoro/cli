import AdmZip from "adm-zip";
import { resolve } from "path";

export async function zipDirectory(inputDir: string, outputFile: string) {
  const zip = new AdmZip();

  zip.addLocalFolder(inputDir);

  console.log(`Creating ${outputFile}`);

  await new Promise((res, rej) => zip.writeZip(outputFile, (error: any) => {
    if (error) {
      return rej(error);
    }

    resolve();
  }));
  console.log(`Created ${outputFile} successfully`);
};
