import SectionHeader from "./SectionHeader";

/** Inner-page hero: soft wash background + centered header. */
export default function PageHero({ badge, title, lead, children }) {
  return (
    <section className="hero-wash">
      <div className="container-x pb-16 pt-36 sm:pb-20 sm:pt-40">
        <SectionHeader as="h1" badge={badge} title={title} lead={lead} />
        {children}
      </div>
    </section>
  );
}
