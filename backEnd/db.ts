import {Database} from "bun:sqlite";
import {SqliteClient} from "@effect/sql-sqlite-bun";

export const DATABASE_FILE = "auth.db";
export const db = new Database(DATABASE_FILE);

export const SqlLive = SqliteClient.layer({filename:DATABASE_FILE});