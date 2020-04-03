export default {
    getPortfolio: new Promise(function (resolve) {
        setTimeout(() => {
            resolve([
                {
                    title: "Good-Cuisine",
                    img: "assets/images/good-cuisine-screenshot.JPG",
                    link: "",
                    github: "",
                    detail: ""
                },
                {
                    title: "Pack-It",
                    img: "assets/images/pack-it-screenshot.JPG",
                    link: "",
                    github: "",
                    detail: ""
                },
                {
                    title: "Employee-Directory",
                    img: "http://placehold.it/700x450",
                    link: "",
                    github: "",
                    detail: ""
                },
                {
                    title: "Budget-Trackers",
                    img: "http://placehold.it/700x450",
                    link: "",
                    github: "",
                    detail: ""
                },
                {
                    title: "Workout-Tracker",
                    img: "http://placehold.it/700x450",
                    link: "",
                    github: "",
                    detail: ""
                },
                {
                    title: "Eat-Da-Burger",
                    img: "assets/images/eat-da-burger-screenshot.JPG",
                    link: "",
                    github: "",
                    detail: ""
                }
            ]);
        }, 100);
    }),
    getContact: new Promise(function (resolve) {
        setTimeout(() => {
            resolve([
                {
                    email: "chelsea.choe@gmail.com",
                    github: "https://github.com/schoe14",
                    linkedIn: "https://www.linkedin.com/in/seohui-choe-009522b6/",
                    photo: "assets/images/Seohui-Choe.jpg"
                },
            ]);
        }, 100);
    }),
    getSkills: new Promise(function (resolve) {
        setTimeout(() => {
            resolve([
                ["Languages", "Java, JavaScript/jQuery, HTML, CSS"],
                ["CSS Framework", "Bootstrap, Materialize"],
                ["Browser Based Technologies", "Responsive Design, Handlebars, Local Storage, IndexedDB"],
                ["Databases", "MongoDB, MySQL"],
                ["Deployment", "Heroku, Git"],
                ["Server-Side Deployment", "Express.js, Node.js, User Authentication, MERN Stack"],
                ["Other Skills", "Analytical Skills, Problem Solving, Time Management, Technical Mindset, Teamwork"]
            ]);
        }, 100);
    }),
    getCarouselItems: new Promise(function (resolve) {
        setTimeout(() => {
            resolve([
                {
                    demo: "http://placehold.it/700x400",
                    label: "first label"
                },
                {
                    demo: "http://placehold.it/700x400",
                    label: "second label"
                },
                {
                    demo: "http://placehold.it/700x400",
                    label: "third label"
                }
            ])
        }, 100);
    })
};