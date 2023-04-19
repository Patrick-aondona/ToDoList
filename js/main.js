function addList() {
    const inputTask = document.getElementById('task');
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    if (inputTask.value == ''){
        alert('Please enter a task first');
    } 
    else{
        li.textContent = task.value;
        ul.append(li);
        inputTask.value = '';
    }
}
JSON.parse();