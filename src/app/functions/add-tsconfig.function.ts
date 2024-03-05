import { writeFile } from "fs/promises";
import { getEngines } from "./get-engines.function";

export async function addTsconfig(tsconfigPath: string) {
    const { major } = getEngines();
    await Promise.all([
        writeFile(tsconfigPath, `{
        "$schema": "https://json.schemastore.org/tsconfig",
        "extends": "node_modules/@onivoro/cli/assets/tsconfig.${major}.json",
        "compilerOptions": {
          "declaration": true,
          "strict": false,
          "esModuleInterop": false,
          "include": ["src/**/*.ts"],
          "exclude": [
            "node_modules",
            "test",
            "dist",
            "**/*spec.ts"
          ]
        }
      }`),
        writeFile('tsconfig.esm.json', `{
        "extends": "${tsconfigPath}",
        "compilerOptions": {
          "outDir": "./dist/esm",
          "module": "esnext"
        }
      }`),
      writeFile('tsconfig.cjs.json', `{
        "extends": "${tsconfigPath}",
        "compilerOptions": {
            "outDir": "./dist/cjs",
            "module": "commonjs"
          }
      }`)
    ]);
}
