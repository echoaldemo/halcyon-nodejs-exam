"use strict";

/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const TaskSeeder = require("./TaskSeeder");

class DatabaseSeeder {
  async run() {
    await TaskSeeder.run();
  }
}

module.exports = DatabaseSeeder;
