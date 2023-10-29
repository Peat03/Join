class Task {
    constructor(id, title, description, assignedTo, dueDate, prio, category, status, subtasks) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.assignedTo = assignedTo;
      this.dueDate = dueDate;
      this.prio = prio;
      this.category = category;   
      this.status = status;
      this.subtasks = subtasks;

    }
  
    markAsCompleted() {
      this.status = 'completed';
    }
  
    updateTitle(newTitle) {
      this.title = newTitle;
    }
  
    updateDescription(newDescription) {
      this.description = newDescription;
    }
  
    updateAssistant(assignedTo) {
      this.assignedTo = assignedTo;
    }
  
    updatePriority(newPriority) {
      this.prio = newPriority;
    }
  }
  
  