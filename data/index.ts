export const navItems = [
  { name: "关于", link: "#about" },
  { name: "项目", link: "#projects" },
  { name: "工作经验", link: "#experince" },
  { name: "相关技能", link: "#myskills" },
  { name: "联系", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "积极创新，保证质量，认真负责，这里写你想要表达的东西你的优势",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "轻松适应不同的时区，实现有效的协作",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "我的技术栈",
    description: "我不断的提高",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "探索新框架以拓宽技能",
    description: "我积极的",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 5,
    title: "想一起开始一个项目吗？",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [

  {
    id: 1,
    title: "项目名称一",
    des: "这是项目xxx的简介，这是一个后台管理系统，作用是什么，可以用来做什么",
    img: "/3.webp",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    live: "", // 你的项目在线地址
    github: "", // 你的项目github地址
    perview: "在线预览",
    gitText: "Github",
  },
  {
    id: 2,
    title: "项目名称二",
    des: "这是项目xxx的简介，这是一个后台管理系统，作用是什么，可以用来做什么",
    img: "/3.webp",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/express.png", "/node.png", "/mongodb.svg"],
    live: "", // 你的项目在线地址
    github: "", // 你的项目github地址
    perview: "在线预览",
    gitText: "Github",
  },
  {
    id: 3,
    title: "项目名称三",
    des: "这是项目xxx的简介，这是一个后台管理系统，作用是什么，可以用来做什么，这是一个比较长的作品简介，你需要更多的描述",
    img: "/3.webp",
    iconLists: ["/re.svg", "/api.png"],
    live: "", // 你的项目在线地址
    github: "", // 你的项目github地址
    perview: "在线预览",
    gitText: "Github",
  },

  {
    id: 4,
    title: "项目名称四",
    des: "这是项目xxx的简介，这是一个后台管理系统，作用是什么，可以用来做什么，这是一个比较长的作品简介，你需要更多的描述",
    img: "/3.webp",
    iconLists: ["/re.svg", "/css.svg", "fm.svg"],
    live: "", // 你的项目在线地址
    github: "", // 你的项目github地址
    perview: "在线预览",
    gitText: "Github",
  }
];

// 工作经历
export const workExperience = [
  {
    id: 1,
    companyName: "公司名称一二三",
    date: "04-2023 - 现在",
    title: " 前端开发工程师",
    desc: " 在xxx，我主要开发了一个具有两个面板的产品：用户和管理员，还管理了另一个项目。我们与两个人团队合作，确保了该应用程序的顺利运行，该应用程序在国际上得到广泛使用。该项目涉及复杂的问题解决，特别是从后端解决与数据相关的问题以优化网站性能",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 2,
    companyName: "公司名称一二三",
    date: "03-2023 - 03-2021",
    title: " 前端开发工程师",
    desc: " 在xxx，我主要开发了一个具有两个面板的产品：用户和管理员，还管理了另一个项目。我们与两个人团队合作，确保了该应用程序的顺利运行，该应用程序在国际上得到广泛使用。该项目涉及复杂的问题解决，特别是从后端解决与数据相关的问题以优化网站性能",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 3,
    companyName: "公司名称一二三",
    date: "03-2021 - 03-2018",
    title: " 前端开发工程师",
    desc: " 在xxx，我主要开发了一个具有两个面板的产品：用户和管理员，还管理了另一个项目。我们与两个人团队合作，确保了该应用程序的顺利运行，该应用程序在国际上得到广泛使用。该项目涉及复杂的问题解决，特别是从后端解决与数据相关的问题以优化网站性能",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];
// 社交媒体
export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/"
  },
  {
    id: 2,
    img: "/twit.svg",
    url: "https://x.com/"
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://www.linkedin.com/"
  },
];
// 技术栈
export const skills = [
  {
    id: 1,
    image: "/skills/css.svg",
    name: "CSS",
    designation: ""
  },
  {
    id: 2,
    image: "/skills/html.svg",
    name: "HTML",
    designation: ""
  },
  {
    id: 3,
    image: "/skills/postman.svg",
    name: "Postman",
    designation: ""
  },
  {
    id: 4,
    image: "/skills/react.svg",
    name: "React.js",
    designation: ""
  },
  {
    id: 5,
    image: "/skills/nextjs.png",
    name: "Next.js",
    designation: ""
  },
  {
    id: 6,
    image: "/skills/tailwind.svg",
    name: "Tailwind",
    designation: ""
  },
  {
    id: 7,
    image: "/skills/javascript.svg",
    name: "JavaScript",
    designation: ""
  },
  {
    id: 8,
    image: "/skills/git.svg",
    name: "Git",
    designation: ""
  },
  {
    id: 9,
    image: "/skills/visual-studio-code.svg",
    name: "Visual Studio Code",
    designation: ""
  }
];
// 技术栈对应图片
export const icons = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nextdotjs",
  "amazonaws",
  "firebase",
  "vercel",
  "testinglibrary",
  "git",
  "github",
  "visualstudiocode",
  "figma",
]
// 所在地图片
export const image =
{
  beijing: "https://img1.baidu.com/it/u=1309946516,1570406910&fm=253&fmt=auto&app=138&f=JPEG?w=1067&h=800"
}
