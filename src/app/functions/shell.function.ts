import { execSync } from 'node:child_process';

export function shell(cmd: string) {
  try {
    console.log(`\n${cmd}\n`);
    const output = execSync(cmd).toString();
    console.log(`${output}\n`);
    return output;
  } catch (error: any) {
    console.log(error?.stdout?.toString?.());
    console.log(error?.stderr?.toString?.());
    throw error;
  }
}
