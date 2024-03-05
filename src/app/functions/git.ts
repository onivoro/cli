import { spawnSync } from 'child_process';

export const git = (args: string[]) =>
  spawnSync('git', args).stdout?.toString();
