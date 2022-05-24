export interface ITask {
  id: string;
  label: string;
  completed?: boolean;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ITasks extends Array<ITask> {}

export interface IState {
  tasks: {
    tasks: ITasks;
  };
}

export interface IBtn {
  task: ITask;
}
