<<<<<<< HEAD
import { createBrowserRouter } from "react-router-dom";
import App from "../main.jsx";

// 📂 Main Category Pages
import AudioAndHomeTheater from "./category_pages/AudioAndHomeTheater.jsx";
import CameraAndPhoto from "./category_pages/CameraAndPhoto.jsx";
import ComputerAndLaptop from "./category_pages/ComputerAndLaptop.jsx";
import HeadphonesAndspeaker from "./category_pages/HeadphonesAndspeaker.jsx";
import SmartphoneAndAccessories from "./category_pages/SmartphoneAndAccessories.jsx";
import VideoAndGame from "./category_pages/VideoAndGame.jsx";
import BatteryAndAccessories from "./category_pages/BatteryAndAccessories.jsx";
import GamesAndConsoles from "./category_pages/GamesAndConsoles.jsx";
import Headphones from "./category_pages/Headphones.jsx";

// 📂 Nested Category Pages
import DSLR from "./category_pages/CameraNested/DSLR.jsx";
import Mirrorless from "./category_pages/CameraNested/Mirrorless.jsx";
import Lenses from "./category_pages/CameraNested/Lenses.jsx";

import PCGames from "./category_pages/VideoNested/PCGames.jsx";
import Consoles from "./category_pages/VideoNested/Consoles.jsx";
import StreamingDevices from "./category_pages/VideoNested/StreamingDevices.jsx";

import Smartphones from "./category_pages/ComputerNested/Smartphones.jsx";
import Cases from "./category_pages/ComputerNested/Cases.jsx";
import Chargers from "./category_pages/ComputerNested/Chargers.jsx";

import PlayStation from "./category_pages/GamesNested/PlayStation.jsx";
import Xbox from "./category_pages/GamesNested/Xbox.jsx";
import NintendoSwitch from "./category_pages/GamesNested/NintendoSwitch.jsx";
import PCGamesGames from "./category_pages/GamesNested/PCGamesGames.jsx";


// 📂 Pages nested routed of dropdown
import Home from "../pages/Home.jsx";

import PrivatePolicy from "./pages/PageNestedPages/Privatepolicy.js"
import RefundPolicy from "./pages/PageNestedPages/refundPolicy.js"
import TermsOfService from "./pages/PageNestedPages/termsOfService.jsx"
import FAQs from "./pages/PageNestedPages/faqs.js"

import Collection from "./pages/Collection.jsx";
import Blogs from "./pages/Blogs.jsx";
import Section from "./pages/Section.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      
      // 🌐 Static Pages
      { path: "/", element: <Home /> },

      { path: "privatePolicy", element: <PrivatePolicy /> },
      { path: "refundPolicy", element: <RefundPolicy /> },
      { path: "termsOfService", element: <TermsOfService /> },
      { path: "faqs", element: <FAQs /> },

      { path: "collection", element: <Collection /> },
      { path: "section", element: <Section /> },
      { path: "blogs", element: <Blogs /> },

      // 🗂️ Main Categories
      { path: "audioAndHomeTheater", element: <AudioAndHomeTheater /> },
      { path: "cameraAndPhoto", element: <CameraAndPhoto /> },
      { path: "computerAndLaptop", element: <ComputerAndLaptop /> },
      { path: "headphonesAndspeaker", element: <HeadphonesAndspeaker /> },
      { path: "smartphoneAndAccessories", element: <SmartphoneAndAccessories /> },
      { path: "videoAndGame", element: <VideoAndGame /> },
      { path: "batteryAndAccessories", element: <BatteryAndAccessories /> },
      { path: "gamesAndConsoles", element: <GamesAndConsoles /> },
      { path: "headphones", element: <Headphones /> },

      // 🎯 Camera & Photo Nested Routes
      { path: "camera/dslr", element: <DSLR /> },
      { path: "camera/mirrorless", element: <Mirrorless /> },
      { path: "camera/lenses", element: <Lenses /> },

      // 🎮 Video & Game Nested Routes
      { path: "video-game/pc", element: <PCGames /> },
      { path: "video-game/consoles", element: <Consoles /> },
      { path: "video-game/streaming", element: <StreamingDevices /> },

      // 💻 Computer & Laptop Nested Routes
      { path: "computer/smartphones", element: <Smartphones /> },
      { path: "computer/cases", element: <Cases /> },
      { path: "computer/chargers", element: <Chargers /> },

      // 🕹️ Games & Consoles Nested Routes
      { path: "games/playstation", element: <PlayStation /> },
      { path: "games/xbox", element: <Xbox /> },
      { path: "games/nintendo", element: <NintendoSwitch /> },
      { path: "games/pc", element: <PCGamesGames /> },
    ],
  },
=======
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Dashboard from '../pages/Dashboard';
import AdminPanel from '../pages/AdminPanel';
import ProtectedRoute from '../components/ProtectedRoute';
import AuthForm from '../components/AuthForm';
import Home from '../pages/Home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />, 
        children: [
            { 
                index: true,
                element: (
                <Home/>
                ),
            },
            {
                path: 'dashboard',
                element: (
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                ),
            },
            {
                path: 'admin',
                element: (
                    <ProtectedRoute role="admin">
                        <AdminPanel />
                    </ProtectedRoute>
                ),
            },
        ],
    },
    { path: '/auth', element: <AuthForm />}
>>>>>>> 9dd38e9b3a4ca8e38ba34f74a48406760b8cf6e6
]);

export default router;
