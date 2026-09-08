

        /* =====================
           MOBILE MENU
        ===================== */

        const menuBtn =
            document.getElementById("menuBtn");

        const nav =
            document.getElementById("nav");


        menuBtn.addEventListener(
            "click",
            function () {

                nav.classList.toggle("open");

                if (nav.classList.contains("open")) {

                    menuBtn.innerHTML = "✕";

                } else {

                    menuBtn.innerHTML = "☰";

                }

            }
        );


        /* =====================
           CLOSE MENU
        ===================== */

        document
            .querySelectorAll("#nav a")
            .forEach(function(link) {

                link.addEventListener(
                    "click",
                    function() {

                        nav.classList.remove("open");

                        menuBtn.innerHTML = "☰";

                    }
                );

            });


        /* =====================
           SCROLL ANIMATION
        ===================== */

        const observer =
            new IntersectionObserver(

                function(entries) {

                    entries.forEach(
                        function(entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target
                                    .classList
                                    .add("show");

                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },

                {
                    threshold: 0.15
                }

            );


        document
            .querySelectorAll(".reveal")
            .forEach(function(element) {

                observer.observe(element);

            });

        document 
        .querySelectorAll(".reveal")
            .forEach(function(element) {

                observer.observe(element);

            });


        /* =====================
           SKILL ANIMATION
        ===================== */

        const skillObserver =
            new IntersectionObserver(

                function(entries) {

                    entries.forEach(
                        function(entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target
                                    .classList
                                    .add("show");

                            }

                        }
                    );

                },

                {
                    threshold: 0.3
                }

            );


        document
            .querySelectorAll(".skill-card")
            .forEach(function(card) {

                skillObserver.observe(card);

            });


        /* =====================
           ACTIVE NAVBAR
        ===================== */

        const sections =
            document.querySelectorAll(
                "section"
            );

        const navLinks =
            document.querySelectorAll(
                "#nav a"
            );


        window.addEventListener(
            "scroll",
            function() {

                let current = "";

                sections.forEach(
                    function(section) {

                        const sectionTop =
                            section.offsetTop - 150;

                        if (
                            window.scrollY >=
                            sectionTop
                        ) {

                            current =
                                section.id;

                        }

                    }
                );


                navLinks.forEach(
                    function(link) {

                        link.classList.remove(
                            "active"
                        );

                        if (
                            link.getAttribute(
                                "href"
                            ) === "#" + current
                        ) {

                            link.classList.add(
                                "active"
                            );

                        }

                    }
                );

            }
        );


        /* =====================
           CONTACT FORM
        ===================== */

        const form =
            document.getElementById(
                "contactForm"
            );

        const message =
            document.getElementById(
                "message"
            );


        form.addEventListener(
            "submit",
            function(event) {

                event.preventDefault();

                message.innerHTML =
                    "Message submitted successfully!";

                form.reset();

                setTimeout(
                    function() {

                        message.innerHTML = "";

                    },
                    4000
                );

            }
        );


        /* =====================
           BACK TO TOP
        ===================== */

        const topBtn =
            document.getElementById(
                "topBtn"
            );


        window.addEventListener(
            "scroll",
            function() {

                if (
                    window.scrollY > 500
                ) {

                    topBtn.classList.add(
                        "show"
                    );

                } else {

                    topBtn.classList.remove(
                        "show"
                    );

                }

            }
        );


        topBtn.addEventListener(
            "click",
            function() {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );


        /* =====================
           CURRENT YEAR
        ===================== */

        document.getElementById(
            "year"
        ).innerHTML =
            new Date().getFullYear();

    
