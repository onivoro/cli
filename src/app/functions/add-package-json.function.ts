import { writeFile } from "fs/promises";
import { getEngines } from "./get-engines.function";

export async function addPackageJson(name: string, packagePath: string, platform: string) {
  const nodeTypes = platform === 'server'
    ? `"@types/node": "${getEngines().node}",`
    : '';

  const webTypes = platform === 'browser'
    ? `"@typescript/lib-dom": "npm:@types/web@^0.0.140",`
    : '';

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
        "onx": "onx",
        "build": "onx Build",
        "deploy": "onx Publish",
        "test": "onx Test",
        "update": "onx Update"
      },
      "exports": {
        ".": {
          "types": "./dist/types/index.d.ts",
          "require": "./dist/cjs/index.js",
          "import": "./dist/esm/index.js",
          "default": "./dist/esm/lib.js"
        }
      },
      "onx": {
        "platform": "${platform}"
      },
      "devDependencies": {
        "@onivoro/cli": "*",
        "@types/jest": "*",
        ${webTypes}
        ${nodeTypes}
        "typescript": "*"
      }
    }`);
}