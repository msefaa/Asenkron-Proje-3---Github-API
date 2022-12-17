class Github{

    constructor(){
        this.url="https://api.github.com/users/"
    }
    async getGithubData(username){
        const responseuser=await fetch(this.url+username);
        const responserepos=await fetch(this.url+username+"/repos");

        const userData=await responseuser.json()
        const repoData=await responserepos.json()

        return{
            user:userData,
            repo:repoData,
        }
    }
}