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
    // 子コンポーネントに渡すためのプロパティを定義
    todos:Todo[];
    constructor(private service: TodoService) {
        // 実体はサービスクラスから取得
        this.todos = service.todos;
    }
}
