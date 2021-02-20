const { Component } = require("react");

const DIFFICULTIES = {
  easy: {
    key: "difficulty-easy",
    label: "Easy",
    factor: 1,
  },
  medium: {
    key: "difficulty-medium",
    label: "Medium",
    factor: 1.5,
  },
  hard: {
    key: "difficulty-hard",
    label: "Hard",
    factor: 2,
  },
};

const ROUTES = [
  {
    key: "home",
    path: "/",
    Component: "",
  },
  {
    key: "game",
    path: "/game",
    Component: "",
  },
  {
    key: "profile",
    path: "/profile",
    Component: "",
  },
  {
    key: "scores",
    path: "/scores",
    Component: "",
  },
];

export { DIFFICULTIES };
