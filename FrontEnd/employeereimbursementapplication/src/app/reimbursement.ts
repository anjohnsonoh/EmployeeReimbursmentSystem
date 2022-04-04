export interface Reimbursement{
    id: number;
    amount: number;
    submitted: boolean;
    resolved: boolean;
    description: string;
    receipt: number;
    type: string
}