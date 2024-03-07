import { shell as execSync } from '../functions/shell.function';

export function shell(cmd: string) {
  console.log(`\n${cmd}\n`);
  const output = execSync(cmd).toString();
  console.log(`${output}\n`);
  return output;
}
