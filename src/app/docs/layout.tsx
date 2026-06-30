import { source } from '@/lib/source';
import { baseOptions } from '@/lib/layout.shared';
import { DocsLayout } from "@/layouts/notebook";

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout tree={source.getPageTree()} {...baseOptions()}>
      {children}
    </DocsLayout>
  );
}
