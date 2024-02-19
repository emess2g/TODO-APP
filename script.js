
const addTodo = document.getElementById('handleTodo');
let display = document.getElementById('render');

const todo = [
    {
    name: "code",
    doDate: '3-25-2024'
    },
    {
    name: "learn react",
    doDate: '3-25-2024'
    },
    {
    name: "go for walk",
    doDate: '3-25-2024'
    },
];

renderTodo();

function renderTodo(){
    let todoHTML = '';

   

    todo.forEach((todoObject, index) => {
        const {name, doDate} = todoObject;
    
        const html = `
        <div>${name}</div>
        <div>${doDate}</div>
         
        <button  class="del-btn" onclick="
        todo.splice(${index},1);
        renderTodo();"
        >Delete</button>
        `;


        todoHTML+= html;
    });
   
    display.innerHTML = todoHTML;
}

function todoBtn(){
    const inputTodo = document.querySelector('.jsInput');
    const name = inputTodo.value;

    const todoDate = document.querySelector('.do-date');
    const doDate = todoDate.value;

    if(name === ''){
        document.body.style.cursor = 'none'
        alert('please todo')
    }

     todo.push({name, doDate});
     renderTodo();
    inputTodo.value="";
    todoDate.value="";
}

