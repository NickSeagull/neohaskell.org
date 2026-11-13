// A heading can keep a shared anchor without reading another language's document:
// ## Translated heading <a id="stable-anchor" />
export function remarkStableHeadings() {
  return function visit(node) {
    if (node.type === 'heading') {
      const marker = node.children.at(-1);
      const id = marker?.type === 'mdxJsxTextElement' && marker.name === 'a'
        && marker.children.length === 0 && marker.attributes.length === 1
        && marker.attributes[0].name === 'id' && marker.attributes[0].value;
      if (typeof id === 'string' && id) {
        node.data ??= {};
        node.data.hProperties = { ...node.data.hProperties, id };
        node.children.pop();
        const text = node.children.at(-1);
        if (text?.type === 'text') text.value = text.value.trimEnd();
      }
    }
    for (const child of node.children ?? []) visit(child);
  };
}
