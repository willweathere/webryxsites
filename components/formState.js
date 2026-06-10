// Shared form configuration used by both the provider (LandingPage) and the
// multi-step LeadForm so they agree on defaults, storage key and step gating.

export const STORAGE_KEY = "webryx_lead_form_v1";

export const DEFAULTS = {
  fullName: "",
  email: "",
  businessName: "",
  phone: "",
  websiteType: "",
  businessType: "",
  businessTypeOther: "",
  ecommerceProvider: "",
  ecommerceFeatures: [],
  features: [],
  socialPlan: "",
  primaryColor: "#6E76FF",
  exampleWebsites: "",
  styleDescription: "",
  anythingElse: "",
  customRequest: "",
  needsAdvanced: false,
  selectedPackage: "",
};

// Which registered fields gate each step before the user can continue.
export const STEP_FIELDS = {
  1: ["fullName", "email", "businessName"],
  2: ["websiteType", "businessType"],
  3: [],
  4: ["primaryColor"],
  5: ["selectedPackage"],
  6: [],
};
