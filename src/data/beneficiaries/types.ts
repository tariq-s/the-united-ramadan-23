export interface Beneficiary {
  id: number;
  token: string;
  name: string;
  surveyorName: string;
  surveyLocation: string;
  gender: string;
  phone: string;
  familyMembers: string;
  address?: string;
  receivedKit: boolean;
}
