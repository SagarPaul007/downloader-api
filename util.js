const axios = require("axios");
const cheerio = require("cheerio");

const getMovies = async (name, fast = 0) => {
  const URL = `https://knaben.eu/search/?cat=All&q=${name}&fast=${fast}`;
  let movies = [];

  await axios.get(URL).then(async (response) => {
    const $ = await cheerio.load(response.data);
    const table = $("#thaTableIndeed").children("tr");
    await table.each(async (index, item) => {
      if (index > 0) {
        const link = $(item)
          .children("td:nth-child(2)")
          .children("a")
          .attr("href");

        const name = $(item)
          .children("td:nth-child(2)")
          .children("a")
          .attr("title");

        const size = $(item).children("td:nth-child(3)").text();
        const seeders = $(item).children("td:nth-child(5)").text();
        const peers = $(item).children("td:nth-child(6)").text();

        const category = $(item)
          .children("td:nth-child(1)")
          .children("a")
          .text();
        if (link.substring(0, 5) === "https")
          movies.push({ category, name, size, seeders, peers, link });
      }
    });
  });

  return movies;
};

module.exports = { getMovies };
