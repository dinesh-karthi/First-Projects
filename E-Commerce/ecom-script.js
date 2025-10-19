// selecting bar, sidebar
const bar = document.querySelector('.bar')
const sidebar = document.querySelector('.sidebar')

bar.addEventListener('click',dropNavSide)

function dropNavSide(){
    sidebar.classList.add('sidebar-drop')
  
}
//selecting navbar elements
const input = document.getElementById('nav-input')
const autoAnchor = document.querySelector('.drop ul ')
const dropList = document.createElement('li')
const autoAnchorLinks = document.createElement('a');
    dropList.appendChild(autoAnchorLinks)
    autoAnchor.appendChild(dropList)

// left arrow detect  
input.addEventListener('keydown',leftarrowDetect)

function leftarrowDetect(event){
    var key = event.key;
    console.log(key);
    if( key == 'ArrowRight' ){
        autoAnchorLinks.textContent = input.value
        alert("Left arrow key is pressed");
    }

    else if( key == 'Enter' ){
        storeValue(event);
}
}

function storeValue(event){
var key = event.key;
if( key == 'Enter' ){
    autoAnchorLinks.textContent = input.value
}

}



// selecting title navbar elements
const title = document.querySelectorAll('.title a');
console.log(title);
// selecting img-boxes
const Clothing = document.querySelectorAll('.img-box img');
const Accesories = document.querySelectorAll('.img-box img');
const HomeAppliances = document.querySelectorAll('.img-box img');
const Sale = document.querySelectorAll('.img-box img');

//  imgBox[0].src = "https://picsum.photos/id/4/220/220";

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
        return i;
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
