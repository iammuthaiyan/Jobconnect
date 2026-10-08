const favoriteContainer =
    document.getElementById(
        "favoriteJobs"
    );


function displayFavorites() {

    const favorites =
        JSON.parse(
            localStorage.getItem(
                "favorites"
            )
        ) || [];


    const favoriteJobs =
        jobs.filter(
            job =>
                favorites.includes(
                    job.id
                )
        );


    favoriteContainer.innerHTML = "";


    if (favoriteJobs.length === 0) {

        favoriteContainer.innerHTML = `
            <p>
                You have no favorite jobs yet.
            </p>
        `;

        return;
    }


    favoriteJobs.forEach(job => {

        const card =
            document.createElement(
                "div"
            );


        card.className =
            "job-card";


        card.innerHTML = `

            <h3>
                ${job.title}
            </h3>

            <p>
                <strong>
                    ${job.company}
                </strong>
            </p>

            <p>
                📍 ${job.location}
            </p>

            <p>
                💰 ${job.salary}
            </p>

            <div class="job-actions">

                <a
                    href="job-details.html?id=${job.id}"
                    class="view-btn"
                >
                    View Details
                </a>

                <button
                    onclick="removeFavorite(${job.id})"
                >
                    Remove ❌
                </button>

            </div>

        `;


        favoriteContainer.appendChild(
            card
        );

    });

}


function removeFavorite(id) {

    let favorites =
        JSON.parse(
            localStorage.getItem(
                "favorites"
            )
        ) || [];


    favorites =
        favorites.filter(
            favoriteId =>
                favoriteId !== id
        );


    localStorage.setItem(
        "favorites",
        JSON.stringify(
            favorites
        )
    );


    displayFavorites();

}


displayFavorites();