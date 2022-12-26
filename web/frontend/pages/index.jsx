import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Heading,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";

import { trophyImage } from "../assets";

import { ProductsCard } from "../components";

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
