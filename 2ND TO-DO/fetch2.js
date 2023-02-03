let uncompletedTasks = document.querySelector("#Uncompleted-tasks");
let completedTasks = document.querySelector("#completed-tasks");

fetch( "https://dummyjson.com/todos")
    .then(function(promise) {
        console.log(promise);
        promise.json()
            .then(function(response){

           console.log(response);
                let todos = response.todos; // Get todos from the response
                
                // Loop through todos array and output to HTML
                todos.forEach(function(todo) {
                    
                    if(todo.completed) { // If todo is completed output it to the completed list
                        completedTasks.innerHTML += `<li>
                            <h5>${todo.todo}</h5>
                            </li>`
                    } else { // If todo is NOT completed output it to the uncompleted list
                        uncompletedTasks.innerHTML += `<li>
                            <h5>${todo.todo}</h5>
                            </li>`
                    }
                })
            })
            .catch(function(error) {
                // Handle JSON parse error here
                console.log(error);

                // Show error to user
                document.querySelector(".error").innerHTML = error.message;
            })
    })
    .catch(function(error) {
        // Handle error here
        console.log(error);

        // Show error to user
        document.querySelector(".error").innerHTML = error.message;
    })