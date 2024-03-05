#! /usr/bin/env node

import { CommandFactory } from 'nest-commander';

import { CliEvoModule } from './app/cli-evo.module';

async function bootstrap() {
  await CommandFactory.run(CliEvoModule, ['warn', 'error']);
}

void bootstrap();
