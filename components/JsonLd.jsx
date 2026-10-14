/** Renders schema.org structured data. `data` is one object or a (nested) array of objects. */
export default function JsonLd({ data }) {
  const items = [data].flat(2);
  return items.map((item, i) => (
    <script
      key={i}
      type="application/ld+json"
      // "<" escaped so a string can never close the script tag
      dangerouslySetInnerHTML={{ __html: JSON.stringify(item).replace(/</g, "\\u003c") }}
    />
  ));
}
