function openFeatures() {
    var allElems = document.querySelectorAll('.elem');
    var FullElemPage = document.querySelectorAll('.fullElem')
    var FullElemPageBackBtn = document.querySelectorAll('.fullElem .back')

    allElems.forEach(function (elem) {
        elem.addEventListener('click', function () {
            FullElemPage[elem.id].style.display = 'block'

        })
    })

    FullElemPageBackBtn.forEach(function (back) {
        back.addEventListener('click', function () {
            FullElemPage[back.id].style.display = 'none'

        })
    })

}
openFeatures();

let form = document.querySelector('.addTask form ');
let taskInput = document.querySelector('.addTask form input');
let taskDetailsInput = document.querySelector('.addTask form textarea');
let taskCheckbox = document.querySelector('.addTask form #check');

let currentTask = [
    {
        task: 'Mandir Jao',
        details: 'Hanuman Ji ke Mandir Jao',
        important: true
    },
    {
        task: 'Recording Karo',
        details: 'Cohort ke liye video banao',
        important: true
    },
    {
        task: 'Coding Practice',
        details: 'Hacker Rank pr 2 questions solve karo',
        important: false
    }
]

function renderTask() {
    var allTask = document.querySelector('.allTask')

    var sum = '';

    currentTask.forEach(function (elem) {
        sum += sum + `
        <div class="task">
                        <h5>${elem.task} <span class = ${elem.imp}>imp </span></h5>
                        <button>Mark as Completed</button>
                    </div>
                    `
    })

    allTask.innerHTML = sum
}
renderTask()

form.addEventListener('submit', function (e) {
    e.preventDefault();
    currentTask.push(
        {
            task: taskInput.value,
            details: taskDetailsInput.value,
            imp: taskCheckbox.checked
        }
    )
    taskInput.value = ''
    taskDetailsInput.value = ''
    taskCheckbox.checked = false
    renderTask()
})

localStorage.clear()