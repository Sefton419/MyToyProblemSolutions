/*

Lowest Common Ancestor of a Binary Search Tree

Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes v and w as the lowest node in T that has both v and w as descendants (where we allow a node to be a descendant of itself).”

*/


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

var lowestCommonAncestor = function(root, p, q) {
    // find p
    // find q
    // check to see if they have common ancestor with array
        // case 1: none of nodes are parent node and LCA
        // case 2: one of nodes is the parent node and LCA
    function createsAncestryArray (node, target, ancestors) {
        if (node === null) {
            return 'target could not be found';
        }
        // if node.val is greater than target
        if (node.val > target) {
            // recurse (node.right, target)
            createsAncestryArray(node.left, target, ancestors);
        }
        // if node.val is less than target
        if (node.val < target) {
            // recurse (node.left, target)
            createsAncestryArray(node.right, target, ancestors);
        }
        // push node.val to ancestors
        let temp = node;
        ancestors.push(temp);

        console.log(target, ancestors)

        let lastIndex = ancestors.length - 1 || null;
        if (root === ancestors[lastIndex]) {
            console.log('I\'m in')
            return ancestors;
        }
    }

    let pANCESTORS = createsAncestryArray(root, p.val, []);
    let qANCESTORS = createsAncestryArray(root, q.val, []);

    let longest;
    let shortest;

    if (pANCESTORS.length > qANCESTORS.length) { 
       longest = pANCESTORS;
       shortest = qANCESTORS; 
    } else { 
        longest = qANCESTORS; 
        shortest = pANCESTORS; 
    }

   console.log('pANCESTORS: ', pANCESTORS);
   console.log('qANCESTORS: ', qANCESTORS);
   console.log('longest: ', longest);

   while (shortest.length !== longest.length) {
       shortest.unshift(null);
   }

   console.log('shortest post-additions', shortest);

   for (let i = 0; i < longest.length; i++) {
       if (pANCESTORS[i] === qANCESTORS[i]) {
           console.log('EQUAL! ');
           return pANCESTORS[i];
       }
   }


};

var tree = {
        val: 10,
        right: {
    		val: 15,
    		left: {
    			val: 13,
    			left: {
    				val: 12,
    				left: null,
    				right: null
				},
    			right: {
                    val: 13.5, 
                    left: null, 
                    right: null
                }
			},
    		right: {
    			val: 16,
    			left: null,
    			right: null 
			},
        },
        left: {
    		val: 7,
    		left: {
    			val: 6,
    			left: {
    				val: 5,
    				left: null,
    				right: null
				},
    			right: {
                    val: 6.5,
                    left: null,
                    right: null

                }
			},
    		right: {
    			val: 8,
    			left: null,
    			right: {
    				val: 9,
    				left: null,
    				right: null
				}
			} 
		} 
};

console.log((lowestCommonAncestor(tree, {val: 12}, {val: 16})).val);