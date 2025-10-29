    const addBtn = document.querySelector('.add-btn');
    const clrBtn = document.querySelector('.clear-btn');
    var Input = document.getElementById('input-text');
    const listContainer = document.querySelector('.list-container');

   // clear input value
     clrBtn.addEventListener('click', function() {
        Input.value = '';
     })

    // save task to localStorage
    addBtn.addEventListener('click',saveToLocal)
    
    function saveToLocal(){
        const taskvalue=Input.value.trim();
        if(taskvalue !== ''){
            const taskid=Date.now();
            console.log(taskvalue,taskid);   
            addTask(taskvalue, taskid);
            saveTask(taskvalue,taskid);
            Input.value =''
        }
        else{
            alert('Please Add Your Task')
        }
    }
//add task
    function addTask(text,id){
    //list tag
        const li = document.createElement('li')
        li.setAttribute("data-id" ,id);
        const span = document.createElement('span');
        span.textContent = text;
        const buttons = document.createElement('div')
        buttons.setAttribute('class' ,'btn-box')
      //delete button
        const deletebtn = document.createElement('button');
        deletebtn.setAttribute('class','delete')
        deletebtn.innerHTML = '<i class="fa-solid fa-trash "></i>Delete';
  //   Edit button
    const editBtn = document.createElement('button');
    editBtn.setAttribute('class','edit')
    editBtn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>Edit';
    editBtn.classList.add('.edit-btn');
        
    li.appendChild(span);
    li.appendChild(buttons)
    buttons.appendChild(editBtn);
    buttons.appendChild(deletebtn);
    listContainer.appendChild(li);
            
   //delete task
    deletebtn.addEventListener('click', function() {
        if (confirm("Are You Sure yo Delete")) {
                listContainer.removeChild(li);
                removeTask(id);
            }
    })
//Edit task 
    editBtn.addEventListener('click',function(){
        Input.value = span.textContent
        li.remove();
        removeTask();
    })
}
// save task to localstorage
    function saveTask(text,id){
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push({text,id})
        localStorage.setItem('tasks',JSON.stringify(tasks));
    }
    
// Display Existing Saved Task
    window.onload = () =>{
        const savedTask = JSON.parse(localStorage.getItem('tasks')) || [];
        savedTask.forEach(task => addTask(task.text,task.id));
    }
 // Remove Task   
    function removeTask(id){
          
            const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
            const updatedTasks = tasks.filter(task => task.id !== id);
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            
    }
