const AllBtn = document.querySelectorAll('button')[0]
const MaleBtn = document.querySelectorAll('button')[1]
const FemaleBtn = document.querySelectorAll('button')[2]
const KidsBtn = document.querySelectorAll('button')[3]

//selecting collection items
const collectionItems = document.querySelectorAll('.collection-items')
//male collections
MaleBtn.addEventListener('click',()=>{
    collectionItems.forEach((item)=>{
        if(item.textContent.includes('Mens')){
            item.style.display = 'block'
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
            item.style.display = 'block'
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
            item.style.display = 'block'
        }else{
            item.style.display = 'none'
        }
    })
    }  
)

//all collections
AllBtn.addEventListener('click',()=>{
    collectionItems.forEach((item)=>{
            item.style.display = 'block'
    })
    }  
)