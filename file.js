function Task(id) {
    this.id = id;

//  id --> id of the task typenum
//  depend --> dependency on the other tasks typearray?
//  duedate --> duedate of task typedatetime
//  priority --> priority of task / typestring
//  tags --> tags for the task / typearray?
//  column --> colum the task belongs to / typestring
//  name --> the name we display / typestring

    this.getName = function () {
        return this.name;
    };
    this.setName = function (newName) {
        this.name = newName;
    };

    this.getDueDate = function () {
        return this.DueDate;
    };
    this.setDueDate = function (newDueDate) {
        this.DueDate = newDueDate;
    };

    this.getPriority = function () {
        return this.Priority;
    };
    this.setPriority = function (newPriority) {
        this.Priority = newPriority;
    };

    this.getDependency = function () {
        return this.Dependency;
    };
    this.setDependency = function (newDependency) {
        this.Dependency = newDependency;
    };

    this.getColumn = function () {
        return this.Column;
    };
    this.setColumn = function (newColumn) {
        this.Column = newColumn;
    };

    this.getTags = function () {
        return this.Tags;
    };
    this.setTags = function (newTags) {
        this.Tags = newTags;
    };

    this.getID = function () {
        return this.id;
    };
}

var arrayOfTasks = [];
var arrayOfColumns = ['deleted', 'todo', 'working'];

var createTask = function (column) {

    var task = new Task(arrayOfTasks.length + 1);
    task.setColumn(column);

    // get all the details and add them to the tasks

    arrayOfTasks.push(task);
    return task;
};

var printColumn = function (columnName) {
    for (var i = 0; i < arrayOfTasks.length; i++) {
        var pointer = arrayOfTasks[i];

        if (pointer.getColumn() === columnName) {
            console.log(pointer.getID());
        }
    }
}

var createColumn = function (columnName) {
    arrayOfColumns.push(columnName);
}

var moveTask = function (id, column) {
    // the task with the id gets moved to a different column
    for (var i = 0; i < arrayOfTasks.length; i++) {
        var pointer = arrayOfTasks[i];
        if (pointer.getID() === id) {

            pointer.setColumn(column);

        }
    }
}

var deleteTask = function (id) {

    moveTask(id, arrayOfColumns[0]);
}

//////////////////////////////////////////


createTask(arrayOfColumns[1]);
createTask(arrayOfColumns[2]);

printColumn(arrayOfColumns[1]);

createColumn('done');

moveTask(1, arrayOfColumns[2]);

printColumn(arrayOfColumns[2]);

deleteTask(1);
printColumn(arrayOfColumns[0]);

// for (var i = 0; i < arrayOfTasks.length; i++) {

//     var pointer = arrayOfTasks[i];
//     //console.log(pointer.getID());

//     if (pointer.getColumn() === 'todo') {
//         //print all todo tasks

//         console.log("TODO");
//         console.log(pointer.getID());
//     };

//     for (var property in pointer) {
//         //print all the properties
//         //console.log(pointer[property]);
//     }
// }
