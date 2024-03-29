import type { ReactNode } from "react";

export type RouterConfig = {
  path: string;
  name: string;
  icon?: ReactNode;
  summary?: string;
  children?: Record<string, RouterConfig>;
};

export function createRouter<T>(router: T): T {
  if (
    !(router instanceof Object) ||
    !("path" in router) ||
    !("name" in router)
  ) {
    throw new Error("Invalid router object");
  }

  return router;
}
export function checkDuplicatePaths(routerConfig: RouterConfig) {
  const pathSet = new Set();
  const duplicates: any = [];
  const traverseChildren = (router: RouterConfig) => {
    if (router.children) {
      const basePath = router.path;
      Object.values(router.children).forEach((childRouter) => {
        const fullPath = `${basePath}${childRouter.path}`;
        if (pathSet.has(fullPath)) {
          duplicates.push(fullPath);
        } else {
          pathSet.add(fullPath);
        }
        traverseChildren(childRouter);
      });
    }
  };
  traverseChildren(routerConfig);

  if (duplicates.length > 0) {
    throw new Error(`Duplicate paths found: ${duplicates[0]}`);
  }

  return routerConfig;
}
