
const likeNum = document.getElementById("like-num");
const likeBtn = document.getElementById("like-btn");

let count = 0
const preCount = Number(likeNum.textContent);

likeBtn.addEventListener("click", function() {
    count = count + 1
    likeNum.textContent=""
    likeNum.innerHTML += `${preCount + count}`
})



const clickPost = document.getElementById("click-post");

clickPost.addEventListener("dblclick", function() {
    count = count + 1;
    likeNum.textContent=""
    likeNum.innerHTML += `${preCount + count}`
    clickPost.classList.toggle('scale-up');
    
    if (clickPost.classList.contains('scale-up')) {
        setTimeout(function() {
            clickPost.classList.remove('scale-up');
        }, 500); 
    }
});


const commentBtn = document.getElementById("comment-btn");
const container = document.getElementById("container");

commentBtn.addEventListener("click", function() {

    container.innerHTML= "";
    const form = document.createElement("form");

   form.innerHTML= 
   `<input type="text" placeholder="Username" required><br><br>
   <textarea placeholder="write your comment..." required></textarea><br><br>
   <button type="submit">Submit</button>`;

   container.appendChild(form);

   form.addEventListener("submit", function(e) {

        e.preventDefault();
        
        const username = document.querySelector("input").value;
        const comment = document.querySelector("textarea").value;
        const commentBox = document.createElement("p");

        commentBox.innerHTML = `<strong>${username}</strong>: ${comment}`;
        container.innerHTML= "";
        container.appendChild(commentBox);

   })
})