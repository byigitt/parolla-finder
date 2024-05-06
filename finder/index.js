import db from "../database/database.js";

class Finder {
  constructor() {}

  async formatDbQuestion() {
    try {
      let data = await db("questions").select();

      for (let i = 0; i < data.length; i++) {
        let element = data[i];
        let formattedQuestion = element.question.toLowerCase();

        try {
          await db("questions").where({ id: element.id }).update({ question: formattedQuestion });
        } catch (e) {
          console.error(e.message);
        }
      }

      return true;
    } catch (e) {
      console.error(e.message);
      return false;
    }
  }

  async formatDbAnswer() {
    try {
      let data = await db("questions").select();

      for (let i = 0; i < data.length; i++) {
        let element = data[i];
        let formattedAnswer = element.answer.toLowerCase();

        try {
          await db("questions").where({ id: element.id }).update({ answer: formattedAnswer });
        } catch (e) {
          console.error(e.message);
        }
      }

      return true;
    } catch (e) {
      console.error(e.message);
      return false;
    }
  }

  async formatDb() {
    try {
      await this.formatDbQuestion();
      await this.formatDbAnswer();
      return true;
    } catch (e) {
      console.error(e.message);
      return false;
    }
  }

  async findQuestion(question) {
    try {
      let data = await db("questions").where("question", "like", `%${question.toLowerCase()}%`);
      return data;
    } catch (e) {
      console.error(e.message);
      return null;
    }
  }
}

export default new Finder();
