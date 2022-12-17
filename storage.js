class Storage{

    static getSearcedUsersFromStorage(){
        //Take All users
        let users;
        if(localStorage.getItem("searched")===null){
            users=[]
        }
        else{
            users=JSON.parse(localStorage.getItem("searched"));
        }
        return users
    }
    static addSearcedUsersFromStorage(username){
        //add  user
        let users=this.getSearcedUsersFromStorage(username)
        //indexof
        if(users.indexOf(username)===-1){
            users.push(username);
        }
        localStorage.setItem("searched",JSON.stringify(users))
    }
    static clearAllSearcedUsersFromStorage(){
        //Delete All users
        localStorage.removeItem("searched")
    }
     
}
