// Marketing visuals rendered from design/visuals (see scripts/render-visuals.mjs). All are 1600x1000.
export const visualSize = [1600, 1000];

const v = (name) => `/images/visuals/${name}.png`;

export const serviceVisuals = {
  software: v("software"),
  ecommerce: v("ecommerce"),
  marketing: v("marketing"),
  mobility: v("mobility"),
  training: v("training")
};

export const audienceVisuals = {
  tourists: v("tourists"),
  businesses: v("businesses"),
  students: v("students")
};

export const solutionVisuals = {
  ERP: v("erp"),
  LMS: v("lms"),
  MLM: v("mlm"),
  SHOP: v("shop")
};

export const partnerVisuals = {
  mboameet: v("partner-mboameet"),
  efarmer: v("partner-efarmer")
};
