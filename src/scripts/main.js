import '../styles/tailwind.css';
// import { handlePrivacyPolicyNoticeDismissal } from './privacy-policy.js';
import { handleCodeCopying } from './copy.js';
import handleDarkMode from './dark-mode.js';
import handleWebmentions from './webmentions.js';

if (DEV_MODE) console.log('Dev mode is currently enabled.');

// handlePrivacyPolicyNoticeDismissal();
handleCodeCopying();
handleDarkMode();
handleWebmentions()


