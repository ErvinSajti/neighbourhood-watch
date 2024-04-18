export interface Duty {
  created_at: string;
  description: string | null;
  ended_at: string | null;
  id: string;
  name: string;
  plate_num: string;
  started_at: string;
  type: DutyType;
  user_id: string | null;
}

export enum DutyType {
  Patrol = 'Patrol',
  Traffic = 'Traffic',
  Desk = 'Desk',
  Other = 'Other',
}
