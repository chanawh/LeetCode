/**
 * Function to find all possible paths from source to target in a directed acyclic graph (DAG).
 * It uses Depth-First Search (DFS) to explore all paths.
 *
 * @param {Array<Array<number>>} graph - The adjacency list representation of the graph.
 *    graph[i] is a list of all nodes you can visit from node i (i.e., there is a directed edge from node i to node graph[i][j]).
 *
 * @returns {Array<Array<number>>} - An array of all paths from source to target. Each path is represented as an array of nodes.
 *
 * @example
 *    let graph = [[1,2],[3],[3],[]];
 *    console.log(allPathsSourceTarget(graph));  // Output: [ [ 0, 1, 3 ], [ 0, 2, 3 ] ]
 *
 * @example
 *    let graph = [[4,3,1],[3,2,4],[3],[4],[]];
 *    console.log(allPathsSourceTarget(graph));  // Output: [ [ 0, 4 ], [ 0, 3, 4 ], [ 0, 1, 3, 4 ], [ 0, 1, 2, 3, 4 ], [ 0, 1, 4 ] ]
 */


function allPathsSourceTarget(graph) {
    let target = graph.length - 1;
    let results = [];

    function dfs(node, path) {
        if (node === target) {
            results.push(path);
            return;
        }
        for (let neighbor of graph[node]) {
            dfs(neighbor, [...path, neighbor]);
        }
    }

    dfs(0, [0]);
    return results;
}


// This function works by starting a depth-first search from the source node (0). 
// For each node it visits, it continues the search on its neighbors. 
// When it reaches the target node, it adds the current path to the result list. 
// The process continues until all possible paths are found. 


// The time complexity is O(N!) where N is the number of nodes, as in the worst case you might visit all possible permutations of the nodes. 
// The space complexity is O(N) for storing the path.


// Given the graph `graph1 = [[1,2],[3],[3],[]]`, let's see how many times the `dfs` function would be called:

// - The function is first called with the node `0`. Node `0` has two neighbors: `1` and `2`. So, the function is called twice more from within the first call.
// - Node `1` has one neighbor: `3`. So, the function is called once more from within the call for node `1`.
// - Node `2` also has one neighbor: `3`. So, the function is called once more from within the call for node `2`.
// - Node `3` has no neighbors, so no further calls are made from within the calls for node `3`.

// So, in total, the `dfs` function is called `1 (initial call) + 2 (from node 0) + 1 (from node 1) + 1 (from node 2) = 5` times. 

// Please note that this is specific to the given graph and the number of calls would vary for different graphs.

// 1. `dfs(0, [0])`: The function is first called with node `0`. The path at this point is `[0]`.
// 2. `dfs(1, [0, 1])`: From node `0`, we move to its neighbor node `1`. The path at this point is `[0, 1]`.
// 3. `dfs(3, [0, 1, 3])`: From node `1`, we move to its neighbor node `3`. The path at this point is `[0, 1, 3]`. Since node `3` is the target, this path is added to the results and this branch of recursion ends.
// 4. `dfs(2, [0, 2])`: We go back to node `0` and move to its other neighbor node `2`. The path at this point is `[0, 2]`.
// 5. `dfs(3, [0, 2, 3])`: From node `2`, we move to its neighbor node `3`. The path at this point is `[0, 2, 3]`. Again, since node `3` is the target, this path is added to the results and this branch of recursion ends.

// So, the `dfs` function is called 5 times in total, and the paths found are `[[0, 1, 3], [0, 2, 3]]`, which are the all paths from source to target in the given graph. 
// Please note that the order of the function calls and the resulting paths could vary depending on the implementation details of the JavaScript interpreter, but the overall process and the final result would be the same.