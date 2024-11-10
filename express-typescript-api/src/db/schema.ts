import {integer, pgTable, text} from "drizzle-orm/pg-core";

export const NotesTable = pgTable("note", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  title: text("title").notNull(),
  body: text("description"),
});