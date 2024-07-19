export interface ITask {
  id?: number;
  title: string;
  priority: number;
  status: number;
}

export type IProgressBarPercentage = (status: number) => void;
