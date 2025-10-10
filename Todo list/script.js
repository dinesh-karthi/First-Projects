    const addBtn = document.querySelector('.add-btn');
    const clrBtn = document.querySelector('.clear-btn');
    var Input = document.getElementById('input-text');
    const listContainer = document.querySelector('.list-container');

    addBtn.addEventListener('click', function() {
        const task = Input.value;
        if (task) {
            const list = document.createElement('div');
            list.className = 'list';

            const ol = document.createElement('ol');
            const li = document.createElement('li');
            li.textContent = task;
            ol.appendChild(li);
            list.appendChild(ol);

            const btnsDiv = document.createElement('div');
            btnsDiv.className = 'btns';

            const editBtn = document.createElement('button');
            editBtn.className = 'edit';
            editBtn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>Edit';
            editBtn.addEventListener('click', function() {
                const newTask = prompt('Edit your task:', li.textContent);
                if (newTask) {
                    li.textContent = newTask;
                }
            });

            const removeBtn = document.createElement('button');
            removeBtn.className = 'remove';
            removeBtn.innerHTML = '<i class="fa-solid fa-trash"></i>Delete';
            removeBtn.addEventListener('click', function() {
                listContainer.removeChild(list);
            });

            btnsDiv.appendChild(editBtn);
            btnsDiv.appendChild(removeBtn);
            list.appendChild(btnsDiv);

            listContainer.appendChild(list);
            Input.value = '';
        }
    })

    clrBtn.addEventListener('click', function() {
        Input.value = '';
    })