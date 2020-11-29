
import {UserService} from './users.service';


export class CounterService {
  activeuserCount = 0;
  inactiveuserCount = 0;
  onActiveToInactiveCounter() {
    this.activeuserCount++;
    console.log('Active to Inactive User Click' + this.activeuserCount);
  }
  onInactiveCounterActiveTo() {
    this.inactiveuserCount++;
    console.log( 'Inactive to Active User Click' + this.inactiveuserCount);
  }
}
