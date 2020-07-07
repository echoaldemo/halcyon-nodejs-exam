"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TasksSchema extends Schema {
  up() {
    this.alter("tasks", (table) => {
      table.string("task_name").notNullable().alter();
    });
  }

  down() {
    this.table("tasks", (table) => {
      // reverse alternations
    });
  }
}

module.exports = TasksSchema;
