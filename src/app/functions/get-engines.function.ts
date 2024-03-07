import { shell as execSync } from '../functions/shell.function';

export function getEngines() {
    const node = execSync('node -v').toString().replace('\n', '').replace('v', '');
    const npm = execSync('npm -v').toString().replace('\n', '').replace('v', '');
    const [major] = node.replace('v', '').split('.');
    return {
        node, npm, major
    };
}