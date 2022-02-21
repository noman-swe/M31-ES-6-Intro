document.getElementById('add-border').addEventListener('click', function () {
    const friendContainer = document.getElementById('friend-container');
    friendContainer.style.border = '3px solid yellow';
})
// add background
const friends = document.getElementsByClassName('friends');
for (const friend of friends) {
    document.getElementById('background').addEventListener('click', function () {
        friend.style.backgroundColor = 'skyblue';
        friend.style.margin = '10px';
        friend.style.padding = '10px';
        friend.style.borderRadius = '5px';
    });
}

// add friend
document.getElementById('add-friend').addEventListener('click', function () {
    const friendContainer = document.getElementById('friend-container');
    // adding new div
    const friendDiv = document.createElement('div');
    // add class name to div
    friendDiv.classList.add('friends');
    friendDiv.innerHTML = `
        <h3 class="friend-name">New Friend</h3>
        <p> Optio quod ipsum aspernatur fugiat. </p>
    `;
    friendContainer.appendChild(friendDiv);
});
