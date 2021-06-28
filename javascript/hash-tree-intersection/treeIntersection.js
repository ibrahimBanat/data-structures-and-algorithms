"use strict";

function treeInterSection(tree1, tree2) {
  let tree1Nodes = tree1.preOrder();
  let tree2Nodes = tree2.preOrder();
  let similar = [];

  for (let node = 0; node < tree1Nodes.length; node++) {
    if (tree1Nodes[node] === tree2Nodes[node]) similar.push(tree1Nodes[node]);
  }
  return similar;
}

module.exports = treeInterSection;
