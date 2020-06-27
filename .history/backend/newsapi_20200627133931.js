const superagent = require("superagent");

const NEWS_API_URL = "http://newsapi.org/v2";
const TOP_HEADLINES_ENDPOINT_PATH = "/top-headlines";
const API_KEY = "892ecfc311bd419db1d98dd811311907";

const EVERYTHING_ENDPOINT_PATH = "/everything";

const getMainArticles = (query) =>
  superagent
    .get(`${NEWS_API_URL}${TOP_HEADLINES_ENDPOINT_PATH}`)
    .query({ ...query, apiKey: API_KEY, pageSize: 15 });

const getPlayStationNews = (query) =>
  superagent.get(`${NEWS_API_URL}${EVERYTHING_ENDPOINT_PATH}`).query({
    ...query,
    apiKey: API_KEY,
    q: "playstation",
    pageSize: 15,
  });

module.exports = {
  getMainArticles,
  getPlayStationNews,
};
