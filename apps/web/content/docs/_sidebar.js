/** @type {import('@/types').DocsSidebarConfig} */
const sidebar = {
  items: [
    {
      id: "guide",
      label: "Guide",
      type: "collapsible",
      open: false,
      items: [
        {
          id: "guide:overview",
        },
        {
          id: "guide:installation",
        },
        {
          id: "guide:theming",
        },
        {
          id: "guide:headless-integration",
        },
        {
          id: "guide:form",
        },
      ],
    },
    {
      id: "design-system",
      label: "Design system",
      type: "collapsible",
      open: false,
      items: [
        { id: "design-system:overview" },
        { id: "design-system:colors" },
        { id: "design-system:typography" },
        { id: "design-system:misc" },
      ],
    },
    {
      id: "integrations",
      label: "Integrations",
      type: "collapsible",
      open: false,
      items: [
        {
          id: "next",
        },
        {
          id: "vite",
        },
        {
          id: "cra",
        },
      ],
    },
    {
      id: "components",
      label: "Components",
      type: "collapsible",
      open: true,
      items: [
        {
          id: "inputs",
          label: "Inputs",
          type: "section",
          open: true,
          items: [
            {
              id: "button",
            },
            {
              id: "icon-button",
            },
            {
              id: "text-input",
            },
            {
              id: "textarea",
            },
            {
              id: "select",
            },
            {
              id: "checkbox",
            },
            {
              id: "switch",
            },
            {
              id: "radio",
            },
            {
              id: "slider",
            },
          ],
        },
        {
          id: "data-display",
          label: "Data display",
          type: "section",
          open: true,
          items: [
            {
              id: "avatar",
            },
            {
              id: "accordion",
            },
            {
              id: "message",
            },
            {
              id: "tab",
            },
            {
              id: "spinner",
            },
            {
              id: "kbd",
            },
            {
              id: "tag",
            },
          ],
        },
        {
          id: "overlay",
          label: "Overlay",
          type: "section",
          open: true,
          items: [
            {
              id: "dialog",
            },
            {
              id: "menu",
            },
            {
              id: "tooltip",
            },
          ],
        },
        {
          id: "navigation",
          label: "Navigation",
          type: "section",
          open: true,
          items: [
            {
              id: "breadcrumbs",
            },
          ],
        },
      ],
    },
  ],
};

export default sidebar;
