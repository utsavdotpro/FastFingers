const { Component } = require("react");

const DIFFICULTIES = [
  {
    key: "difficulty-easy",
    label: "Easy",
    factor: 1,
  },
  {
    key: "difficulty-medium",
    label: "Medium",
    factor: 1.5,
  },
  {
    key: "difficulty-hard",
    label: "Hard",
    factor: 1,
  },
];

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
