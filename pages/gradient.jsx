import Head from "next/head";

import Code from "/components/Code";
import Flex from "/components/Flex";
import Gradient from "/components/Gradient";
import Preview from "/components/Preview";

import { gradientJsx, gradientScss } from "/lib/code";

const GradientPage = () => {
  const gradientHtmlTabs = [
    {
      code: gradientJsx,
      name: "JSX",
      language: "jsx",
    },
  ];

  const gradientScssTabs = [
    {
      code: gradientScss,
      language: "scss",
      name: "SCSS",
    },
  ];

  return (
    <>
      <Head>
        <title>Gradient</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <article>
        <Preview>
          <Flex gap="2em">
            <Gradient>Gradient</Gradient>
          </Flex>
        </Preview>
        <Code code={gradientHtmlTabs} label="HTML" language="html" />
        <Code code={gradientScssTabs} label="SCSS" language="scss" />
      </article>
    </>
  );
};

export default GradientPage;
