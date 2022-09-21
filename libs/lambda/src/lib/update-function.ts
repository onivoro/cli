import { opts } from "@oni/util";
import { execSync } from "child_process";

export function updateFunction(functionName: string, region: string, zip: string) {
    const cmd = `aws lambda create-function --function-name "${functionName}" --region ${region} --handler "main.handler" --package-type Zip --zip-file "fileb://${zip}" --publish`;
    execSync(cmd, opts)
}