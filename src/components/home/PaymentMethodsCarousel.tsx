"use client";

import React from "react";
import {
  ShieldCheck,
  Lock,
  Globe2,
  CheckCircle2,
  CreditCard,
} from "lucide-react";

// =========================================================================
// PURELY GLOBAL & INTERNATIONAL PAYMENT GATEWAY SVG ICONS
// =========================================================================

// 1. Visa (Global Credit / Debit)
const VisaIcon: React.FC<{ className?: string }> = ({ className = "w-10 h-6" }) => (
  <svg className={className} viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="32" rx="6" fill="#1434CB" />
    <path
      d="M19.5 21H16.8L18.5 11H21.2L19.5 21ZM15.2 11L12.6 17.8L12.3 16.3C11.8 14.6 10.3 12.8 8.6 11.9L11 21H13.8L18 11H15.2ZM31.5 17.8C31.5 15.2 27.9 15 27.9 13.8C27.9 13.3 28.4 12.8 29.5 12.6C30 12.5 31.4 12.4 32.9 13.1L33.4 11C32.7 10.7 31.8 10.5 30.6 10.5C27.5 10.5 25.3 12.1 25.3 14.5C25.3 18.2 30.5 18 30.5 20.3C30.5 21 29.8 21.5 28.6 21.5C26.9 21.5 25.2 20.8 24.5 20.4L23.9 22.6C24.7 23 26.6 23.4 28.5 23.4C31.8 23.4 34.1 21.8 34.1 19.3L31.5 17.8ZM25.2 11H23.1C22.4 11 21.9 11.2 21.6 11.9L17.5 21H20.4L21 19.3H24.5L24.8 21H27.4L25.2 11ZM21.7 17.3C22 16.4 23 13.7 23 13.7C23 13.7 23.3 12.9 23.5 12.4L24.1 15.3H22.3L21.7 17.3Z"
      fill="white"
    />
  </svg>
);

// 2. Mastercard (Worldwide)
const MastercardIcon: React.FC<{ className?: string }> = ({ className = "w-10 h-6" }) => (
  <svg className={className} viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="32" rx="6" fill="#1A1F2C" />
    <circle cx="19" cy="16" r="9" fill="#EB001B" />
    <circle cx="29" cy="16" r="9" fill="#F79E1B" fillOpacity="0.92" />
    <path
      d="M24 9.5C25.8 11.2 27 13.5 27 16C27 18.5 25.8 20.8 24 22.5C22.2 20.8 21 18.5 21 16C21 13.5 22.2 11.2 24 9.5Z"
      fill="#FF5F00"
    />
  </svg>
);

// 3. Apple Pay (Global 1-Touch)
const ApplePayIcon: React.FC<{ className?: string }> = ({ className = "w-10 h-6" }) => (
  <svg className={className} viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="32" rx="6" fill="#000000" />
    <path
      d="M17.8 15.5C17.8 13.7 19.3 12.7 19.4 12.6C18.5 11.4 17.2 11.2 16.7 11.2C15.6 11 14.5 11.8 13.9 11.8C13.3 11.8 12.4 11.1 11.5 11.1C10.3 11.1 9.2 11.8 8.6 12.8C7.3 15.1 8.3 18.4 9.5 20.2C10.1 21.1 10.8 22 11.8 22C12.7 21.9 13.1 21.4 14.2 21.4C15.3 21.4 15.6 21.9 16.6 21.9C17.6 21.9 18.2 21.1 18.8 20.2C19.5 19.2 19.8 18.2 19.8 18.1C19.7 18.1 17.8 17.4 17.8 15.5ZM16.1 9.7C16.6 9.1 16.9 8.2 16.8 7.3C16 7.3 15.1 7.8 14.6 8.4C14.1 9 13.7 9.9 13.8 10.8C14.7 10.9 15.6 10.3 16.1 9.7Z"
      fill="white"
    />
    <path
      d="M22.5 11.5H25.8C27.5 11.5 28.7 12.6 28.7 14.2C28.7 15.8 27.5 16.9 25.8 16.9H23.9V21.8H22.5V11.5ZM23.9 15.7H25.6C26.7 15.7 27.3 15.1 27.3 14.2C27.3 13.3 26.7 12.7 25.6 12.7H23.9V15.7ZM30.4 18.8C30.4 17.2 31.6 16.3 33.6 16.2L35.2 16.1V15.5C35.2 14.6 34.6 14.1 33.5 14.1C32.6 14.1 31.9 14.5 31.7 15.1H30.4C30.7 13.8 31.8 12.9 33.6 12.9C35.5 12.9 36.6 13.9 36.6 15.6V21.8H35.2V20.4H35.1C34.6 21.4 33.5 22 32.3 22C31.1 22 30.4 21 30.4 18.8ZM35.2 18V17.2L33.8 17.3C32.6 17.4 31.9 17.9 31.9 18.8C31.9 19.6 32.5 20.1 33.4 20.1C34.4 20.1 35.2 19.2 35.2 18ZM38.4 13.1H39.8L41.9 18.8L44 13.1H45.4L42.6 20.4L41.8 22.5C41.4 23.6 40.7 24.1 39.6 24.1C39.2 24.1 38.8 24 38.6 23.9V22.7C38.8 22.8 39.1 22.9 39.4 22.9C40.1 22.9 40.5 22.5 40.7 21.8L41 21.1L38.4 13.1Z"
      fill="white"
    />
  </svg>
);

// 4. Google Pay (Google Wallet)
const GooglePayIcon: React.FC<{ className?: string }> = ({ className = "w-10 h-6" }) => (
  <svg className={className} viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="32" rx="6" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
    <path
      d="M17.5 16.2C17.5 15.7 17.4 15.2 17.3 14.8H12V17.1H15.1C15 17.9 14.5 18.6 13.8 19.1V20.7H15.8C16.9 19.6 17.5 18.1 17.5 16.2Z"
      fill="#4285F4"
    />
    <path
      d="M12 21.8C13.6 21.8 14.9 21.3 15.8 20.4L13.8 18.8C13.3 19.2 12.7 19.4 12 19.4C10.5 19.4 9.1 18.4 8.7 17H6.6V18.6C7.6 20.5 9.6 21.8 12 21.8Z"
      fill="#34A853"
    />
    <path
      d="M8.7 17C8.5 16.4 8.5 15.8 8.7 15.2V13.6H6.6C5.9 15 5.9 17.2 6.6 18.6L8.7 17Z"
      fill="#FBBC05"
    />
    <path
      d="M12 13C12.8 13 13.6 13.3 14.2 13.9L15.9 12.2C14.8 11.2 13.4 10.6 12 10.6C9.6 10.6 7.6 11.9 6.6 13.8L8.7 15.4C9.1 14 10.5 13 12 13Z"
      fill="#EA4335"
    />
    <path
      d="M23.1 11.5H26.4C28.1 11.5 29.3 12.6 29.3 14.2C29.3 15.8 28.1 16.9 26.4 16.9H24.5V21.8H23.1V11.5ZM24.5 15.7H26.2C27.3 15.7 27.9 15.1 27.9 14.2C27.9 13.3 27.3 12.7 26.2 12.7H24.5V15.7ZM31 18.8C31 17.2 32.2 16.3 34.2 16.2L35.8 16.1V15.5C35.8 14.6 34.1 14.1 34.1 14.1C33.2 14.1 32.5 14.5 32.3 15.1H31C31.3 13.8 32.4 12.9 34.2 12.9C36.1 12.9 37.2 13.9 37.2 15.6V21.8H35.8V20.4H35.7C35.2 21.4 34.1 22 32.9 22C31.7 22 31 21 31 18.8ZM35.8 18V17.2L34.4 17.3C33.2 17.4 32.5 17.9 32.5 18.8C32.5 19.6 33.1 20.1 34 20.1C35 20.1 35.8 19.2 35.8 18ZM39 13.1H40.4L42.5 18.8L44.6 13.1H46L43.2 20.4L42.4 22.5C42 23.6 41.3 24.1 40.2 24.1C39.8 24.1 39.4 24 39.2 23.9V22.7C39.4 22.8 39.7 22.9 40 22.9C40.7 22.9 41.1 22.5 41.3 21.8L41.6 21.1L39 13.1Z"
      fill="#5F6368"
    />
  </svg>
);

// 5. PayPal (Worldwide Buyer Protection)
const PayPalIcon: React.FC<{ className?: string }> = ({ className = "w-10 h-6" }) => (
  <svg className={className} viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="32" rx="6" fill="#003087" />
    <path
      d="M17.5 8H23C25.5 8 27.5 9 27.5 11.5C27.5 13.8 25.8 15.2 23.5 15.2H20.2L18.8 24H15L17.5 8Z"
      fill="#0079C1"
    />
    <path
      d="M21.5 12H27C29.5 12 31.5 13 31.5 15.5C31.5 17.8 29.8 19.2 27.5 19.2H24.2L22.8 28H19L21.5 12Z"
      fill="#00457C"
      fillOpacity="0.75"
    />
    <path
      d="M22 12.5H27C29.2 12.5 31 13.4 31 15.5C31 17.5 29.5 18.8 27.5 18.8H24.5L23.2 27H19.8L22 12.5Z"
      fill="#0079C1"
    />
  </svg>
);

// 6. American Express (AMEX)
const AmexIcon: React.FC<{ className?: string }> = ({ className = "w-10 h-6" }) => (
  <svg className={className} viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="32" rx="6" fill="#016FD0" />
    <path
      d="M9 19.5L13.5 12.5H17.5L22 19.5H19L18 17.8H13L12 19.5H9ZM14 16H17L15.5 13.5L14 16ZM23 12.5H27L29.5 16.5L32 12.5H36V19.5H33.5V15.5L31 19.5H28L25.5 15.5V19.5H23V12.5ZM37.5 12.5H43V14.5H39.5V15.2H42.5V16.8H39.5V17.5H43V19.5H37.5V12.5Z"
      fill="white"
    />
  </svg>
);

// 7. Stripe Verified
const StripeIcon: React.FC<{ className?: string }> = ({ className = "w-10 h-6" }) => (
  <svg className={className} viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="32" rx="6" fill="#635BFF" />
    <path
      d="M20.5 15.2C20.5 14.3 21.2 13.8 22.3 13.8C23.6 13.8 25.2 14.2 26.2 14.8V11.8C25 11.3 23.6 11.1 22.1 11.1C18.8 11.1 16.5 12.8 16.5 15.6C16.5 19.8 22.2 19.2 22.2 21.1C22.2 22.2 21.3 22.6 20.1 22.6C18.6 22.6 16.8 21.9 15.6 21.2V24.3C17 25 18.7 25.3 20.3 25.3C23.8 25.3 26.2 23.6 26.2 20.7C26.2 16.2 20.5 16.9 20.5 15.2ZM28 11.5H31.8V25H28V11.5Z"
      fill="white"
    />
  </svg>
);

// 8. Klarna (Global Pay Later & Split in 4)
const KlarnaIcon: React.FC<{ className?: string }> = ({ className = "w-10 h-6" }) => (
  <svg className={className} viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="32" rx="6" fill="#FFB3C7" />
    <path
      d="M13 10H16V22H13V10ZM24.5 10H21.2L17.5 16.2V10H14.5V22H17.5V17.5L21.5 22H25L20.2 16.8L24.5 10ZM29 14C27.3 14 26 15.3 26 17C26 18.7 27.3 20 29 20C30.7 20 32 18.7 32 17C32 15.3 30.7 14 29 14ZM35 21.5C34.2 21.5 33.5 22.2 33.5 23C33.5 23.8 34.2 24.5 35 24.5C35.8 24.5 36.5 23.8 36.5 23C36.5 22.2 35.8 21.5 35 21.5Z"
      fill="#0A0A0A"
    />
  </svg>
);

// 9. Discover Network
const DiscoverIcon: React.FC<{ className?: string }> = ({ className = "w-10 h-6" }) => (
  <svg className={className} viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="32" rx="6" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
    <rect x="8" y="11" width="32" height="10" rx="2" fill="#1C2D42" />
    <circle cx="26" cy="16" r="4.2" fill="#FF6000" />
    <path d="M12 14H15C16.5 14 17.5 14.8 17.5 16C17.5 17.2 16.5 18 15 18H12V14ZM13.5 15.2V16.8H14.8C15.5 16.8 16 16.5 16 16C16 15.5 15.5 15.2 14.8 15.2H13.5ZM19 14H20.5V18H19V14ZM33 14H34.5L36.5 18H35L34.5 17H32.5L32 18H30.5L33 14ZM34 15.8L33 14.5L33 15.8H34Z" fill="white" />
  </svg>
);

// 10. JCB International
const JCBIcon: React.FC<{ className?: string }> = ({ className = "w-10 h-6" }) => (
  <svg className={className} viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="32" rx="6" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
    <rect x="11" y="9" width="8" height="14" rx="3" fill="#0079C1" />
    <rect x="20" y="9" width="8" height="14" rx="3" fill="#E60012" />
    <rect x="29" y="9" width="8" height="14" rx="3" fill="#008837" />
    <path d="M13 18.5V13H15.5V17H14.5V18.5H13ZM22 13H26V14.5H23.5V15.5H25.5V17H23.5V18.5H22V13ZM31 13H33.5C35 13 36 14 36 15.5C36 17 35 18.5 33.5 18.5H31V13ZM32.5 14.5V17H33.5C34.2 17 34.5 16.5 34.5 15.8C34.5 15 34.2 14.5 33.5 14.5H32.5Z" fill="white" />
  </svg>
);

// 11. UnionPay International
const UnionPayIcon: React.FC<{ className?: string }> = ({ className = "w-10 h-6" }) => (
  <svg className={className} viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="32" rx="6" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
    <path d="M14 9H20L17 23H11L14 9Z" fill="#D32F2F" />
    <path d="M21 9H27L24 23H18L21 9Z" fill="#0079C1" />
    <path d="M28 9H34L31 23H25L28 9Z" fill="#008837" />
    <path d="M14.5 14H17.5M21.5 14H24.5M28.5 14H31.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// 12. Revolut Pay (Borderless Global Digital Bank)
const RevolutIcon: React.FC<{ className?: string }> = ({ className = "w-10 h-6" }) => (
  <svg className={className} viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="32" rx="6" fill="#000000" />
    <path
      d="M17 9H24.5C27.5 9 29.5 10.8 29.5 13.5C29.5 15.5 28.2 17 26.3 17.6L30.5 23H26.2L22.5 18H20.2V23H17V9ZM20.2 15.5H24.2C25.5 15.5 26.4 14.7 26.4 13.5C26.4 12.3 25.5 11.5 24.2 11.5H20.2V15.5Z"
      fill="white"
    />
  </svg>
);

// 13. SEPA (Single Euro Payments Area / Direct Debit)
const SepaIcon: React.FC<{ className?: string }> = ({ className = "w-10 h-6" }) => (
  <svg className={className} viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="32" rx="6" fill="#003399" />
    <circle cx="16" cy="16" r="6" stroke="#FFCC00" strokeWidth="1.2" strokeDasharray="2 2" fill="none" />
    <path
      d="M24 12H30C31.5 12 32.5 12.8 32.5 14C32.5 15.2 31.5 16 30 16H26V18H32.5V20H24V12ZM26 14V14.5H29.5C30 14.5 30.5 14.3 30.5 14C30.5 13.7 30 13.5 29.5 13.5H26V14Z"
      fill="white"
    />
  </svg>
);

// 14. Global SWIFT / International Wire Transfer
const SwiftWireIcon: React.FC<{ className?: string }> = ({ className = "w-10 h-6" }) => (
  <svg className={className} viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="32" rx="6" fill="#0F2A55" />
    <path d="M24 8L12 13V15H36V13L24 8Z" fill="#F4DC8C" />
    <path d="M15 17V23M21 17V23M27 17V23M33 17V23" stroke="#F4DC8C" strokeWidth="2" strokeLinecap="round" />
    <rect x="11" y="24" width="26" height="3" rx="1" fill="#F4DC8C" />
  </svg>
);

// =========================================================================
// GLOBAL PAYMENT METHODS DIRECTORY
// =========================================================================
interface GlobalPaymentMethodItem {
  id: string;
  name: string;
  subName: string;
  tag: string;
  tagColor: string;
  icon: React.FC<{ className?: string }>;
  accentGlow: string;
}

const GLOBAL_PAYMENT_METHODS: GlobalPaymentMethodItem[] = [
  {
    id: "visa",
    name: "Visa",
    subName: "Global Debit & Credit",
    tag: "Instant · 0% Fee",
    tagColor: "text-blue-800 bg-blue-100/90 border-blue-200",
    icon: VisaIcon,
    accentGlow: "from-blue-500/15 via-transparent to-transparent",
  },
  {
    id: "mastercard",
    name: "Mastercard",
    subName: "Worldwide Network",
    tag: "3D Secure 2.0",
    tagColor: "text-amber-800 bg-amber-100/90 border-amber-200",
    icon: MastercardIcon,
    accentGlow: "from-amber-500/15 via-transparent to-transparent",
  },
  {
    id: "apple-pay",
    name: "Apple Pay",
    subName: "1-Touch Checkout",
    tag: "Face / Touch ID",
    tagColor: "text-gray-900 bg-gray-100 border-gray-300",
    icon: ApplePayIcon,
    accentGlow: "from-gray-500/15 via-transparent to-transparent",
  },
  {
    id: "google-pay",
    name: "Google Pay",
    subName: "Google Wallet",
    tag: "Instant Pay",
    tagColor: "text-emerald-800 bg-emerald-100/90 border-emerald-200",
    icon: GooglePayIcon,
    accentGlow: "from-emerald-500/15 via-transparent to-transparent",
  },
  {
    id: "paypal",
    name: "PayPal",
    subName: "Global Protection",
    tag: "Buyer Guaranteed",
    tagColor: "text-sky-800 bg-sky-100/90 border-sky-200",
    icon: PayPalIcon,
    accentGlow: "from-sky-500/15 via-transparent to-transparent",
  },
  {
    id: "amex",
    name: "American Express",
    subName: "Global AMEX",
    tag: "Premium Cards",
    tagColor: "text-cyan-900 bg-cyan-100 border-cyan-300",
    icon: AmexIcon,
    accentGlow: "from-cyan-500/15 via-transparent to-transparent",
  },
  {
    id: "stripe",
    name: "Stripe Verified",
    subName: "PCI DSS Level 1",
    tag: "256-Bit Encrypted",
    tagColor: "text-indigo-900 bg-indigo-100 border-indigo-300",
    icon: StripeIcon,
    accentGlow: "from-indigo-500/15 via-transparent to-transparent",
  },
  {
    id: "klarna",
    name: "Klarna",
    subName: "Pay in 4 / Pay Later",
    tag: "0% Interest",
    tagColor: "text-pink-900 bg-pink-100 border-pink-300",
    icon: KlarnaIcon,
    accentGlow: "from-pink-400/20 via-transparent to-transparent",
  },
  {
    id: "revolut",
    name: "Revolut Pay",
    subName: "Global Digital Bank",
    tag: "Instant Transfer",
    tagColor: "text-gray-900 bg-gray-200 border-gray-300",
    icon: RevolutIcon,
    accentGlow: "from-gray-600/15 via-transparent to-transparent",
  },
  {
    id: "discover",
    name: "Discover",
    subName: "International Network",
    tag: "Worldwide Cards",
    tagColor: "text-orange-900 bg-orange-100 border-orange-300",
    icon: DiscoverIcon,
    accentGlow: "from-orange-500/15 via-transparent to-transparent",
  },
  {
    id: "jcb",
    name: "JCB Global",
    subName: "International Scheme",
    tag: "Asia & Worldwide",
    tagColor: "text-blue-900 bg-blue-100 border-blue-300",
    icon: JCBIcon,
    accentGlow: "from-blue-600/15 via-transparent to-transparent",
  },
  {
    id: "unionpay",
    name: "UnionPay",
    subName: "Global Card Scheme",
    tag: "International",
    tagColor: "text-red-900 bg-red-100 border-red-300",
    icon: UnionPayIcon,
    accentGlow: "from-red-500/15 via-transparent to-transparent",
  },
  {
    id: "sepa",
    name: "SEPA Direct",
    subName: "Euro Interbank",
    tag: "Direct Debit",
    tagColor: "text-blue-950 bg-blue-200/90 border-blue-300",
    icon: SepaIcon,
    accentGlow: "from-blue-700/15 via-transparent to-transparent",
  },
  {
    id: "swift-wire",
    name: "SWIFT Wire",
    subName: "Global Bank Transfer",
    tag: "All Currencies",
    tagColor: "text-emerald bg-emerald-tint border-emerald/30 font-bold",
    icon: SwiftWireIcon,
    accentGlow: "from-emerald/15 via-transparent to-transparent",
  },
];

// Duplicate list for infinite loop continuity
const MARQUEE_ITEMS = [...GLOBAL_PAYMENT_METHODS, ...GLOBAL_PAYMENT_METHODS];

export const PaymentMethodsCarousel: React.FC = () => {
  return (
    <div className="w-full pt-8 sm:pt-10 space-y-6 sm:space-y-7">
      
      {/* HEADER: TITLE & GLOBAL SECURITY BADGES */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 px-2 sm:px-4">
        <div className="space-y-1.5 text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-tint border border-emerald/25 text-emerald text-[11px] font-bold uppercase tracking-wider">
            <Globe2 className="w-3.5 h-3.5 text-emerald" />
            <span>Worldwide Acceptance</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-black text-navy-primary tracking-tight leading-tight">
            <span>Global & Secure </span>
            <span className="bg-gradient-to-r from-emerald-royal via-emerald to-[#0A372F] bg-clip-text text-transparent font-black">
              Payment Gateways
            </span>
          </h3>
          <p className="text-xs sm:text-sm text-graphite/75 font-semibold">
            Accepting all major international cards, digital wallets, and multi-currency bank transfers worldwide.
          </p>
        </div>

        {/* TRUST PILLS */}
        <div className="flex items-center justify-center md:justify-end gap-3 flex-wrap text-xs font-bold text-graphite/80">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-emerald/20 shadow-2xs">
            <ShieldCheck className="w-4 h-4 text-emerald" />
            <span>PCI DSS Level 1 Certified</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-emerald/20 shadow-2xs">
            <Lock className="w-4 h-4 text-emerald" />
            <span>256-Bit Bank-Grade Encryption</span>
          </div>
        </div>
      </div>

      {/* CONTINUOUS SMOOTH MARQUEE CAROUSEL CONTAINER */}
      <div className="relative w-full overflow-hidden py-3">
        {/* INFINITE SCROLLING ROW */}
        <div className="animate-marquee-infinite flex items-center gap-4 sm:gap-5 cursor-grab active:cursor-grabbing">
          {MARQUEE_ITEMS.map((method, index) => {
            const Icon = method.icon;
            return (
              <div
                key={`${method.id}-${index}`}
                className="relative flex items-center gap-3.5 px-4 py-3.5 sm:px-5 sm:py-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-emerald/20 shadow-[0_4px_16px_rgba(14,73,62,0.04),inset_0_1.5px_2px_rgba(255,255,255,1)] hover:border-emerald/50 hover:shadow-[0_10px_25px_rgba(14,73,62,0.12),inset_0_1.5px_2px_rgba(255,255,255,1)] hover:-translate-y-1 transition-all duration-300 group shrink-0 select-none min-w-[215px] sm:min-w-[235px]"
              >
                {/* Ambient Glow */}
                <div
                  className={`absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br ${method.accentGlow} rounded-full blur-xl pointer-events-none group-hover:scale-150 transition-transform`}
                />

                {/* Logo Box */}
                <div className="shrink-0 group-hover:scale-105 transition-transform duration-300 drop-shadow-sm">
                  <Icon className="w-11 h-7 sm:w-12 sm:h-8" />
                </div>

                {/* Name & Tag */}
                <div className="min-w-0 flex-1 space-y-0.5">
                  <div className="flex items-center justify-between gap-1.5">
                    <h4 className="font-serif text-sm sm:text-[15px] font-black text-navy-primary truncate leading-tight">
                      {method.name}
                    </h4>
                  </div>
                  {method.subName && (
                    <p className="text-[10.5px] font-medium text-graphite/70 truncate">
                      {method.subName}
                    </p>
                  )}
                  <span
                    className={`inline-block text-[9.5px] font-extrabold px-1.5 py-0.2 rounded-md border mt-0.5 ${method.tagColor}`}
                  >
                    {method.tag}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
