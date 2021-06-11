const appConfig = {
	data(){
		return{
			newTxt:'',
			taskList: []
		}
	},
	updated(){
		localStorage.setItem('TaskList',JSON.stringify(this.taskList))
	},
	mounted(){
		let data =localStorage.getItem('TaskList');
		if(data){
			this.taskList = JSON.parse(data)
		}
	},
	methods:{
		addTask(){
			if(!this.newTxt.trim()){
				return;
			}
			
			this.taskList.unshift({
				txt:this.newTxt,
				complited:false
			});
			this.newTxt='';
		},
		deleteTask(taskNumber){
			let message = `Вы хотите удалить  ${this.taskList[taskNumber].txt} ?`
			if(!confirm(message)){
				return;
			}
			this.taskList.splice(taskNumber,1);
		}
	}
}
const app =Vue.createApp(appConfig);
app.mount('#app');