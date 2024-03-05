import { writeFile } from "fs/promises";

export async function addPackageJson(name: string, packagePath: string) {
    await writeFile(packagePath, `{
      "name": "${name}",
      "version": "0.0.1",
      "main": "dist/cjs/index.js",
      "module": "dist/esm/index.js",
      "types": "dist/types/index.d.ts",
      "files": [
        "dist/*"
      ],
      "scripts": {
        "push": "onx Publish",
        "build": "onx Build"
      },
      "exports": {
        ".": {
          "types": "./dist/types/index.d.ts",
          "require": "./dist/cjs/index.js",
          "import": "./dist/esm/index.js",
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