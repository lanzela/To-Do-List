  const inputBox = document.getElementById("input-box");
        const listContainer = document.getElementById("list-container");

        // Add a task to the list
        function addTask(){
            if(inputBox.value === ""){
                alert("Please Enter a Task");
            }
            else{
                let li = document.createElement("li");
                li.innerHTML = inputBox.value;
                listContainer.appendChild(li);
                let span = document.createElement("span");
                span.innerHTML = "x";
                li.appendChild(span);
            }
            inputBox.value = "";
            saveData();
        }

        listContainer.addEventListener("click", function(event){
            if(event.target.tagName === "LI"){
                event.target.classList.toggle("checked");
                saveData();
            }
            else if(event.target.tagName === "SPAN"){
                event.target.parentElement.remove();
                saveData();
            }
        }, false);

        // allow task to be added with "enter" key and "return" key in mac
        inputBox.addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
                addTask();
            }
        });

        // save the data to the local storage
        function saveData(){
            localStorage.setItem("data", listContainer.innerHTML);
        }

        // show the data from the local storage
        function showData(){
            listContainer.innerHTML = localStorage.getItem("data");
        }
        showData();

