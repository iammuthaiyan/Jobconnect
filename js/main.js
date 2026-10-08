const jobList = document.getElementById("jobList");
const featuredJobs = document.getElementById("featuredJobs");


function displayJobs(jobArray, container) {

    if (!container) {
        return;
    }

    container.innerHTML = "";


    if (jobArray.length === 0) {

        container.innerHTML =
            "<p>No jobs found.</p>";

        return;
    }


    jobArray.forEach(job => {

        const card = document.createElement("div");

        card.className = "job-card";


        card.innerHTML = `

            <h3>${job.title}</h3>

            <p><strong>Company:</strong>
                ${job.company}
            </p>

            <p>📍 ${job.location}</p>

            <p>💰 ${job.salary}</p>

            <p>💼 ${job.type}</p>

            <div class="job-actions">

                <a
                    href="job-details.html?id=${job.id}"
                    class="view-btn"
                >
                    View Details
                </a>

                <button
                    onclick="toggleFavorite(${job.id})"
                >
                    ❤️
                </button>

            </div>

        `;


        container.appendChild(card);

    });

}


/* Featured jobs */

if (featuredJobs) {

    displayJobs(
        jobs.slice(0, 6),
        featuredJobs
    );

}


/* All jobs */

function filterJobs() {

    const search =
        document
            .getElementById("searchInput")
            ?.value
            .toLowerCase() || "";

    const location =
        document
            .getElementById("locationInput")
            ?.value
            .toLowerCase() || "";

    const type =
        document
            .getElementById("jobType")
            ?.value || "";

    const category =
        document
            .getElementById("category")
            ?.value || "";


    const filteredJobs = jobs.filter(job => {

        const matchesSearch =
            job.title
                .toLowerCase()
                .includes(search) ||

            job.company
                .toLowerCase()
                .includes(search);


        const matchesLocation =
            job.location
                .toLowerCase()
                .includes(location);


        const matchesType =
            type === "" ||
            job.type === type;


        const matchesCategory =
            category === "" ||
            job.category === category;


        return (
            matchesSearch &&
            matchesLocation &&
            matchesType &&
            matchesCategory
        );

    });


    displayJobs(
        filteredJobs,
        jobList
    );

}


if (jobList) {

    filterJobs();


    document
        .getElementById("searchInput")
        ?.addEventListener(
            "input",
            filterJobs
        );


    document
        .getElementById("locationInput")
        ?.addEventListener(
            "input",
            filterJobs
        );


    document
        .getElementById("jobType")
        ?.addEventListener(
            "change",
            filterJobs
        );


    document
        .getElementById("category")
        ?.addEventListener(
            "change",
            filterJobs
        );

}


/* Favorite */

function toggleFavorite(id) {

    let favorites =
        JSON.parse(
            localStorage.getItem("favorites")
        ) || [];


    if (favorites.includes(id)) {

        favorites =
            favorites.filter(
                favoriteId => favoriteId !== id
            );

        alert("Removed from favorites.");

    } else {

        favorites.push(id);

        alert("Added to favorites ❤️");

    }


    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );

}


/* Home search */

function searchJobs() {

    const keyword =
        document
            .getElementById("homeSearch")
            .value;

    const location =
        document
            .getElementById("homeLocation")
            .value;


    localStorage.setItem(
        "searchKeyword",
        keyword
    );

    localStorage.setItem(
        "searchLocation",
        location
    );


    window.location.href =
        "jobs.html";

}


/* Category search */

function categorySearch(category) {

    localStorage.setItem(
        "searchCategory",
        category
    );

    window.location.href =
        "jobs.html";

}