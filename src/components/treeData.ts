// All node objects must have a unique value.
// This value is serialized into the checked and expanded arrays(props that are passed to tree creater) and
// is  also used for performance optimizations.
// other than value it have label and children.

const nodes = [
  {
    value: "app",
    label: "app",
    index: 0,

    children: [
      {
        value: "Http",
        label: "Http",
        children: [
          {
            value: "Controllers",
            label: "Controllers",
            children: [
              {
                value: "WelcomeController.js",
                label: "WelcomeController.js",
              },
            ],
          },
          {
            value: "routes.js",
            label: "routes.js",
          },
        ],
      },
      {
        value: "Providers",
        label: "Providers",
        children: [
          {
            value: "EventServiceProvider.js",
            label: "EventServiceProvider.js",
          },
          {
            value: "mobile",
            label: "mobile",
          },
          {
            value: "bottle",
            label: "bottle",
            children: [
              {
                value: "milton",
                label: "milton",
              },
              { value: "cello", label: "cello" },
              {
                value: "sharp1",
                label: "sharp",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    value: "config",
    label: "config",
    index: 1,
    children: [
      {
        value: "app.js",
        label: "app.js",
      },
      {
        value: "database.js",
        label: "database.js",
      },
      {
        value: "Rohit",
        label: "Rohit",
      },
    ],
  },
  {
    value: "public",
    label: "public",
    index: 2,
    children: [
      {
        value: "assets",
        label: "assets",
        children: [
          {
            value: "style.css",
            label: "style.css",
          },
        ],
      },
      {
        value: "index.html",
        label: "index.html",
      },
      {
        value: "mouse",
        label: "mouse",
      },
      {
        value: "monitor",
        label: "monitor",
        children: [
          {
            value: "compony",
            label: "compony",
            children: [
              {
                value: "hp",
                label: "hp",
              },
              {
                value: "dell",
                label: "dell",
                children: [
                  {
                    value: "optimal",
                    label: "optimal",
                  },
                  {
                    value: "sharp2",
                    label: "sharp",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    value: ".env",
    label: ".env",
    index: 3,
  },
  {
    value: ".gitignore",
    label: ".gitignore",
    index: 4,
  },
  {
    value: "README.md",
    label: "README.md",
    index: 5,
  },
];
export default nodes;
