export const navigations = [
  { id: 1, name: "Home", url: "/" },
  {
    id: 2,
    name: "Blog",
    url: "/blog",
    childs: [
      { id: 1, name: "Tech", url: "/tech" },
      { id: 2, name: "Sport", url: "/sport" },
      { id: 3, name: "Fashion", url: "/fashion" },
    ],
  },
  { id: 3, name: "Category", url: "/categories" },
  { id: 4, name: "Product", url: "/product" },
  { id: 5, name: "Login", url: "/login" },
  { id: 6, name: "Customer", url: "/customer" },
];
