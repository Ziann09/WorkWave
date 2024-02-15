document.addEventListener('DOMContentLoaded', function () {
    const homeLink = document.getElementById('home-link');
    const aboutLink = document.getElementById('about-link');
    const searchLink = document.getElementById('search-link');
    const contentContainer = document.getElementById('content');

    const jobData = [
        { title: 'Web Developer', company: 'Tech Co', location: 'City A', imageUrl: 'https://example.com/web-dev-image.jpg' },
        { title: 'Graphic Designer', company: 'Design Studio', location: 'City B', imageUrl: 'https://example.com/designer-image.jpg' },
        // Add more job postings as needed
    ];

    function showHome() {
        contentContainer.innerHTML = '<h2>Welcome to our Job Portal!</h2>';
    }

    function showAbout() {
        contentContainer.innerHTML = '<h2>About Us</h2><p>We are dedicated to connecting talented individuals with exciting job opportunities.</p>';
    }

    function showSearch() {
        const searchForm = document.createElement('div');
        searchForm.innerHTML = `
            <h2>Search Jobs</h2>
            <label for="search-input">Keyword:</label>
            <input type="text" id="search-input">
            <button onclick="performSearch()">Search</button>
        `;
        contentContainer.innerHTML = '';
        contentContainer.appendChild(searchForm);
    }

    function performSearch() {
        const searchInput = document.getElementById('search-input').value.toLowerCase();
        const filteredJobs = jobData.filter(job => 
            job.title.toLowerCase().includes(searchInput) ||
            job.company.toLowerCase().includes(searchInput) ||
            job.location.toLowerCase().includes(searchInput)
        );

        displayJobList(filteredJobs);
    }

    function displayJobList(jobs) {
        contentContainer.innerHTML = '<h2>Job Listings</h2>';

        if (jobs.length === 0) {
            contentContainer.innerHTML += '<p>No jobs found.</p>';
        } else {
            jobs.forEach(job => {
                const jobPost = document.createElement('div');
                jobPost.classList.add('job-post');
                jobPost.innerHTML = `
                    <h3>${job.title}</h3>
                    <img src="${job.imageUrl}" alt="${job.title} Image" style="max-width: 100%;">
                    <p>${job.company} - ${job.location}</p>
                `;
                contentContainer.appendChild(jobPost);
            });
        }
    }

    homeLink.addEventListener('click', showHome);
    aboutLink.addEventListener('click', showAbout);
    searchLink.addEventListener('click', showSearch);

    // Default view on page load
    showHome();
    
});
