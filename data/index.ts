export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-end",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
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
      title: "Reconnect - Chat's Made Simpler",
      des: "A sleek realtime chat app delivering instant messaging, group chats, typing indicators, and media sharing with a modern interface for seamless and engaging communication.",
      img: "/p1.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "https://reconnect-chatsmadesimpler.vercel.app/",
    },
    {
      id: 2,
      title: "Yoom - Video Conferencing App",
      des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
      img: "/p2.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "https://volt-meet.vercel.app/",
    },
    {
      id: 3,
      title: "FileKeeper - Organized File Storage and Sharing",
      des: "A modern file storage and sharing platform designed to keep your documents organized, secure, and easily accessible. Not yet Google Drive, but better!",
      img: "/filekeeper.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/mongo.svg", "/auth.png"],
      link: "#", // Not Live
    },
    {
      id: 4,
      title: "Promptopia",
      des: "A connective platform for prompt engineers to explore, create, and share prompts with tag-based sorting for better discoverability and collaboration.",
      img: "/promtopia.png",
      iconLists: ["/re.svg", "/ts.svg", "/tail.svg", "/zod.png", "/mongo.svg"],
      link: "#", // Not Live
    },
    // {
    //   id: 5,
    //   title: "Next Form Builder",
    //   des: "Build production-ready forms with ease! Features include dynamic fields, seamless UI integration, and Zod validation for enhanced accuracy.",
    //   img: "/p5.svg",
    //   iconLists: ["/next.svg", "/ts.svg", "/tail.svg", "/zod.png", "/rhf.svg"],
    //   link: "#", // Not Live
    // },
  ];


  export const testimonials = [
    {
      quote:
        "Working with Ashutosh has been a game-changer for our business. His expertise, commitment, and ability to understand our vision resulted in a remarkable outcome. Ashutosh's attention to detail and innovative approach set him apart. I highly recommend him to anyone looking to transform their digital presence.",
      name: "Ramandeep Singh",
      title: "CEO, Heega Sports Pvt. Ltd.",
      img: "/heega.png"
    },
    {
      quote:
        "Working with Ashutosh has been a game-changer for our business. His expertise, commitment, and ability to understand our vision resulted in a remarkable outcome. Ashutosh's attention to detail and innovative approach set him apart. I highly recommend him to anyone looking to transform their digital presence.",
      name: "Ramandeep Singh",
      title: "CEO, Heega Sports Pvt. Ltd.",
      img: "/heega.png"
    },
    {
      quote:
        "Working with Ashutosh has been a game-changer for our business. His expertise, commitment, and ability to understand our vision resulted in a remarkable outcome. Ashutosh's attention to detail and innovative approach set him apart. I highly recommend him to anyone looking to transform their digital presence.",
      name: "Ramandeep Singh",
      title: "CEO, Heega Sports Pvt. Ltd.",
      img: "/heega.png"
    },
  ];


export const companies = [
  {
    id: 1,
    name: "Heega",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id:5,
    name: "clerk",
    img: "/c.svg",
    nameImg: "/cName.svg"
}
];

export const workExperience = [
    {
      id: 1,
      title: "Web Developer Intern",
      company: "Heega Sports, Meerut",
      timePeriod: "August 2024 - October 2024",
      desc: "Developed software to enhance work efficiency and contributed to the e-commerce platform's product info page.",
      keyServices: [
        "Created an employee monitoring software to improve work efficiency.",
        "Developed the product information page for the e-commerce website.",
        "Collaborated with the team to implement modern web solutions."
      ],
      techStack: [
        "Tailwind CSS",
        "Next.js",
        "TypeScript",
        "Python",
        "Material Design",
        "Tanstack React Table",
        "Tanstack React Query",
        "Axios",
        "React & React Hooks",
        "Zod",
        "React Hook Form",
      ],
      iconLists: [
        "/tail.svg",
        "/next.svg",
        "/ts.svg",
        "/py.svg",
        "/md-48.svg",
        "/tsr.png",
        "/axios.svg",
        "/re.svg",
        "/zod.png",
        "/rhf.svg",
      ],
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
  ];



export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    href: "https://github.com/Raven412s"
  },
  {
    id: 2,
    img: "/insta.svg",
    href: "https://www.instagram.com/ravenwebweaver/"
  },
  {
    id: 3,
    img: "/link.svg",
    href: "https://www.linkedin.com/in/ashutosh-sharan-1a9523319/"
  },
];
