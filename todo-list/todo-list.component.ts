import { Component, Input } from '@angular/core';
import { Todo } from '../todo';
@Component({
    selector: 'todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
// �e�R���|�[�l���g����l���󂯎��
    @Input() todos: Todo[];
}
