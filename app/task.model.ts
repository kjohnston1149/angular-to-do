export class Task { // parent object or class
  public done: boolean = false;
  constructor(public description: string, public id: number, public priority: string) {

  }
}
