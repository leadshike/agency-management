'use client';

import { RecoilRoot, useRecoilBridgeAcrossReactRoots_UNSTABLE } from 'recoil';

export default function RecoilProvider({ children }) {
  return (
    <RecoilRoot>
      <Bridge>{children}</Bridge>
    </RecoilRoot>
  );
}

function Bridge({ children }) {
  const RecoilBridge = useRecoilBridgeAcrossReactRoots_UNSTABLE();

  return <RecoilBridge>{children}</RecoilBridge>;
}
