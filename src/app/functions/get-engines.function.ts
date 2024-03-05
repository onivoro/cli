import { execSync } from "child_process";

export function getEngines() {
    const node = execSync('node -v').toString().replace('\n', '').replace('v', '');
    const npm = execSync('npm -v').toString().replace('\n', '').replace('v', '');

    return {
        node, npm
    };
}