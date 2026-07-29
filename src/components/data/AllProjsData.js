/* src/components/data/AllProjsData.js */

import RC_Car from '../../assets/images/RC_Car.png'
import SmartMirror from '../../assets/images/SmartMirror.jpeg'

export const AllProjectsData = [
  // Engineering Projects
  {
    id: 1,
    slug: 'mirrai',
    name: 'MirrAI',
    description: 'For my final year engineering Capstone project, my group and I decided to create a smart home Magic Mirror with an AI component. This AI was designed to recognize what the user is currently wearing, then generates similar outfits based on that. The goal of this mirror was to help inspire users with similar outfits, giving them a variation on their everyday apparel. This project also allows users an ease of getting ready for the day, whether it being meetings, social gatherings or just going for a walk.',
    image: SmartMirror,
    category: 'Engineering',
    type: 'video',
    link: 'https://www.youtube.com/watch?v=oUI2s6KUGG4&ab_channel=NikhilKharbanda',
    demo: 'https://www.youtube.com/watch?v=oUI2s6KUGG4&ab_channel=NikhilKharbanda',
    github: null,
    techStack: ['AI', 'Computer Vision', 'Python', 'Raspberry Pi', 'Machine Learning']
  },
  {
    id: 2,
    slug: 'rc-cars-proximity-sensing',
    name: 'RC Cars with proximity sensing',
    description: 'I had build a RC car using an old Roomba that had proximity sensing capabilities running on a RPi and ultrasonic sensors. The car would autonomously drive down a "road", where another RC car would be coming head on. In this scenario, the car running the RPi would sense the car coming closer, and would swerve to avoid it. Our next goal to take this further was to create an autonomous arm for which the car would automatically drive to an available "parking recharge spot" once a low battery was detected and the arm would recharge the on-board battery.',
    image: RC_Car,
    category: 'Engineering',
    type: 'video',
    link: 'https://youtu.be/VQaq__QIThw',
    demo: 'https://youtu.be/VQaq__QIThw',
    github: null,
    techStack: ['Raspberry Pi', 'Python', 'Ultrasonic Sensors', 'Hardware', 'Automation']
  },

  // Web Development Projects
  {
    id: 3,
    slug: 'nfc-collect',
    name: 'NFC Collect',
    description: 'For the second project in the UofT Coding Bootcamp, my group and I decided to make an "Instagram" feed like for NFTs. Users can upload their NFT collections and view other peoples collections as well.',
    image: 'https://raw.githubusercontent.com/nikhil-kharbanda/UofT_NFTC/main/imgs/Proj1-NFTCollect.PNG',
    category: 'Web Dev',
    type: 'web',
    demo: 'https://nftc-collect.herokuapp.com/login',
    github: 'https://github.com/nikhil-kharbanda/UofT_NFTC',
    link: 'https://nftc-collect.herokuapp.com/login',
    techStack: ['React', 'Node.js', 'MongoDB']
  },
  {
    id: 4,
    slug: 'devspace',
    name: 'DevSpace',
    description: 'For the final project in the University of Torontos Full-Stack Developer program, my group and I created a website where developers from all over the world can connect and share their experties on development projects based on specializations. Users can sign-up to use DevSpace and connect with developers around the world by selecing a channel they are interested in',
    image: 'https://user-images.githubusercontent.com/87992263/144091632-b77c4f89-1f20-4e38-bfc6-cef2d4e6f4d1.png',
    category: 'Web Dev',
    type: 'web',
    demo: 'https://devspace-jnmst.herokuapp.com/',
    github: 'https://github.com/nikhil-kharbanda/UofT_Chatbox',
    link: 'https://devspace-jnmst.herokuapp.com/',
    techStack: ['React', 'Node.js', 'Socket.io', 'MongoDB']
  },
  {
    id: 5,
    slug: 'crypto-stock-tracker',
    name: 'Crypto/Stock Tracker',
    description: 'For the first project in the UofT Coding Bootcamp, my group and I decided to make a stock/crypto API. Users can track their crypto value and their stock prices in real-time. This project required some knowledge of Bootstrap, and knowledge about APIs.',
    image: 'https://raw.githubusercontent.com/nikhil-kharbanda/UofT-Crypto_Proj1/main/Assets/imgs/FinalProduct.PNG',
    category: 'Web Dev',
    type: 'web',
    demo: 'https://nikhil-kharbanda.github.io/UofT-Crypto_Proj1/',
    github: 'https://github.com/nikhil-kharbanda/UofT-Crypto_Proj1',
    link: 'https://nikhil-kharbanda.github.io/UofT-Crypto_Proj1/',
    techStack: ['JavaScript', 'Bootstrap', 'API', 'HTML/CSS']
  },
  {
    id: 6,
    slug: 'workout-tracker',
    name: 'Workout Tracker',
    description: 'In this project, users can track their workout. They can also see their stats (total weight and duration) within 7 days',
    image: 'https://raw.githubusercontent.com/nikhil-kharbanda/UofT_WorkoutTracker/main/Assets/Stats.PNG',
    category: 'Web Dev',
    type: 'web',
    demo: 'https://uoft-workoutexercise-tracker.herokuapp.com/',
    github: 'https://github.com/nikhil-kharbanda/UofT_WorkoutTracker',
    link: 'https://uoft-workoutexercise-tracker.herokuapp.com/',
    techStack: ['Node.js', 'Express', 'MongoDB', 'Mongoose']
  },
  {
    id: 7,
    slug: 'tech-blog',
    name: 'Tech Blog',
    description: 'In this project, users can post (like a blog site) about different technologies and other users can comment on those posts. Users can also see their posts in a dashboard view and see all the comments their post had received',
    image: 'https://raw.githubusercontent.com/nikhil-kharbanda/UofT_TechBlog/main/Assets/images/MainPage.PNG',
    category: 'Web Dev',
    type: 'web',
    demo: 'https://uoft-techblog.herokuapp.com/',
    github: 'https://github.com/nikhil-kharbanda/UofT_TechBlog',
    link: 'https://uoft-techblog.herokuapp.com/',
    techStack: ['Node.js', 'Express', 'Handlebars', 'MySQL']
  },
  {
    id: 8,
    slug: 'weather-dashboard',
    name: 'Weather Dashboard',
    description: 'In this assignment, using the OpenWeatherAPI, I was designated to create a weather checker. Users can check what the temperature is in a certain city (includes temperature, humidity, wind speed, etc.), and each search result is saved to a local storage.',
    image: 'https://raw.githubusercontent.com/nikhil-kharbanda/UofT-WeatherDashboard/main/assets/imgs/Capture.PNG',
    category: 'Web Dev',
    type: 'web',
    demo: 'https://nikhil-kharbanda.github.io/UofT-WeatherDashboard/',
    github: 'https://github.com/nikhil-kharbanda/UofT-WeatherDashboard',
    link: 'https://nikhil-kharbanda.github.io/UofT-WeatherDashboard/',
    techStack: ['JavaScript', 'API', 'HTML/CSS']
  },
  {
    id: 9,
    slug: 'code-quiz',
    name: 'Code Quiz',
    description: 'In this assignment, I was designated to design a mini coding quiz. Here, we were learning about JS, and programmed a timer on the quiz. If a user got an answer wrong, the time would be deducted. If the user got the question right, some time would be rewarded',
    image: 'https://raw.githubusercontent.com/nikhil-kharbanda/UofT_CodeQuiz/main/imgs/Page1-Welcome.PNG',
    category: 'Web Dev',
    type: 'web',
    demo: 'https://nikhil-kharbanda.github.io/UofT_CodeQuiz/',
    github: 'https://github.com/nikhil-kharbanda/UofT_CodeQuiz',
    link: 'https://nikhil-kharbanda.github.io/UofT_CodeQuiz/',
    techStack: ['JavaScript', 'HTML/CSS', 'DOM Manipulation']
  },
  {
    id: 10,
    slug: 'password-generator',
    name: 'Password Generator',
    description: 'In this assignment, I was designated to create a password generator. The user selects what criteria they want the generated password to meet, and then it displays on the webpage. They select how many characters they want (between 8-128), capital/lowercase letters, numbers, and/or special characters',
    image: 'https://raw.githubusercontent.com/nikhil-kharbanda/UofTBootcamp_PasswordGenerator/main/imgs/Capture1_AskingUserForLength.PNG',
    category: 'Web Dev',
    type: 'web',
    demo: 'https://nikhil-kharbanda.github.io/UofTBootcamp_PasswordGenerator/',
    github: 'https://github.com/nikhil-kharbanda/UofTBootcamp_PasswordGenerator',
    link: 'https://nikhil-kharbanda.github.io/UofTBootcamp_PasswordGenerator/',
    techStack: ['JavaScript', 'HTML/CSS', 'Algorithms']
  }
]