import axios from "axios";

// const serverUrl = "http://localhost:5300/api/v1";
const serverUrl = "/api/v1";

export const customFetch = axios.create({
  baseURL: serverUrl,
});

export const addUserToLocalStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem("user");
};

export const getUserFromLocalStorage = () => {
  const result = localStorage.getItem("user");
  const user = result ? JSON.parse(result) : null;
  return user;
};

export const footerItems = [
  {
    mainTitle: "Discover Deliveroo",
    links: [
      { title: "Investors", url: "#" },
      { title: "About us", url: "#" },
      { title: "Takeaway", url: "#" },
      { title: "More", url: "#" },
      { title: "Newsroom", url: "#" },
      { title: "Engineering blog", url: "#" },
      { title: "Design blog", url: "#" },
      { title: "Gift Cards", url: "#" },
      { title: "Deliveroo Students", url: "#" },
      { title: "Careers", url: "#" },
      { title: "Restaurant signup", url: "#" },
      { title: "Become a rider", url: "#" },
    ],
  },
  {
    mainTitle: "Legal",
    links: [
      { title: "Legal", url: "#" },
      { title: "Terms and conditions", url: "#" },
      { title: "Privacy", url: "#" },
      { title: "Cookies", url: "#" },
      { title: "Modern Slavery Statement", url: "#" },
      { title: "Tax Strategy", url: "#" },
      { title: "Section 172 Statement", url: "#" },
      { title: "Public Authority Requests", url: "#" },
    ],
  },
  {
    mainTitle: "Help",
    links: [
      { title: "Contact", url: "#" },
      { title: "FAQs", url: "#" },
      { title: "Cuisines", url: "#" },
      { title: "Brands", url: "#" },
    ],
  },
  {
    mainTitle: "Take Deliveroo with you",
    links: [
      {
        title: "APP_STORE",
        url: "#",
      },
      {
        title: "PLAY_STORE",
        url: "#",
      },
    ],
  },
];

export const dummyCategoryData = [
  {
    id: 1,
    name: "New Daily Specials",
    slug: "new-daily-specials",
    image: "https://picsum.photos/seed/G9geBIzt/640/480",
    dishes: [
      {
        id: 1,
        name: "ratione patruus cilicium",
        desc: "Demulceo maxime strues ulciscor terror.",
        price: 16,
        image: "https://loremflickr.com/640/480/food?lock=7875161757843456",
        catId: 1,
        createdAt: "2024-01-21T13:43:48.000Z",
        updatedAt: "2024-01-21T13:43:48.000Z",
      },
    ],
  },
  {
    id: 2,
    name: "Salads",
    slug: "salads",
    image: "https://loremflickr.com/640/480?lock=7785100477464576",
    dishes: [
      {
        id: 11,
        name: "corrumpo abduco curo",
        desc: "Voco absens sufficio absque vobis.",
        price: 39,
        image: "https://loremflickr.com/640/480/food?lock=7663087964389376",
        catId: 2,
        createdAt: "2024-01-21T13:43:49.000Z",
        updatedAt: "2024-01-21T13:43:49.000Z",
      },
    ],
  },
  {
    id: 3,
    name: "Hot Power Bowls",
    slug: "hot-power-bowls",
    image: "https://loremflickr.com/640/480?lock=3837609541369856",
    dishes: [
      {
        id: 28,
        name: "utique curso arma",
        desc: "Clibanus consectetur desipio aegrus.",
        price: 13,
        image: "https://loremflickr.com/640/480/food?lock=3424734379245568",
        catId: 6,
        createdAt: "2024-01-21T13:43:50.000Z",
        updatedAt: "2024-01-21T13:43:50.000Z",
      },
    ],
  },
  {
    id: 4,
    name: "Gym food",
    slug: "gym-food",
    image: "https://loremflickr.com/640/480?lock=752231664058368",
    dishes: [
      {
        id: 35,
        name: "cupiditate vulnero voluptas",
        desc: "Appello enim annus colo.",
        price: 30,
        image: "https://loremflickr.com/640/480/food?lock=3551440693886976",
        catId: 7,
        createdAt: "2024-01-21T13:43:50.000Z",
        updatedAt: "2024-01-21T13:43:50.000Z",
      },
    ],
  },
  {
    id: 5,
    name: "Rainbow Wraps",
    slug: "rainbow-wraps",
    image: "https://loremflickr.com/640/480?lock=752231664058368",
    dishes: [
      {
        id: 35,
        name: "cupiditate vulnero voluptas",
        desc: "Appello enim annus colo.",
        price: 30,
        image: "https://loremflickr.com/640/480/food?lock=3551440693886976",
        catId: 7,
        createdAt: "2024-01-21T13:43:50.000Z",
        updatedAt: "2024-01-21T13:43:50.000Z",
      },
    ],
  },
  {
    id: 6,
    name: "Vegain Menu",
    slug: "vegain-menu",
    image: "https://loremflickr.com/640/480?lock=752231664058368",
    dishes: [
      {
        id: 35,
        name: "cupiditate vulnero voluptas",
        desc: "Appello enim annus colo.",
        price: 30,
        image: "https://loremflickr.com/640/480/food?lock=3551440693886976",
        catId: 7,
        createdAt: "2024-01-21T13:43:50.000Z",
        updatedAt: "2024-01-21T13:43:50.000Z",
      },
    ],
  },
  {
    id: 7,
    name: "Snacks & fruit",
    slug: "snacks-&-fruit",
    image: "https://loremflickr.com/640/480?lock=752231664058368",
    dishes: [
      {
        id: 35,
        name: "cupiditate vulnero voluptas",
        desc: "Appello enim annus colo.",
        price: 30,
        image: "https://loremflickr.com/640/480/food?lock=3551440693886976",
        catId: 7,
        createdAt: "2024-01-21T13:43:50.000Z",
        updatedAt: "2024-01-21T13:43:50.000Z",
      },
    ],
  },
  {
    id: 8,
    name: "Cold Drinks",
    slug: "cold-drinks",
    image: "https://loremflickr.com/640/480?lock=752231664058368",
    dishes: [
      {
        id: 35,
        name: "cupiditate vulnero voluptas",
        desc: "Appello enim annus colo.",
        price: 30,
        image: "https://loremflickr.com/640/480/food?lock=3551440693886976",
        catId: 7,
        createdAt: "2024-01-21T13:43:50.000Z",
        updatedAt: "2024-01-21T13:43:50.000Z",
      },
    ],
  },
  {
    id: 9,
    name: "Smoothies, shakes & juice",
    slug: "smoothies,-shakes-&-juice",
    image: "https://loremflickr.com/640/480?lock=752231664058368",
    dishes: [
      {
        id: 35,
        name: "cupiditate vulnero voluptas",
        desc: "Appello enim annus colo.",
        price: 30,
        image: "https://loremflickr.com/640/480/food?lock=3551440693886976",
        catId: 7,
        createdAt: "2024-01-21T13:43:50.000Z",
        updatedAt: "2024-01-21T13:43:50.000Z",
      },
    ],
  },
];
