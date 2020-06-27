const superagent = require("superagent");

const NEWS_API_URL = "http://newsapi.org/v2";
const TOP_HEADLINES_ENDPOINT_PATH = "/top-headlines";
const API_KEY = "1364cc0f8e874a25acf25b1cf8b9c1ce";

const EVERYTHING_ENDPOINT_PATH = "/everything";

const getMainArticles = query =>
  superagent
    .get(`${NEWS_API_URL}${TOP_HEADLINES_ENDPOINT_PATH}`)
    .query({ ...query, apiKey: API_KEY, pageSize: 15 });

const getJordanNews = query =>
  superagent.get(`${NEWS_API_URL}${EVERYTHING_ENDPOINT_PATH}`).query({
    ...query,
    apiKey: API_KEY,
    q: "michael jordan",
    pageSize: 15
  });

module.exports = {
  getMainArticles,
  getJordanNews
};
