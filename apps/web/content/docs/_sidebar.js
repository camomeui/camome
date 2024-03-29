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
          id: "integrations:next",
        },
        {
          id: "integrations:astro",
        },
        {
          id: "integrations:vite",
        },
        {
          id: "integrations:cdn",
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
          type: "collapsible",
          open: true,
          sort: "asc",
          items: [
            {
              id: "button",
            },
            {
              id: "icon-button",
            },
            {
              id: "input",
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
          type: "collapsible",
          open: true,
          sort: "asc",
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
          type: "collapsible",
          open: true,
          sort: "asc",
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
          type: "collapsible",
          open: true,
          sort: "asc",
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
