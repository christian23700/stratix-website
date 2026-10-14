import { permanentRedirect } from "next/navigation";
import { locales } from "@/lib/i18n-config";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// Solutions (ERP / LMS / MLM) now live on the products page.
export default function SolutionsRedirect({ params }) {
  permanentRedirect(`/${params.locale}/products`);
}
