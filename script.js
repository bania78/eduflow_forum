const sendButton = document.querySelector(".send");

/*async function getSalon(data)
{
    const apiUrl = '...';
    const response = await fetch(apiUrl);
    data = await response.json();
    console.log(data);
    for (let r of data) {
        let li = document.createElement("li");
        li.className = "salon";
        let button = document.createElement('button');
        button.className = "but_salon";
        button.textContent = r.name;
        li.appendChild(button);
        const currentDiv = document.querySelector(".ul_salon");
        currentDiv.appendChild(li);
    }
}

async function getOnlineUser(data)
{
    const apiUrl = '...';
    const response = await fetch(apiUrl);
    data = await response.json();
    console.log(data);
    for (let r of data) {
        let li = document.createElement("li");
        li.className = "li_online";
        let button = document.createElement('button');
        button.className = "but_online";
        button.textContent = r.name;
        li.appendChild(button);
        const gallery_popup = document.querySelector(".ul_online");
        gallery_popup.appendChild(figure);
    }
}

let data;
let databis;

getSalon(data);
getOnlineUser(databis);

function removeClass(element, name) {
    let arr1 = element.className.split(" ");
    let arr2 = name.split(" ");
    for (let i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

function addClass(element, name) {
    let arr1 = element.className.split(" ");
    let arr2 = name.split(" ");
    for (let i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

let online = document.getElementsByClassName("online");
let not_online = document.getElementsByClassName("not_online");
console.log(sessionStorage.getItem('log'));
if (sessionStorage.getItem('log')) {
    for (let i = 0; i < edit.length; i++) {
            addClass(online[i], "show_flex");
            removeClass(online[i], "not_show");
    }
    for (let i = 0; i < not_edit.length; i++) {
            addClass(not_online[i], "not_show");
            removeClass(online[i], "show_flex");
    }
}

const logout = document.querySelector(".logout");

logout.addEventListener("click", (e) => {
    e.preventDefault();
    sessionStorage.clear();
    location.reload();
});
*/

sendButton.addEventListener("click", (e) => {
    e.preventDefault();
    const message = document.querySelector(".input_chat").value;
    const hour = new Date();
   // if (sessionStorage.getItem('log')) {
        let li = document.createElement("li");
        li.className = "message";
        let p = document.createElement("p");
        p.textContent = message;
        let p_hour = document.createElement("p");
        p_hour.className = "hour";
        p_hour.textContent = hour.getHours()+"h"+hour.getMinutes()+" "+hour.getDate()+"/"+(hour.getMonth() + 1);
        li.appendChild(p);
        li.appendChild(p_hour);
        const currentDiv = document.querySelector(".message_send");
        currentDiv.appendChild(li);
  //  }
})
