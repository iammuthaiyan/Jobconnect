const params =
    new URLSearchParams(
        window.location.search
    );


const jobId =
    Number(
        params.get("id")
    );


const job =
    jobs.find(
        job => job.id === jobId
    );


const detailsContainer =
    document.getElementById("jobDetails");


if (!job) {

    detailsContainer.innerHTML =
        "<h2>Job not found.</h2>";

} else {

    detailsContainer.innerHTML = `

        <div class="details-card">

            <h1>${job.title}</h1>

            <p>
                <strong>Company:</strong>
                ${job.company}
            </p>

            <p>
                <strong>Location:</strong>
                ${job.location}
            </p>

            <p>
                <strong>Salary:</strong>
                ${job.salary}
            </p>

            <p>
                <strong>Job Type:</strong>
                ${job.type}
            </p>

            <p>
                <strong>Category:</strong>
                ${job.category}
            </p>


            <h2>Job Description</h2>

            <p>
                ${job.description}
            </p>


            <h2>Required Skills</h2>

            <ul>

                ${job.skills
                    .map(
                        skill =>
                            `<li>${skill}</li>`
                    )
                    .join("")
                }

            </ul>


            <a
                href="apply.html?id=${job.id}"
                class="apply-btn"
            >
                Apply Now
            </a>

        </div>

    `;

}