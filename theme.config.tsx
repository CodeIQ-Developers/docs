import React from 'react';
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';
import { IconFolder, IconFile} from '@tabler/icons-react';

function useHead() {
  const { asPath } = useRouter();
  const { frontMatter, title } = useConfig();
  const iconico = "https://docs.codeiq.xyz/static/cq-icon.png";

  const url = `https://docs.codeiq.xyz/${asPath}`;
  const description = frontMatter.description || "Documentation for CodeIQ resources";

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/x-icon" href={iconico} />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <link rel="icon" href={iconico} id="__link-icon"></link>
      <link rel="apple-touch-icon" href={iconico}></link>
      <link rel="preload" as="image" href={iconico}></link>
      <meta property="og:image" content="https://docs.codeiq.xyz/static/cq-icon.png" />
      <meta property="og:image:alt" content="CodeIQ" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="256" />
      <meta property="og:image:height" content="256"></meta>
    </>
  );
}

function useNextSeoProps() {
  const { asPath } = useRouter();
  const arr = asPath.replace(/[-_]/g, ' ').split('/');
  const category = (arr[1][0] !== '#' && arr[1]) || 'CodeIQ';
  const rawTitle = arr[arr.length - 1];
  const title = /[a-z]/.test(rawTitle) && /[A-Z]/.test(rawTitle) ? rawTitle : '%s';

  return {
    titleTemplate: `${title} - ${
      rawTitle === category ? 'Documentation' : category.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())
    }`,
  };
}

const config: DocsThemeConfig = {
  logo: (
    <div
      style={{
        paddingLeft: '50px',
        lineHeight: '38px',
        background: "url('https://docs.codeiq.xyz/static/cq-icon.png') no-repeat left",
        backgroundSize: '38px',
        fontWeight: 550,
      }}
    >
      CodeIQ
    </div>
  ),
  chat: {
    link: 'https://discord.gg/hcrFXRFmkX',
  },
  footer: {
    text: 'CodeIQ',
  },
  head: useHead,
  primaryHue: { dark: 190, light: 200 },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    titleComponent({ title, type, route }) {
      const folderRoutes = new Set([
          '/cq-loadingscreen',
          '/cq-pausemenu',
          '/cq-pausemenu/injections',
      ]);

      const isFolder = folderRoutes.has(route);
      const icon = isFolder ? <IconFolder /> : <IconFile />;
      return(
      <>
         <div className='nx-items-center nx-justify-between nx-gap-2 nx-flex nx-rounded  nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer'>{icon} {title}</div>

      </>
      )
    }
  },

  useNextSeoProps: useNextSeoProps,
  feedback : { content: null },
  editLink: { text: null },
};

export default config;
