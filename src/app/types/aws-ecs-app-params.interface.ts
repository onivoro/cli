import { IAwsAppParams } from './aws-app-params.interface';

export interface IAwsEcsAppParams extends IAwsAppParams {
  ecr: string;
}
