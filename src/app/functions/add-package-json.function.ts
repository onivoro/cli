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
        "ts": "npx tsc --module es2022 --outDir esm/ && echo '{\"type\": \"module\"}' > dist/esm/package.json",
        "push": "npm publish --access public",
        "compile": "tsc -b ./tsconfig.cjs.json ./tsconfig.esm.json ./tsconfig.types.json",
        "build:clean": "rm -rf ./build",
        "build": "npm run build:clean && npm run compile && npm run hack",
        "hack": "echo '{\"type\": \"module\"}' > dist/esm/package.json"
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