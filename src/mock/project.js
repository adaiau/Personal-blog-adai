import Mock from "mockjs";

Mock.mock(/^\/api\/project\/?$/, "get", {
  code: 0,
  msg: "",
  "data|10-20": [
    {
      id: "@guid",
      name: "@ctitle(1, 6)",
      "url|1": [
        null,
        "https://adaiau.github.io/Personal-resume/",
        "https://adaiau.github.io/Hero-Query/",
        "https://adaiau.github.io/Lyrics-rolling/",
        "https://adaiau.github.io/shopping-cart/",
        "https://adaiau.github.io/adaiau/",
        "https://adaiau.github.io/Xiaomi-Mall-adai/",
        "https://adaiau.github.io/shopping-cart-adai/",
      ],
      "github|1": [
        null,
        "https://adaiau.github.io/Personal-resume/",
        "https://adaiau.github.io/Hero-Query/",
        "https://adaiau.github.io/Lyrics-rolling/",
        "https://adaiau.github.io/shopping-cart/",
        "https://adaiau.github.io/adaiau/",
        "https://adaiau.github.io/Xiaomi-Mall-adai/",
        "https://adaiau.github.io/shopping-cart-adai/",
      ],
      "description|1-4": ["@cparagraph(1, 5)"],
      thumb: "@image(300x250, @color, #fff, aDai)",
    },
  ],
});
