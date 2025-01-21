import Head from "next/head";

import Code from "/components/Code";
import Flex from "/components/Flex";
import Jumping from "/components/Jumping";
import Preview from "/components/Preview";

import { jumpingJsx, jumpingScss } from "/lib/code";

const JumpingPage = () => {
  const jumpingHtmlTabs = [
    {
      code: jumpingJsx,
      name: "JSX",
      language: "jsx",
    },
  ];

  const jumpingScssTabs = [
    {
      code: jumpingScss,
      language: "scss",
      name: "SCSS",
    },
  ];

  return (
    <>
      <Head>
        <title>Jumping</title>
      </Head>
      <article>
        <Preview>
          <Flex gap="2em">
            <Jumping>Jumping</Jumping>
          </Flex>
        </Preview>
        <Code code={jumpingHtmlTabs} label="HTML" language="html" />
        <Code code={jumpingScssTabs} label="SCSS" language="scss" />
      </article>
    </>
  );
};

export default JumpingPage;
