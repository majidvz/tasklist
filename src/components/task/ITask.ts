export interface ITask {
  id?: number;
  title: string;
  priority: number; // 0 is Low, 1 is Medium, and 2 is High.
  status: number; // 0 is To Do, 1 is In Progress, and 2 is Done.
}

export type IProgressBarPercentage = (status: number) => void;
