function clone (tree) {
    return tree && { ...tree }
  }
  
export default class Zipper {
    constructor (tree, parent) {
        this.tree = tree
        this.parent = parent || null
    }

    static fromTree (tree) {
        return new Zipper(clone(tree))
    }

    toTree () {
        return this.parent ? this.parent.toTree() : this.tree
    }

    left () {
        this.tree.left = clone(this.tree.left)
        let next = this.tree.left
        return next ? new Zipper(next, this) : null
    }

    right () {
        this.tree.right = clone(this.tree.right)
        let next = this.tree.right
        return next ? new Zipper(next, this) : null
    }

    value () {
        return this.tree.value
    }

    up () {
        return this.parent
    }

    setValue (value) {
        this.tree.value = value
        return this
    }

    setLeft (tree) {
        this.tree.left = tree
        return this
    }

    setRight (tree) {
        this.tree.right = tree
        return this
    }
}
  