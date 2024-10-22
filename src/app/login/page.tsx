'use client';

import GithubLoginButton from '@/components/common/github-login-button';
import { VStack } from '@/styled-system/jsx';

export default function Home() {
  return (
    <VStack>
      <GithubLoginButton />
    </VStack>
  );
}
