export type Module = "PP" | "QM" | "PP/QM";
export type AwpRelevance = "High" | "Medium" | "Low" | "Not Used";

export interface KeyField {
  field: string;
  description: string;
}

export interface LogbookEntry {
  id: string;
  module: Module;
  category: string;
  transactionCode: string;
  title: string;
  titleAr: string;
  description: string;
  processArea: string;
  sapDocUrl: string;
  relatedTransactions: string[];
  tags: string[];
  awpRelevance: AwpRelevance;
  notes: string;
  lastVerified: string;
  // Extended detail
  steps?: string[];
  keyFields?: KeyField[];
  output?: string;
}
