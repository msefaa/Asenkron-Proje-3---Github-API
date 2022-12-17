//choose the elements
const githubForm=document.getElementById("github-form")
const nameInput=document.getElementById("githubname")
const clearLastUsers=document.getElementById("clear-last-users")
const lastUsers=document.getElementById("last-users")
const github= new Github();
const ui= new UI()

eventListeners()

function eventListeners() {
    githubForm.addEventListener("submit",getData);
    clearLastUsers.addEventListener("click",clearAllSearched);
    document.addEventListener("DOMContentLoaded",getAllSearch);
}function getData(e) {
    let username=nameInput.value.trim()
    if(username===""){
        alert("There are some missing DATAS.Please try again...!")
    }else{
        github.getGithubData(username)
        .then(response=>{
            if(response.user.message===("Not Found")){
                //alert message
                ui.showErrors("We couldn't find the user","danger");
            }else{
                ui.addSearcedUserstoUI(username)//call first otherwise it will not
                Storage.addSearcedUsersFromStorage(username)
                ui.showUserInfo(response.user);
                ui.showRepoInfo(response.repo)
                ui.showErrors("We found user","success");
            }
        })
        .catch(err=>ui.showErrors(err));
    }
    
    ui.clearInput()
    e.preventDefault();
}
function clearAllSearched(e) {
    //clear all searched
    if (confirm("Are sure to Delete All History...?")) {
        Storage.clearAllSearcedUsersFromStorage()
        ui.clearAllSearcedUsersFromUI()
    }
    
}
function getAllSearch() {
    //take the datas from storage and add ui
    let users=Storage.getSearcedUsersFromStorage();
    let result="";
    users.forEach(user => {
        result+=`<li class="list-group-item">${user}</li>`
    });
    lastUsers.innerHTML=result
}