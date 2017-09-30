import { Component,Input } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../services/todo.service';
@Componet({
    selector: 'todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})
export class TodoComponent {
// 親コンポーネントから値を受け取る
    @Input() todos: Todo[];
}
