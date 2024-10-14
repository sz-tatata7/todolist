const task_input = document.getElementById("task-input");
const task_list = document.getElementById("task-list");
const addbutton = document.getElementById("add-task-button");




//タスク追加機能


addbutton.addEventListener("mouseup",()=>{
    //タスクインプットが空の時に追加処理が行われないようにする
    if(task_input.value != ""){  
        
        const new_list = document.createElement("li");

        new_list.textContent = task_input.value;

        const removebutton = document.createElement("button");

        removebutton.textContent = "削除"

        new_list.appendChild(removebutton);

        task_list.appendChild(new_list);

        //タスク削除機能
        removebutton.addEventListener("mouseup",(e)=>{
            e.target.closest("li").remove();



        });




        //タスクインプット欄を空にする
        task_input.value = "";





    }



});








