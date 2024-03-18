import { MetaTypeCreator, ServerTimestamp } from "firelord";

export type ToDo = MetaTypeCreator<
  {
    title: string;
    description: string;
    timestamp: ServerTimestamp;
    priority: "low" | "middle" | "high";
  },
  "TodosCollection",
  string
>;
