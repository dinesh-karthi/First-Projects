    const addBtn = document.querySelector('.add-btn');
    const clrBtn = document.querySelector('.clear-btn');
    var Input = document.getElementById('input-text');
    const listContainer = document.querySelector('.list-container');

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
    addBtn.addEventListener('click',function(){
        const taskvalue=Input.value.trim();
        if(taskvalue !== ''){
            const taskid=Date.now();
            addTask(taskvalue, taskid);
            saveTask(taskvalue,taskid);
            Input.value =''
        }
    })

    function addTask(text,id){
        const li = document
        .createElement('li')
        li.setAttribute("data-id" ,id);
        const span = document.createElement('span');
        span.textContent = text;
        //delete button
        const deletebtn = document.createElement('button');
        deletebtn.innerHTML = '<i class="fa-solid fa-trash"></i>Delete';
        deletebtn.addEventListener('click', function() {
            if(confirm("Are You Sure yo Delete")){
            listContainer.removeChild(li);
            const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
            const updatedTasks = tasks.filter(task => task.id !== id);
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            }
        }); 
    //    Edit button
    const editBtn = document.createElement('button');
    editBtn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>Edit';
    editBtn.classList.add('.edit-btn');

    li.appendChild(span);
    li.appendChild(deletebtn);
    li.appendChild(editBtn);
    listContainer.appendChild(li);
    }

    function saveTask(text,id){
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push({text,id})
        localStorage.setItem('tasks',JSON.stringify(tasks));
    }

    window.onload = () =>{
        const savedTask = JSON.parse(localStorage.getItem('tasks')) || [];
        savedTask.forEach(task => addTask(task.text,task.id));
    }
