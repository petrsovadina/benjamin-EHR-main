/*
 * Generated by @medplum/generator
 * Do not edit manually.
 */

import { PoolClient } from 'pg';

export async function run(client: PoolClient): Promise<void> {
  await client.query(`ALTER TABLE "ValueSetElement"
    ADD COLUMN "display_tsv" tsvector
    GENERATED ALWAYS AS (to_tsvector('english', "display")) STORED`);
  await client.query('CREATE INDEX ON "ValueSetElement" USING GIN ("display_tsv")');
}
