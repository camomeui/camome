import {
  SandpackCodeEditor,
  SandpackCodeViewer,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
} from "@codesandbox/sandpack-react";
import { githubLight } from "@codesandbox/sandpack-themes";
import React from "react";

import styles from "./styles.module.scss";

export type CodeBlockProps = {
  children: string;
  live?: boolean;
  direction?: "horizontal" | "vertical";
  previewHeight?: number;
  editorHeight?: number;
};

export default function CodeBlock({
  children,
  live,
  direction = "horizontal",
  previewHeight = 160,
  editorHeight = 300,
}: CodeBlockProps) {
  const code = children.replace(/\n$/, "");

  if (live) {
    return (
      <SandpackProvider
        theme={{
          ...githubLight,
        }}
        template="react-ts"
        options={{
          classes: {
            "sp-layout": styles["sp-layout"],
          },
          // https://github.com/codesandbox/sandpack/discussions/416
          bundlerURL: "https://sandpack-bundler.pages.dev",
        }}
        files={{
          "/styles.css": {
            code: StylesCss(direction === "horizontal" ? "row" : "column"),
            hidden: true,
          },
          "/App.tsx": { code: Container, hidden: true },
          "/Preview.tsx": {
            code,
            active: true,
          },
        }}
        customSetup={{
          dependencies: {
            "@camome/components": "^0.1.12",
            "@camome/system": "^0.1.5",
            "@headlessui/react": "^1.7.4",
            "@floating-ui/react": "^0.14.0",
            "@heroicons/react": "^2.0.10",
            "react-hook-form": "^7.40.0",
            clsx: "^1.2.1",
          },
        }}
      >
        <SandpackLayout>
          <SandpackPreview style={{ height: previewHeight, flex: "unset" }} />
          <SandpackCodeEditor style={{ height: editorHeight }} />
        </SandpackLayout>
      </SandpackProvider>
    );
  }

  return (
    <SandpackProvider
      options={{
        classes: {
          "sp-stack": styles["sp-code-editor"],
        },
      }}
    >
      <SandpackCodeViewer code={code} />
    </SandpackProvider>
  );
}

const StylesCss = (flexDirection: string) => `
html {
  height: 100%;
}

body {
  height: 100%;
}

#root {
  padding: 1rem;
  width: fit-content;
  min-height: 100%;
  display: flex;
  flex-direction: ${flexDirection};
  gap: 1rem;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
}
`;

const Container = `
import "@camome/system/dist/style.min.css";          
import "@camome/components/dist/style.css";
import Preview from "./Preview.tsx";

export default function App() {
  return <Preview />
}
` as const;
