import {
  Icon,
  Layout,
  Page,
  TextContainer,
} from "@shopify/polaris";

import {
  ToolsMajor
} from '@shopify/polaris-icons';

import { TitleBar } from "@shopify/app-bridge-react";

export default function HomePage() {


  return (
    <Page>
      <TitleBar
        title="Cookies Banner"
        primaryAction={{
          content: "Click",
          onAction: () => {alert('Why are You clicked me?')}, 
        }}
      />

      <Layout>
        <Layout.Section>
          <TextContainer>
            <div style={{ display: 'flex', gap: 10 }}>
              <p>
                Cookies Banner Front App is under development
              </p>
              <span>
                <Icon
                  source={ToolsMajor}
                  color="base"
                />
              </span>
            </div>
          </TextContainer>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
