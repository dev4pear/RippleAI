import { ConnectButton } from "@rainbow-me/rainbowkit";

const ConnectWallet = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");

        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    className="flex justify-center items-center w-full h-10 mt-[13.66px] text-16 text-black font-bold rounded-[9px] bg-[#1CF2AA] relative z-[3]"
                    onClick={openConnectModal}
                  >
                    CONNECT WALLET
                  </button>
                );
              }

              if (chain.unsupported) {
                return (
                  <button
                    className="flex justify-center items-center w-full h-10 mt-[13.66px] text-16 text-black font-bold rounded-[9px] bg-[#1CF2AA] relative z-[3]"
                    onClick={openChainModal}
                    type="button"
                  >
                    WRONG NETWORK
                  </button>
                );
              }

              return (
                <button className="flex justify-center items-center w-full h-10 mt-[13.66px] text-16 text-black font-bold rounded-[9px] bg-[#1CF2AA] relative z-[3]" onClick={openAccountModal}>
                  {account.displayName}
                </button>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default ConnectWallet;
