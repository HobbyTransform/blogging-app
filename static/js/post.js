const API_URL = "https://node-expressjs-blogging-app.herokuapp.com/api/posts/";
const API_BASE_URL = "https://node-expressjs-blogging-app.herokuapp.com/";

window.onload = () => {
    getPost();
}

// getPostIdParam: get the id of the post to use in the request later
const getPostIdParam = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get("id");
}

// getPost: get post data from API
const getPost = () => {
    const postId = getPostIdParam();
    // CODE GOES HERE
    const url = `${API_URL}${postId}`;
    fetch(url, {
        method: 'GET'
    }).then((response) => {
        return response.json();
    }).then((data) => {
        buildPost(data);
    })
}

// buildPost: fill in the post data in the post.html file using ids
const buildPost = (blogPost) => {
    const postDate = new Date(parseInt(blogPost.added_date)).toDateString();
    const postImage = `${API_BASE_URL}${blogPost.post_image}`;
    document.querySelector("header").style.background = `url(${postImage})`;
    document.getElementById("individual-post-title").innerText = blogPost.title;
    document.getElementById("individual-post-date").innerText = `Published on ${postDate}`;
    document.getElementById("individual-post-content").innerText = blogPost.content;
}

