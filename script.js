const displayedUsers = users;  //brings all users in data.js

var container = document.getElementById("contact-list");
var countUSers = document.getElementById("countUsers");
countUSers.innerText = displayedUsers.length; //calculates how many registers are in data.js

//console.log(displayedUsers.length);

for(let i=0;i<displayedUsers.length;i++){ //add every user in the container, all of them are hidden
    container.innerHTML += `<li class="contact-item cf">
        <div class="contact-details">
            <img class="avatar" src="${displayedUsers[i].picture.thumbnail}">
            <h3>${displayedUsers[i].name.first} ${displayedUsers[i].name.last}</h3>
            <span class="email">${displayedUsers[i].email}</span>
        </div>
        <div class="joined-details">
            <span class="date">Joined ${displayedUsers[i].registered.date}</span>
        </div>
        </li>`
}

//var currentPage = 1;

const usersEachPage = 10; //define how many users will be in each paga
var pages = Math.ceil(displayedUsers.length / usersEachPage); //calculates the number of pages
var pageContainer = document.querySelector(".pagination");
var listedUsers = document.querySelectorAll(".contact-item");
//console.log(listedUsers)


for(let i=0;i<pages;i++ ){ //add buttons for pagination depending on how many pages there will be
    pageContainer.innerHTML += `<li><a id="selectedPage" onclick="changePage(${i+1})">${i+1}</a></li>` //when user click on any pagination button, it will call a function
}

for(let i=0; i<10; i++){  //by default the 10 firt users will be displayed
    listedUsers[i].style.display= "block";
}
    


function changePage(n){ //depending on the number of the page, it displays different users

    for(let j=0; j<displayedUsers.length; j++){
        listedUsers[j].style.display= "none";
    }

    let currentPage = Number(n);
    console.log("Current Page: "+ currentPage);
    for(let i=(currentPage-1)*10; i<((currentPage-1)*10)+10; i++){
        listedUsers[i].style.display= "block";
    }
    
}


