
// const array =['apple','banana','icecream','mango','grape','orange']
// array.forEach((e)=> {
//     console.log(e.length>6?e:false);
    
// });

// selecting elements
const title = document.querySelectorAll('.title a');
console.log(title);
const imgBox = document.querySelectorAll('.img-box img');
console.log(imgBox);

title.forEach((t)=>{
    t.addEventListener('click',(e)=>{
        e.preventDefault();
        const api = fetch('data.json');
        api.then((res)=>{ res.json().then((data)=>{
            console.log(data)
            imgBox.forEach((img,i)=>{
                img.src = data[i].img;
            })
        })})
        
    });
});