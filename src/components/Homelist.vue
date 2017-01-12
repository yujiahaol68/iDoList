<template>
	<div class="homelist">
		<v-touch v-on:doubletap="addNewTodo(newTodo)">
		<mt-field label="+" placeholder="我想..." v-model="newTodo" type="text"></mt-field>
		</v-touch>
		<v-touch v-for="todo in todos" @swiperight="deleteTodo(todo)" @tap="stateChange(todo)">
		<mt-cell :title="todo.text" :class="{completed: todo.completed}" class="list-cell"></mt-cell>
		</v-touch>
	</div>
</template>

<script> 
import { Toast } from 'mint-ui'
import Storage from 'store2'

	export default {
		name: 'homelist',
		created() {
			if(Storage.size()!=0){
				this.todos.splice(0, this.todos.length)
				Storage.remove('$remove')
				let localData = Storage() 
				for(let i in localData) {
					this.todos.push(localData[i])
				}
			} else {
				Storage.setAll(this.todos)	//start storage at first time
				Storage.remove('$remove')
			}
		},
		data() {
			return {
				todos: [
					{text: '欢迎使用iDoList', completed: false},
					{text: '这是一个极简的清单软件', completed: false},
					{text: '双击左上角加号区域添加新任务', completed: false},
					{text: '单击完成', completed: true},
					{text: '向右滑动删除', completed: false},
					{text: '现在来试一试吧！', completed: false}
				],
				newTodo: '',
			}
		},
		methods: {
			stateChange: function(todo){
				if(!todo.completed){
					Toast({
						message: '任务完成！',
						position: 'bottom',
						duration: 1500
					})
				} else {
					Toast({
						message: '任务恢复',
						position: 'bottom',
						duration: 1500
					})
				}
				this.todos[this.todos.indexOf(todo)].completed = !todo.completed
				let updateValue = todo.completed
				let keys = Storage.keys()
				Storage.set(keys[this.todos.indexOf(todo)], {'text': todo.text, 'completed': updateValue})
			},
			addNewTodo: function(newTodo){
				if(newTodo) {
					this.todos.push({text: newTodo, completed: false})
					this.newTodo = ''
					Storage(false)
					Storage.setAll(this.todos)
					Storage.remove('$remove')						
				} else {
					Toast({
						message: '你的任务不是没有任务',
						duration: 1500
					})
				}
			},
			deleteTodo: function(todo){
				let keys = Storage.keys()
				Storage.remove(keys[this.todos.indexOf(todo)])	//delete in storage
				this.todos.splice(this.todos.indexOf(todo), 1)
				Toast({
					message: '任务删除成功！',
					duration: 1500
				})
			}
		}
	}
</script>

<style scoped>
	.completed {
		text-decoration: line-through;
		color: #cccccc;
	}

	.list-cell {
		border-bottom: 1px solid #F1F1F1;
	}

</style>