
// <!-- +++++++++++++++++++++++++++++ JS file start form here -->

    // start writing code from here. We begin by creating a div element to represent the post.
    const divPost = document.createElement('div');

    // Define the post object containing post details.

    let postsData = [
        { id: 1, author: 'John', content: 'Hello, Instagram!', likes: 10, comments: ['Great post!', 'Nice photo!'], image: 'https://files.codingninjas.in/image2-28694.jpg' },
        { id: 2, author: 'Jane', content: 'This is a great post!', likes: 15, comments: [], image: 'https://files.codingninjas.in/oip-28704.jpg' },
        { id: 3, author: 'Alice', content: 'Another post', likes: 8, comments: [], image: 'https://files.codingninjas.in/th-2-28706.jpg' },
        { id: 4, author: 'Bob', content: 'Check out this photo!', likes: 20, comments: [], image: 'https://files.codingninjas.in/image1-28708.jpg' },
    ];


    // create a post Button under the posts div
    // Function to render posts on the screen.
    // accessing all elments 
    const postsContainer = document.getElementById('posts');
    // postsContainer.style.border = '2px solid red';// better clarity about this


    function renderPosts(index) {
        // destructor of each object come inside  under the function 
        let { id, author, content, likes, comments, image } = postsData[index];
        // console.log(likes, "likes");
        // likes=likes+1;
        // console.log(likes);
        console.log(id, author, content, likes, comments, image);
        // Create a new div element to represent each post.
        const postElement = document.createElement('div'); // all object inside this div  for better stuructruring 

        postElement.classList.add('post'); // Add the 'post' class to the post div.


        // Create elements for author, content, and image of the post.
        const authorElement = document.createElement('h3');
        authorElement.textContent = author; //

        const imageElement = document.createElement('img');
        imageElement.src = image;
        imageElement.alt = 'Post Image';

        const contentElement = document.createElement('p'); // my first post on insta gram
        contentElement.textContent = content;

        // Create a button element for liking the post.
        // Create a button element for liking the post.
        const likeButton = document.createElement('button'); // Like button
        likeButton.textContent = `Like`;
        let bool = true; // Declaration should remain here

        likeButton.addEventListener('click', () => {
            likeButton.style.backgroundColor = 'red';
            if (bool === true) {
                likes++;
                console.log(likes, 'likes');

                // Update the post footer text content with the updated likes count
                postFooter.textContent = `Likes: ${likes}   Comments: ${comments.length}`;

                // Change the background color of the like button
                bool = false;
            }
        });



        // Create an input element for adding comments.
        const commentInput = document.createElement('input'); // taking some input of text type
        commentInput.type = 'text';
        commentInput.classList.add('inputClass');
        commentInput.placeholder = 'Write a comment...'; // add place holder

        // Create a button element for submitting comments.
        const commentButton = document.createElement('button'); // this is a submit button
        commentButton.textContent = 'Comment';
        commentButton.addEventListener('click', () => {
            // extract text from input btn
            comments.push(commentInput.value);
            pEle.textContent=`Comments:${comments.length}`;

            postFooter.textContent = `Likes: ${likes}   Comments: ${comments.length}`;

            const commentElement = document.createElement('p');
            commentElement.textContent = commentInput.value;
            commentsContainer.appendChild(commentElement);
        });

        // Create a div element for displaying the post footer.
        const postFooter = document.createElement('div');
        // postFooter.style.border = '2px solid red'; // better clirity 
        postFooter.classList.add('post-footer'); // Add the 'post-footer' class to the post footer.
        postFooter.textContent = `Likes: ${likes}   Comments: ${comments.length}`;

        // Create a div element for displaying comments.
        const commentsContainer = document.createElement('div');  // where the all comment store when when we comment initially none and when we clickd over hte postcontainer then make it visible
        commentsContainer.classList.add('comments-container'); // Add the 'comments-container' class.
        commentsContainer.style.display = 'none'; // Initially hide the comments container.

        // create a p tag in js
        const pEle=document.createElement('p');
        pEle.textContent=`Comments:${comments.length}`;
        commentsContainer.appendChild(pEle);  
        
        // Iterate over each comment in the comments array and create a paragraph element for each comment. push it into the comment container
        comments.forEach((comment) => {
            const commentElement = document.createElement('p');
            commentElement.textContent = comment;
            commentsContainer.appendChild(commentElement); // Append each comment element to the comments container.
        });

        // Add event listener to toggle display of comments when post footer is clicked.
        postFooter.addEventListener('click', () => {
            if (commentsContainer.style.display === 'none') {
                commentsContainer.style.display = 'block'; // Show comments if hidden.
            } else {
                commentsContainer.style.display = 'none'; // Hide comments if shown.
            }
        });

        // Append all elements to the post div in the desired order.
        postElement.appendChild(authorElement);
        postElement.appendChild(imageElement);
        postElement.appendChild(contentElement);
        postElement.appendChild(likeButton);
        postElement.appendChild(commentInput);
        postElement.appendChild(commentButton);
        postElement.appendChild(postFooter);
        postElement.appendChild(commentsContainer);

        // Append the post div to the posts container. 
        // sab kuchh postcontainer ke ander dal diya 
        postsContainer.appendChild(postElement); // jab same code dobara chalega to postElemet append hoga as a child of the postcontainer
    }

    //  Accessing the form element in html and paste it  make it responsivble

    // Add Event listeners to listen to the submit event of the form.
    const getFormEle = document.getElementById('postForm'); // Select the form element with id "postForm"

    getFormEle.addEventListener('submit', (event) => { // refer to the  submit event
        event.preventDefault(); //  prevent  setting some defaul value of submit event
        const postCaptionEle = document.getElementById('postInput');
        const captionContent = postCaptionEle.value;
        const postImageEle = document.getElementById('imageInput');
        const firstImageFile = postImageEle.files[0]; // specific files accessc
        if (captionContent.trim() === '' || !firstImageFile) { return }// ya to content nahi hai ya to image nahi hai to return ker jao 
        const obj = {
            id: postsData.length + 1,
            author: 'Your Name',
            content: captionContent, // Get the value of the input field with id "postInput"
            likes: 0,
            comments: [],
            image: URL.createObjectURL(firstImageFile), // Get the file selected in the input field with id "imageInput" and convert it to a URL
        };
        postsData.push(obj);
        postCaptionEle.value =''; // after posting the image caption input shold be emty such that another caption we  can give
        postImageEle.value =''; // posting image caption after postin img ele shold be emety such that we can post any others image
        // console.log(postsData);

        renderPosts(postsData.length-1);
    });

    for (let index in postsData) {
        renderPosts(index);
    }


    //  access new post id apply event listner and sethe the display prp
    let bool=true;
    const getsideBarId=document.getElementById('newPost');
    const getnewPost=document.getElementById('sideBarId');

     getsideBarId.addEventListener('click',()=>{
        getnewPost.style.display='block';
     })
     // when we clikc skip btn then side bar display non
     document.getElementById('skipPost').addEventListener('click',()=>{
        getnewPost.style.display='none';
     })

    //  when we click on the post then skidBar shoud be display
    document.getElementById('postId').addEventListener('click',()=>{
        getnewPost.style.display='none';
    })


