import axios from "axios";


const serverUrl = "http://localhost:5300/api/v1";

export const customFetch = axios.create({
  baseURL: serverUrl,
});

export const footerItems = [
  {
    mainTitle: "Discover Deliveroo",
    links: [
      { title: "Discover Deliveroo", url: "#" },
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
        title: "app store",
        url: "#",
      },
      {
        title: "play store",
        url: "#",
      },
    ],
  },
];


export const addUserToLocalStorage = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem('user');
};

export const getUserFromLocalStorage = () => {
  const result = localStorage.getItem('user');
  const user = result ? JSON.parse(result) : null;
  return user;
};
