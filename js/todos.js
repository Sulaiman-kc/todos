$.ajax({
    type: "Get",
    url: "https://jsonplaceholder.typicode.com/todos",
    dataType: "json",
    success: function(data) {
        data.forEach(function(task){
            let str = `<li class="list" id="${task.id}"><label class="checkbox col-md-8">${task.title}<input type="checkbox" id="check${task.id}"><span class="checkmark"></span></label></li>`;
            $('#toDoList').append(str);
            if (task.completed == true) {
                $(`#check${task.id}`).attr('checked', '').attr('disabled', '');
            }

        });
    },
    error: function(){
        alert("json not found");
    }
});

var count = 0;
var promise = new Promise(function(resolve, reject){
    setTimeout(function() {
                $('#toDoList li input').on('change', (e) => {
            if (e.target.checked == true) {
                count++;
                if (count%5 == 0) {
                    resolve('Congrats. 5 Tasks have been Successfully Completed ');
                }
            }
            else {
                count--;
            }
        })
    }, 500);
});

promise.then((value) => {
    alert(value);
});
