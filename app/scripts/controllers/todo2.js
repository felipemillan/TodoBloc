function TodosController() {
    this.categories = ["Personal", "Work", "Bloc.io","Cleaning", "Shopping", "Other"];
    this.priorities = ["Low", "Medium", "High"];

    this.todos = [{
        name: "Learn angular",
        category: "Bloc.io",
        priority: "High",
        done: true},
    {
        name: "Install java",
        category: "Bloc.io",
        priority: "Medium",
        done: false},
    {
        name: 'laundry',
        category: "Cleaning",
        priority: "Low",
        done: false}];
}

TodosController.prototype = {
    addTodo: function() {
        if (this.todoName === "") {
            return false;
        }

        this.todos.push({
            name: this.todoName,
            category: this.todoCategory,
            priority: this.todoPriority,
            done: false
        });

        this.todoName = '';
        this.todoCategory = "Personal";
        this.todoPriority = "High";
    }
};

function TodoEditorController() {
    this.editorEnabled = false;
}

TodoEditorController.prototype = {
    enableEditor: function() {
        this.editorEnabled = true;

        this.todoName = this.todo.name;
        this.todoCategory = this.todo.category;
        this.todoPriority = this.todo.priority;
    },

    disableEditor: function() {
        this.editorEnabled = false;
    },

    save: function() {
        if (this.todoName === "") {
            return false;
        }

        this.todo.name = this.todoName;
        this.todo.category = this.todoCategory;
        this.todo.priority = this.todoPriority;

        this.disableEditor();
    }
};