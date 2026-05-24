export interface TimelineEvent {
  uuid: string;
  name: string;
  year?: number;
  addYears?: [string, number];
  source?: Array<[string, number, number]>;
}
