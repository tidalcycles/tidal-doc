export class Tree {
  tree;

  constructor(tree) {
    this.tree = tree;
  }

  get childNodes() {
    if (!this.tree.childNodes) return [];

    return this.tree.childNodes.map(n => new Tree(n));
  }

  get nodeName() {
    return this.tree.nodeName;
  }

  get tagName() {
    if (!this.tree.tagName) return undefined;

    return this.tree.tagName;
  }

  get id() {
    if (!this.tree.attrs) return undefined;

    let attr = this.tree.attrs.find(a => a.name === "id");
    return attr ? attr.value : undefined;
  }

  get text() {
    if (this.nodeName === "#text") {
      return this.tree.value;
    } else {
      return this.childNodes.map(n =>  n.text).join("");
    }
  }

  getChild(tagName) {
    return this.getChildren(tagName)[0];
  }

  getChildren(tagName) {
    return this.childNodes.filter(n => n.tagName === tagName);
  }

  getChildID(idName) {
    return this.childNodes.find(n => n.id === idName);
  }

  hasClass(className) {
    if (!this.tree.attrs) return false;

    let attr = this.tree.attrs.find(a => a.name === "class" && a.value === className);
    return !!attr;
  }
}