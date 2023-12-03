class Developer{
    constructor(name){
        this.name = name;
    }

    commitChanges(){
        console.log(`${this.name} is commiting changes...`);
    }
}

function canBuildUI(developer){
    return{
        buildUI : () =>{
            console.log(`${developer.name} is building UI`);
        }
    }
}

function canBuildApi(developer){
    return{
        buildApi : ()=>{
            console.log(`${developer.name} is building API`);
        }
    }
}

function canDeployApp(developer){
    return{
        deployApp : ()=>{ // ini adalah object yang berisi function
            console.log(`${developer.name} is deploying app`);
        }
    }
}

//Object.assign berfungsi untuk menggabungkan beberapa object

function createFrontEndDeveloper(name){
    const developer = new Developer(name);
    return Object.assign(developer, canBuildUI(developer));
}

function createBackEndDeveloper(name){
    const developer = new Developer(name);
    return Object.assign(developer, canBuildApi(developer));
}

function createDevOps(name){
    const developer = new Developer(name);
    return Object.assign(developer, canDeployApp(developer));
}

function createFullStackDeveloper(name){
    const developer = new Developer(name);
    return Object.assign(developer, canBuildUI(developer), canBuildApi(developer), canDeployApp(developer));
}

const FrontEndDeveloper = new createFrontEndDeveloper("asep");
FrontEndDeveloper.commitChanges();
FrontEndDeveloper.buildUI();


const Fullstack = new createFullStackDeveloper("naufal");
console.log(Fullstack);