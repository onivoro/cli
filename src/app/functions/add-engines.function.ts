import { getEngines } from "./get-engines.function";
import { usingPackage } from "./using-package.function";

export async function addEngines(packagePath: string) {
    await usingPackage(packagePath, async (json) => ({ ...json, engines: getEngines() }));

}