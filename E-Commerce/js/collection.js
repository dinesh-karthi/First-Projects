const backBtn = document.querySelectorAll('.back')[0]
const AllBtn = document.querySelectorAll('button')[1]
const MaleBtn = document.querySelectorAll('button')[2]
const FemaleBtn = document.querySelectorAll('button')[3]
const KidsBtn = document.querySelectorAll('button')[4]

//back to home 
backBtn.addEventListener("click",function(){
    window.location.href = 'Ecom.html'
})
//selecting collection items
const collectionItems = document.querySelectorAll('.collection-items')
//male collections
MaleBtn.addEventListener('click',()=>{
    collectionItems.forEach((item)=>{
        if(item.textContent.includes('Mens')){
            item.style.display = 'flex'
        }else{
            item.style.display = 'none'
        }
    })
    }  
)
//female collections
FemaleBtn.addEventListener('click',()=>{
    collectionItems.forEach((item)=>{
        if(item.textContent.includes('Womens')){
            item.style.display = 'flex'
        }else{
            item.style.display = 'none'
        }
    })
    }  
)

//kids collection
KidsBtn.addEventListener('click',()=>{
    collectionItems.forEach((item)=>{
        if(item.textContent.includes('Kids')){
            item.style.display = 'flex'
        }else{
            item.style.display = 'none'
        }
    })
    }  
)

//all collections
AllBtn.addEventListener('click',()=>{
    collectionItems.forEach((item)=>{
            item.style.display = 'flex'
    })
    }  
)