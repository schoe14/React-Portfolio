export default {
    getPortfolio: new Promise(function (resolve) {
        setTimeout(() => {
            resolve([
                {
                    title: "Good-Cuisine",
                    img: "assets/images/good-cuisine-screenshot.JPG",
                    link: "https://good-cuisine.herokuapp.com/",
                    github: "https://github.com/schoe14/Good-Cuisine",
                    detail: "We all have preferences on foods or even dietary restrictions, so we decided to make an app that makes it easier to filter recipes by these parameters and save recipes in one location that is easily accessible."
                },
                {
                    title: "Pack-It",
                    img: "assets/images/pack-it-screenshot.JPG",
                    link: "https://jonesec2.github.io/Pack-It/",
                    github: "https://github.com/jonesec2/Pack-It",
                    detail: "Don't have anxiety😟 about packing for your vacation ever again. Know the weather of your travel destination and let our Pack It logic tell you what kind of clothes you'll need during your trip😃. With Pack It, it is like hiring your personal stylist!🎉"
                },
                {
                    title: "Employee-Directory",
                    img: "assets/images/employee-directory-screenshot.JPG",
                    link: "https://employee-directory-sc.herokuapp.com/",
                    github: "https://github.com/schoe14/Employee-Directory",
                    detail: "An employee or manager would benefit greatly from being able to view non-sensitive data about other employees. Employee data management application with React enables users to view, sort and filter the entire employee directory. The users receive real-time filter results while typing name, position or team."
                },
                {
                    title: "Budget-Trackers",
                    img: "assets/images/budget-trackers-screenshot.JPG",
                    link: "https://young-journey-67191.herokuapp.com/",
                    github: "https://github.com/schoe14/Budget-Trackers",
                    detail: "In addition to giving users a fast and easy way to track their money, having offline functionality is paramount to our applications success. This Progressive Web App allows users to input a withdrawal or deposit that will be shown on the page, and added to their transaction history even without an internet connection."
                },
                {
                    title: "Workout-Tracker",
                    img: "assets/images/workout-tracker-screenshot.JPG",
                    link: "https://whispering-woodland-10335.herokuapp.com/",
                    github: "https://github.com/schoe14/Workout-Tracker",
                    detail: "Would you like to be able to view, create and track daily workouts? Are you looking for an app that you can log multiple exercises in a given workout session? With Workout-Tracker, you should also be able to track the name, type, weight, sets, reps, duration of exercise and distance traveled (if cardio exercise)."
                },
                {
                    title: "Eat-Da-Burger",
                    img: "assets/images/eat-da-burger-screenshot.JPG",
                    link: "https://warm-savannah-43585.herokuapp.com/",
                    github: "https://github.com/schoe14/Burger",
                    detail: "Add your favorite burger and devour it! Burgers that have been eaten go to the right side with an option to eat again. Burgers that are available to eat stay on the left side with options to devour it or delete it."
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
                    demo: "assets/demo/good-cuisine-demo.GIF",
                    label: "Good-Cuisine"
                },
                {
                    demo: "assets/demo/pack-it-demo.GIF",
                    label: "Pack-It"
                },
                {
                    demo: "assets/demo/employee-directory-demo.GIF",
                    label: "Employee-Directory"
                }
            ])
        }, 100);
    })
};