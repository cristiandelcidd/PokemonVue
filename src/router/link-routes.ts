export interface RouterLink {
  name: string;
  path: string;
  title: string;
}

export const linkRoutes: RouterLink[] = [
  { name: "home", path: "/", title: "Home" },
  { name: "about", path: "/about", title: "About" },
  { name: "characters", path: "/characters", title: "Characters" },
];
