"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class AlterTaskSchema extends Schema {
  up() {
    this.alter("tasks", (table) => {
      table.boolean("task_status").notNullable();
    });
  }

  down() {
    this.table("tasks", (table) => {
      // reverse alternations
    });
  }
}

module.exports = AlterTaskSchema;
