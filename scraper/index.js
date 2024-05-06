import helper from "./helper.js";

(async () => {
  while (true) {
    let data = await helper.requestData();

    if (data?.questions) {
      for (let i = 0; i < data.questions.length; i++) {
        let question = data.questions[i];

        try {
          let result = await helper.getData(question.id);

          if (result?.length < 1) {
            let result = await helper.insertData(question);

            if (result) {
              console.log(`[+] ${question.id} inserted.`);
            } else {
              console.log(`[-] failed to insert ${question.id}.`);
            }
          } else {
            console.log(`[-] ${question.id} already exists so no insertion.`);
          }
        } catch (e) {
          console.error(e.message);
          console.log(`[-] failed to insert ${question.id}.`);
        }
      }
    } else {
      console.log("[-] failed to fetch data.");
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
})();
