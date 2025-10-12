    const addBtn = document.querySelector('.add-btn');
    const clrBtn = document.querySelector('.clear-btn');
    var Input = document.getElementById('input-text');
    const listContainer = document.querySelector('.list-container');

<<<<<<< HEAD
    clrBtn.addEventListener('click',function(){
        Input.value = ''
    })
    // 
=======
    // addBtn.addEventListener('click', function() {
    //     const task = Input.value;
    //     if (task) {
    //         const list = document.createElement('div');
    //         list.className = 'list';

    //         const ol = document.createElement('ol');
    //         const li = document.createElement('li');
    //         li.textContent = task;
    //         ol.appendChild(li);
    //         list.appendChild(ol);

    //         const btnsDiv = document.createElement('div');
    //         btnsDiv.className = 'btns';

    //         const editBtn = document.createElement('button');
    //         editBtn.className = 'edit';
    //         editBtn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>Edit';
    //         editBtn.addEventListener('click', function() {
    //             const newTask = prompt('Edit your task:', li.textContent);
    //             if (newTask) {
    //                 li.textContent = newTask;
    //             }
    //         });

    //         const removeBtn = document.createElement('button');
    //         removeBtn.className = 'remove';
    //         removeBtn.innerHTML = '<i class="fa-solid fa-trash"></i>Delete';
    //         removeBtn.addEventListener('click', function() {
    //             listContainer.removeChild(list);
    //         });

    //         btnsDiv.appendChild(editBtn);
    //         btnsDiv.appendChild(removeBtn);
    //         list.appendChild(btnsDiv);

    //         listContainer.appendChild(list);
    //         Input.value = '';
    //     }
    // })
   // clear input value
     clrBtn.addEventListener('click', function() {
        Input.value = '';
     })

    // save task in localStorage
>>>>>>> 803c2b5697e44043d97c5e34b2facce8e0b6821e
    addBtn.addEventListener('click',function(){
        const taskvalue=Input.value.trim();
        if(taskvalue !== ''){
            const taskid=Date.now();
            console.log(taskid);   
            addTask(taskvalue, taskid);
            saveTask(taskvalue,taskid);
            Input.value =''
        }
        else{
            alert('Please Add Your Task')
        }
    })

    function addTask(text,id){
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
        deletebtn.addEventListener('click', function() {
<<<<<<< HEAD
            if(confirm('Are you sure Delete This Task')){
            removeTask(id);
            listContainer.removeChild(li)
            }   
    
=======
            if(confirm("Are You Sure yo Delete")){
            listContainer.removeChild(li);
            removeTask(id);
            }
>>>>>>> 803c2b5697e44043d97c5e34b2facce8e0b6821e
        }); 
//   Edit button
    const editBtn = document.createElement('button');
    editBtn.setAttribute('class','edit')
    editBtn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>Edit';
    editBtn.classList.add('.edit-btn');
<<<<<<< HEAD
    editBtn.addEventListener('click',function(){
        Input.value = span.textContent
        li.remove();
        removeTask();
    })

=======
    editBtn.addEventListener('click', function (){
        Input.value = span.textContent
        li.remove();
        removeTask(id);
    });
>>>>>>> 803c2b5697e44043d97c5e34b2facce8e0b6821e
    li.appendChild(span);
    li.appendChild(buttons)
    buttons.appendChild(editBtn);
    buttons.appendChild(deletebtn);
    listContainer.appendChild(li);
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
<<<<<<< HEAD
 // Remove Task   
    function removeTask(id){
          
            const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
            const updatedTasks = tasks.filter(task => task.id !== id);
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            
    }
=======

        function removeTask(id){
             const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
            const updatedTasks = tasks.filter(task => task.id !== id);
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        }
>>>>>>> 803c2b5697e44043d97c5e34b2facce8e0b6821e
