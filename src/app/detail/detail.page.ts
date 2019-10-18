import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { TodosService } from '../todos.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  todo;
  constructor(
    private todoService: TodosService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.todo = this.todoService.getItem(+id);
  }

}
