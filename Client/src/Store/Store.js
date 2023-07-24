import create from "zustand";

export const userCounterStore = create ((set) => (
  {
    number: 100,
    increaseCounterNumber: () => set((state) => ({number: state.number + 10})),
    decreaseCounterNumber: () => set((state) => ({number: state.number - 10}))
  }
))

export const useTaskStore = create((set) => ({
  tasks: [],
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
  removeTask: (taskId) => set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== taskId),
    })),
}));