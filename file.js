function Task(id) {
    this.id = id;

//  id --> id of the task typenum
//  depend --> dependency on the other tasks typearray?
//  duedate --> duedate of task typedatetime
//  priority --> priority of task / typestring
//  tags --> tags for the task / typearray?
//  column --> colum the task belongs to / typestring
//  name --> the name we display / typestring

    this.getName = function() {
        return this.name;
    };
    this.setName = function(newName) {
        this.name = newName;
    };

    this.getDueDate = function() {
        return this.DueDate;
    };
    this.setDueDate = function(newDueDate) {
        this.DueDate = newDueDate;
    };

    this.getPriority = function() {
        return this.Priority;
    };
    this.setPriority = function(newPriority) {
        this.Priority = Priority;
    };

    this.getDependency = function() {
        return this.Dependency;
    };
    this.setDependency = function(newDependency) {
        this.Dependency = newDependency;
    };

    this.getColumn = function() {
        return this.Column;
    };
    this.setColumn = function(newColumn) {
        this.Column = newColumn;
    };

    this.getTags = function() {
        return this.Tags;
    };
    this.setTags = function(newTags) {
        this.Tags = newTags;
    };

    this.getID = function() {
        return this.id;
    };
}

var arrayOfTasks = [];

var createTask = function(column) {

    var id = arrayOfTasks.length + 1;
    var task = new Task(id);
    task.setColumn(column);

    // get all the details and add them to the tasks 

    arrayOfTasks.push(task);
    return task;
};

var createColumn = function() {

}

//////////////////////////////////////////


createTask('todo');
createTask('working');

for (var i = 0; i < arrayOfTasks.length; i++) {

    var pointer = arrayOfTasks[i];
    //console.log(pointer.getID());

    if (pointer.getColumn() === 'todo') {
        //print all todo tasks

        console.log("TODO");
        console.log(pointer.getID());
    };

    for (var property in pointer) {
        //print all the properties
        //console.log(pointer[property]);
    }
}
