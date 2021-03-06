// How will you check if 2 binary trees are equal or not?
//Algorithim of Binary Tree

// If both trees are empty then return 1.
// Else If both trees are non -empty 
//     Check data of the root nodes (tree1->data == tree2->data)
//     Check left subtrees recursively i.e., call sameTree(tree1->left_subtree, tree2->left_subtree)
//     Check right subtrees recursively i.e., call sameTree(tree1->right_subtree, tree2->right_subtree)
//     If the values returned in the above three steps are true then return 1.
// Else return 0 (one is empty and other is not).