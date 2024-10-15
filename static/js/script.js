const task_input = document.getElementById("task-input");
const task_list = document.getElementById("task-list");
const addbutton = document.getElementById("add-task-button");




// タスクをローカルストレージに保存
function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// ローカルストレージからタスクを取得
function loadTasks() {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}

// ページロード時にタスクを表示
window.addEventListener('load', () => {
    const tasks = loadTasks();
    tasks.forEach(task => {
        addTaskToList(task);
    });
});

// タスクをリストに追加
function addTaskToList(task) {
    const new_list = document.createElement('li');
    new_list.textContent = task;

    const removebutton = document.createElement('button');
    removebutton.textContent = '削除';
    new_list.appendChild(removebutton);
    task_list.appendChild(new_list);

    removebutton.addEventListener('click', () => {
        new_list.remove();
        saveTasks(getAllTasks());
    });
}

// 現在のタスクリストを取得
function getAllTasks() {
    return [...task_list.children].map(li => li.textContent.replace('削除', '').trim());
}

// タスク追加時の処理
addbutton.addEventListener('click', () => {
    const task = task_input.value;
    if (task) {
        addTaskToList(task);
        saveTasks(getAllTasks());
        task_input.value = ''; // 入力欄を空にする
    }
});








