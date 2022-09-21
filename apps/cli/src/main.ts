#! /usr/bin/env node

import { CommandFactory } from 'nest-commander';
import { AppCliModule } from './app/app-cli.module';

async function bootstrap() {
  await CommandFactory.run(AppCliModule);
}

void bootstrap();