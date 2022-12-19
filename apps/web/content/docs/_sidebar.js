/** @type {import('@/types').DocsSidebarConfig} */
const sidebar = {
  items: [
    {
      id: "introduction",
    },
    {
      id: "getting-started",
      label: "Getting started",
      type: "collapsible",
      open: true,
      items: [
        {
          id: "overview",
        },
        {
          id: "installation",
        },
        {
          id: "headless-integration",
          label: "Headless UI",
        },
        {
          id: "form",
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
              id: "toggle",
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
              id: "tabs",
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
