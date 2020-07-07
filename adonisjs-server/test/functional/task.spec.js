const { test, trait } = use("Test/Suite")("Task");
const Post = use("App/Models/Task");
const Factory = use("Factory");

trait("Test/ApiClient");

test("create a task", async ({ client }) => {
  const task = await Factory.model("App/Models/Task").make();
  const postData = { task_name: task.task_name, task_status: task.task_status };

  const response = await client.post("/api/tasks").send(postData).end();

  response.assertStatus(201);

  response.assertJSONSubset({
    task_name: task.task_name,
    task_status: task.task_status,
  });
});

test("send a 500 error if task created is NULL or blank", async ({
  client,
}) => {
  const task = await Factory.model("App/Models/Task").make();
  const postData = { task_name: "", task_status: task.task_status };

  const response = await client.post("/api/tasks").send(postData).end();

  response.assertStatus(500);
});

test("get list of tasks", async ({ client }) => {
  const tasks = await Factory.model("App/Models/Task").createMany(3);

  const response = await client.get("/api/tasks").end();

  response.assertStatus(200);

  response.assertJSONSubset([
    { task_name: tasks[0].task_name },
    { task_name: tasks[1].task_name },
    { task_name: tasks[2].task_name },
  ]);
});

test("get a task by ID", async ({ client }) => {
  const task = await Factory.model("App/Models/Task").create();

  const response = await client.get(`/api/task/${task.id}`).end();

  response.assertStatus(200);

  response.assertJSONSubset({ task_name: task.task_name, id: task.id });
});

test("send a 404 error if ID does not exist", async ({ client }) => {
  const response = await client.get("/api/task/999").end();

  response.assertStatus(404);
});

test("update a task", async ({ client }) => {
  const task = await Factory.model("App/Models/Task").create();
  const postData = { task_name: "TEST DATA", task_status: true };

  const response = await client
    .put(`/api/task/${task.id}`)
    .send(postData)
    .end();

  response.assertStatus(200);

  response.assertJSONSubset(postData);
});

test("send a 500 error if updated with a NULL or blank value", async ({
  client,
}) => {
  const task = await Factory.model("App/Models/Task").create();
  const postData = { task_name: "", task_status: "" };

  const response = await client
    .put(`/api/task/${task.id}`)
    .send(postData)
    .end();

  response.assertStatus(500);
});

test("delete a task by ID", async ({ client }) => {
  const task = await Factory.model("App/Models/Task").create();
  const response = await client.delete(`/api/task/${task.id}`).end();

  response.assertStatus(204);
});
