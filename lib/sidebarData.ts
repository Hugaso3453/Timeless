export type SidebarItem = {
  label: string;
  key: string;
  link?: string;  // <-- OPTIONAL
};

export type SidebarSection = {
  title: string;
  type: "images" | "text";
  items: SidebarItem[];
};


export const sidebarSections: SidebarSection[] = [
  {
    title: "Cars",
    type: "images",
    items: [
      { label: "All Cars", key: "all" },
      { label: "Sports", key: "sports" },
      { label: "SUVs", key: "suv" },
      { label: "Electric", key: "ev" }
    ]
  },

  {
    title: "Financing",
    type: "text",
    items: [
      { label: "Loan Calculator", key: "calculator", link: "/calculator" },
      { label: "Apply Now", key: "apply", link: "/apply" },
    ]
  },

  {
    title: "Company",
    type: "text",
    items: [
      { label: "About Us", key: "about", link: "/about" },
      { label: "Contact", key: "contact", link: "/contact" },
    ]
  }
];
