// collection page location 
const ExploreBtn = document.querySelector('.explorebtn')

ExploreBtn.addEventListener('click',function(){
    window.location.href = 'Collection.html'

})

// selecting bar, sidebar
const bar = document.querySelector('.bar')
const sidebar = document.querySelector('.sidebar')

bar.addEventListener('click',dropNavSide,true)
//selecting bars 
const bars = document.querySelectorAll('.bar span')
function dropNavSide(){
   
if(sidebar.className === "sidebar" ){
    sidebar.className += " " + "sidebar-drop"

}
else {
    sidebar.className = "sidebar"
   
}
// bars
if( bars[0].className === "bar1" || bars[1].className === "bar2" || bars[2].className === "bar3"){
    bars[0].className += " " + 'topbar'
    bars[1].className += " " + 'hide'
    bars[2].className += " " + 'bottombar'
}
else{
     bars[0].className = "bar1"
    bars[1].className = "bar2"
    bars[2].className = "bar3"
}
}
// remove class contains sidenav value

  
//selecting navbar elements
const input = document.getElementById('nav-input')
const autoAnchor = document.querySelector('.drop')
// const dropList = document.createElement('li')
// const autoAnchorLinks = document.createElement('a');
//     dropList.appendChild(autoAnchorLinks)
//     autoAnchor.appendChild(dropList)

// left arrow andd Enter key detect  
input.addEventListener('keydown',leftarrowDetect)

function leftarrowDetect(event){
    const key = event.key;
    console.log(key);
    if( key == 'ArrowRight' || key == 'Enter' ){
    
           autoAnchor.innerHTML += `<li class="drop-li"><a href="#">${input.value}</a> <button> X </button></li>`
    
        }

}     

// // selecting X button
//  const Xbutton = document.querySelectorAll('.delete')   
// Xbutton.addEventListener('click',function(){
//     Xbutton.remove();
// })



// selecting title navbar elements
const title = document.querySelectorAll('.title a');
console.log(title);
// selecting img-boxes
const Clothing = document.querySelectorAll('.img-box img');
const Accesories = document.querySelectorAll('.img-box img');
const HomeAppliances = document.querySelectorAll('.img-box img');
const Sale = document.querySelectorAll('.img-box img');

//  imgBox[0].src = "https://picsum.photos/id/4/220/220";

// clothing collections
    title[1].addEventListener('click',(e)=>{
        e.preventDefault();
        const api = fetch('data.json');
        api.then((res)=>{ res.json().then((data)=>{
            console.log(data['Clothing']);
           
            for(var i=0;i<Clothing.length;i++){
                Clothing[i].src = `${data['Clothing'][i]['src'] }`;
                console.log(data['Clothing'][i]['src']);
            }
        })})
        .catch((err)=>{console.log(err);})
        return;
    });
// Accesories
 title[2].addEventListener('click',(e)=>{
        e.preventDefault();
        const api = fetch('data.json');
        api.then((res)=>{ res.json().then((data)=>{
            console.log(data['Accesories']);
           
            for(var i=0;i<Accesories.length;i++){
                Accesories[i].src = `${data['Accesories'][i]['src'] }`;
                console.log(data['Accesories'][i]['src']);
            }
        })})
        .catch((err)=>{console.log(err);})
        
    });
// HomeAppliances
    title[3].addEventListener('click',(e)=>{
            e.preventDefault();
            const api = fetch('data.json');
            api.then((res)=>{ res.json().then((data)=>{
                console.log(data['HomeAppliances']);
            
                for(var i=0;i<HomeAppliances.length;i++){
                    HomeAppliances[i].src = `${data['HomeAppliances'][i]['src'] }`;
                    console.log(data['HomeAppliances'][i]['src']);
                }
            })})
            .catch((err)=>{console.log(err);})
            
        });
    // Sale
    title[4].addEventListener('click',(e)=>{
            e.preventDefault();
            const api = fetch('data.json');
            api.then((res)=>{ res.json().then((data)=>{
                console.log(data['Sale']);
            
                for(var i=0;i<Sale.length;i++){
                    Sale[i].src = `${data['Sale'][i]['src'] }`;
                    console.log(data['Sale'][i]['src']);
                }
            })})
            .catch((err)=>{console.log(err);})
            
        });
