const API_URL = "http://localhost:3000/api/posts";

//function to submit form data to the API
const submitNewPost = () => {

    const input = document.getElementById("form-post-image");
    const title = document.getElementById("form-post-title").value;
    const content = document.getElementById("form-post-content").value;

    // Use FormData to store data to send over
    let data = new FormData();
    data.append("post-image", input.files[0]);
    data.append("title", title);
    data.append("content", content);

    // Redirect the user to home page after successful submission
    fetch(API_URL, {
        method: "POST",
        body: data
    }).then(()=>{
        setTimeout(()=>{
            window.location.href = "index.html";
        }, 1000)
    })
}
