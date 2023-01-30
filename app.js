/*object.onclick = function(){myScript};*/
// querySelectors
/*let h1box = document.querySelector('.popup');
/*let title = document.querySelector()
let something = document.querySelector()
let something = document.querySelector()*/

let navTab = {
    Education: 'Georgia State University, 2018 | African American Studies and Gender and Sexuality Studies | 3.7 GPA | Kingsborough Community College - DesignWorks UX Training Program Certificate - 2022',
    Experience: 'Freelance Photographer, Freelance Writer',
    funFacts: 'I am obsessed with tea. | I own six cameras. | I have a tiny snake preserved in a bottle in my room.',
    skills: 'UX/UI Design, HTML, CSS, Javascript, Adobe Photo Tools'
}
// functions
/*function uploadInfo(){
    document.querySelector(.h1box).innerHTML;
}*/


const uploadInfo = (tabName) => {
    if (tabName === "Education") {
    let grid5 = document.querySelector('.grid5')
        grid5.innerHTML = navTab.Education
    }
    else if (tabName === "Experience") {
            let grid5 = document.querySelector('.grid5')
            grid5.innerHTML = navTab.Experience
}
    
    else if (tabName === "funFacts") {
        let grid5 = document.querySelector('.grid5')
        grid5.innerHTML = navTab.funFacts
}
    else if (tabName === "skills") {
    let grid5 = document.querySelector('.grid5')
    grid5.innerHTML = navTab.skills
}       
}
