import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../shared/services/provider.service';
import { ITask, ITaskList } from '../shared/models/models';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  constructor(private provider: ProviderService) { }

   public taskLists: ITaskList[] = []
  public tasks: ITask[] = []


  ngOnInit() {
    this.provider.getTaskLists().then( res => {
      this.taskLists = res;
    });
  }

  getTasks(task: ITaskList){
    this.provider.getTasks(task).then(res => {
      this.tasks = res;
    });
  }

}
