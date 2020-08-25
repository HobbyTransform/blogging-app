const PATH = "./data.json";
const fs = require('fs');

class Post {
    get() {
        /** Get Posts */
        return this.readData();
    }

    getIndividualBlog(postID) {
        /** Get One Blog Post */
        const posts = this.readData();
        const foundPost = posts.find((post) => post.id == postID);
        return foundPost;
    }

    add(newPost) {
        /** Add new Post */
        const currentPosts = this.readData();
        currentPosts.unshift(newPost);
        this.storeData(currentPosts);
    }

    readData() {
        /** Gets data from data.json*/
        let rawData = fs.readFileSync(PATH);
        let posts = JSON.parse(rawData);
        return posts;
    }

    storeData(rawData) {
        /** Store data into data.json*/
        let data = JSON.stringify(rawData);
        fs.writeFileSync(PATH, data);
    }
}

module.exports = Post;