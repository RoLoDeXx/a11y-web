const pa11y = require("pa11y");

const testUrl = async () => {
  const response = await pa11y("https://www.netflix.com/");
  console.log(response);
};

testUrl();
