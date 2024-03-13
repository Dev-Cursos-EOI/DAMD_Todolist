let tasks = [
    {
        id: 0,
        title: "Laravel con Livewire",
        done: false
    },
    {
        id: 1,
        title: "Ver que es eso de SQL",
        done: false
    },
    {
        id: 2,
        title: "Que es Nextjs",
        done: false
    }
]

const divTasks = document.getElementById("tasks")

function showTasks() {
    divTasks.innerHTML = ""

    for (const task of tasks) {
        console.log(task.title)

        let colorBg = "bg-slate-100"
        if (task.done) {
            colorBg = "bg-green-200"
        }

        let myHtml = ` <div class="flex items-center justify-between mt-2 p-2 ${colorBg} rounded-md">
                                    <p>${task.id} - ${task.title}</p>
                                    <div>`

        if (!task.done) {
            myHtml += `<button onclick="doneTask(${task.id})" class="bg-green-400 hover:bg-green-500 p-3 rounded-md">Hecho!</button>`
        }

        myHtml += `        <button onclick="deleteTask(${task.id})" class="bg-red-400 hover:bg-red-500 p-3 rounded-md">Eliminar</button>
                                    </div>
                                </div>
                                `

        divTasks.innerHTML += myHtml

    }
}

const inputData = document.getElementById("inData")

function addTask() {

    // Obtener valor del input
    let inTask = inputData.value

    // Vaciamos el input
    inputData.value = ""

    // Añadirlo al array de objetos
    tasks.push({
        id: tasks.length,
        title: inTask,
        done: false
    })

    // pintar en la vista los datos
    showTasks()
}

function deleteTask(idToDelete) {
    // quitamos del array actual el id 1
    tasks = tasks.filter(task => task.id != idToDelete)

    // pintar en la vista los datos
    showTasks()
}

function doneTask(idToDone) {
    tasks.find(task => task.id == idToDone).done = true

    showTasks()
}

showTasks()