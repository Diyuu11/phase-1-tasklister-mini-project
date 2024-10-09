document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent the default form submission

      const taskInput = document.getElementById("new-task-description");
      const taskDescription = taskInput.value.trim();

      if (taskDescription) {
          const li = document.createElement("li");
          li.textContent = taskDescription;

          // Create the delete button
          const deleteButton = document.createElement("button");
          deleteButton.textContent = "Delete";
          deleteButton.classList.add("delete-button");

          // Add an event listener to the delete button
          deleteButton.addEventListener("click", () => {
              li.remove(); // Remove the task when the delete button is clicked
          });

          li.appendChild(deleteButton); // Append the button to the list item
          taskList.appendChild(li); // Append the list item to the task list
          taskInput.value = ""; // Clear the input field
      }
  });
});
