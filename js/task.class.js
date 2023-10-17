class Task {
    constructor(title, description, assignedTo, dueDate, prio, category,subtasks, status) {
      this.title = title;
      this.description = description;
      this.assignedTo = assignedTo;
      this.dueDate = dueDate;
      this.prio = prio;
      this.category = category;
      this.subtasks = subtasks;
      this.status = status;

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
  
  