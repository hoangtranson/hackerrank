function findRootComm(person, communities) {
    if (communities[person] === person) {
        return person;
    }
    return findRootComm(communities[person], communities);
}

// M i j => communities containing persons i and j are merged if they belong to different communities.
// Q i => print the size of the community to which person i belongs.
function processData(input) {
    const queries = input.trim().split("\n");
    const numPeople = parseInt(queries[0].split(" ")[0]);

    const roots = Array.from({ length: numPeople + 1 }, (_, i) => i);
    const count = Array(numPeople + 1).fill(1);
    const results = []; // Store results here

    queries.slice(1).forEach(query => {
        const [q, e1, e2] = query.split(" ");
        const person1 = parseInt(e1);
        const person2 = parseInt(e2);
        
        if (q === "Q") {
            const comm = findRootComm(person1, roots);
            results.push(count[comm]); // Push result to array
        } else if (q === "M") {
            const root1 = findRootComm(person1, roots);
            const root2 = findRootComm(person2, roots);
            if (root1 !== root2) {
                roots[root2] = root1;
                count[root1] += count[root2];
                count[root2] = 0;
            }
        }
    });

    return results; // Return array of results
}

module.exports = processData;