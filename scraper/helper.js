import db from "../database/database.js";
import axios from "axios";

const URL = "https://api.radkod.com/parolla/api/v1/modes/unlimited";
const DAILY_URL = "https://api.radkod.com/parolla/api/v1/questions";

class Scraper {
  constructor() {}

  async insertData(data) {
    try {
      await db("questions").insert(data);
      return true;
    } catch (e) {
      console.error(e.message);
      return false;
    }
  }

  async getData(id) {
    try {
      let data = await db("questions").where({ id: id });
      return data;
    } catch (e) {
      console.error(e.message);
      return null;
    }
  }

  async getAllData() {
    try {
      let data = await db("questions").select();
      return data;
    } catch (e) {
      console.error(e.message);
      return null;
    }
  }

  async requestData() {
    try {
      let request = await axios.get(URL);
      let response = request.data;
      return response.data;
    } catch (e) {
      console.error(e.message);
      return null;
    }
  }

  async requestDailyData() {
    try {
      let request = await axios.get(DAILY_URL);
      let response = request.data;

      return response.data;
    } catch (e) {
      console.error(e.message);
      return null;
    }
  }

  formatDailyData(data) {
    data = data?.questions;

    for (let i = 0; i < data.length; i++) {
      let element = data[i];
      element.question = element.question.toLowerCase();
      element.answer = element.answer.toLowerCase();
    }

    return data;
  }
}

export default new Scraper();
