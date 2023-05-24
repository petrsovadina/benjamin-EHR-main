/*
 * Generated by @medplum/generator
 * Do not edit manually.
 */

import { PoolClient } from 'pg';

export async function run(client: PoolClient): Promise<void> {
  await client.query(`ALTER TABLE "UserConfiguration" ADD COLUMN "name" TEXT NOT NULL DEFAULT ''`);
  await client.query('CREATE INDEX ON "UserConfiguration" ("name")');
}
