import { Block, CodeBlock, parseProps } from "codehike/blocks";
import { Pre, RawCode, highlight } from "codehike/code";
import { z } from "zod";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { THEME } from "@/lib/constants";
import { CodeIcon } from "../annotations/icons";

const Schema = Block.extend({ tabs: z.array(CodeBlock) });
export async function CodeWithTabs(props: unknown) {
  const { tabs } = parseProps(props, Schema);
  return <CodeTabs tabs={tabs} />;
}

export async function CodeTabs(props: { tabs: RawCode[] }) {
  const { tabs } = props;
  const highlighted = await Promise.all(
    tabs.map((tab) => highlight(tab, THEME.dark))
  );

  return (
    <Tabs
      defaultValue={tabs[0]?.meta}
      className="border border-editor-border rounded-md overflow-hidden"
    >
      <TabsList className="bg-editor-header-background w-full justify-start rounded-b-none border-b !border-editor-border !p-0">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.meta}
            value={tab.meta}
            className="bg-editor-header-background rounded-none h-full"
          >
            <div className="text-tab-active text-sm flex items-center gap-3">
              <CodeIcon title={tab.meta} />
              <span>{tab.meta}</span>
            </div>
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab, i) => (
        <TabsContent key={tab.meta} value={tab.meta} className="m-0">
          <Pre
            code={highlighted[i]}
            className="!rounded-t-none !my-0 py-2 !-mt-1 rounded-none group flex-1 selection:bg-editor-selection-background"
          />
        </TabsContent>
      ))}
    </Tabs>
  );
}
