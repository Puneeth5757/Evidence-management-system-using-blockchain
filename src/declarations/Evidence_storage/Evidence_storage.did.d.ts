import type { Principal } from '@dfinity/principal';
export interface Evidence {
  'id' : bigint,
  'crimeType' : string,
  'area' : string,
  'description' : string,
  'details' : string,
}
export interface _SERVICE {
  'addEvidence' : (
      arg_0: string,
      arg_1: string,
      arg_2: string,
      arg_3: string,
    ) => Promise<undefined>,
  'fetchEvidenceById' : (arg_0: bigint) => Promise<[] | [Evidence]>,
  'readEvidences' : () => Promise<Array<Evidence>>,
}
