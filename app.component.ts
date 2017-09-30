import { Component } from '@angular/core';
import { Todo } from './todo';
import { TodoService } from './services/todo.service';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    providers: [TodoService],
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    // �q�R���|�[�l���g�ɓn�����߂̃v���p�e�B���`
    todos:Todo[];
    constructor(private service: TodoService) {
        // ���̂̓T�[�r�X�N���X����擾
        this.todos = service.todos;
    }
}
