
export class CounterService{
  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  incrementActiveToInactive(){
    console.log('Active to Inactive: ' + ++this.activeToInactiveCounter);
  }
  incrementInactiveToActive(){
    console.log('Inactive to Active: ' + ++this.inactiveToActiveCounter);
  }
}
