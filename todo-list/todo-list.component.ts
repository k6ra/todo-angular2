import { Component, Input } from '@angular/core';
import { Todo } from '../todo';
@Component({
    selector: 'todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
// 親コンポーネントから値を受け取る
    @Input() todos: Todo[];
}
