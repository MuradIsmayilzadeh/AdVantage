import PackageInfo from "./PackageInfo";
import samplePackages from "../../lib/sample-packages";

// Pre-renders the built-in packages for the static GitHub Pages build.
// In server mode, other ids are still rendered on demand.
export function generateStaticParams() {
  return samplePackages.map((p) => ({ id: String(p.id) }));
}

export default function Page({ params }) {
  return <PackageInfo id={params.id} />;
}
