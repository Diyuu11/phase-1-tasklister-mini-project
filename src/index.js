document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    handleTodo(e.target.new_todo.value)
  }
}
function handleTodo(todo){
  let p = document.createElement('p')
  p.textContent = todo
  console.log(p)
}