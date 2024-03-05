import { writeFile } from "fs/promises";

export async function addPackageJson(name: string, packagePath: string) {
    await writeFile(packagePath, `{
      "name": "${name}",
      "version": "0.0.1",
      "main": "dist/index.cjs.js",
      "module": "dist/index.esm.js",
      "files": [
        "dist/*"
      ],
      "scripts": {
        "push": "onx Publish",
        "build": "onx Build"
      },
      "exports": {
        ".": {
          "types": "./dist/types/src/index.d.ts",
          "require": "./dist/cjs/src/index.js",
          "import": "./dist/esm/src/index.js",
          "default": "./dist/esm/lib.js"
        }
      },
      "devDependencies": {
        "@onivoro/cli": "*",
        "@types/jest": "*",
        "typescript": "*"
      }
    }`);
}