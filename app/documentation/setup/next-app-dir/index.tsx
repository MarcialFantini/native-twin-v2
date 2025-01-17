import { Code } from '@/feactures/documentation/components/Code';
import { SubTitle } from '@/feactures/documentation/components/SubTitle';
import { Text } from '@/feactures/documentation/components/Text';
import { Title } from '@/feactures/documentation/components/Title';

const NextAppDir = () => {
  return (
    <div className='flex flex-col gap-10'>
      <Title>Setting up native-twin (next-app)</Title>

      <SubTitle>1. Installing Dependencies</SubTitle>
      <Text>Choose npm or Yarn:</Text>
      <Code
        codeString={`# Using npm
npm install @native-twin/core @native-twin/jsx @native-twin/nextjs @native-twin/preset-tailwind @native-twin/styled tailwindcss @tailwindcss/forms

# Using Yarn
yarn add @native-twin/core @native-twin/jsx @native-twin/nextjs @native-twin/preset-tailwind @native-twin/styled tailwindcss @tailwindcss/forms`}
      />

      <SubTitle>2. Configuring Tailwind CSS (tailwind.config.js)</SubTitle>
      <Code
        codeString={`import { defineConfig } from '@native-twin/core';
import { presetTailwind } from '@native-twin/preset-tailwind';

export default defineConfig({
  root: {
    rem: 14,
  },
  mode: 'web',
  presets: [presetTailwind()],
  theme: {
    extend: {
      colors: {
        primary: 'blue',
      },
      fontFamily: {
        DEFAULT: 'Inter-Regular',
        inter: 'Inter-Regular',
        'inter-bold': 'Inter-Bold',
        'inter-medium': 'Inter-Medium',
        sans: 'Inter-Regular',
      },
    },
  },
});`}
      />

      <SubTitle>3. Modify tsconfig.json</SubTitle>
      <Code
        codeString={`{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "jsxImportSource": "@native-twin/jsx",
    "incremental": true,
    "plugins": [{"name": "next"}]
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}`}
      />

      <SubTitle>4. Create a NativeTwin component (app/_lib/NativeTwin.tsx)</SubTitle>
      <Code
        codeString={`'use client';

import { ReactNode, useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { install, TailwindUserConfig } from '@native-twin/core';
import { sheetEntriesToCss, SheetEntry } from '@native-twin/css';
import { NativeTwinSheet } from '@native-twin/nextjs/app';
import tailwindConfig from '../../tailwind.config';

const NativeTwin = ({ children }: { children: ReactNode }) => {
  const [twin] = useState(() => {
    let config = tailwindConfig as TailwindUserConfig;
    if (tailwindConfig.mode !== 'web') {
      config = Object.assign({ mode: 'web' }, tailwindConfig) as TailwindUserConfig;
    }
    return install(config, !__DEV__);
  });

  useServerInsertedHTML(() => (
    <dangerouslySetInnerHTML={{
      __html: sheetEntriesToCss(twin.target as SheetEntry[]),
    }} />
  ));

  return <>{children}</>;
};

export default NativeTwin;

export const TwinComponent = NativeTwinSheet(tailwindConfig);`}
      />

      <SubTitle>5. Wrap Your Root Layout (app/layout.tsx)</SubTitle>
      <Code
        codeString={`import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { TwinComponent } from './_lib/NativeTwin';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <NativeTwin>
      {children}
    </NativeTwin>
  );
}

export { metadata };`}
      />

      <SubTitle>6. Using native-twin</SubTitle>
      <Code
        codeString={`'use client';

import { cx } from '@native-twin/core';
import { Text, View } from 'react-native';

const IndexPage = () => {
  return (
    <View style={tw\`bg-blue-500 p-4\`}>
      <Text style={tw\`text-white font-bold\`}>
        Hello, this is styled with native-twin!
      </Text>
    </View>
  );
};

export default IndexPage;`}
      />

      <Text>Key Points:</Text>
      <ul>
        <li>The provided source code mentions react-native as a dependency.</li>
        <li>Make sure to restart your development server after making changes.</li>
        <li>
          Refer to the official documentation of native-twin for more detailed information
          and advanced usage.
        </li>
      </ul>
    </div>
  );
};

export default NextAppDir;
