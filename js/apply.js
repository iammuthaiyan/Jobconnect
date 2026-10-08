const applicationForm =
    document.getElementById(
        "applicationForm"
    );


applicationForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const name =
            document.getElementById(
                "name"
            ).value.trim();


        const email =
            document.getElementById(
                "email"
            ).value.trim();


        const phone =
            document.getElementById(
                "phone"
            ).value.trim();


        const skills =
            document.getElementById(
                "skills"
            ).value.trim();


        const resume =
            document.getElementById(
                "resume"
            ).files[0];


        if (
            name === "" ||
            email === "" ||
            phone === "" ||
            skills === "" ||
            !resume
        ) {

            alert(
                "Please fill all fields."
            );

            return;
        }


        const application = {

            name: name,

            email: email,

            phone: phone,

            skills: skills,

            resumeName: resume.name,

            date:
                new Date()
                    .toLocaleDateString()

        };


        let applications =
            JSON.parse(
                localStorage.getItem(
                    "applications"
                )
            ) || [];


        applications.push(
            application
        );


        localStorage.setItem(
            "applications",
            JSON.stringify(
                applications
            )
        );


        alert(
            "Application submitted successfully! 🎉"
        );


        applicationForm.reset();

    }
);