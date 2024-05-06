import readline from "readline";
import scraper from "./scraper/helper.js";

let EXIT_HELP = false;

const question = (question) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      return resolve(answer);
    });
  });
};

(async () => {
  try {
    let data = await scraper.requestDailyData();
    data = scraper.formatDailyData(data);

    let q;
    do {
      q = await question("[?] bir soru gir" + (EXIT_HELP ? " (exit yazarak çıkabilirsiniz): " : ": "));
      let answer = data.filter((element) => element.question.includes(q));

      if (answer.length > 0) {
        console.log(`[+] ${answer.length} tane cevap bulundu.`);
        answer = answer.sort((a, b) => a.question.length - b.question.length);
        for (let i = 0; i < answer.length; i++) {
          console.log(`[~] ${answer[i].question} -> ${answer[i].answer}`);
        }
      }

      if (answer.length < 1 && q != "exit") {
        console.log("[-] cevap bulunamadı.");
      }

      EXIT_HELP = true;
    } while (q != "exit");

    process.exit(0);
  } catch (e) {
    console.error(e.message);
  }
})();
