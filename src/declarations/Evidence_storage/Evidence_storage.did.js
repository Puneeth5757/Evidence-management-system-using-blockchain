export const idlFactory = ({ IDL }) => {
  const Evidence = IDL.Record({
    'id' : IDL.Nat,
    'crimeType' : IDL.Text,
    'area' : IDL.Text,
    'description' : IDL.Text,
    'details' : IDL.Text,
  });
  return IDL.Service({
    'addEvidence' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Text, IDL.Text],
        [],
        ['oneway'],
      ),
    'fetchEvidenceById' : IDL.Func([IDL.Nat], [IDL.Opt(Evidence)], ['query']),
    'readEvidences' : IDL.Func([], [IDL.Vec(Evidence)], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
