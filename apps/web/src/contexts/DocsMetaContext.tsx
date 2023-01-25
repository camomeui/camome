import React from "react";

export type DocsMetaContextValue = {
  docs: {
    id: string;
    slug: string;
    title: string;
    locale: string;
    label: string | null;
  }[];
};

export const DocsMetaContext = React.createContext<DocsMetaContextValue>({
  docs: [],
});

export function useDocsMeta() {
  return React.useContext(DocsMetaContext);
}
