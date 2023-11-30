import { FaGithub } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'

const portfolioData = [
  {
    id: 1,
    title: 'reelestate',
    description: 'This project was the first Mini Project I had during the Bootcamp I joined recently. Its was about realestate listing website kind of thing where sellers can list properties and stuff. It was designed in Figma(wireframe). This project was primarily for me to practice my skills in Vanilla CSS and ensure that I am capapble of making a website without the use of any CSS Frameworks/Libraries',
    icons: [
      {
        sourse: { icon: FaGithub, link: 'https://github.com/dovecancode/novice-craft/tree/main/reelestate' },
        achor: { icon: FiExternalLink, link: 'https://reelestate.vercel.app/' },
      },
    ],
  },
  // {
  //   id: 2,
  //   title: 'gadgetworld',
  //   description: 'This website is part of my second Mini Project during the Bootcamp its an eCommerce website type of thing. My group decided to use Bootstrap Framework to make the developement easy and more UI friendly. Since I was in a group I go through a lot of basic commands of git and GitHub. It was also the perect time to explore Vanilla Javascript',
  //   icons: [
  //     {
  //       sourse: { icon: FaGithub, link: 'https://github.com/dovecancode/Gadget-World' },
  //       achor: { icon: FiExternalLink, link: 'https://gadget-world.vercel.app/' },
  //     },
  //   ],
  // },
  {
    id: 3,
    title: 'parkspot',
    description: 'parspot quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
    icons: [
      {
        sourse: { icon: FaGithub, link: 'https://github.com/dovecancode/' },
        achor: { icon: FiExternalLink, link: 'https://github.com/dovecancode/' },
      },
    ],
  },
  {
    id: 4,
    title: 'todo list app',
    description: 'This to-do list app probably is my favorite one so far. Doing this  I got deep dive more into Vanilla Javascript, local storages, and a little bit of CSS animation triggerd by javascript events',
    icons: [
      {
        sourse: { icon: FaGithub, link: 'https://github.com/dovecancode/todoListApp' },
        achor: { icon: FiExternalLink, link: 'https://dove-todo-app.vercel.app/' },
      },
    ],
  },
  {
    id: 5,
    title: 'budget app',
    description: "This project's main goal is to practice ReactJs for myself. However, this Budget App will help you map your budget in everyday spending or monthly spending. It's just basically like a calculator that only can add and subtract.",
    icons: [
      {
        sourse: { icon: FaGithub, link: 'https://github.com/dovecancode/Budget-App' },
        achor: { icon: FiExternalLink, link: 'https://dove-budgetcalc.vercel.app/' },
      },
    ],
  },
  {
    id: 6,
    title: 'cloudbudget',
    description: 'cloudbudget app list app quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
    icons: [
      {
        sourse: { icon: FaGithub, link: 'https://github.com/' },
        achor: { icon: FiExternalLink, link: 'https://live.com/' },
      },
    ],
  },
]

export default portfolioData
