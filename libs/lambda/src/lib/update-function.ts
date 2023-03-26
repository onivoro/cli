import { opts } from "@oni/util";
import { execSync } from "child_process";

export function updateFunction(functionName: string, region: string, zip: string) {
    const cmd = `aws lambda update-function-code --region ${region} --function-name "${functionName}" --zip-file "fileb://${zip}" --publish`;
    execSync(cmd, opts)
}
