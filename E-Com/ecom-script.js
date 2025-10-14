
// const array =['apple','banana','icecream','mango','grape','orange']
// array.forEach((e)=> {
//     console.log(e.length>6?e:false);
    
// });

// selecting elements
const title = document.querySelectorAll('.title a');
console.log(title);
const imgBox = document.querySelectorAll('.img-box img');

title.forEach((t)=>{
    t.addEventListener('click',(e)=>{
        e.preventDefault();
        const api = fetch('data.json');
        api.then((res)=>{ res.json().then((data)=>{
            console.log(data[0]);
            // var SRC = [data[0],data[1],data[2],data[3],data[4],data[5],data[6],data[7],data[8],data[9]]
            // console.log(SRC)
            
            for(var i=0;i<imgBox.length;i++){
                imgBox[i].src = data[i];
                console.log(data[i]);
            }
        })})
        .catch((err)=>{console.log(err);})
        
    });
});