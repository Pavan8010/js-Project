let add= new Audio('audio/add.mp3');
let del = new Audio('audio/delete.mp3');

window.addEventListener('load' ,()=>{ // it will load the page first then it will run the code

    const form = document.querySelector('#new-task-form'); // to get the form
    const input = document.querySelector('#new-task-input'); // to get the input field
    const list_el = document.querySelector('#tasks'); // to get the list 
    
    // when click on submit
    form.addEventListener('submit' , (e)=>{
        e.preventDefault(); 

        const task = input.value;
        // if task is empty
        if(!task){
            alert("Please fill out the task");
            return;
        }
        // console.log("Success");
        add.play();
        const task_el = document.createElement("div"); // <div></div>
        task_el.classList.add("task"); // <div class="task"></div>

        const task_content_el = document.createElement("div"); // <div></div>
        task_content_el.classList.add("content");// <div class="content"></div>
        // task_content_el.innerText = task;
        
        task_el.appendChild(task_content_el);// <div class="task"><div class="content"></div></div>

        const task_input_el = document.createElement("input");// <input type="text" value="task">
        task_input_el.classList.add("text");// <input type="text" value="task" class="text">
        task_input_el.type = "text";// <input type="text" value="task" class="text">
        task_input_el.value = task;// <input type="text" value="task" class="text">
        task_input_el.setAttribute("readonly","readonly");// <input type="text" value="task" class="text" readonly>

        task_content_el.appendChild(task_input_el);// <div class="task"><div class="content"><input type="text" value="task" class="text" readonly></div></div>

        const task_actions_el = document.createElement("div");// <div></div>
        task_actions_el.classList.add("actions");// <div class="actions"></div>
        const task_edit_el = document.createElement("button");// <button></button>
        task_edit_el.classList.add("edit");// <button class="edit"></button>
        task_edit_el.innerHTML = "Edit";// <button class="edit">Edit</button>
        const task_delete_el = document.createElement("button");// <button></button>
        task_delete_el.classList.add("delete");// <button class="delete"></button>
        task_delete_el.innerHTML = "Delete";// <button class="delete">Delete</button>


        task_actions_el.appendChild(task_edit_el);// <div class="actions"><button class="edit">Edit</button></div>
        task_actions_el.appendChild(task_delete_el);// <div class="actions"><button class="edit">Edit</button><button class="delete">Delete</button></div>
        
        task_el.appendChild(task_actions_el);// <div class="task"><div class="content"><input type="text" value="task" class="text" readonly></div><div class="actions"><button class="edit">Edit</button><button class="delete">Delete</button></div></div>
        
        list_el.appendChild(task_el);// <div id="tasks"><div class="task"><div class="content"><input type="text" value="task" class="text" readonly></div><div class="actions"><button class="edit">Edit</button><button class="delete">Delete</button></div></div></div>

        input.value = "";// to clear the input field


        // when click on edit 
        task_edit_el.addEventListener('click',()=>{
            if(task_edit_el.innerText.toLowerCase() == "edit"){
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
                task_edit_el.innerText = "save";
            }else{
                // console.log("saved");
                task_input_el.setAttribute("readonly" , "readonly");
                task_edit_el.innerText = "Edit";
            }
        });
        // when click on delete
        task_delete_el.addEventListener('click' , ()=>{
            del.play();
            list_el.removeChild(task_el);
        });
    });
});