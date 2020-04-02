export default {
    getPortfolio: new Promise(function (resolve) {
        setTimeout(() => {
            resolve([
                {
                    title: "Good-Cuisine",
                    img: "/assets/images/good-cuisine-screenshot.jpg",
                    link: "",
                    github: "",
                    detail: ""
                },
                {
                    title: "Pack-It",
                    img: "/assets/images/pack-it-screenshot.jpg",
                    link: "",
                    github: "",
                    detail: ""
                },
                {
                    title: "Employee-Directory",
                    img: "",
                    link: "",
                    github: "",
                    detail: ""
                },
                {
                    title: "Budget-Trackers",
                    img: "",
                    link: "",
                    github: "",
                    detail: ""
                },
                {
                    title: "Workout-Tracker",
                    img: "",
                    link: "",
                    github: "",
                    detail: ""
                },
                {
                    title: "Eat-Da-Burger!",
                    img: "/assets/images/eat-da-burger-screenshot.jpg",
                    link: "",
                    github: "",
                    detail: ""
                }
            ]);
        }, 500);
    })
};