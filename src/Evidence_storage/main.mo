import Debug "mo:base/Debug";
import List "mo:base/List";

actor EvidenceManager {

    public type Evidence = {
        id: Nat;
        crimeType: Text;
        description: Text;
        details: Text;
        area: Text;
    };

    stable var evidences: List.List<Evidence> = List.nil<Evidence>();
    stable var currentId: Nat = 0;

    // Create a new evidence entry
    public func addEvidence(
        crimeType: Text,
        description: Text,
        details: Text,
        area: Text
    ) {
        let newEvidence: Evidence = {
            id = currentId;
            crimeType = crimeType;
            description = description;
            details = details;
            area = area;
        };
        evidences := List.push(newEvidence, evidences);
        currentId += 1;
        Debug.print(debug_show(evidences));
    };

    // Read all evidence entries
    public query func readEvidences(): async [Evidence] {
        return List.toArray(evidences);
    };

    // Fetch a specific evidence by ID
    public query func fetchEvidenceById(id: Nat): async ?Evidence {
        let evidenceArray = List.toArray(evidences);
        for (evidence in evidenceArray.vals()) {
            if (evidence.id == id) {
                return ?evidence;
            }
        };
        return null;
    };

    // Remove evidence by ID
}
