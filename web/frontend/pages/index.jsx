import {
  Page,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";

export default function HomePage() {
  return (
    <Page>
      <TitleBar
        title="Cookies Banner"
        primaryAction={{
          content: "Click",
          onAction: () => {alert('Clicked')}, 
        }}
      />
    </Page>
  );
}
