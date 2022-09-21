import { execSync } from "child_process";
import { opts, zipDirectory } from '@oni/util';

export async function zipLambda(distFolderPath: string, zipFolderPath: string) {
  execSync(`mkdir -p ${zipFolderPath}`, opts);
  await zipDirectory(distFolderPath, zipFolderPath)
}