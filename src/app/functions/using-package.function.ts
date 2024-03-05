import { readFile, writeFile } from "fs/promises";

export async function usingPackage(packagePath: string, fn: (json: any) => Promise<string|void>) {
    let content: string;
    let json: any;

    try {
        content = await readFile(packagePath, { encoding: 'utf-8' });
    } catch (e: any) {
        console.error(`Failed to read package.json`, e);
        return;
    }

    try {
        json = JSON.parse(content);
    } catch (e: any) {
        console.error(`Failed to parse package.json`, e);
        return;
    }

    const updatedJson = await fn(json);

    if(!updatedJson) {
        return;
    }

    if(updatedJson) {
        console.log(updatedJson);
    }

    try {
        await writeFile(packagePath, JSON.stringify(updatedJson, null, 4));
    } catch (e: any) {
        console.error(`Failed to update package.json`, e);
        return;
    }
}