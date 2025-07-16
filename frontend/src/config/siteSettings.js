export const categoryMenuItems = [
  { title: "Browse categories", slug: "/categories" },
  { title: "Audio & Home Theater", slug: "/categories/audio-home-theater" },
  {
    title: "Camera & Photo",
    slug: "/categories/camera-photo",
    children: [
      { title: "DSLR", slug: "/categories/camera-photo/dslr" },
      { title: "Mirrorless", slug: "/categories/camera-photo/mirrorless" },
      { title: "Lenses", slug: "/categories/camera-photo/lenses" },
    ],
  },
  {
    title: "Computer & Laptop",
    slug: "/categories/computer-laptop",
    children: [
      { title: "Smartphones", slug: "/categories/computer-laptop/smartphones" },
      { title: "Cases", slug: "/categories/computer-laptop/cases" },
      { title: "Chargers", slug: "/categories/computer-laptop/chargers" },
    ],
  },
  { title: "Headphones & speaker", slug: "/categories/headphones-speaker" },
  { title: "Smartphone & Accessories", slug: "/categories/smartphone-accessories" },
  {
    title: "Video & Game",
    slug: "/categories/video-game",
    children: [
      { title: "PC Games", slug: "/categories/video-game/pc-games" },
      { title: "Consoles", slug: "/categories/video-game/consoles" },
      { title: "Streaming Devices", slug: "/categories/video-game/streaming-devices" },
    ],
  },
  { title: "Battery & Accessories", slug: "/categories/battery-accessories" },
  {
    title: "Games & Consoles",
    slug: "/categories/games-consoles",
    children: [
      { title: "PlayStation", slug: "/categories/games-consoles/playstation" },
      { title: "Xbox", slug: "/categories/games-consoles/xbox" },
      { title: "Nintendo Switch", slug: "/categories/games-consoles/nintendo-switch" },
      { title: "PC Games", slug: "/categories/games-consoles/pc-games" },
    ],
  },
  { title: "Headphones", slug: "/categories/headphones" },
];
