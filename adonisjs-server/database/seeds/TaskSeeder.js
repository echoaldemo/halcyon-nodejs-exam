"use strict";

/*
|--------------------------------------------------------------------------
| TaskSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const Database = use("Database");

class TaskSeeder {
  static async run() {
    await Factory.model("App/Models/Task").createMany(2);
    //await Database.table("tasks").insert([]);
  }
}

module.exports = TaskSeeder;
