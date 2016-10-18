export class Task { // parent object or class
  public done: boolean = false;
  constructor(public description: string, public id: number, public priority: string) {
  }
}

export class WorkTask extends Task {
  constructor(public dueDate: string, public description: string, public id:number, public priority:string) {
    super(description, id, priority);
  }
}

export class HomeTask extends Task {
  constructor(public description: string, public id:number, public priority:string) {
    super(description, id, priority);
  }
}

export class HobbyTask extends Task {
  constructor(public description: string, public id:number, public priority:string) {
    super(description, id, priority);
  }
}
