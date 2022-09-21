import { execSync, ExecSyncOptionsWithStringEncoding, spawnSync } from "child_process";
import { zipDirectory } from '@oni/util';

const opts: ExecSyncOptionsWithStringEncoding = { encoding: 'utf-8' };

export function deployLambda(project: string, region: string) {

  const projectName = project.replace('lambda-', '');

  const role = 'arn:aws:iam::747533038441:role/lambda-role';

  const srcFolderPath = 'packages/lambda/';
  const distFolderPath = `dist/${srcFolderPath}`;
  const zipFolderPath = 'zips/';
  const dist = `${distFolderPath}${projectName}`;
  const zip = `${zipFolderPath}${projectName}.zip`;

  console.log(dist, zip);

  execSync(`npx nx build ${project} --prod --skip-nx-cache`, opts);
  spawnSync('npm', [`i`], { ...opts, cwd: dist })
  execSync(`mkdir -p ${zipFolderPath}`, opts);
  zipDirectory(dist, zip).then(() => {
    const cmd = `aws lambda create-function --function-name "${projectName}" --region ${region} --handler "main.handler" --role "${role}" --runtime "nodejs14.x" --zip-file "fileb://${zip}" --package-type Zip --publish`;
    console.log(cmd);
    execSync(cmd, opts)
  })
}