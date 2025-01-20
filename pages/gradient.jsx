import Head from "next/head";

import Code from "/components/Code";
import Flex from "/components/Flex";
import Gradient from "/components/Gradient";
import Preview from "/components/Preview";

import { gradientJsx, gradientScss } from "/pages/code";

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
