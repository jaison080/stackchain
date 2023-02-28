import React, { createContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import { ChainId } from "@biconomy/core-types";

export const UserContext = createContext();

function UserDetails(props) {
  const [socialLogin, setSocialLogin] = useState(null);
  const [provider, setProvider] = useState(null);
  const [smartAccount, setSmartAccount] = useState(null);
  const [dwitter, setDwitter] = useState(null);
  /**
   * loginStatus= ["loading", "logginIn", "loggedIn", "loggedOut", "logginOut"]
   */
  const [loginStatus, setLoginStatus] = useState("loading");
  const contract = require("../contracts/Dwitter.json");
  async function initialize() {
    const SocialLogin = (await import("@biconomy/web3-auth")).default;
    const socialLogin = new SocialLogin();
    const signature = await socialLogin.whitelistUrl(
      "https://stackchain-kappa.vercel.app"
    );
    await socialLogin.init({
      chainId: ethers.utils.hexValue(5),
      whitelistUrls: {
        "https://stackchain-kappa.vercel.app": signature,
      },
    });
    setSocialLogin(socialLogin);
  }
  function handleLogin() {
    if (!socialLogin) return;
    if (smartAccount) {
      setLoginStatus("logginOut");
      setSmartAccount(null);
      setProvider(null);
      socialLogin.logout();
      setLoginStatus("loggedOut");
    } else {
      socialLogin.showWallet();
    }
  }
  async function initProvider() {
    if (!socialLogin) return;
    if (!socialLogin.provider) {
      if (socialLogin.isInit) {
        setLoginStatus("loggedOut");
        return;
      }
      return;
    }
    setLoginStatus("logginIn");
    const ethersProvider = new ethers.providers.Web3Provider(
      socialLogin.provider, 5
    );
   
    
    // await ethersProvider.send('wallet_addEthereumChain', [
    //   {
    //     chainId: '0x5',
    //     chainName: 'Goerli',
    //     rpcUrls: ['https://goerli.infura.io/v3/YOUR-PROJECT-ID'],
    //     nativeCurrency: {
    //       name: 'Goerli Ether',
    //       symbol: 'GoETH',
    //       decimals: 18,
    //     },
    //     blockExplorerUrls: ['https://goerli.etherscan.io'],
    //   },
    // ]);

    // console.log('Switched to Goerli network');
    setProvider(ethersProvider);
   
  }


  useEffect(() => {
    if(provider){
      const Dwitter = new ethers.Contract("0x3B235C8E287498c4053A0BEdC4D76D0c2175c933", contract.abi, provider.getSigner());
      setDwitter(Dwitter);
    }
  }, [provider]);
  async function initSmartAccount() {
    if (!provider) return;
    setLoginStatus("logginIn");
    let options = {
      activeNetworkId: ChainId.POLYGON_MUMBAI,
      supportedNetworksIds: [ChainId.POLYGON_MUMBAI],
      networkConfig: [
        {
          chainId: ChainId.POLYGON_MUMBAI,
          // Dapp API Key you will get from new Biconomy dashboard that will be live soon
          // Meanwhile you can use the test dapp api key mentioned above
          dappAPIKey: "59fRCMXvk.8a1652f0-b522-4ea7-b296-98628499aee3",
          providerUrl: "",
        },
      ],
    };
    const SmartAccount = (await import("@biconomy/smart-account")).default;
    let smartAccount = new SmartAccount(provider, options);
    smartAccount = await smartAccount.init();
    setSmartAccount(smartAccount);
    setLoginStatus("loggedIn");
  }
  useEffect(() => {
    initialize();
  }, []);
  useEffect(() => {
    initProvider();
  }, [socialLogin]);
  useEffect(() => {
    initSmartAccount();
  }, [provider]);

  useEffect(() => {
    if (!smartAccount) return;

    console.log("Smart Account", smartAccount.address);
  }, [smartAccount]);

  useEffect(() => {
    const interval = setInterval(async () => {
      console.log("Interval Called");
      if (!socialLogin) return;
      if (!socialLogin.provider) return;
      if (socialLogin.provider && !provider) {
        initProvider();
        socialLogin.hideWallet();
      }
      console.log("provider", provider);
      if (!smartAccount) {
        initSmartAccount();
      }
      console.log("Clearing Interval");
      clearInterval(interval);
    }, 500);
    return () => {
      console.log("Clearing Interval");
      clearInterval(interval);
    };
  }, [provider, socialLogin]);
  return (
    <UserContext.Provider
      value={{
        socialLogin,
        provider,
        smartAccount,
        loginStatus,
        handleLogin,
        dwitter
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export default UserDetails;
