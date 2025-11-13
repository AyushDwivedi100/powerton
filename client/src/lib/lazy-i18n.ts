import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const useLazyNamespace = (namespaces: string | string[]) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const nsArray = Array.isArray(namespaces) ? namespaces : [namespaces];
    
    nsArray.forEach((ns) => {
      if (!i18n.hasLoadedNamespace(ns)) {
        i18n.loadNamespaces(ns);
      }
    });
  }, [i18n, namespaces]);
};
