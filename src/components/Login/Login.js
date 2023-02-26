import styles from "./Login.module.css";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { ChainId } from "@biconomy/core-types";

function Login({ className }) {
  const [socialLogin, setSocialLogin] = useState(null);
  const [provider, setProvider] = useState(null);
  const [smartAccount, setSmartAccount] = useState(null);

  /**
   * loginStatus= ["loading", "logginIn", "loggedIn", "loggedOut", "logginOut"]
   */
  const [loginStatus, setLoginStatus] = useState("loading");

  async function initialize() {
    const SocialLogin = (await import("@biconomy/web3-auth")).default;
    const socialLogin = new SocialLogin();
    await socialLogin.init();
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
      socialLogin.provider
    );
    setProvider(ethersProvider);
  }

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
    <div className={className} onClick={handleLogin}>
      {loginStatus === "loading" && "Loading..."}
      {loginStatus === "logginIn" && "Logging In..."}
      {loginStatus === "logginOut" && "Logging Out..."}
      {loginStatus === "loggedIn" && smartAccount?.address}
      {loginStatus === "loggedOut" && "Login"}
    </div>
  );
}

export default Login;
