import db from "./database.js";

(async () => {
  db.schema
    .createTable("questions", (table) => {
      table.integer("id");
      table.string("letter");
      table.string("question");
      table.string("answer");
    })
    .then((response) => {
      console.log("[+] table created");
    });
})();
