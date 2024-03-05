import { getEngines } from "./get-engines.function";
import { usingPackage } from "./using-package.function";

export async function addEngines(packagePath: string) {
    const { node, npm } = getEngines();
    await usingPackage(packagePath, async (json) => ({ ...json, engines: { node, npm } }));

}