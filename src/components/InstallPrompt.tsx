
import { detectBrowser } from '../utils/detectBrowser';
import { useEffect, useState } from 'react';

// Holds event for Chrome PWA install
let deferredPrompt: any = null;

const InstallPrompt = () => {
  const [showInstall, setShowInstall] = useState(false);
  const [browser, setBrowser] = useState('');

  useEffect(() => {
    setBrowser(detectBrowser());

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPrompt = e;
      setShowInstall(true);
    });
  }, []);

  function handleInstallClick() {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.finally(() => (deferredPrompt = null));
    }
  }

  // Fallback logic for all other browsers
  function renderGuide() {
    if (browser === "Safari") return <div>Share icon → "Add to Home Screen"</div>;
    if (browser === "Firefox") return <div>Menu → "Add to Home Screen"</div>;
    if (browser === "Edge" || browser === "Other") return <div>Browser menu → "Install App"</div>;
    if (browser === "InAppBrowser") return <div>Open in Chrome/Safari for install</div>;
    return <div>Install/Download option is not supported in this environment</div>;
  }

  return (
    <div>
      {showInstall ? (
        <button className="btn-primary" onClick={handleInstallClick}>
          Install App
        </button>
      ) : (
        <div className="modal-guide">{renderGuide()}</div>
      )}
    </div>
  );
};

export default InstallPrompt;
