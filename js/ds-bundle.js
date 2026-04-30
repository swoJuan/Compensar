/* ============================================================
   DS-BUNDLE.JS — Design System Compensar · Build único
   Combina tokens.js + app.js + loader.js sin ES modules
   Funciona con file:// y http:// sin necesidad de servidor
   ============================================================ */
(function () {
  'use strict';

  /* ══════════════════════════════════════════════════════════
     TOKENS DATA
     ══════════════════════════════════════════════════════════ */
  /* ============================================================
     TOKEN DATA — Compensar MP
     Generated from Figma token exports. Do not edit by hand.
     ============================================================ */

  var TOKENS = {
    "base/brand/40": {
      "css": "--base-brand-40",
      "sass": "$base-brand-40",
      "type": "color",
      "modes": {
        "light": "#ffe6d6",
        "dark": "#ffe6d6",
        "highContrast": "#ffe6d6"
      }
    },
    "base/brand/50": {
      "css": "--base-brand-50",
      "sass": "$base-brand-50",
      "type": "color",
      "modes": {
        "light": "#ffc299",
        "dark": "#ffc299",
        "highContrast": "#ffc299"
      }
    },
    "base/brand/60": {
      "css": "--base-brand-60",
      "sass": "$base-brand-60",
      "type": "color",
      "modes": {
        "light": "#ffa366",
        "dark": "#ffa366",
        "highContrast": "#ffa366"
      }
    },
    "base/brand/70": {
      "css": "--base-brand-70",
      "sass": "$base-brand-70",
      "type": "color",
      "modes": {
        "light": "#ff8533",
        "dark": "#ff8533",
        "highContrast": "#ff8533"
      }
    },
    "base/brand/80": {
      "css": "--base-brand-80",
      "sass": "$base-brand-80",
      "type": "color",
      "modes": {
        "light": "#ff6600",
        "dark": "#ff9d5c",
        "highContrast": "#ffff00"
      }
    },
    "base/brand/90": {
      "css": "--base-brand-90",
      "sass": "$base-brand-90",
      "type": "color",
      "modes": {
        "light": "#e63f0c",
        "dark": "#e65c00",
        "highContrast": "#e65c00"
      }
    },
    "base/brand/100": {
      "css": "--base-brand-100",
      "sass": "$base-brand-100",
      "type": "color",
      "modes": {
        "light": "#cc5200",
        "dark": "#cc5200",
        "highContrast": "#cc5200"
      }
    },
    "base/brand/yellow": {
      "css": "--base-brand-yellow",
      "sass": "$base-brand-yellow",
      "type": "color",
      "modes": {
        "light": "#ff980d",
        "dark": "#ffe6d6",
        "highContrast": "#ffe6d6"
      }
    },
    "base/blue/30": {
      "css": "--base-blue-30",
      "sass": "$base-blue-30",
      "type": "color",
      "modes": {
        "light": "#e6f1fb",
        "dark": "#edf2fa",
        "highContrast": "#edf2fa"
      }
    },
    "base/blue/40": {
      "css": "--base-blue-40",
      "sass": "$base-blue-40",
      "type": "color",
      "modes": {
        "light": "#d4e2fa",
        "dark": "#d4e2fa",
        "highContrast": "#d4e2fa"
      }
    },
    "base/blue/50": {
      "css": "--base-blue-50",
      "sass": "$base-blue-50",
      "type": "color",
      "modes": {
        "light": "#9fbef5",
        "dark": "#9fbef5",
        "highContrast": "#9fbef5"
      }
    },
    "base/blue/60": {
      "css": "--base-blue-60",
      "sass": "$base-blue-60",
      "type": "color",
      "modes": {
        "light": "#5c91f2",
        "dark": "#5c91f2",
        "highContrast": "#5c91f2"
      }
    },
    "base/blue/70": {
      "css": "--base-blue-70",
      "sass": "$base-blue-70",
      "type": "color",
      "modes": {
        "light": "#296ff0",
        "dark": "#296ff0",
        "highContrast": "#296ff0"
      }
    },
    "base/blue/80": {
      "css": "--base-blue-80",
      "sass": "$base-blue-80",
      "type": "color",
      "modes": {
        "light": "#1f53b5",
        "dark": "#1f53b5",
        "highContrast": "#1f53b5"
      }
    },
    "base/blue/90": {
      "css": "--base-blue-90",
      "sass": "$base-blue-90",
      "type": "color",
      "modes": {
        "light": "#18428f",
        "dark": "#18428f",
        "highContrast": "#18428f"
      }
    },
    "base/blue/100": {
      "css": "--base-blue-100",
      "sass": "$base-blue-100",
      "type": "color",
      "modes": {
        "light": "#2d4a67",
        "dark": "#102c5e",
        "highContrast": "#102c5e"
      }
    },
    "base/cyan blue/10": {
      "css": "--base-cyan-blue-10",
      "sass": "$base-cyan-blue-10",
      "type": "color",
      "modes": {
        "light": "#eef5fc",
        "dark": "#eef5fc",
        "highContrast": "#eef5fc"
      }
    },
    "base/cyan blue/20": {
      "css": "--base-cyan-blue-20",
      "sass": "$base-cyan-blue-20",
      "type": "color",
      "modes": {
        "light": "#d6e6f7",
        "dark": "#d6e6f7",
        "highContrast": "#d6e6f7"
      }
    },
    "base/cyan blue/30": {
      "css": "--base-cyan-blue-30",
      "sass": "$base-cyan-blue-30",
      "type": "color",
      "modes": {
        "light": "#b2d0ee",
        "dark": "#b2d0ee",
        "highContrast": "#b2d0ee"
      }
    },
    "base/cyan blue/40": {
      "css": "--base-cyan-blue-40",
      "sass": "$base-cyan-blue-40",
      "type": "color",
      "modes": {
        "light": "#8cb8e0",
        "dark": "#8cb8e0",
        "highContrast": "#8cb8e0"
      }
    },
    "base/cyan blue/50": {
      "css": "--base-cyan-blue-50",
      "sass": "$base-cyan-blue-50",
      "type": "color",
      "modes": {
        "light": "#6c9fd0",
        "dark": "#6c9fd0",
        "highContrast": "#6c9fd0"
      }
    },
    "base/cyan blue/60": {
      "css": "--base-cyan-blue-60",
      "sass": "$base-cyan-blue-60",
      "type": "color",
      "modes": {
        "light": "#5286bc",
        "dark": "#5286bc",
        "highContrast": "#5286bc"
      }
    },
    "base/cyan blue/70": {
      "css": "--base-cyan-blue-70",
      "sass": "$base-cyan-blue-70",
      "type": "color",
      "modes": {
        "light": "#4a74a5",
        "dark": "#4a74a5",
        "highContrast": "#4a74a5"
      }
    },
    "base/cyan blue/80": {
      "css": "--base-cyan-blue-80",
      "sass": "$base-cyan-blue-80",
      "type": "color",
      "modes": {
        "light": "#3c628c",
        "dark": "#3c628c",
        "highContrast": "#3c628c"
      }
    },
    "base/cyan blue/90": {
      "css": "--base-cyan-blue-90",
      "sass": "$base-cyan-blue-90",
      "type": "color",
      "modes": {
        "light": "#2d4f73",
        "dark": "#2d4f73",
        "highContrast": "#2d4f73"
      }
    },
    "base/cyan blue/100": {
      "css": "--base-cyan-blue-100",
      "sass": "$base-cyan-blue-100",
      "type": "color",
      "modes": {
        "light": "#1f3d5a",
        "dark": "#1f3d5a",
        "highContrast": "#1f3d5a"
      }
    },
    "base/green-1/30": {
      "css": "--base-green-1-30",
      "sass": "$base-green-1-30",
      "type": "color",
      "modes": {
        "light": "#f7faf8",
        "dark": "#f7faf8",
        "highContrast": "#f7faf8"
      }
    },
    "base/green-1/40": {
      "css": "--base-green-1-40",
      "sass": "$base-green-1-40",
      "type": "color",
      "modes": {
        "light": "#e6f7e8",
        "dark": "#e6f7e8",
        "highContrast": "#cef0db"
      }
    },
    "base/green-1/50": {
      "css": "--base-green-1-50",
      "sass": "$base-green-1-50",
      "type": "color",
      "modes": {
        "light": "#9fe0b8",
        "dark": "#9fe0b8",
        "highContrast": "#9fe0b8"
      }
    },
    "base/green-1/60": {
      "css": "--base-green-1-60",
      "sass": "$base-green-1-60",
      "type": "color",
      "modes": {
        "light": "#44bd75",
        "dark": "#44bd75",
        "highContrast": "#44bd75"
      }
    },
    "base/green-1/70": {
      "css": "--base-green-1-70",
      "sass": "$base-green-1-70",
      "type": "color",
      "modes": {
        "light": "#22a152",
        "dark": "#22a152",
        "highContrast": "#22a152"
      }
    },
    "base/green-1/80": {
      "css": "--base-green-1-80",
      "sass": "$base-green-1-80",
      "type": "color",
      "modes": {
        "light": "#0b853d",
        "dark": "#0b853d",
        "highContrast": "#0b853d"
      }
    },
    "base/green-1/90": {
      "css": "--base-green-1-90",
      "sass": "$base-green-1-90",
      "type": "color",
      "modes": {
        "light": "#166936",
        "dark": "#166936",
        "highContrast": "#166936"
      }
    },
    "base/green-1/100": {
      "css": "--base-green-1-100",
      "sass": "$base-green-1-100",
      "type": "color",
      "modes": {
        "light": "#0d3d1f",
        "dark": "#0d3d1f",
        "highContrast": "#0d3d1f"
      }
    },
    "base/green-2/10": {
      "css": "--base-green-2-10",
      "sass": "$base-green-2-10",
      "type": "color",
      "modes": {
        "light": "#ecf7c9",
        "dark": "#ecf7c9",
        "highContrast": "#ecf7c9"
      }
    },
    "base/green-2/20": {
      "css": "--base-green-2-20",
      "sass": "$base-green-2-20",
      "type": "color",
      "modes": {
        "light": "#d8ee9c",
        "dark": "#d8ee9c",
        "highContrast": "#d8ee9c"
      }
    },
    "base/green-2/30": {
      "css": "--base-green-2-30",
      "sass": "$base-green-2-30",
      "type": "color",
      "modes": {
        "light": "#c5e270",
        "dark": "#c5e270",
        "highContrast": "#c5e270"
      }
    },
    "base/green-2/40": {
      "css": "--base-green-2-40",
      "sass": "$base-green-2-40",
      "type": "color",
      "modes": {
        "light": "#b1d645",
        "dark": "#b1d645",
        "highContrast": "#b1d645"
      }
    },
    "base/green-2/50": {
      "css": "--base-green-2-50",
      "sass": "$base-green-2-50",
      "type": "color",
      "modes": {
        "light": "#9dc71e",
        "dark": "#9dc71e",
        "highContrast": "#9dc71e"
      }
    },
    "base/green-2/60": {
      "css": "--base-green-2-60",
      "sass": "$base-green-2-60",
      "type": "color",
      "modes": {
        "light": "#95bf1b",
        "dark": "#95bf1b",
        "highContrast": "#95bf1b"
      }
    },
    "base/green-2/70": {
      "css": "--base-green-2-70",
      "sass": "$base-green-2-70",
      "type": "color",
      "modes": {
        "light": "#84ad16",
        "dark": "#84ad16",
        "highContrast": "#84ad16"
      }
    },
    "base/green-2/80": {
      "css": "--base-green-2-80",
      "sass": "$base-green-2-80",
      "type": "color",
      "modes": {
        "light": "#6a8e11",
        "dark": "#6a8e11",
        "highContrast": "#6a8e11"
      }
    },
    "base/green-2/90": {
      "css": "--base-green-2-90",
      "sass": "$base-green-2-90",
      "type": "color",
      "modes": {
        "light": "#516d0d",
        "dark": "#516d0d",
        "highContrast": "#516d0d"
      }
    },
    "base/green-2/100": {
      "css": "--base-green-2-100",
      "sass": "$base-green-2-100",
      "type": "color",
      "modes": {
        "light": "#3f540a",
        "dark": "#3f540a",
        "highContrast": "#3f540a"
      }
    },
    "base/neutral/10": {
      "css": "--base-neutral-10",
      "sass": "$base-neutral-10",
      "type": "color",
      "modes": {
        "light": "#f5f5f5",
        "dark": "#f5f5f5",
        "highContrast": "#f5f5f5"
      }
    },
    "base/neutral/20": {
      "css": "--base-neutral-20",
      "sass": "$base-neutral-20",
      "type": "color",
      "modes": {
        "light": "#e0e0e0",
        "dark": "#e0e0e0",
        "highContrast": "#e0e0e0"
      }
    },
    "base/neutral/30": {
      "css": "--base-neutral-30",
      "sass": "$base-neutral-30",
      "type": "color",
      "modes": {
        "light": "#cccccc",
        "dark": "#cccccc",
        "highContrast": "#cccccc"
      }
    },
    "base/neutral/40": {
      "css": "--base-neutral-40",
      "sass": "$base-neutral-40",
      "type": "color",
      "modes": {
        "light": "#b8b8b8",
        "dark": "#b8b8b8",
        "highContrast": "#b8b8b8"
      }
    },
    "base/neutral/50": {
      "css": "--base-neutral-50",
      "sass": "$base-neutral-50",
      "type": "color",
      "modes": {
        "light": "#a4a4a4",
        "dark": "#a4a4a4",
        "highContrast": "#a4a4a4"
      }
    },
    "base/neutral/60": {
      "css": "--base-neutral-60",
      "sass": "$base-neutral-60",
      "type": "color",
      "modes": {
        "light": "#7f7f7f",
        "dark": "#7f7f7f",
        "highContrast": "#7f7f7f"
      }
    },
    "base/neutral/70": {
      "css": "--base-neutral-70",
      "sass": "$base-neutral-70",
      "type": "color",
      "modes": {
        "light": "#666666",
        "dark": "#666666",
        "highContrast": "#666666"
      }
    },
    "base/neutral/80": {
      "css": "--base-neutral-80",
      "sass": "$base-neutral-80",
      "type": "color",
      "modes": {
        "light": "#333333",
        "dark": "#333333",
        "highContrast": "#333333"
      }
    },
    "base/neutral/90": {
      "css": "--base-neutral-90",
      "sass": "$base-neutral-90",
      "type": "color",
      "modes": {
        "light": "#292929",
        "dark": "#292929",
        "highContrast": "#292929"
      }
    },
    "base/neutral/100 (Negro)": {
      "css": "--base-neutral-100-negro",
      "sass": "$base-neutral-100-negro",
      "type": "color",
      "modes": {
        "light": "#111111",
        "dark": "#111111",
        "highContrast": "#111111"
      }
    },
    "base/neutral/white": {
      "css": "--base-neutral-white",
      "sass": "$base-neutral-white",
      "type": "color",
      "modes": {
        "light": "#ffffff",
        "dark": "#ffffff",
        "highContrast": "#ffffff"
      }
    },
    "base/neutral/black": {
      "css": "--base-neutral-black",
      "sass": "$base-neutral-black",
      "type": "color",
      "modes": {
        "light": "#000000",
        "dark": "#000000",
        "highContrast": "#000000"
      }
    },
    "base/red/30": {
      "css": "--base-red-30",
      "sass": "$base-red-30",
      "type": "color",
      "modes": {
        "light": "#f7eeed",
        "dark": "#f7eeed",
        "highContrast": "#f7eeed"
      }
    },
    "base/red/40": {
      "css": "--base-red-40",
      "sass": "$base-red-40",
      "type": "color",
      "modes": {
        "light": "#f2d8d5",
        "dark": "#f2d8d5",
        "highContrast": "#f2d8d5"
      }
    },
    "base/red/50": {
      "css": "--base-red-50",
      "sass": "$base-red-50",
      "type": "color",
      "modes": {
        "light": "#ebada7",
        "dark": "#ebada7",
        "highContrast": "#ebada7"
      }
    },
    "base/red/60": {
      "css": "--base-red-60",
      "sass": "$base-red-60",
      "type": "color",
      "modes": {
        "light": "#db7165",
        "dark": "#db7165",
        "highContrast": "#db7165"
      }
    },
    "base/red/70": {
      "css": "--base-red-70",
      "sass": "$base-red-70",
      "type": "color",
      "modes": {
        "light": "#d14434",
        "dark": "#d14434",
        "highContrast": "#d14434"
      }
    },
    "base/red/75": {
      "css": "--base-red-75",
      "sass": "$base-red-75",
      "type": "color",
      "modes": {
        "light": "#bb4945",
        "dark": "#bb4945",
        "highContrast": "#bb4945"
      }
    },
    "base/red/80": {
      "css": "--base-red-80",
      "sass": "$base-red-80",
      "type": "color",
      "modes": {
        "light": "#9e3328",
        "dark": "#9e3328",
        "highContrast": "#9e3328"
      }
    },
    "base/red/90": {
      "css": "--base-red-90",
      "sass": "$base-red-90",
      "type": "color",
      "modes": {
        "light": "#7d291f",
        "dark": "#7d291f",
        "highContrast": "#7d291f"
      }
    },
    "base/red/100": {
      "css": "--base-red-100",
      "sass": "$base-red-100",
      "type": "color",
      "modes": {
        "light": "#521a14",
        "dark": "#521a14",
        "highContrast": "#521a14"
      }
    },
    "base/orange/10": {
      "css": "--base-orange-10",
      "sass": "$base-orange-10",
      "type": "color",
      "modes": {
        "light": "#fff2e3",
        "dark": "#fff2e3",
        "highContrast": "#fff2e3"
      }
    },
    "base/orange/20": {
      "css": "--base-orange-20",
      "sass": "$base-orange-20",
      "type": "color",
      "modes": {
        "light": "#ffe5cc",
        "dark": "#ffe5cc",
        "highContrast": "#ffe5cc"
      }
    },
    "base/orange/40": {
      "css": "--base-orange-40",
      "sass": "$base-orange-40",
      "type": "color",
      "modes": {
        "light": "#ffb380",
        "dark": "#ffb380",
        "highContrast": "#ffb380"
      }
    },
    "base/orange/60": {
      "css": "--base-orange-60",
      "sass": "$base-orange-60",
      "type": "color",
      "modes": {
        "light": "#cc7a33",
        "dark": "#cc7a33",
        "highContrast": "#cc7a33"
      }
    },
    "base/orange/100": {
      "css": "--base-orange-100",
      "sass": "$base-orange-100",
      "type": "color",
      "modes": {
        "light": "#6b4400",
        "dark": "#cc7a33",
        "highContrast": "#cc7a33"
      }
    },
    "base/yellow/30": {
      "css": "--base-yellow-30",
      "sass": "$base-yellow-30",
      "type": "color",
      "modes": {
        "light": "#fff9ef",
        "dark": "#fff9ef",
        "highContrast": "#fff9ef"
      }
    },
    "base/yellow/40": {
      "css": "--base-yellow-40",
      "sass": "$base-yellow-40",
      "type": "color",
      "modes": {
        "light": "#fff2d9",
        "dark": "#fff2d9",
        "highContrast": "#fff2d9"
      }
    },
    "base/yellow/50": {
      "css": "--base-yellow-50",
      "sass": "$base-yellow-50",
      "type": "color",
      "modes": {
        "light": "#fce1ac",
        "dark": "#fce1ac",
        "highContrast": "#fce1ac"
      }
    },
    "base/yellow/60": {
      "css": "--base-yellow-60",
      "sass": "$base-yellow-60",
      "type": "color",
      "modes": {
        "light": "#fcce72",
        "dark": "#fcce72",
        "highContrast": "#fcce72"
      }
    },
    "base/yellow/70": {
      "css": "--base-yellow-70",
      "sass": "$base-yellow-70",
      "type": "color",
      "modes": {
        "light": "#ffc154",
        "dark": "#fcbf44",
        "highContrast": "#fcbf44"
      }
    },
    "base/yellow/80": {
      "css": "--base-yellow-80",
      "sass": "$base-yellow-80",
      "type": "color",
      "modes": {
        "light": "#bf9034",
        "dark": "#bf9034",
        "highContrast": "#bf9034"
      }
    },
    "base/yellow/90": {
      "css": "--base-yellow-90",
      "sass": "$base-yellow-90",
      "type": "color",
      "modes": {
        "light": "#967229",
        "dark": "#967229",
        "highContrast": "#967229"
      }
    },
    "base/yellow/100": {
      "css": "--base-yellow-100",
      "sass": "$base-yellow-100",
      "type": "color",
      "modes": {
        "light": "#634a1a",
        "dark": "#634a1a",
        "highContrast": "#634a1a"
      }
    },
    "product/medicina/Cyan": {
      "css": "--product-medicina-cyan",
      "sass": "$product-medicina-cyan",
      "type": "color",
      "modes": {
        "light": "#00e2db",
        "dark": "#00e2db",
        "highContrast": "#00e2db"
      }
    },
    "product/medicina/Purple": {
      "css": "--product-medicina-purple",
      "sass": "$product-medicina-purple",
      "type": "color",
      "modes": {
        "light": "#8268cb",
        "dark": "#8268cb",
        "highContrast": "#8268cb"
      }
    },
    "product/medicina/Gray": {
      "css": "--product-medicina-gray",
      "sass": "$product-medicina-gray",
      "type": "color",
      "modes": {
        "light": "#b3acab",
        "dark": "#b3acab",
        "highContrast": "#b3acab"
      }
    },
    "product/accent/30": {
      "css": "--product-accent-30",
      "sass": "$product-accent-30",
      "type": "color",
      "modes": {
        "light": "#f2fcff",
        "dark": "#f2fcff",
        "highContrast": "#f2fcff"
      }
    },
    "product/accent/40": {
      "css": "--product-accent-40",
      "sass": "$product-accent-40",
      "type": "color",
      "modes": {
        "light": "#e1f7fe",
        "dark": "#e1f7fe",
        "highContrast": "#e1f7fe"
      }
    },
    "product/accent/50": {
      "css": "--product-accent-50",
      "sass": "$product-accent-50",
      "type": "color",
      "modes": {
        "light": "#b3d7e0",
        "dark": "#b3d7e0",
        "highContrast": "#b3d7e0"
      }
    },
    "product/accent/60": {
      "css": "--product-accent-60",
      "sass": "$product-accent-60",
      "type": "color",
      "modes": {
        "light": "#8fc5d0",
        "dark": "#8fc5d0",
        "highContrast": "#8fc5d0"
      }
    },
    "product/accent/70": {
      "css": "--product-accent-70",
      "sass": "$product-accent-70",
      "type": "color",
      "modes": {
        "light": "#6bb4c0",
        "dark": "#6bb4c0",
        "highContrast": "#6bb4c0"
      }
    },
    "product/accent/80": {
      "css": "--product-accent-80",
      "sass": "$product-accent-80",
      "type": "color",
      "modes": {
        "light": "#47a4af",
        "dark": "#47a4af",
        "highContrast": "#47a4af"
      }
    },
    "product/accent/90": {
      "css": "--product-accent-90",
      "sass": "$product-accent-90",
      "type": "color",
      "modes": {
        "light": "#24939d",
        "dark": "#24939d",
        "highContrast": "#24939d"
      }
    },
    "product/accent/100": {
      "css": "--product-accent-100",
      "sass": "$product-accent-100",
      "type": "color",
      "modes": {
        "light": "#03838a",
        "dark": "#03838a",
        "highContrast": "#03838a"
      }
    },
    "product/gray/5": {
      "css": "--product-gray-5",
      "sass": "$product-gray-5",
      "type": "color",
      "modes": {
        "light": "#f8f7f7",
        "dark": "#f8f7f7",
        "highContrast": "#f8f7f7"
      }
    },
    "product/gray/10": {
      "css": "--product-gray-10",
      "sass": "$product-gray-10",
      "type": "color",
      "modes": {
        "light": "#eceaea",
        "dark": "#eceaea",
        "highContrast": "#eceaea"
      }
    },
    "product/gray/20": {
      "css": "--product-gray-20",
      "sass": "$product-gray-20",
      "type": "color",
      "modes": {
        "light": "#d9d5d5",
        "dark": "#d9d5d5",
        "highContrast": "#d9d5d5"
      }
    },
    "product/gray/30": {
      "css": "--product-gray-30",
      "sass": "$product-gray-30",
      "type": "color",
      "modes": {
        "light": "#c6c1c0",
        "dark": "#c6c1c0",
        "highContrast": "#c6c1c0"
      }
    },
    "product/gray/40": {
      "css": "--product-gray-40",
      "sass": "$product-gray-40",
      "type": "color",
      "modes": {
        "light": "#b3acab",
        "dark": "#b3acab",
        "highContrast": "#b3acab"
      }
    },
    "product/gray/50": {
      "css": "--product-gray-50",
      "sass": "$product-gray-50",
      "type": "color",
      "modes": {
        "light": "#a09796",
        "dark": "#a09796",
        "highContrast": "#a09796"
      }
    },
    "product/gray/60": {
      "css": "--product-gray-60",
      "sass": "$product-gray-60",
      "type": "color",
      "modes": {
        "light": "#8c8280",
        "dark": "#8c8280",
        "highContrast": "#8c8280"
      }
    },
    "product/gray/70": {
      "css": "--product-gray-70",
      "sass": "$product-gray-70",
      "type": "color",
      "modes": {
        "light": "#786e6c",
        "dark": "#786e6c",
        "highContrast": "#786e6c"
      }
    },
    "product/gray/80": {
      "css": "--product-gray-80",
      "sass": "$product-gray-80",
      "type": "color",
      "modes": {
        "light": "#635a59",
        "dark": "#635a59",
        "highContrast": "#635a59"
      }
    },
    "product/gray/90": {
      "css": "--product-gray-90",
      "sass": "$product-gray-90",
      "type": "color",
      "modes": {
        "light": "#4d4746",
        "dark": "#4d4746",
        "highContrast": "#4d4746"
      }
    },
    "product/gray/100": {
      "css": "--product-gray-100",
      "sass": "$product-gray-100",
      "type": "color",
      "modes": {
        "light": "#383333",
        "dark": "#383333",
        "highContrast": "#383333"
      }
    },
    "product/violet/5": {
      "css": "--product-violet-5",
      "sass": "$product-violet-5",
      "type": "color",
      "modes": {
        "light": "#efecf9",
        "dark": "#efecf9",
        "highContrast": "#efecf9"
      }
    },
    "product/violet/10": {
      "css": "--product-violet-10",
      "sass": "$product-violet-10",
      "type": "color",
      "modes": {
        "light": "#e0d9f3",
        "dark": "#e0d9f3",
        "highContrast": "#e0d9f3"
      }
    },
    "product/violet/20": {
      "css": "--product-violet-20",
      "sass": "$product-violet-20",
      "type": "color",
      "modes": {
        "light": "#c1b3e7",
        "dark": "#c1b3e7",
        "highContrast": "#c1b3e7"
      }
    },
    "product/violet/30": {
      "css": "--product-violet-30",
      "sass": "$product-violet-30",
      "type": "color",
      "modes": {
        "light": "#a28dda",
        "dark": "#a28dda",
        "highContrast": "#a28dda"
      }
    },
    "product/violet/40": {
      "css": "--product-violet-40",
      "sass": "$product-violet-40",
      "type": "color",
      "modes": {
        "light": "#8367ce",
        "dark": "#8367ce",
        "highContrast": "#8367ce"
      }
    },
    "product/violet/50": {
      "css": "--product-violet-50",
      "sass": "$product-violet-50",
      "type": "color",
      "modes": {
        "light": "#6d4cc5",
        "dark": "#6d4cc5",
        "highContrast": "#6d4cc5"
      }
    },
    "product/violet/60": {
      "css": "--product-violet-60",
      "sass": "$product-violet-60",
      "type": "color",
      "modes": {
        "light": "#5b3ab4",
        "dark": "#5b3ab4",
        "highContrast": "#5b3ab4"
      }
    },
    "product/violet/70": {
      "css": "--product-violet-70",
      "sass": "$product-violet-70",
      "type": "color",
      "modes": {
        "light": "#4e3199",
        "dark": "#4e3199",
        "highContrast": "#4e3199"
      }
    },
    "product/violet/80": {
      "css": "--product-violet-80",
      "sass": "$product-violet-80",
      "type": "color",
      "modes": {
        "light": "#40297e",
        "dark": "#40297e",
        "highContrast": "#40297e"
      }
    },
    "product/violet/90": {
      "css": "--product-violet-90",
      "sass": "$product-violet-90",
      "type": "color",
      "modes": {
        "light": "#322064",
        "dark": "#322064",
        "highContrast": "#322064"
      }
    },
    "product/violet/100": {
      "css": "--product-violet-100",
      "sass": "$product-violet-100",
      "type": "color",
      "modes": {
        "light": "#251749",
        "dark": "#251749",
        "highContrast": "#251749"
      }
    },
    "product/teal/5": {
      "css": "--product-teal-5",
      "sass": "$product-teal-5",
      "type": "color",
      "modes": {
        "light": "#ebfffe",
        "dark": "#ebfffe",
        "highContrast": "#ebfffe"
      }
    },
    "product/teal/10": {
      "css": "--product-teal-10",
      "sass": "$product-teal-10",
      "type": "color",
      "modes": {
        "light": "#d0fffd",
        "dark": "#d0fffd",
        "highContrast": "#d0fffd"
      }
    },
    "product/teal/20": {
      "css": "--product-teal-20",
      "sass": "$product-teal-20",
      "type": "color",
      "modes": {
        "light": "#a0fffc",
        "dark": "#a0fffc",
        "highContrast": "#a0fffc"
      }
    },
    "product/teal/30": {
      "css": "--product-teal-30",
      "sass": "$product-teal-30",
      "type": "color",
      "modes": {
        "light": "#71fffa",
        "dark": "#71fffa",
        "highContrast": "#71fffa"
      }
    },
    "product/teal/40": {
      "css": "--product-teal-40",
      "sass": "$product-teal-40",
      "type": "color",
      "modes": {
        "light": "#41fff8",
        "dark": "#41fff8",
        "highContrast": "#41fff8"
      }
    },
    "product/teal/50": {
      "css": "--product-teal-50",
      "sass": "$product-teal-50",
      "type": "color",
      "modes": {
        "light": "#12fff7",
        "dark": "#12fff7",
        "highContrast": "#12fff7"
      }
    },
    "product/teal/60": {
      "css": "--product-teal-60",
      "sass": "$product-teal-60",
      "type": "color",
      "modes": {
        "light": "#00e1d9",
        "dark": "#00e1d9",
        "highContrast": "#00e1d9"
      }
    },
    "product/teal/70": {
      "css": "--product-teal-70",
      "sass": "$product-teal-70",
      "type": "color",
      "modes": {
        "light": "#00c0b9",
        "dark": "#00c0b9",
        "highContrast": "#00c0b9"
      }
    },
    "product/teal/80": {
      "css": "--product-teal-80",
      "sass": "$product-teal-80",
      "type": "color",
      "modes": {
        "light": "#009f99",
        "dark": "#009f99",
        "highContrast": "#009f99"
      }
    },
    "product/teal/90": {
      "css": "--product-teal-90",
      "sass": "$product-teal-90",
      "type": "color",
      "modes": {
        "light": "#007d79",
        "dark": "#007d79",
        "highContrast": "#007d79"
      }
    },
    "product/teal/100": {
      "css": "--product-teal-100",
      "sass": "$product-teal-100",
      "type": "color",
      "modes": {
        "light": "#005c59",
        "dark": "#005c59",
        "highContrast": "#005c59"
      }
    },
    "use/background/page": {
      "css": "--use-background-page",
      "sass": "$use-background-page",
      "type": "color",
      "modes": {
        "light": "var(--base-neutral-white)",
        "dark": "var(--base-neutral-100-negro)",
        "highContrast": "var(--base-neutral-black)"
      }
    },
    "use/primary/default": {
      "css": "--use-primary-default",
      "sass": "$use-primary-default",
      "type": "color",
      "modes": {
        "light": "var(--base-brand-80)",
        "dark": "var(--base-brand-80)",
        "highContrast": "var(--base-brand-80)"
      }
    },
    "use/primary/hover": {
      "css": "--use-primary-hover",
      "sass": "$use-primary-hover",
      "type": "color",
      "modes": {
        "light": "var(--base-brand-90)",
        "dark": "var(--base-brand-90)",
        "highContrast": "var(--base-brand-90)"
      }
    },
    "use/primary/active": {
      "css": "--use-primary-active",
      "sass": "$use-primary-active",
      "type": "color",
      "modes": {
        "light": "var(--base-brand-100)",
        "dark": "var(--base-brand-100)",
        "highContrast": "var(--base-brand-100)"
      }
    },
    "use/primary/default dark": {
      "css": "--use-primary-default-dark",
      "sass": "$use-primary-default-dark",
      "type": "color",
      "modes": {
        "light": "#ff9d5c",
        "dark": "var(--base-brand-80)",
        "highContrast": "var(--base-brand-80)"
      }
    },
    "use/border/default": {
      "css": "--use-border-default",
      "sass": "$use-border-default",
      "type": "color",
      "modes": {
        "light": "var(--base-neutral-30)",
        "dark": "var(--base-neutral-80)",
        "highContrast": "var(--base-neutral-white)"
      }
    },
    "use/border/strong": {
      "css": "--use-border-strong",
      "sass": "$use-border-strong",
      "type": "color",
      "modes": {
        "light": "var(--base-neutral-70)",
        "dark": "var(--base-neutral-20)",
        "highContrast": "var(--base-neutral-white)"
      }
    },
    "use/border/subtle": {
      "css": "--use-border-subtle",
      "sass": "$use-border-subtle",
      "type": "color",
      "modes": {
        "light": "var(--base-neutral-20)",
        "dark": "var(--base-neutral-60)",
        "highContrast": "var(--base-neutral-white)"
      }
    },
    "use/border/hover": {
      "css": "--use-border-hover",
      "sass": "$use-border-hover",
      "type": "color",
      "modes": {
        "light": "var(--use-primary-hover)",
        "dark": "var(--use-primary-active)",
        "highContrast": "var(--base-neutral-white)"
      }
    },
    "use/border/violet-dark": {
      "css": "--use-border-violet-dark",
      "sass": "$use-border-violet-dark",
      "type": "color",
      "modes": {
        "light": "var(--product-violet-80)",
        "dark": "var(--product-violet-10)",
        "highContrast": "var(--base-neutral-white)"
      }
    },
    "use/border/violet": {
      "css": "--use-border-violet",
      "sass": "$use-border-violet",
      "type": "color",
      "modes": {
        "light": "var(--product-violet-10)",
        "dark": "var(--product-violet-90)",
        "highContrast": "var(--base-neutral-white)"
      }
    },
    "use/focus/border": {
      "css": "--use-focus-border",
      "sass": "$use-focus-border",
      "type": "color",
      "modes": {
        "light": "var(--base-brand-40)",
        "dark": "var(--base-brand-80)",
        "highContrast": "var(--base-neutral-white)"
      }
    },
    "use/focus/outline": {
      "css": "--use-focus-outline",
      "sass": "$use-focus-outline",
      "type": "color",
      "modes": {
        "light": "var(--base-brand-80)",
        "dark": "var(--base-brand-80)",
        "highContrast": "var(--base-neutral-white)"
      }
    },
    "use/focus/background": {
      "css": "--use-focus-background",
      "sass": "$use-focus-background",
      "type": "color",
      "modes": {
        "light": "var(--base-brand-40)",
        "dark": "var(--base-brand-40)",
        "highContrast": "var(--base-brand-40)"
      }
    },
    "use/text/primary": {
      "css": "--use-text-primary",
      "sass": "$use-text-primary",
      "type": "color",
      "modes": {
        "light": "var(--base-neutral-100-negro)",
        "dark": "var(--base-neutral-10)",
        "highContrast": "var(--base-neutral-white)"
      }
    },
    "use/text/secondary": {
      "css": "--use-text-secondary",
      "sass": "$use-text-secondary",
      "type": "color",
      "modes": {
        "light": "var(--base-neutral-80)",
        "dark": "var(--base-neutral-20)",
        "highContrast": "var(--base-neutral-10)"
      }
    },
    "use/text/tertiary": {
      "css": "--use-text-tertiary",
      "sass": "$use-text-tertiary",
      "type": "color",
      "modes": {
        "light": "var(--base-neutral-70)",
        "dark": "var(--base-neutral-50)",
        "highContrast": "var(--base-neutral-20)"
      }
    },
    "use/text/inverse": {
      "css": "--use-text-inverse",
      "sass": "$use-text-inverse",
      "type": "color",
      "modes": {
        "light": "var(--base-neutral-10)",
        "dark": "var(--base-neutral-100-negro)",
        "highContrast": "var(--base-neutral-black)"
      }
    },
    "use/text/link": {
      "css": "--use-text-link",
      "sass": "$use-text-link",
      "type": "color",
      "modes": {
        "light": "var(--base-brand-80)",
        "dark": "var(--base-brand-80)",
        "highContrast": "var(--base-brand-80)"
      }
    },
    "use/text/theme/violet": {
      "css": "--use-text-theme-violet",
      "sass": "$use-text-theme-violet",
      "type": "color",
      "modes": {
        "light": "var(--product-violet-70)",
        "dark": "var(--product-violet-30)",
        "highContrast": "var(--base-neutral-white)"
      }
    },
    "use/text/theme/yellow": {
      "css": "--use-text-theme-yellow",
      "sass": "$use-text-theme-yellow",
      "type": "color",
      "modes": {
        "light": "var(--base-yellow-70)",
        "dark": "var(--base-yellow-30)",
        "highContrast": "var(--base-neutral-white)"
      }
    },
    "use/text/theme/orange": {
      "css": "--use-text-theme-orange",
      "sass": "$use-text-theme-orange",
      "type": "color",
      "modes": {
        "light": "var(--base-orange-60)",
        "dark": "var(--base-orange-10)",
        "highContrast": "var(--base-neutral-white)"
      }
    },
    "use/text/theme/blue": {
      "css": "--use-text-theme-blue",
      "sass": "$use-text-theme-blue",
      "type": "color",
      "modes": {
        "light": "var(--base-blue-80)",
        "dark": "var(--base-blue-30)",
        "highContrast": "var(--base-neutral-white)"
      }
    },
    "use/text/theme/red": {
      "css": "--use-text-theme-red",
      "sass": "$use-text-theme-red",
      "type": "color",
      "modes": {
        "light": "var(--base-red-75)",
        "dark": "var(--base-red-30)",
        "highContrast": "var(--base-neutral-white)"
      }
    },
    "use/text/theme/green-1": {
      "css": "--use-text-theme-green-1",
      "sass": "$use-text-theme-green-1",
      "type": "color",
      "modes": {
        "light": "var(--base-green-1-80)",
        "dark": "var(--base-green-1-30)",
        "highContrast": "var(--base-neutral-white)"
      }
    },
    "use/text/theme/green-2": {
      "css": "--use-text-theme-green-2",
      "sass": "$use-text-theme-green-2",
      "type": "color",
      "modes": {
        "light": "var(--base-green-2-80)",
        "dark": "var(--base-green-2-10)",
        "highContrast": "var(--base-neutral-white)"
      }
    },
    "use/text/on-dark/primary": {
      "css": "--use-text-on-dark-primary",
      "sass": "$use-text-on-dark-primary",
      "type": "color",
      "modes": {
        "light": "var(--base-neutral-white)",
        "dark": "var(--base-neutral-white)",
        "highContrast": "var(--base-neutral-white)"
      }
    },
    "use/text/on-dark/secondary": {
      "css": "--use-text-on-dark-secondary",
      "sass": "$use-text-on-dark-secondary",
      "type": "color",
      "modes": {
        "light": "var(--base-neutral-10)",
        "dark": "var(--base-neutral-20)",
        "highContrast": "var(--base-neutral-50)"
      }
    },
    "use/tables/Head": {
      "css": "--use-tables-head",
      "sass": "$use-tables-head",
      "type": "color",
      "modes": {
        "light": "#a5d7d5",
        "dark": "#a5d7d5",
        "highContrast": "#a5d7d5"
      }
    },
    "use/tables/Filter": {
      "css": "--use-tables-filter",
      "sass": "$use-tables-filter",
      "type": "color",
      "modes": {
        "light": "#e3e7ed",
        "dark": "#e3e7ed",
        "highContrast": "#e3e7ed"
      }
    },
    "use/tables/Stripes": {
      "css": "--use-tables-stripes",
      "sass": "$use-tables-stripes",
      "type": "color",
      "modes": {
        "light": "#f5f5f7",
        "dark": "#f5f5f7",
        "highContrast": "#f5f5f7"
      }
    },
    "use/state/success/bg": {
      "css": "--use-state-success-bg",
      "sass": "$use-state-success-bg",
      "type": "color",
      "modes": {
        "light": "var(--base-green-1-40)",
        "dark": "var(--base-green-1-80)",
        "highContrast": "var(--base-green-1-100)"
      }
    },
    "use/state/success/text": {
      "css": "--use-state-success-text",
      "sass": "$use-state-success-text",
      "type": "color",
      "modes": {
        "light": "var(--base-green-1-100)",
        "dark": "var(--base-neutral-10)",
        "highContrast": "var(--base-neutral-white)"
      }
    },
    "use/state/success/border": {
      "css": "--use-state-success-border",
      "sass": "$use-state-success-border",
      "type": "color",
      "modes": {
        "light": "var(--base-green-1-60)",
        "dark": "var(--base-green-1-70)",
        "highContrast": "var(--base-green-1-70)"
      }
    },
    "use/state/success/icon": {
      "css": "--use-state-success-icon",
      "sass": "$use-state-success-icon",
      "type": "color",
      "modes": {
        "light": "var(--base-green-1-80)",
        "dark": "var(--base-green-1-40)",
        "highContrast": "var(--base-green-1-40)"
      }
    },
    "use/state/error/bg": {
      "css": "--use-state-error-bg",
      "sass": "$use-state-error-bg",
      "type": "color",
      "modes": {
        "light": "var(--base-red-30)",
        "dark": "var(--base-red-90)",
        "highContrast": "var(--base-red-100)"
      }
    },
    "use/state/error/text": {
      "css": "--use-state-error-text",
      "sass": "$use-state-error-text",
      "type": "color",
      "modes": {
        "light": "var(--base-red-100)",
        "dark": "var(--base-neutral-10)",
        "highContrast": "var(--base-neutral-white)"
      }
    },
    "use/state/error/text-error-field": {
      "css": "--use-state-error-text-error-field",
      "sass": "$use-state-error-text-error-field",
      "type": "color",
      "modes": {
        "light": "var(--base-red-80)",
        "dark": "var(--base-neutral-10)",
        "highContrast": "var(--base-neutral-white)"
      }
    },
    "use/state/error/icon": {
      "css": "--use-state-error-icon",
      "sass": "$use-state-error-icon",
      "type": "color",
      "modes": {
        "light": "var(--base-red-70)",
        "dark": "var(--base-neutral-10)",
        "highContrast": "var(--base-neutral-white)"
      }
    },
    "use/state/error/border": {
      "css": "--use-state-error-border",
      "sass": "$use-state-error-border",
      "type": "color",
      "modes": {
        "light": "var(--base-red-60)",
        "dark": "var(--base-red-70)",
        "highContrast": "var(--base-red-70)"
      }
    },
    "use/state/error/mandatory": {
      "css": "--use-state-error-mandatory",
      "sass": "$use-state-error-mandatory",
      "type": "color",
      "modes": {
        "light": "var(--base-red-75)",
        "dark": "var(--base-red-70)",
        "highContrast": "var(--base-red-70)"
      }
    },
    "use/state/warning/bg": {
      "css": "--use-state-warning-bg",
      "sass": "$use-state-warning-bg",
      "type": "color",
      "modes": {
        "light": "var(--base-yellow-40)",
        "dark": "var(--base-yellow-90)",
        "highContrast": "var(--base-yellow-100)"
      }
    },
    "use/state/warning/text": {
      "css": "--use-state-warning-text",
      "sass": "$use-state-warning-text",
      "type": "color",
      "modes": {
        "light": "var(--use-text-primary)",
        "dark": "var(--base-neutral-10)",
        "highContrast": "var(--base-neutral-white)"
      }
    },
    "use/state/warning/border": {
      "css": "--use-state-warning-border",
      "sass": "$use-state-warning-border",
      "type": "color",
      "modes": {
        "light": "var(--base-yellow-60)",
        "dark": "var(--base-yellow-70)",
        "highContrast": "var(--base-yellow-70)"
      }
    },
    "use/state/warning/icon bg": {
      "css": "--use-state-warning-icon-bg",
      "sass": "$use-state-warning-icon-bg",
      "type": "color",
      "modes": {
        "light": "var(--base-yellow-70)",
        "dark": "var(--base-yellow-70)",
        "highContrast": "var(--base-yellow-70)"
      }
    },
    "use/state/warning/icon color": {
      "css": "--use-state-warning-icon-color",
      "sass": "$use-state-warning-icon-color",
      "type": "color",
      "modes": {
        "light": "var(--use-text-primary)",
        "dark": "var(--use-text-inverse)",
        "highContrast": "var(--use-text-inverse)"
      }
    },
    "use/state/info/bg": {
      "css": "--use-state-info-bg",
      "sass": "$use-state-info-bg",
      "type": "color",
      "modes": {
        "light": "var(--base-blue-30)",
        "dark": "var(--base-blue-90)",
        "highContrast": "var(--base-blue-100)"
      }
    },
    "use/state/info/text": {
      "css": "--use-state-info-text",
      "sass": "$use-state-info-text",
      "type": "color",
      "modes": {
        "light": "var(--base-blue-100)",
        "dark": "var(--base-neutral-10)",
        "highContrast": "var(--base-neutral-white)"
      }
    },
    "use/state/info/border": {
      "css": "--use-state-info-border",
      "sass": "$use-state-info-border",
      "type": "color",
      "modes": {
        "light": "var(--base-cyan-blue-50)",
        "dark": "var(--base-blue-70)",
        "highContrast": "var(--base-blue-70)"
      }
    },
    "use/state/info/icon": {
      "css": "--use-state-info-icon",
      "sass": "$use-state-info-icon",
      "type": "color",
      "modes": {
        "light": "var(--base-cyan-blue-60)",
        "dark": "var(--base-blue-70)",
        "highContrast": "var(--base-blue-70)"
      }
    },
    "use/overlay/subtle": {
      "css": "--use-overlay-subtle",
      "sass": "$use-overlay-subtle",
      "type": "color",
      "modes": {
        "light": "#000000",
        "dark": "#000000",
        "highContrast": "#000000"
      }
    },
    "use/overlay/strong 2": {
      "css": "--use-overlay-strong-2",
      "sass": "$use-overlay-strong-2",
      "type": "color",
      "modes": {
        "light": "#000000",
        "dark": "#000000",
        "highContrast": "#000000"
      }
    },
    "use/overlay/strong 3": {
      "css": "--use-overlay-strong-3",
      "sass": "$use-overlay-strong-3",
      "type": "color",
      "modes": {
        "light": "#000000",
        "dark": "#000000",
        "highContrast": "#000000"
      }
    },
    "use/surface/surface": {
      "css": "--use-surface-surface",
      "sass": "$use-surface-surface",
      "type": "color",
      "modes": {
        "light": "var(--base-neutral-10)",
        "dark": "var(--base-neutral-70)",
        "highContrast": "var(--base-neutral-black)"
      }
    },
    "use/surface/subtle": {
      "css": "--use-surface-subtle",
      "sass": "$use-surface-subtle",
      "type": "color",
      "modes": {
        "light": "var(--product-gray-20)",
        "dark": "var(--product-gray-80)",
        "highContrast": "var(--base-neutral-black)"
      }
    },
    "use/surface/orange": {
      "css": "--use-surface-orange",
      "sass": "$use-surface-orange",
      "type": "color",
      "modes": {
        "light": "var(--base-orange-10)",
        "dark": "var(--base-orange-60)",
        "highContrast": "var(--base-neutral-black)"
      }
    },
    "use/surface/cyan blue": {
      "css": "--use-surface-cyan-blue",
      "sass": "$use-surface-cyan-blue",
      "type": "color",
      "modes": {
        "light": "var(--base-cyan-blue-10)",
        "dark": "var(--base-cyan-blue-80)",
        "highContrast": "var(--base-neutral-black)"
      }
    },
    "use/surface/violet": {
      "css": "--use-surface-violet",
      "sass": "$use-surface-violet",
      "type": "color",
      "modes": {
        "light": "var(--product-violet-5)",
        "dark": "var(--product-violet-80)",
        "highContrast": "var(--base-neutral-black)"
      }
    },
    "use/surface/white": {
      "css": "--use-surface-white",
      "sass": "$use-surface-white",
      "type": "color",
      "modes": {
        "light": "var(--base-neutral-white)",
        "dark": "var(--base-neutral-90)",
        "highContrast": "var(--base-neutral-black)"
      }
    },
    "use/surface/green": {
      "css": "--use-surface-green",
      "sass": "$use-surface-green",
      "type": "color",
      "modes": {
        "light": "var(--base-green-1-30)",
        "dark": "var(--base-green-1-90)",
        "highContrast": "var(--base-neutral-black)"
      }
    },
    "use/surface/green-2": {
      "css": "--use-surface-green-2",
      "sass": "$use-surface-green-2",
      "type": "color",
      "modes": {
        "light": "var(--base-green-2-10)",
        "dark": "var(--base-green-1-90)",
        "highContrast": "var(--base-neutral-black)"
      }
    },
    "use/surface/theme/blue-dark/30": {
      "css": "--use-surface-theme-blue-dark-30",
      "sass": "$use-surface-theme-blue-dark-30",
      "type": "color",
      "modes": {
        "light": "var(--base-blue-30)",
        "dark": "var(--base-blue-80)",
        "highContrast": "var(--base-neutral-black)"
      }
    },
    "use/surface/theme/blue-dark/40": {
      "css": "--use-surface-theme-blue-dark-40",
      "sass": "$use-surface-theme-blue-dark-40",
      "type": "color",
      "modes": {
        "light": "var(--base-blue-40)",
        "dark": "var(--base-blue-50)",
        "highContrast": "var(--base-neutral-black)"
      }
    },
    "use/surface/theme/blue-dark/50": {
      "css": "--use-surface-theme-blue-dark-50",
      "sass": "$use-surface-theme-blue-dark-50",
      "type": "color",
      "modes": {
        "light": "var(--base-blue-50)",
        "dark": "var(--base-blue-60)",
        "highContrast": "var(--base-neutral-black)"
      }
    },
    "use/surface/theme/blue-dark/60": {
      "css": "--use-surface-theme-blue-dark-60",
      "sass": "$use-surface-theme-blue-dark-60",
      "type": "color",
      "modes": {
        "light": "var(--base-blue-60)",
        "dark": "var(--base-blue-60)",
        "highContrast": "var(--base-neutral-black)"
      }
    },
    "use/surface/theme/blue-dark/90": {
      "css": "--use-surface-theme-blue-dark-90",
      "sass": "$use-surface-theme-blue-dark-90",
      "type": "color",
      "modes": {
        "light": "var(--base-blue-90)",
        "dark": "var(--base-blue-30)",
        "highContrast": "var(--base-neutral-white)"
      }
    },
    "use/surface/theme/gray/5": {
      "css": "--use-surface-theme-gray-5",
      "sass": "$use-surface-theme-gray-5",
      "type": "color",
      "modes": {
        "light": "var(--product-gray-5)",
        "dark": "var(--product-gray-90)",
        "highContrast": "var(--base-neutral-black)"
      }
    },
    "use/surface/theme/gray/10": {
      "css": "--use-surface-theme-gray-10",
      "sass": "$use-surface-theme-gray-10",
      "type": "color",
      "modes": {
        "light": "var(--product-gray-10)",
        "dark": "var(--product-gray-80)",
        "highContrast": "var(--base-neutral-black)"
      }
    },
    "use/surface/theme/gray/20": {
      "css": "--use-surface-theme-gray-20",
      "sass": "$use-surface-theme-gray-20",
      "type": "color",
      "modes": {
        "light": "var(--product-gray-20)",
        "dark": "var(--product-gray-70)",
        "highContrast": "var(--base-neutral-black)"
      }
    },
    "use/surface/theme/green-1/30": {
      "css": "--use-surface-theme-green-1-30",
      "sass": "$use-surface-theme-green-1-30",
      "type": "color",
      "modes": {
        "light": "var(--base-green-1-30)",
        "dark": "var(--base-green-1-80)",
        "highContrast": "var(--base-neutral-black)"
      }
    },
    "use/surface/theme/green-1/40": {
      "css": "--use-surface-theme-green-1-40",
      "sass": "$use-surface-theme-green-1-40",
      "type": "color",
      "modes": {
        "light": "var(--base-green-1-40)",
        "dark": "var(--base-green-1-50)",
        "highContrast": "var(--base-neutral-black)"
      }
    },
    "use/surface/theme/green-1/50": {
      "css": "--use-surface-theme-green-1-50",
      "sass": "$use-surface-theme-green-1-50",
      "type": "color",
      "modes": {
        "light": "var(--base-green-1-50)",
        "dark": "var(--base-green-1-60)",
        "highContrast": "var(--base-neutral-black)"
      }
    },
    "use/surface/theme/green-2/10": {
      "css": "--use-surface-theme-green-2-10",
      "sass": "$use-surface-theme-green-2-10",
      "type": "color",
      "modes": {
        "light": "var(--base-green-2-10)",
        "dark": "var(--base-green-2-100)",
        "highContrast": "var(--base-neutral-black)"
      }
    },
    "use/surface/theme/green-2/20": {
      "css": "--use-surface-theme-green-2-20",
      "sass": "$use-surface-theme-green-2-20",
      "type": "color",
      "modes": {
        "light": "var(--base-green-2-20)",
        "dark": "var(--base-green-2-60)",
        "highContrast": "var(--base-neutral-black)"
      }
    },
    "use/surface/theme/green-2/40": {
      "css": "--use-surface-theme-green-2-40",
      "sass": "$use-surface-theme-green-2-40",
      "type": "color",
      "modes": {
        "light": "var(--base-green-2-40)",
        "dark": "var(--base-green-2-60)",
        "highContrast": "var(--base-neutral-black)"
      }
    },
    "use/surface/theme/green-2/60": {
      "css": "--use-surface-theme-green-2-60",
      "sass": "$use-surface-theme-green-2-60",
      "type": "color",
      "modes": {
        "light": "var(--base-green-2-60)",
        "dark": "var(--base-green-2-20)",
        "highContrast": "var(--base-neutral-black)"
      }
    },
    "use/surface/theme/neutral/30": {
      "css": "--use-surface-theme-neutral-30",
      "sass": "$use-surface-theme-neutral-30",
      "type": "color",
      "modes": {
        "light": "var(--base-neutral-30)",
        "dark": "var(--base-neutral-70)",
        "highContrast": "var(--base-neutral-black)"
      }
    },
    "use/surface/theme/orange/10": {
      "css": "--use-surface-theme-orange-10",
      "sass": "$use-surface-theme-orange-10",
      "type": "color",
      "modes": {
        "light": "var(--base-orange-10)",
        "dark": "var(--base-orange-100)",
        "highContrast": "var(--base-neutral-black)"
      }
    },
    "use/surface/theme/orange/20": {
      "css": "--use-surface-theme-orange-20",
      "sass": "$use-surface-theme-orange-20",
      "type": "color",
      "modes": {
        "light": "var(--base-orange-20)",
        "dark": "var(--base-orange-40)",
        "highContrast": "var(--base-neutral-black)"
      }
    },
    "use/surface/theme/orange/40": {
      "css": "--use-surface-theme-orange-40",
      "sass": "$use-surface-theme-orange-40",
      "type": "color",
      "modes": {
        "light": "var(--base-orange-40)",
        "dark": "var(--base-orange-60)",
        "highContrast": "var(--base-neutral-black)"
      }
    },
    "use/surface/theme/orange/60": {
      "css": "--use-surface-theme-orange-60",
      "sass": "$use-surface-theme-orange-60",
      "type": "color",
      "modes": {
        "light": "var(--base-orange-40)",
        "dark": "var(--base-orange-10)",
        "highContrast": "var(--base-neutral-black)"
      }
    },
    "use/surface/theme/red/30": {
      "css": "--use-surface-theme-red-30",
      "sass": "$use-surface-theme-red-30",
      "type": "color",
      "modes": {
        "light": "var(--base-red-30)",
        "dark": "var(--base-red-80)",
        "highContrast": "var(--base-neutral-black)"
      }
    },
    "use/surface/theme/red/40": {
      "css": "--use-surface-theme-red-40",
      "sass": "$use-surface-theme-red-40",
      "type": "color",
      "modes": {
        "light": "var(--base-red-40)",
        "dark": "var(--base-red-50)",
        "highContrast": "var(--base-neutral-black)"
      }
    },
    "use/surface/theme/red/50": {
      "css": "--use-surface-theme-red-50",
      "sass": "$use-surface-theme-red-50",
      "type": "color",
      "modes": {
        "light": "var(--base-red-50)",
        "dark": "var(--base-red-60)",
        "highContrast": "var(--base-neutral-black)"
      }
    },
    "use/surface/theme/red/60": {
      "css": "--use-surface-theme-red-60",
      "sass": "$use-surface-theme-red-60",
      "type": "color",
      "modes": {
        "light": "var(--base-red-60)",
        "dark": "var(--base-red-60)",
        "highContrast": "var(--base-neutral-black)"
      }
    },
    "use/surface/theme/violet/5": {
      "css": "--use-surface-theme-violet-5",
      "sass": "$use-surface-theme-violet-5",
      "type": "color",
      "modes": {
        "light": "var(--product-violet-5)",
        "dark": "var(--product-violet-90)",
        "highContrast": "var(--base-neutral-black)"
      }
    },
    "use/surface/theme/violet/10": {
      "css": "--use-surface-theme-violet-10",
      "sass": "$use-surface-theme-violet-10",
      "type": "color",
      "modes": {
        "light": "var(--product-violet-10)",
        "dark": "var(--product-violet-80)",
        "highContrast": "var(--base-neutral-black)"
      }
    },
    "use/surface/theme/violet/20": {
      "css": "--use-surface-theme-violet-20",
      "sass": "$use-surface-theme-violet-20",
      "type": "color",
      "modes": {
        "light": "var(--product-violet-20)",
        "dark": "var(--product-violet-70)",
        "highContrast": "var(--base-neutral-black)"
      }
    },
    "use/surface/theme/violet/60": {
      "css": "--use-surface-theme-violet-60",
      "sass": "$use-surface-theme-violet-60",
      "type": "color",
      "modes": {
        "light": "var(--product-violet-60)",
        "dark": "var(--product-violet-10)",
        "highContrast": "var(--base-neutral-black)"
      }
    },
    "use/surface/theme/violet/70": {
      "css": "--use-surface-theme-violet-70",
      "sass": "$use-surface-theme-violet-70",
      "type": "color",
      "modes": {
        "light": "var(--product-violet-70)",
        "dark": "var(--product-violet-20)",
        "highContrast": "var(--base-neutral-black)"
      }
    },
    "use/surface/theme/yellow/30": {
      "css": "--use-surface-theme-yellow-30",
      "sass": "$use-surface-theme-yellow-30",
      "type": "color",
      "modes": {
        "light": "var(--base-yellow-30)",
        "dark": "var(--base-yellow-90)",
        "highContrast": "var(--base-neutral-black)"
      }
    },
    "use/surface/theme/yellow/50": {
      "css": "--use-surface-theme-yellow-50",
      "sass": "$use-surface-theme-yellow-50",
      "type": "color",
      "modes": {
        "light": "var(--base-yellow-50)",
        "dark": "var(--base-yellow-60)",
        "highContrast": "var(--base-neutral-black)"
      }
    },
    "use/surface/theme/yellow/60": {
      "css": "--use-surface-theme-yellow-60",
      "sass": "$use-surface-theme-yellow-60",
      "type": "color",
      "modes": {
        "light": "var(--base-yellow-60)",
        "dark": "var(--base-yellow-70)",
        "highContrast": "var(--base-neutral-black)"
      }
    },
    "use/surface/theme/yellow/70": {
      "css": "--use-surface-theme-yellow-70",
      "sass": "$use-surface-theme-yellow-70",
      "type": "color",
      "modes": {
        "light": "var(--base-yellow-70)",
        "dark": "var(--base-yellow-70)",
        "highContrast": "var(--base-neutral-black)"
      }
    },
    "spacing/2px": {
      "css": "--spacing-2px",
      "sass": "$spacing-2px",
      "type": "number",
      "modes": {
        "light": "2px",
        "dark": "2px",
        "highContrast": "2px"
      }
    },
    "spacing/4px": {
      "css": "--spacing-4px",
      "sass": "$spacing-4px",
      "type": "string",
      "modes": {
        "light": "4px",
        "dark": "4px",
        "highContrast": "4px"
      }
    },
    "spacing/8px": {
      "css": "--spacing-8px",
      "sass": "$spacing-8px",
      "type": "number",
      "modes": {
        "light": "8px",
        "dark": "8px",
        "highContrast": "8px"
      }
    },
    "spacing/12px": {
      "css": "--spacing-12px",
      "sass": "$spacing-12px",
      "type": "number",
      "modes": {
        "light": "12px",
        "dark": "12px",
        "highContrast": "12px"
      }
    },
    "spacing/16px": {
      "css": "--spacing-16px",
      "sass": "$spacing-16px",
      "type": "number",
      "modes": {
        "light": "16px",
        "dark": "16px",
        "highContrast": "16px"
      }
    },
    "spacing/24px": {
      "css": "--spacing-24px",
      "sass": "$spacing-24px",
      "type": "number",
      "modes": {
        "light": "24px",
        "dark": "24px",
        "highContrast": "24px"
      }
    },
    "spacing/32px": {
      "css": "--spacing-32px",
      "sass": "$spacing-32px",
      "type": "number",
      "modes": {
        "light": "32px",
        "dark": "32px",
        "highContrast": "32px"
      }
    },
    "spacing/40px": {
      "css": "--spacing-40px",
      "sass": "$spacing-40px",
      "type": "number",
      "modes": {
        "light": "40px",
        "dark": "40px",
        "highContrast": "40px"
      }
    },
    "spacing/48px": {
      "css": "--spacing-48px",
      "sass": "$spacing-48px",
      "type": "number",
      "modes": {
        "light": "48px",
        "dark": "48px",
        "highContrast": "48px"
      }
    },
    "spacing/56px": {
      "css": "--spacing-56px",
      "sass": "$spacing-56px",
      "type": "number",
      "modes": {
        "light": "56px",
        "dark": "56px",
        "highContrast": "56px"
      }
    },
    "spacing/64px": {
      "css": "--spacing-64px",
      "sass": "$spacing-64px",
      "type": "number",
      "modes": {
        "light": "64px",
        "dark": "64px",
        "highContrast": "64px"
      }
    },
    "spacing/72px": {
      "css": "--spacing-72px",
      "sass": "$spacing-72px",
      "type": "number",
      "modes": {
        "light": "72px",
        "dark": "72px",
        "highContrast": "72px"
      }
    },
    "spacing/80px": {
      "css": "--spacing-80px",
      "sass": "$spacing-80px",
      "type": "number",
      "modes": {
        "light": "80px",
        "dark": "80px",
        "highContrast": "80px"
      }
    },
    "spacing/96px": {
      "css": "--spacing-96px",
      "sass": "$spacing-96px",
      "type": "number",
      "modes": {
        "light": "96px",
        "dark": "96px",
        "highContrast": "96px"
      }
    },
    "spacing/128px": {
      "css": "--spacing-128px",
      "sass": "$spacing-128px",
      "type": "number",
      "modes": {
        "light": "128px",
        "dark": "128px",
        "highContrast": "128px"
      }
    },
    "border-radius/xs": {
      "css": "--border-radius-xs",
      "sass": "$border-radius-xs",
      "type": "number",
      "modes": {
        "light": "8px",
        "dark": "8px",
        "highContrast": "8px"
      }
    },
    "border-radius/sm": {
      "css": "--border-radius-sm",
      "sass": "$border-radius-sm",
      "type": "number",
      "modes": {
        "light": "16px",
        "dark": "16px",
        "highContrast": "16px"
      }
    },
    "border-radius/md": {
      "css": "--border-radius-md",
      "sass": "$border-radius-md",
      "type": "number",
      "modes": {
        "light": "24px",
        "dark": "24px",
        "highContrast": "24px"
      }
    },
    "border-radius/lg": {
      "css": "--border-radius-lg",
      "sass": "$border-radius-lg",
      "type": "number",
      "modes": {
        "light": "32px",
        "dark": "32px",
        "highContrast": "32px"
      }
    }
  };

  var TOKEN_GROUPS = {
    "grid-base-brand": [
      [
        "base/brand/40",
        "--base-brand-40",
        "#ffe6d6"
      ],
      [
        "base/brand/50",
        "--base-brand-50",
        "#ffc299"
      ],
      [
        "base/brand/60",
        "--base-brand-60",
        "#ffa366"
      ],
      [
        "base/brand/70",
        "--base-brand-70",
        "#ff8533"
      ],
      [
        "base/brand/80",
        "--base-brand-80",
        "#ff6600"
      ],
      [
        "base/brand/90",
        "--base-brand-90",
        "#e63f0c"
      ],
      [
        "base/brand/100",
        "--base-brand-100",
        "#cc5200"
      ],
      [
        "base/brand/yellow",
        "--base-brand-yellow",
        "#ff980d"
      ]
    ],
    "grid-base-blue": [
      [
        "base/blue/30",
        "--base-blue-30",
        "#e6f1fb"
      ],
      [
        "base/blue/40",
        "--base-blue-40",
        "#d4e2fa"
      ],
      [
        "base/blue/50",
        "--base-blue-50",
        "#9fbef5"
      ],
      [
        "base/blue/60",
        "--base-blue-60",
        "#5c91f2"
      ],
      [
        "base/blue/70",
        "--base-blue-70",
        "#296ff0"
      ],
      [
        "base/blue/80",
        "--base-blue-80",
        "#1f53b5"
      ],
      [
        "base/blue/90",
        "--base-blue-90",
        "#18428f"
      ],
      [
        "base/blue/100",
        "--base-blue-100",
        "#2d4a67"
      ]
    ],
    "grid-base-cyan-blue": [
      [
        "base/cyan blue/10",
        "--base-cyan-blue-10",
        "#eef5fc"
      ],
      [
        "base/cyan blue/20",
        "--base-cyan-blue-20",
        "#d6e6f7"
      ],
      [
        "base/cyan blue/30",
        "--base-cyan-blue-30",
        "#b2d0ee"
      ],
      [
        "base/cyan blue/40",
        "--base-cyan-blue-40",
        "#8cb8e0"
      ],
      [
        "base/cyan blue/50",
        "--base-cyan-blue-50",
        "#6c9fd0"
      ],
      [
        "base/cyan blue/60",
        "--base-cyan-blue-60",
        "#5286bc"
      ],
      [
        "base/cyan blue/70",
        "--base-cyan-blue-70",
        "#4a74a5"
      ],
      [
        "base/cyan blue/80",
        "--base-cyan-blue-80",
        "#3c628c"
      ],
      [
        "base/cyan blue/90",
        "--base-cyan-blue-90",
        "#2d4f73"
      ],
      [
        "base/cyan blue/100",
        "--base-cyan-blue-100",
        "#1f3d5a"
      ]
    ],
    "grid-base-green-1": [
      [
        "base/green-1/30",
        "--base-green-1-30",
        "#f7faf8"
      ],
      [
        "base/green-1/40",
        "--base-green-1-40",
        "#e6f7e8"
      ],
      [
        "base/green-1/50",
        "--base-green-1-50",
        "#9fe0b8"
      ],
      [
        "base/green-1/60",
        "--base-green-1-60",
        "#44bd75"
      ],
      [
        "base/green-1/70",
        "--base-green-1-70",
        "#22a152"
      ],
      [
        "base/green-1/80",
        "--base-green-1-80",
        "#0b853d"
      ],
      [
        "base/green-1/90",
        "--base-green-1-90",
        "#166936"
      ],
      [
        "base/green-1/100",
        "--base-green-1-100",
        "#0d3d1f"
      ]
    ],
    "grid-base-green-2": [
      [
        "base/green-2/10",
        "--base-green-2-10",
        "#ecf7c9"
      ],
      [
        "base/green-2/20",
        "--base-green-2-20",
        "#d8ee9c"
      ],
      [
        "base/green-2/30",
        "--base-green-2-30",
        "#c5e270"
      ],
      [
        "base/green-2/40",
        "--base-green-2-40",
        "#b1d645"
      ],
      [
        "base/green-2/50",
        "--base-green-2-50",
        "#9dc71e"
      ],
      [
        "base/green-2/60",
        "--base-green-2-60",
        "#95bf1b"
      ],
      [
        "base/green-2/70",
        "--base-green-2-70",
        "#84ad16"
      ],
      [
        "base/green-2/80",
        "--base-green-2-80",
        "#6a8e11"
      ],
      [
        "base/green-2/90",
        "--base-green-2-90",
        "#516d0d"
      ],
      [
        "base/green-2/100",
        "--base-green-2-100",
        "#3f540a"
      ]
    ],
    "grid-base-neutral": [
      [
        "base/neutral/10",
        "--base-neutral-10",
        "#f5f5f5"
      ],
      [
        "base/neutral/20",
        "--base-neutral-20",
        "#e0e0e0"
      ],
      [
        "base/neutral/30",
        "--base-neutral-30",
        "#cccccc"
      ],
      [
        "base/neutral/40",
        "--base-neutral-40",
        "#b8b8b8"
      ],
      [
        "base/neutral/50",
        "--base-neutral-50",
        "#a4a4a4"
      ],
      [
        "base/neutral/60",
        "--base-neutral-60",
        "#7f7f7f"
      ],
      [
        "base/neutral/70",
        "--base-neutral-70",
        "#666666"
      ],
      [
        "base/neutral/80",
        "--base-neutral-80",
        "#333333"
      ],
      [
        "base/neutral/90",
        "--base-neutral-90",
        "#292929"
      ],
      [
        "base/neutral/100 (Negro)",
        "--base-neutral-100-negro",
        "#111111"
      ],
      [
        "base/neutral/white",
        "--base-neutral-white",
        "#ffffff"
      ],
      [
        "base/neutral/black",
        "--base-neutral-black",
        "#000000"
      ]
    ],
    "grid-base-red": [
      [
        "base/red/30",
        "--base-red-30",
        "#f7eeed"
      ],
      [
        "base/red/40",
        "--base-red-40",
        "#f2d8d5"
      ],
      [
        "base/red/50",
        "--base-red-50",
        "#ebada7"
      ],
      [
        "base/red/60",
        "--base-red-60",
        "#db7165"
      ],
      [
        "base/red/70",
        "--base-red-70",
        "#d14434"
      ],
      [
        "base/red/75",
        "--base-red-75",
        "#bb4945"
      ],
      [
        "base/red/80",
        "--base-red-80",
        "#9e3328"
      ],
      [
        "base/red/90",
        "--base-red-90",
        "#7d291f"
      ],
      [
        "base/red/100",
        "--base-red-100",
        "#521a14"
      ]
    ],
    "grid-base-orange": [
      [
        "base/orange/10",
        "--base-orange-10",
        "#fff2e3"
      ],
      [
        "base/orange/20",
        "--base-orange-20",
        "#ffe5cc"
      ],
      [
        "base/orange/40",
        "--base-orange-40",
        "#ffb380"
      ],
      [
        "base/orange/60",
        "--base-orange-60",
        "#cc7a33"
      ],
      [
        "base/orange/100",
        "--base-orange-100",
        "#6b4400"
      ]
    ],
    "grid-base-yellow": [
      [
        "base/yellow/30",
        "--base-yellow-30",
        "#fff9ef"
      ],
      [
        "base/yellow/40",
        "--base-yellow-40",
        "#fff2d9"
      ],
      [
        "base/yellow/50",
        "--base-yellow-50",
        "#fce1ac"
      ],
      [
        "base/yellow/60",
        "--base-yellow-60",
        "#fcce72"
      ],
      [
        "base/yellow/70",
        "--base-yellow-70",
        "#ffc154"
      ],
      [
        "base/yellow/80",
        "--base-yellow-80",
        "#bf9034"
      ],
      [
        "base/yellow/90",
        "--base-yellow-90",
        "#967229"
      ],
      [
        "base/yellow/100",
        "--base-yellow-100",
        "#634a1a"
      ]
    ],
    "grid-product-medicina": [
      [
        "product/medicina/Cyan",
        "--product-medicina-cyan",
        "#00e2db"
      ],
      [
        "product/medicina/Purple",
        "--product-medicina-purple",
        "#8268cb"
      ],
      [
        "product/medicina/Gray",
        "--product-medicina-gray",
        "#b3acab"
      ]
    ],
    "grid-product-accent": [
      [
        "product/accent/30",
        "--product-accent-30",
        "#f2fcff"
      ],
      [
        "product/accent/40",
        "--product-accent-40",
        "#e1f7fe"
      ],
      [
        "product/accent/50",
        "--product-accent-50",
        "#b3d7e0"
      ],
      [
        "product/accent/60",
        "--product-accent-60",
        "#8fc5d0"
      ],
      [
        "product/accent/70",
        "--product-accent-70",
        "#6bb4c0"
      ],
      [
        "product/accent/80",
        "--product-accent-80",
        "#47a4af"
      ],
      [
        "product/accent/90",
        "--product-accent-90",
        "#24939d"
      ],
      [
        "product/accent/100",
        "--product-accent-100",
        "#03838a"
      ]
    ],
    "grid-product-gray": [
      [
        "product/gray/5",
        "--product-gray-5",
        "#f8f7f7"
      ],
      [
        "product/gray/10",
        "--product-gray-10",
        "#eceaea"
      ],
      [
        "product/gray/20",
        "--product-gray-20",
        "#d9d5d5"
      ],
      [
        "product/gray/30",
        "--product-gray-30",
        "#c6c1c0"
      ],
      [
        "product/gray/40",
        "--product-gray-40",
        "#b3acab"
      ],
      [
        "product/gray/50",
        "--product-gray-50",
        "#a09796"
      ],
      [
        "product/gray/60",
        "--product-gray-60",
        "#8c8280"
      ],
      [
        "product/gray/70",
        "--product-gray-70",
        "#786e6c"
      ],
      [
        "product/gray/80",
        "--product-gray-80",
        "#635a59"
      ],
      [
        "product/gray/90",
        "--product-gray-90",
        "#4d4746"
      ],
      [
        "product/gray/100",
        "--product-gray-100",
        "#383333"
      ]
    ],
    "grid-product-violet": [
      [
        "product/violet/5",
        "--product-violet-5",
        "#efecf9"
      ],
      [
        "product/violet/10",
        "--product-violet-10",
        "#e0d9f3"
      ],
      [
        "product/violet/20",
        "--product-violet-20",
        "#c1b3e7"
      ],
      [
        "product/violet/30",
        "--product-violet-30",
        "#a28dda"
      ],
      [
        "product/violet/40",
        "--product-violet-40",
        "#8367ce"
      ],
      [
        "product/violet/50",
        "--product-violet-50",
        "#6d4cc5"
      ],
      [
        "product/violet/60",
        "--product-violet-60",
        "#5b3ab4"
      ],
      [
        "product/violet/70",
        "--product-violet-70",
        "#4e3199"
      ],
      [
        "product/violet/80",
        "--product-violet-80",
        "#40297e"
      ],
      [
        "product/violet/90",
        "--product-violet-90",
        "#322064"
      ],
      [
        "product/violet/100",
        "--product-violet-100",
        "#251749"
      ]
    ],
    "grid-product-teal": [
      [
        "product/teal/5",
        "--product-teal-5",
        "#ebfffe"
      ],
      [
        "product/teal/10",
        "--product-teal-10",
        "#d0fffd"
      ],
      [
        "product/teal/20",
        "--product-teal-20",
        "#a0fffc"
      ],
      [
        "product/teal/30",
        "--product-teal-30",
        "#71fffa"
      ],
      [
        "product/teal/40",
        "--product-teal-40",
        "#41fff8"
      ],
      [
        "product/teal/50",
        "--product-teal-50",
        "#12fff7"
      ],
      [
        "product/teal/60",
        "--product-teal-60",
        "#00e1d9"
      ],
      [
        "product/teal/70",
        "--product-teal-70",
        "#00c0b9"
      ],
      [
        "product/teal/80",
        "--product-teal-80",
        "#009f99"
      ],
      [
        "product/teal/90",
        "--product-teal-90",
        "#007d79"
      ],
      [
        "product/teal/100",
        "--product-teal-100",
        "#005c59"
      ]
    ],
    "grid-use-background": [
      [
        "use/background/page",
        "--use-background-page",
        "var(--base-neutral-white)"
      ]
    ],
    "grid-use-primary": [
      [
        "use/primary/default",
        "--use-primary-default",
        "var(--base-brand-80)"
      ],
      [
        "use/primary/hover",
        "--use-primary-hover",
        "var(--base-brand-90)"
      ],
      [
        "use/primary/active",
        "--use-primary-active",
        "var(--base-brand-100)"
      ],
      [
        "use/primary/default dark",
        "--use-primary-default-dark",
        "#ff9d5c"
      ]
    ],
    "grid-use-border": [
      [
        "use/border/default",
        "--use-border-default",
        "var(--base-neutral-30)"
      ],
      [
        "use/border/strong",
        "--use-border-strong",
        "var(--base-neutral-70)"
      ],
      [
        "use/border/subtle",
        "--use-border-subtle",
        "var(--base-neutral-20)"
      ],
      [
        "use/border/hover",
        "--use-border-hover",
        "var(--use-primary-hover)"
      ],
      [
        "use/border/violet-dark",
        "--use-border-violet-dark",
        "var(--product-violet-80)"
      ],
      [
        "use/border/violet",
        "--use-border-violet",
        "var(--product-violet-10)"
      ]
    ],
    "grid-use-focus": [
      [
        "use/focus/border",
        "--use-focus-border",
        "var(--base-brand-40)"
      ],
      [
        "use/focus/outline",
        "--use-focus-outline",
        "var(--base-brand-80)"
      ],
      [
        "use/focus/background",
        "--use-focus-background",
        "var(--base-brand-40)"
      ]
    ],
    "grid-use-text": [
      [
        "use/text/primary",
        "--use-text-primary",
        "var(--base-neutral-100-negro)"
      ],
      [
        "use/text/secondary",
        "--use-text-secondary",
        "var(--base-neutral-80)"
      ],
      [
        "use/text/tertiary",
        "--use-text-tertiary",
        "var(--base-neutral-70)"
      ],
      [
        "use/text/inverse",
        "--use-text-inverse",
        "var(--base-neutral-10)"
      ],
      [
        "use/text/link",
        "--use-text-link",
        "var(--base-brand-80)"
      ],
      [
        "use/text/theme/violet",
        "--use-text-theme-violet",
        "var(--product-violet-70)"
      ],
      [
        "use/text/theme/yellow",
        "--use-text-theme-yellow",
        "var(--base-yellow-70)"
      ],
      [
        "use/text/theme/orange",
        "--use-text-theme-orange",
        "var(--base-orange-60)"
      ],
      [
        "use/text/theme/blue",
        "--use-text-theme-blue",
        "var(--base-blue-80)"
      ],
      [
        "use/text/theme/red",
        "--use-text-theme-red",
        "var(--base-red-75)"
      ],
      [
        "use/text/theme/green-1",
        "--use-text-theme-green-1",
        "var(--base-green-1-80)"
      ],
      [
        "use/text/theme/green-2",
        "--use-text-theme-green-2",
        "var(--base-green-2-80)"
      ],
      [
        "use/text/on-dark/primary",
        "--use-text-on-dark-primary",
        "var(--base-neutral-white)"
      ],
      [
        "use/text/on-dark/secondary",
        "--use-text-on-dark-secondary",
        "var(--base-neutral-10)"
      ]
    ],
    "grid-use-tables": [
      [
        "use/tables/Head",
        "--use-tables-head",
        "#a5d7d5"
      ],
      [
        "use/tables/Filter",
        "--use-tables-filter",
        "#e3e7ed"
      ],
      [
        "use/tables/Stripes",
        "--use-tables-stripes",
        "#f5f5f7"
      ]
    ],
    "grid-use-state": [
      [
        "use/state/success/bg",
        "--use-state-success-bg",
        "var(--base-green-1-40)"
      ],
      [
        "use/state/success/text",
        "--use-state-success-text",
        "var(--base-green-1-100)"
      ],
      [
        "use/state/success/border",
        "--use-state-success-border",
        "var(--base-green-1-60)"
      ],
      [
        "use/state/success/icon",
        "--use-state-success-icon",
        "var(--base-green-1-80)"
      ],
      [
        "use/state/error/bg",
        "--use-state-error-bg",
        "var(--base-red-30)"
      ],
      [
        "use/state/error/text",
        "--use-state-error-text",
        "var(--base-red-100)"
      ],
      [
        "use/state/error/text-error-field",
        "--use-state-error-text-error-field",
        "var(--base-red-80)"
      ],
      [
        "use/state/error/icon",
        "--use-state-error-icon",
        "var(--base-red-70)"
      ],
      [
        "use/state/error/border",
        "--use-state-error-border",
        "var(--base-red-60)"
      ],
      [
        "use/state/error/mandatory",
        "--use-state-error-mandatory",
        "var(--base-red-75)"
      ],
      [
        "use/state/warning/bg",
        "--use-state-warning-bg",
        "var(--base-yellow-40)"
      ],
      [
        "use/state/warning/text",
        "--use-state-warning-text",
        "var(--use-text-primary)"
      ],
      [
        "use/state/warning/border",
        "--use-state-warning-border",
        "var(--base-yellow-60)"
      ],
      [
        "use/state/warning/icon bg",
        "--use-state-warning-icon-bg",
        "var(--base-yellow-70)"
      ],
      [
        "use/state/warning/icon color",
        "--use-state-warning-icon-color",
        "var(--use-text-primary)"
      ],
      [
        "use/state/info/bg",
        "--use-state-info-bg",
        "var(--base-blue-30)"
      ],
      [
        "use/state/info/text",
        "--use-state-info-text",
        "var(--base-blue-100)"
      ],
      [
        "use/state/info/border",
        "--use-state-info-border",
        "var(--base-cyan-blue-50)"
      ],
      [
        "use/state/info/icon",
        "--use-state-info-icon",
        "var(--base-cyan-blue-60)"
      ]
    ],
    "grid-use-overlay": [
      [
        "use/overlay/subtle",
        "--use-overlay-subtle",
        "#000000"
      ],
      [
        "use/overlay/strong 2",
        "--use-overlay-strong-2",
        "#000000"
      ],
      [
        "use/overlay/strong 3",
        "--use-overlay-strong-3",
        "#000000"
      ]
    ],
    "grid-use-surface": [
      [
        "use/surface/surface",
        "--use-surface-surface",
        "var(--base-neutral-10)"
      ],
      [
        "use/surface/subtle",
        "--use-surface-subtle",
        "var(--product-gray-20)"
      ],
      [
        "use/surface/orange",
        "--use-surface-orange",
        "var(--base-orange-10)"
      ],
      [
        "use/surface/cyan blue",
        "--use-surface-cyan-blue",
        "var(--base-cyan-blue-10)"
      ],
      [
        "use/surface/violet",
        "--use-surface-violet",
        "var(--product-violet-5)"
      ],
      [
        "use/surface/white",
        "--use-surface-white",
        "var(--base-neutral-white)"
      ],
      [
        "use/surface/green",
        "--use-surface-green",
        "var(--base-green-1-30)"
      ],
      [
        "use/surface/green-2",
        "--use-surface-green-2",
        "var(--base-green-2-10)"
      ],
      [
        "use/surface/theme/blue-dark/30",
        "--use-surface-theme-blue-dark-30",
        "var(--base-blue-30)"
      ],
      [
        "use/surface/theme/blue-dark/40",
        "--use-surface-theme-blue-dark-40",
        "var(--base-blue-40)"
      ],
      [
        "use/surface/theme/blue-dark/50",
        "--use-surface-theme-blue-dark-50",
        "var(--base-blue-50)"
      ],
      [
        "use/surface/theme/blue-dark/60",
        "--use-surface-theme-blue-dark-60",
        "var(--base-blue-60)"
      ],
      [
        "use/surface/theme/blue-dark/90",
        "--use-surface-theme-blue-dark-90",
        "var(--base-blue-90)"
      ],
      [
        "use/surface/theme/gray/5",
        "--use-surface-theme-gray-5",
        "var(--product-gray-5)"
      ],
      [
        "use/surface/theme/gray/10",
        "--use-surface-theme-gray-10",
        "var(--product-gray-10)"
      ],
      [
        "use/surface/theme/gray/20",
        "--use-surface-theme-gray-20",
        "var(--product-gray-20)"
      ],
      [
        "use/surface/theme/green-1/30",
        "--use-surface-theme-green-1-30",
        "var(--base-green-1-30)"
      ],
      [
        "use/surface/theme/green-1/40",
        "--use-surface-theme-green-1-40",
        "var(--base-green-1-40)"
      ],
      [
        "use/surface/theme/green-1/50",
        "--use-surface-theme-green-1-50",
        "var(--base-green-1-50)"
      ],
      [
        "use/surface/theme/green-2/10",
        "--use-surface-theme-green-2-10",
        "var(--base-green-2-10)"
      ],
      [
        "use/surface/theme/green-2/20",
        "--use-surface-theme-green-2-20",
        "var(--base-green-2-20)"
      ],
      [
        "use/surface/theme/green-2/40",
        "--use-surface-theme-green-2-40",
        "var(--base-green-2-40)"
      ],
      [
        "use/surface/theme/green-2/60",
        "--use-surface-theme-green-2-60",
        "var(--base-green-2-60)"
      ],
      [
        "use/surface/theme/neutral/30",
        "--use-surface-theme-neutral-30",
        "var(--base-neutral-30)"
      ],
      [
        "use/surface/theme/orange/10",
        "--use-surface-theme-orange-10",
        "var(--base-orange-10)"
      ],
      [
        "use/surface/theme/orange/20",
        "--use-surface-theme-orange-20",
        "var(--base-orange-20)"
      ],
      [
        "use/surface/theme/orange/40",
        "--use-surface-theme-orange-40",
        "var(--base-orange-40)"
      ],
      [
        "use/surface/theme/orange/60",
        "--use-surface-theme-orange-60",
        "var(--base-orange-40)"
      ],
      [
        "use/surface/theme/red/30",
        "--use-surface-theme-red-30",
        "var(--base-red-30)"
      ],
      [
        "use/surface/theme/red/40",
        "--use-surface-theme-red-40",
        "var(--base-red-40)"
      ],
      [
        "use/surface/theme/red/50",
        "--use-surface-theme-red-50",
        "var(--base-red-50)"
      ],
      [
        "use/surface/theme/red/60",
        "--use-surface-theme-red-60",
        "var(--base-red-60)"
      ],
      [
        "use/surface/theme/violet/5",
        "--use-surface-theme-violet-5",
        "var(--product-violet-5)"
      ],
      [
        "use/surface/theme/violet/10",
        "--use-surface-theme-violet-10",
        "var(--product-violet-10)"
      ],
      [
        "use/surface/theme/violet/20",
        "--use-surface-theme-violet-20",
        "var(--product-violet-20)"
      ],
      [
        "use/surface/theme/violet/60",
        "--use-surface-theme-violet-60",
        "var(--product-violet-60)"
      ],
      [
        "use/surface/theme/violet/70",
        "--use-surface-theme-violet-70",
        "var(--product-violet-70)"
      ],
      [
        "use/surface/theme/yellow/30",
        "--use-surface-theme-yellow-30",
        "var(--base-yellow-30)"
      ],
      [
        "use/surface/theme/yellow/50",
        "--use-surface-theme-yellow-50",
        "var(--base-yellow-50)"
      ],
      [
        "use/surface/theme/yellow/60",
        "--use-surface-theme-yellow-60",
        "var(--base-yellow-60)"
      ],
      [
        "use/surface/theme/yellow/70",
        "--use-surface-theme-yellow-70",
        "var(--base-yellow-70)"
      ]
    ]
  };

  var COLOR_TOKENS = [
    [
      "base/brand/40",
      "--base-brand-40",
      "#ffe6d6"
    ],
    [
      "base/brand/50",
      "--base-brand-50",
      "#ffc299"
    ],
    [
      "base/brand/60",
      "--base-brand-60",
      "#ffa366"
    ],
    [
      "base/brand/70",
      "--base-brand-70",
      "#ff8533"
    ],
    [
      "base/brand/80",
      "--base-brand-80",
      "#ff6600"
    ],
    [
      "base/brand/90",
      "--base-brand-90",
      "#e63f0c"
    ],
    [
      "base/brand/100",
      "--base-brand-100",
      "#cc5200"
    ],
    [
      "base/brand/yellow",
      "--base-brand-yellow",
      "#ff980d"
    ],
    [
      "base/blue/30",
      "--base-blue-30",
      "#e6f1fb"
    ],
    [
      "base/blue/40",
      "--base-blue-40",
      "#d4e2fa"
    ],
    [
      "base/blue/50",
      "--base-blue-50",
      "#9fbef5"
    ],
    [
      "base/blue/60",
      "--base-blue-60",
      "#5c91f2"
    ],
    [
      "base/blue/70",
      "--base-blue-70",
      "#296ff0"
    ],
    [
      "base/blue/80",
      "--base-blue-80",
      "#1f53b5"
    ],
    [
      "base/blue/90",
      "--base-blue-90",
      "#18428f"
    ],
    [
      "base/blue/100",
      "--base-blue-100",
      "#2d4a67"
    ],
    [
      "base/cyan blue/10",
      "--base-cyan-blue-10",
      "#eef5fc"
    ],
    [
      "base/cyan blue/20",
      "--base-cyan-blue-20",
      "#d6e6f7"
    ],
    [
      "base/cyan blue/30",
      "--base-cyan-blue-30",
      "#b2d0ee"
    ],
    [
      "base/cyan blue/40",
      "--base-cyan-blue-40",
      "#8cb8e0"
    ],
    [
      "base/cyan blue/50",
      "--base-cyan-blue-50",
      "#6c9fd0"
    ],
    [
      "base/cyan blue/60",
      "--base-cyan-blue-60",
      "#5286bc"
    ],
    [
      "base/cyan blue/70",
      "--base-cyan-blue-70",
      "#4a74a5"
    ],
    [
      "base/cyan blue/80",
      "--base-cyan-blue-80",
      "#3c628c"
    ],
    [
      "base/cyan blue/90",
      "--base-cyan-blue-90",
      "#2d4f73"
    ],
    [
      "base/cyan blue/100",
      "--base-cyan-blue-100",
      "#1f3d5a"
    ],
    [
      "base/green-1/30",
      "--base-green-1-30",
      "#f7faf8"
    ],
    [
      "base/green-1/40",
      "--base-green-1-40",
      "#e6f7e8"
    ],
    [
      "base/green-1/50",
      "--base-green-1-50",
      "#9fe0b8"
    ],
    [
      "base/green-1/60",
      "--base-green-1-60",
      "#44bd75"
    ],
    [
      "base/green-1/70",
      "--base-green-1-70",
      "#22a152"
    ],
    [
      "base/green-1/80",
      "--base-green-1-80",
      "#0b853d"
    ],
    [
      "base/green-1/90",
      "--base-green-1-90",
      "#166936"
    ],
    [
      "base/green-1/100",
      "--base-green-1-100",
      "#0d3d1f"
    ],
    [
      "base/green-2/10",
      "--base-green-2-10",
      "#ecf7c9"
    ],
    [
      "base/green-2/20",
      "--base-green-2-20",
      "#d8ee9c"
    ],
    [
      "base/green-2/30",
      "--base-green-2-30",
      "#c5e270"
    ],
    [
      "base/green-2/40",
      "--base-green-2-40",
      "#b1d645"
    ],
    [
      "base/green-2/50",
      "--base-green-2-50",
      "#9dc71e"
    ],
    [
      "base/green-2/60",
      "--base-green-2-60",
      "#95bf1b"
    ],
    [
      "base/green-2/70",
      "--base-green-2-70",
      "#84ad16"
    ],
    [
      "base/green-2/80",
      "--base-green-2-80",
      "#6a8e11"
    ],
    [
      "base/green-2/90",
      "--base-green-2-90",
      "#516d0d"
    ],
    [
      "base/green-2/100",
      "--base-green-2-100",
      "#3f540a"
    ],
    [
      "base/neutral/10",
      "--base-neutral-10",
      "#f5f5f5"
    ],
    [
      "base/neutral/20",
      "--base-neutral-20",
      "#e0e0e0"
    ],
    [
      "base/neutral/30",
      "--base-neutral-30",
      "#cccccc"
    ],
    [
      "base/neutral/40",
      "--base-neutral-40",
      "#b8b8b8"
    ],
    [
      "base/neutral/50",
      "--base-neutral-50",
      "#a4a4a4"
    ],
    [
      "base/neutral/60",
      "--base-neutral-60",
      "#7f7f7f"
    ],
    [
      "base/neutral/70",
      "--base-neutral-70",
      "#666666"
    ],
    [
      "base/neutral/80",
      "--base-neutral-80",
      "#333333"
    ],
    [
      "base/neutral/90",
      "--base-neutral-90",
      "#292929"
    ],
    [
      "base/neutral/100 (Negro)",
      "--base-neutral-100-negro",
      "#111111"
    ],
    [
      "base/neutral/white",
      "--base-neutral-white",
      "#ffffff"
    ],
    [
      "base/neutral/black",
      "--base-neutral-black",
      "#000000"
    ],
    [
      "base/red/30",
      "--base-red-30",
      "#f7eeed"
    ],
    [
      "base/red/40",
      "--base-red-40",
      "#f2d8d5"
    ],
    [
      "base/red/50",
      "--base-red-50",
      "#ebada7"
    ],
    [
      "base/red/60",
      "--base-red-60",
      "#db7165"
    ],
    [
      "base/red/70",
      "--base-red-70",
      "#d14434"
    ],
    [
      "base/red/75",
      "--base-red-75",
      "#bb4945"
    ],
    [
      "base/red/80",
      "--base-red-80",
      "#9e3328"
    ],
    [
      "base/red/90",
      "--base-red-90",
      "#7d291f"
    ],
    [
      "base/red/100",
      "--base-red-100",
      "#521a14"
    ],
    [
      "base/orange/10",
      "--base-orange-10",
      "#fff2e3"
    ],
    [
      "base/orange/20",
      "--base-orange-20",
      "#ffe5cc"
    ],
    [
      "base/orange/40",
      "--base-orange-40",
      "#ffb380"
    ],
    [
      "base/orange/60",
      "--base-orange-60",
      "#cc7a33"
    ],
    [
      "base/orange/100",
      "--base-orange-100",
      "#6b4400"
    ],
    [
      "base/yellow/30",
      "--base-yellow-30",
      "#fff9ef"
    ],
    [
      "base/yellow/40",
      "--base-yellow-40",
      "#fff2d9"
    ],
    [
      "base/yellow/50",
      "--base-yellow-50",
      "#fce1ac"
    ],
    [
      "base/yellow/60",
      "--base-yellow-60",
      "#fcce72"
    ],
    [
      "base/yellow/70",
      "--base-yellow-70",
      "#ffc154"
    ],
    [
      "base/yellow/80",
      "--base-yellow-80",
      "#bf9034"
    ],
    [
      "base/yellow/90",
      "--base-yellow-90",
      "#967229"
    ],
    [
      "base/yellow/100",
      "--base-yellow-100",
      "#634a1a"
    ],
    [
      "product/medicina/Cyan",
      "--product-medicina-cyan",
      "#00e2db"
    ],
    [
      "product/medicina/Purple",
      "--product-medicina-purple",
      "#8268cb"
    ],
    [
      "product/medicina/Gray",
      "--product-medicina-gray",
      "#b3acab"
    ],
    [
      "product/accent/30",
      "--product-accent-30",
      "#f2fcff"
    ],
    [
      "product/accent/40",
      "--product-accent-40",
      "#e1f7fe"
    ],
    [
      "product/accent/50",
      "--product-accent-50",
      "#b3d7e0"
    ],
    [
      "product/accent/60",
      "--product-accent-60",
      "#8fc5d0"
    ],
    [
      "product/accent/70",
      "--product-accent-70",
      "#6bb4c0"
    ],
    [
      "product/accent/80",
      "--product-accent-80",
      "#47a4af"
    ],
    [
      "product/accent/90",
      "--product-accent-90",
      "#24939d"
    ],
    [
      "product/accent/100",
      "--product-accent-100",
      "#03838a"
    ],
    [
      "product/gray/5",
      "--product-gray-5",
      "#f8f7f7"
    ],
    [
      "product/gray/10",
      "--product-gray-10",
      "#eceaea"
    ],
    [
      "product/gray/20",
      "--product-gray-20",
      "#d9d5d5"
    ],
    [
      "product/gray/30",
      "--product-gray-30",
      "#c6c1c0"
    ],
    [
      "product/gray/40",
      "--product-gray-40",
      "#b3acab"
    ],
    [
      "product/gray/50",
      "--product-gray-50",
      "#a09796"
    ],
    [
      "product/gray/60",
      "--product-gray-60",
      "#8c8280"
    ],
    [
      "product/gray/70",
      "--product-gray-70",
      "#786e6c"
    ],
    [
      "product/gray/80",
      "--product-gray-80",
      "#635a59"
    ],
    [
      "product/gray/90",
      "--product-gray-90",
      "#4d4746"
    ],
    [
      "product/gray/100",
      "--product-gray-100",
      "#383333"
    ],
    [
      "product/violet/5",
      "--product-violet-5",
      "#efecf9"
    ],
    [
      "product/violet/10",
      "--product-violet-10",
      "#e0d9f3"
    ],
    [
      "product/violet/20",
      "--product-violet-20",
      "#c1b3e7"
    ],
    [
      "product/violet/30",
      "--product-violet-30",
      "#a28dda"
    ],
    [
      "product/violet/40",
      "--product-violet-40",
      "#8367ce"
    ],
    [
      "product/violet/50",
      "--product-violet-50",
      "#6d4cc5"
    ],
    [
      "product/violet/60",
      "--product-violet-60",
      "#5b3ab4"
    ],
    [
      "product/violet/70",
      "--product-violet-70",
      "#4e3199"
    ],
    [
      "product/violet/80",
      "--product-violet-80",
      "#40297e"
    ],
    [
      "product/violet/90",
      "--product-violet-90",
      "#322064"
    ],
    [
      "product/violet/100",
      "--product-violet-100",
      "#251749"
    ],
    [
      "product/teal/5",
      "--product-teal-5",
      "#ebfffe"
    ],
    [
      "product/teal/10",
      "--product-teal-10",
      "#d0fffd"
    ],
    [
      "product/teal/20",
      "--product-teal-20",
      "#a0fffc"
    ],
    [
      "product/teal/30",
      "--product-teal-30",
      "#71fffa"
    ],
    [
      "product/teal/40",
      "--product-teal-40",
      "#41fff8"
    ],
    [
      "product/teal/50",
      "--product-teal-50",
      "#12fff7"
    ],
    [
      "product/teal/60",
      "--product-teal-60",
      "#00e1d9"
    ],
    [
      "product/teal/70",
      "--product-teal-70",
      "#00c0b9"
    ],
    [
      "product/teal/80",
      "--product-teal-80",
      "#009f99"
    ],
    [
      "product/teal/90",
      "--product-teal-90",
      "#007d79"
    ],
    [
      "product/teal/100",
      "--product-teal-100",
      "#005c59"
    ],
    [
      "use/background/page",
      "--use-background-page",
      "var(--base-neutral-white)"
    ],
    [
      "use/primary/default",
      "--use-primary-default",
      "var(--base-brand-80)"
    ],
    [
      "use/primary/hover",
      "--use-primary-hover",
      "var(--base-brand-90)"
    ],
    [
      "use/primary/active",
      "--use-primary-active",
      "var(--base-brand-100)"
    ],
    [
      "use/primary/default dark",
      "--use-primary-default-dark",
      "#ff9d5c"
    ],
    [
      "use/border/default",
      "--use-border-default",
      "var(--base-neutral-30)"
    ],
    [
      "use/border/strong",
      "--use-border-strong",
      "var(--base-neutral-70)"
    ],
    [
      "use/border/subtle",
      "--use-border-subtle",
      "var(--base-neutral-20)"
    ],
    [
      "use/border/hover",
      "--use-border-hover",
      "var(--use-primary-hover)"
    ],
    [
      "use/border/violet-dark",
      "--use-border-violet-dark",
      "var(--product-violet-80)"
    ],
    [
      "use/border/violet",
      "--use-border-violet",
      "var(--product-violet-10)"
    ],
    [
      "use/focus/border",
      "--use-focus-border",
      "var(--base-brand-40)"
    ],
    [
      "use/focus/outline",
      "--use-focus-outline",
      "var(--base-brand-80)"
    ],
    [
      "use/focus/background",
      "--use-focus-background",
      "var(--base-brand-40)"
    ],
    [
      "use/text/primary",
      "--use-text-primary",
      "var(--base-neutral-100-negro)"
    ],
    [
      "use/text/secondary",
      "--use-text-secondary",
      "var(--base-neutral-80)"
    ],
    [
      "use/text/tertiary",
      "--use-text-tertiary",
      "var(--base-neutral-70)"
    ],
    [
      "use/text/inverse",
      "--use-text-inverse",
      "var(--base-neutral-10)"
    ],
    [
      "use/text/link",
      "--use-text-link",
      "var(--base-brand-80)"
    ],
    [
      "use/text/theme/violet",
      "--use-text-theme-violet",
      "var(--product-violet-70)"
    ],
    [
      "use/text/theme/yellow",
      "--use-text-theme-yellow",
      "var(--base-yellow-70)"
    ],
    [
      "use/text/theme/orange",
      "--use-text-theme-orange",
      "var(--base-orange-60)"
    ],
    [
      "use/text/theme/blue",
      "--use-text-theme-blue",
      "var(--base-blue-80)"
    ],
    [
      "use/text/theme/red",
      "--use-text-theme-red",
      "var(--base-red-75)"
    ],
    [
      "use/text/theme/green-1",
      "--use-text-theme-green-1",
      "var(--base-green-1-80)"
    ],
    [
      "use/text/theme/green-2",
      "--use-text-theme-green-2",
      "var(--base-green-2-80)"
    ],
    [
      "use/text/on-dark/primary",
      "--use-text-on-dark-primary",
      "var(--base-neutral-white)"
    ],
    [
      "use/text/on-dark/secondary",
      "--use-text-on-dark-secondary",
      "var(--base-neutral-10)"
    ],
    [
      "use/tables/Head",
      "--use-tables-head",
      "#a5d7d5"
    ],
    [
      "use/tables/Filter",
      "--use-tables-filter",
      "#e3e7ed"
    ],
    [
      "use/tables/Stripes",
      "--use-tables-stripes",
      "#f5f5f7"
    ],
    [
      "use/state/success/bg",
      "--use-state-success-bg",
      "var(--base-green-1-40)"
    ],
    [
      "use/state/success/text",
      "--use-state-success-text",
      "var(--base-green-1-100)"
    ],
    [
      "use/state/success/border",
      "--use-state-success-border",
      "var(--base-green-1-60)"
    ],
    [
      "use/state/success/icon",
      "--use-state-success-icon",
      "var(--base-green-1-80)"
    ],
    [
      "use/state/error/bg",
      "--use-state-error-bg",
      "var(--base-red-30)"
    ],
    [
      "use/state/error/text",
      "--use-state-error-text",
      "var(--base-red-100)"
    ],
    [
      "use/state/error/text-error-field",
      "--use-state-error-text-error-field",
      "var(--base-red-80)"
    ],
    [
      "use/state/error/icon",
      "--use-state-error-icon",
      "var(--base-red-70)"
    ],
    [
      "use/state/error/border",
      "--use-state-error-border",
      "var(--base-red-60)"
    ],
    [
      "use/state/error/mandatory",
      "--use-state-error-mandatory",
      "var(--base-red-75)"
    ],
    [
      "use/state/warning/bg",
      "--use-state-warning-bg",
      "var(--base-yellow-40)"
    ],
    [
      "use/state/warning/text",
      "--use-state-warning-text",
      "var(--use-text-primary)"
    ],
    [
      "use/state/warning/border",
      "--use-state-warning-border",
      "var(--base-yellow-60)"
    ],
    [
      "use/state/warning/icon bg",
      "--use-state-warning-icon-bg",
      "var(--base-yellow-70)"
    ],
    [
      "use/state/warning/icon color",
      "--use-state-warning-icon-color",
      "var(--use-text-primary)"
    ],
    [
      "use/state/info/bg",
      "--use-state-info-bg",
      "var(--base-blue-30)"
    ],
    [
      "use/state/info/text",
      "--use-state-info-text",
      "var(--base-blue-100)"
    ],
    [
      "use/state/info/border",
      "--use-state-info-border",
      "var(--base-cyan-blue-50)"
    ],
    [
      "use/state/info/icon",
      "--use-state-info-icon",
      "var(--base-cyan-blue-60)"
    ],
    [
      "use/overlay/subtle",
      "--use-overlay-subtle",
      "#000000"
    ],
    [
      "use/overlay/strong 2",
      "--use-overlay-strong-2",
      "#000000"
    ],
    [
      "use/overlay/strong 3",
      "--use-overlay-strong-3",
      "#000000"
    ],
    [
      "use/surface/surface",
      "--use-surface-surface",
      "var(--base-neutral-10)"
    ],
    [
      "use/surface/subtle",
      "--use-surface-subtle",
      "var(--product-gray-20)"
    ],
    [
      "use/surface/orange",
      "--use-surface-orange",
      "var(--base-orange-10)"
    ],
    [
      "use/surface/cyan blue",
      "--use-surface-cyan-blue",
      "var(--base-cyan-blue-10)"
    ],
    [
      "use/surface/violet",
      "--use-surface-violet",
      "var(--product-violet-5)"
    ],
    [
      "use/surface/white",
      "--use-surface-white",
      "var(--base-neutral-white)"
    ],
    [
      "use/surface/green",
      "--use-surface-green",
      "var(--base-green-1-30)"
    ],
    [
      "use/surface/green-2",
      "--use-surface-green-2",
      "var(--base-green-2-10)"
    ],
    [
      "use/surface/theme/blue-dark/30",
      "--use-surface-theme-blue-dark-30",
      "var(--base-blue-30)"
    ],
    [
      "use/surface/theme/blue-dark/40",
      "--use-surface-theme-blue-dark-40",
      "var(--base-blue-40)"
    ],
    [
      "use/surface/theme/blue-dark/50",
      "--use-surface-theme-blue-dark-50",
      "var(--base-blue-50)"
    ],
    [
      "use/surface/theme/blue-dark/60",
      "--use-surface-theme-blue-dark-60",
      "var(--base-blue-60)"
    ],
    [
      "use/surface/theme/blue-dark/90",
      "--use-surface-theme-blue-dark-90",
      "var(--base-blue-90)"
    ],
    [
      "use/surface/theme/gray/5",
      "--use-surface-theme-gray-5",
      "var(--product-gray-5)"
    ],
    [
      "use/surface/theme/gray/10",
      "--use-surface-theme-gray-10",
      "var(--product-gray-10)"
    ],
    [
      "use/surface/theme/gray/20",
      "--use-surface-theme-gray-20",
      "var(--product-gray-20)"
    ],
    [
      "use/surface/theme/green-1/30",
      "--use-surface-theme-green-1-30",
      "var(--base-green-1-30)"
    ],
    [
      "use/surface/theme/green-1/40",
      "--use-surface-theme-green-1-40",
      "var(--base-green-1-40)"
    ],
    [
      "use/surface/theme/green-1/50",
      "--use-surface-theme-green-1-50",
      "var(--base-green-1-50)"
    ],
    [
      "use/surface/theme/green-2/10",
      "--use-surface-theme-green-2-10",
      "var(--base-green-2-10)"
    ],
    [
      "use/surface/theme/green-2/20",
      "--use-surface-theme-green-2-20",
      "var(--base-green-2-20)"
    ],
    [
      "use/surface/theme/green-2/40",
      "--use-surface-theme-green-2-40",
      "var(--base-green-2-40)"
    ],
    [
      "use/surface/theme/green-2/60",
      "--use-surface-theme-green-2-60",
      "var(--base-green-2-60)"
    ],
    [
      "use/surface/theme/neutral/30",
      "--use-surface-theme-neutral-30",
      "var(--base-neutral-30)"
    ],
    [
      "use/surface/theme/orange/10",
      "--use-surface-theme-orange-10",
      "var(--base-orange-10)"
    ],
    [
      "use/surface/theme/orange/20",
      "--use-surface-theme-orange-20",
      "var(--base-orange-20)"
    ],
    [
      "use/surface/theme/orange/40",
      "--use-surface-theme-orange-40",
      "var(--base-orange-40)"
    ],
    [
      "use/surface/theme/orange/60",
      "--use-surface-theme-orange-60",
      "var(--base-orange-40)"
    ],
    [
      "use/surface/theme/red/30",
      "--use-surface-theme-red-30",
      "var(--base-red-30)"
    ],
    [
      "use/surface/theme/red/40",
      "--use-surface-theme-red-40",
      "var(--base-red-40)"
    ],
    [
      "use/surface/theme/red/50",
      "--use-surface-theme-red-50",
      "var(--base-red-50)"
    ],
    [
      "use/surface/theme/red/60",
      "--use-surface-theme-red-60",
      "var(--base-red-60)"
    ],
    [
      "use/surface/theme/violet/5",
      "--use-surface-theme-violet-5",
      "var(--product-violet-5)"
    ],
    [
      "use/surface/theme/violet/10",
      "--use-surface-theme-violet-10",
      "var(--product-violet-10)"
    ],
    [
      "use/surface/theme/violet/20",
      "--use-surface-theme-violet-20",
      "var(--product-violet-20)"
    ],
    [
      "use/surface/theme/violet/60",
      "--use-surface-theme-violet-60",
      "var(--product-violet-60)"
    ],
    [
      "use/surface/theme/violet/70",
      "--use-surface-theme-violet-70",
      "var(--product-violet-70)"
    ],
    [
      "use/surface/theme/yellow/30",
      "--use-surface-theme-yellow-30",
      "var(--base-yellow-30)"
    ],
    [
      "use/surface/theme/yellow/50",
      "--use-surface-theme-yellow-50",
      "var(--base-yellow-50)"
    ],
    [
      "use/surface/theme/yellow/60",
      "--use-surface-theme-yellow-60",
      "var(--base-yellow-60)"
    ],
    [
      "use/surface/theme/yellow/70",
      "--use-surface-theme-yellow-70",
      "var(--base-yellow-70)"
    ]
  ];

  var TEXT_TOKENS = [
    [
      "use/text/primary",
      "--use-text-primary",
      "var(--base-neutral-100-negro)",
      ""
    ],
    [
      "use/text/secondary",
      "--use-text-secondary",
      "var(--base-neutral-80)",
      ""
    ],
    [
      "use/text/tertiary",
      "--use-text-tertiary",
      "var(--base-neutral-70)",
      ""
    ],
    [
      "use/text/inverse",
      "--use-text-inverse",
      "var(--base-neutral-10)",
      ""
    ],
    [
      "use/text/link",
      "--use-text-link",
      "var(--base-brand-80)",
      ""
    ],
    [
      "use/text/theme/violet",
      "--use-text-theme-violet",
      "var(--product-violet-70)",
      ""
    ],
    [
      "use/text/theme/yellow",
      "--use-text-theme-yellow",
      "var(--base-yellow-70)",
      ""
    ],
    [
      "use/text/theme/orange",
      "--use-text-theme-orange",
      "var(--base-orange-60)",
      ""
    ],
    [
      "use/text/theme/blue",
      "--use-text-theme-blue",
      "var(--base-blue-80)",
      ""
    ],
    [
      "use/text/theme/red",
      "--use-text-theme-red",
      "var(--base-red-75)",
      ""
    ],
    [
      "use/text/theme/green-1",
      "--use-text-theme-green-1",
      "var(--base-green-1-80)",
      ""
    ],
    [
      "use/text/theme/green-2",
      "--use-text-theme-green-2",
      "var(--base-green-2-80)",
      ""
    ],
    [
      "use/text/on-dark/primary",
      "--use-text-on-dark-primary",
      "var(--base-neutral-white)",
      ""
    ],
    [
      "use/text/on-dark/secondary",
      "--use-text-on-dark-secondary",
      "var(--base-neutral-10)",
      ""
    ]
  ];

  var TABLE_TOKENS = [
    [
      "use/tables/Head",
      "--use-tables-head",
      "#a5d7d5",
      ""
    ],
    [
      "use/tables/Filter",
      "--use-tables-filter",
      "#e3e7ed",
      ""
    ],
    [
      "use/tables/Stripes",
      "--use-tables-stripes",
      "#f5f5f7",
      ""
    ]
  ];

  var SPACING = [
    [
      "--spacing-2px",
      "2px",
      2
    ],
    [
      "--spacing-4px",
      "4px",
      4
    ],
    [
      "--spacing-8px",
      "8px",
      8
    ],
    [
      "--spacing-12px",
      "12px",
      12
    ],
    [
      "--spacing-16px",
      "16px",
      16
    ],
    [
      "--spacing-24px",
      "24px",
      24
    ],
    [
      "--spacing-32px",
      "32px",
      32
    ],
    [
      "--spacing-40px",
      "40px",
      40
    ],
    [
      "--spacing-48px",
      "48px",
      48
    ],
    [
      "--spacing-56px",
      "56px",
      56
    ],
    [
      "--spacing-64px",
      "64px",
      64
    ],
    [
      "--spacing-72px",
      "72px",
      72
    ],
    [
      "--spacing-80px",
      "80px",
      80
    ],
    [
      "--spacing-96px",
      "96px",
      96
    ],
    [
      "--spacing-128px",
      "128px",
      128
    ]
  ];

  var BORDER_RADIUS = [
    [
      "--border-radius-xs",
      "8px",
      8
    ],
    [
      "--border-radius-sm",
      "16px",
      16
    ],
    [
      "--border-radius-md",
      "24px",
      24
    ],
    [
      "--border-radius-lg",
      "32px",
      32
    ]
  ];


  /* ══════════════════════════════════════════════════════════
     APP — THEME, TABS, COPY, TOAST
     ══════════════════════════════════════════════════════════ */
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    document.querySelectorAll('.theme-switcher button').forEach(function(b) { b.classList.remove('active'); });
    var map = { light: 'btn-light', dark: 'btn-dark', 'high-contrast': 'btn-hc' };
    var btn = document.getElementById(map[theme]);
    if (btn) btn.classList.add('active');
    try { localStorage.setItem('ds-theme', theme); } catch(e) {}
  }

  function switchTab(btn, targetId) {
    var block = btn.closest('.code-block');
    block.querySelectorAll('.code-tab').forEach(function(t) { t.classList.remove('active'); });
    block.querySelectorAll('.code-content pre').forEach(function(p) { p.classList.remove('active'); });
    btn.classList.add('active');
    var target = block.querySelector('#' + targetId);
    if (target) target.classList.add('active');
  }

  function copyCode(btn) {
    var pre = btn.closest('.code-content').querySelector('pre.active');
    if (!pre) return;
    navigator.clipboard.writeText(pre.innerText || pre.textContent).then(function() {
      btn.classList.add('copied');
      btn.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Copiado';
      setTimeout(function() {
        btn.classList.remove('copied');
        btn.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copiar';
      }, 2000);
    });
  }

  function copyToClipboard(text, msg) {
    msg = msg || 'Copiado';
    navigator.clipboard.writeText(text).then(function() { showToast(msg + ': ' + text); });
  }

  function showToast(msg) {
    var t = document.getElementById('toast');
    if (!t) return;
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(t._timer);
    t._timer = setTimeout(function() { t.classList.remove('show'); }, 2400);
  }

  /* ── Render: Color grids ─────────────────────────────── */
  function renderColorGrids() {
    for (var gridId in TOKEN_GROUPS) {
      if (!TOKEN_GROUPS.hasOwnProperty(gridId)) continue;
      var el = document.getElementById(gridId);
      if (!el) continue;
      var tokens = TOKEN_GROUPS[gridId];
      el.innerHTML = tokens.map(function(t) {
        return '<div class="color-card" onclick="copyToClipboard(\'' + t[1] + '\', \'CSS var copiado\')" title="Clic para copiar ' + t[1] + '">' +
          '<div class="color-swatch" style="background:' + t[2] + '"></div>' +
          '<div class="color-info">' +
            '<span class="color-name">' + t[0] + '</span>' +
            '<span class="color-var">' + t[1] + '</span>' +
            '<span class="color-hex">' + t[2] + '</span>' +
          '</div>' +
        '</div>';
      }).join('');
    }
  }

  /* ── Render: Spacing ─────────────────────────────────── */
  function renderSpacing() {
    var el = document.getElementById('spacing-list');
    if (!el) return;
    var maxPx = 256;
    el.innerHTML = SPACING.map(function(s) {
      return '<div class="spacing-row">' +
        '<span class="spacing-val">' + s[1] + '</span>' +
        '<div class="spacing-bar" style="width:' + Math.min(s[2] / maxPx * 100, 100) + '%"></div>' +
        '<span class="spacing-token">' + s[0] + '</span>' +
        '<button class="copy-token-btn" onclick="copyToClipboard(\'' + s[0] + '\', \'Token copiado\')">📋 Copiar var</button>' +
      '</div>';
    }).join('');
  }

  /* ── Render: Token tables ────────────────────────────── */
  function renderTokenTable(tableId, tokens) {
    var el = document.getElementById(tableId);
    if (!el) return;
    el.innerHTML = '<thead><tr><th>Token (Figma)</th><th>CSS Variable</th><th>Valor</th><th>Descripción</th><th></th></tr></thead>' +
      '<tbody>' + tokens.map(function(t) {
        return '<tr>' +
          '<td><span style="font-family:var(--font-code);font-size:12px">' + t[0] + '</span></td>' +
          '<td><div class="token-name-cell">' +
            '<span class="token-swatch-inline" style="background:' + t[2] + '"></span>' +
            '<code style="font-family:var(--font-code);font-size:12px;color:var(--ui-accent)">' + t[1] + '</code>' +
          '</div></td>' +
          '<td><code style="font-family:var(--font-code);font-size:12px">' + t[2] + '</code></td>' +
          '<td style="color:var(--ui-text-muted);font-size:12px">' + (t[3] || '') + '</td>' +
          '<td><button class="copy-token-btn" onclick="copyToClipboard(\'' + t[1] + '\', \'Copiado\')">📋</button></td>' +
        '</tr>';
      }).join('') + '</tbody>';
  }

  /* ── Accordion sidebar ───────────────────────────────── */
  var ACCORDION_MAP = {
    'colores-base':        'colores',
    'colores-producto':    'colores',
    'colores-uso':         'colores',
    'colores-utilidades':  'colores',
    'iconos-intro':        'iconos',
    'iconos-conectar':     'iconos',
    'iconos-libreria':     'iconos',
  };

  function initAccordions() {
    document.querySelectorAll('.sidebar-accordion').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var group  = btn.dataset.group;
        var subnav = document.getElementById('subnav-' + group);
        var isOpen = btn.classList.contains('open');
        document.querySelectorAll('.sidebar-accordion.open').forEach(function(other) {
          if (other !== btn) {
            other.classList.remove('open');
            var otherNav = document.getElementById('subnav-' + other.dataset.group);
            if (otherNav) otherNav.classList.remove('open');
          }
        });
        btn.classList.toggle('open', !isOpen);
        if (subnav) subnav.classList.toggle('open', !isOpen);
      });
    });
  }

  function openAccordionFor(sectionId) {
    var group = ACCORDION_MAP[sectionId];
    if (!group) return;
    var btn    = document.querySelector('.sidebar-accordion[data-group="' + group + '"]');
    var subnav = document.getElementById('subnav-' + group);
    if (btn)    btn.classList.add('open');
    if (subnav) subnav.classList.add('open');
  }

  /* ── Search ──────────────────────────────────────────── */
  function initSearch() {
    var input = document.getElementById('searchInput');
    if (!input) return;
    input.addEventListener('input', function() {
      var q = input.value.toLowerCase().trim();
      document.querySelectorAll('.sidebar-link[href^="#"]').forEach(function(link) {
        if (!q) { link.style.display = ''; return; }
        link.style.display = link.textContent.toLowerCase().includes(q) ? '' : 'none';
      });
    });
  }

  /* ── onSectionReady ──────────────────────────────────── */
  function onSectionReady(sectionId) {
    openAccordionFor(sectionId);
    // Re-exponer globals para onclick inline en fragmentos
    window.showToast       = showToast;
    window.copyToClipboard = copyToClipboard;
    window.switchTab       = switchTab;
    window.copyCode        = copyCode;
    window.setTheme        = setTheme;

    switch (sectionId) {
      case 'espaciado':    renderSpacing();    break;
      case 'colores-base':
      case 'colores-producto':
      case 'colores-uso':
      case 'colores-utilidades': renderColorGrids(); break;
      case 'tokens-texto':  renderTokenTable('table-text-tokens',  TEXT_TOKENS);  break;
      case 'tokens-tablas': renderTokenTable('table-table-tokens', TABLE_TOKENS); break;
    }
  }

  /* ══════════════════════════════════════════════════════════
     ROUTER / LOADER
     ══════════════════════════════════════════════════════════ */

  /* Detectar plataforma — app.html inyecta window.DS_PLATFORM='app' */
  var PLATFORM = (window.DS_PLATFORM === 'app') ? 'app' : 'drupal';

  /* Rutas base (Drupal / ZT) */
  var ROUTES = {
    'introduccion':       'docs/intro.html',
    'principios':         'docs/principles.html',
    'colores-base':       'docs/app/fundamentos/colors.html',
    'colores-producto':   'docs/app/fundamentos/colors.html',
    'colores-uso':        'docs/app/fundamentos/colors.html',
    'colores-utilidades': 'docs/app/fundamentos/colors.html',
    'tipografia':         'docs/app/fundamentos/typography.html',
    'espaciado':          'docs/app/fundamentos/spacing.html',
    'border-radius':      'docs/app/fundamentos/border-radius.html',
    'layout':             'docs/app/fundamentos/layout.html',
    'sombras':            'docs/app/fundamentos/shadows.html',
    'iconos-intro':       'docs/web/components/icons-intro.html',
    'iconos-conectar':    'docs/web/components/icons-connect.html',
    'iconos-libreria':    'docs/web/components/icons-library.html',
    'botones':            'docs/web/components/buttons.html',
    'inputs':             'docs/web/components/inputs.html',
    'badges':             'docs/web/components/badges.html',
    'tokens-texto':       'docs/tokens/tokens-text.html',
    'tokens-tablas':      'docs/tokens/tokens-tables.html',
  };

  /* Rutas específicas de App (.NET MAUI) — sobreescriben ROUTES cuando PLATFORM='app' */
  var APP_ROUTES = {
    'introduccion':       'docs/app/intro.html',
    'colores-base':       'docs/app/fundamentos/colors.html',
    'colores-producto':   'docs/app/fundamentos/colors.html',
    'colores-uso':        'docs/app/fundamentos/colors.html',
    'colores-utilidades': 'docs/app/fundamentos/colors.html',
    'tipografia':         'docs/app/fundamentos/typography.html',
    'espaciado':          'docs/app/fundamentos/spacing.html',
    'layout':             'docs/app/fundamentos/layout.html',
  };

  function resolveRoute(sectionId) {
    if (PLATFORM === 'app' && APP_ROUTES[sectionId]) return APP_ROUTES[sectionId];
    return ROUTES[sectionId];
  }

  var SCROLL_TARGETS = {
    'colores-base':       'colors-base',
    'colores-producto':   'colors-product',
    'colores-uso':        'colors-semantic',
    'colores-utilidades': 'colors-utilities',
  };

  var CACHE = {};
  var currentSection = null;
  var currentPath    = null;

  function fetchFragment(path, cb) {
    if (CACHE[path]) { cb(null, CACHE[path]); return; }
    var xhr = new XMLHttpRequest();
    xhr.open('GET', path, true);
    xhr.onload = function() {
      if (xhr.status >= 200 && xhr.status < 400) {
        CACHE[path] = xhr.responseText;
        cb(null, xhr.responseText);
      } else {
        cb(new Error('HTTP ' + xhr.status + ' — ' + path));
      }
    };
    xhr.onerror = function() { cb(new Error('Network error — ' + path)); };
    xhr.send();
  }

  function scrollToTarget(sectionId) {
    var targetId = SCROLL_TARGETS[sectionId];
    if (!targetId) { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    requestAnimationFrame(function() {
      var el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      else    window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  function updateSidebarActive(sectionId) {
    document.querySelectorAll('.sidebar-link').forEach(function(a) {
      var href = a.getAttribute('href');
      a.classList.toggle('active', href === '#' + sectionId);
    });
  }

  /*
   * navigateTo(sectionId, pushHistory)
   *   pushHistory = true  → navegación por clic en sidebar (agrega al historial)
   *   pushHistory = false → navegación por back/forward (el navegador ya actualizó
   *                         el historial, NO volvemos a hacer pushState)
   */
  function navigateTo(sectionId, pushHistory) {
    if (pushHistory === undefined) pushHistory = true;
    if (sectionId === currentSection) return;

    var path = resolveRoute(sectionId);
    if (!path) { console.warn('[router] Ruta no encontrada: ' + sectionId); return; }

    // ── Mismo fragmento, solo scroll ───────────────────────
    if (path === currentPath) {
      if (pushHistory) history.pushState({ sectionId: sectionId }, '', '#' + sectionId);
      updateSidebarActive(sectionId);
      currentSection = sectionId;
      scrollToTarget(sectionId);
      onSectionReady(sectionId);
      return;
    }

    // ── Carga de fragmento nuevo ────────────────────────────
    var content = document.getElementById('content');
    content.innerHTML =
      '<div class="fragment-loading">' +
        '<div class="fragment-loading-spinner"></div>' +
        '<span class="fragment-loading-text">Cargando sección…</span>' +
      '</div>';

    fetchFragment(path, function(err, html) {
      if (err) {
        content.innerHTML =
          '<div class="fragment-error">' +
            '<span class="material-symbols-rounded fragment-error-icon">error_outline</span>' +
            '<strong>No se pudo cargar la sección</strong>' +
            '<code>' + path + '</code>' +
            '<small>' + err.message + '</small>' +
          '</div>';
        console.error('[router]', err);
        return;
      }

      content.innerHTML = html;

      // Mover <link rel="stylesheet|preload"> al <head> para que carguen correctamente
      content.querySelectorAll('link[rel="stylesheet"], link[rel="preload"]').forEach(function(old) {
        var href = old.getAttribute('href');
        if (!href) return;
        // Evitar duplicados
        if (document.head.querySelector('link[href="' + href + '"]')) { old.remove(); return; }
        var l = document.createElement('link');
        Array.from(old.attributes).forEach(function(a) { l.setAttribute(a.name, a.value); });
        document.head.appendChild(l);
        old.remove();
      });

      // Re-ejecutar scripts inline del fragmento
      content.querySelectorAll('script').forEach(function(old) {
        var s = document.createElement('script');
        if (old.src) { s.src = old.src; }
        else { s.textContent = old.textContent; }
        document.head.appendChild(s);
        old.remove();
      });

      // Solo tocar el historial si vino de un clic del usuario
      if (pushHistory) {
        history.pushState({ sectionId: sectionId }, '', '#' + sectionId);
      }

      updateSidebarActive(sectionId);
      currentSection = sectionId;
      currentPath    = path;

      if (SCROLL_TARGETS[sectionId]) scrollToTarget(sectionId);
      else window.scrollTo({ top: 0, behavior: 'instant' });

      onSectionReady(sectionId);
    });
  }

  function initRouter() {
    // ── Clics en sidebar → push al historial ───────────────
    document.querySelectorAll('.sidebar-link[href^="#"]').forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        navigateTo(link.getAttribute('href').slice(1), true);
      });
    });

    // ── Back / Forward del navegador → NO push al historial ─
    window.addEventListener('popstate', function(e) {
      var id = (e.state && e.state.sectionId) || location.hash.slice(1) || 'introduccion';
      navigateTo(id, false); // false = el navegador ya movió el historial
    });
    // ── Carga inicial: replaceState para no duplicar la entrada ─
    var initial = location.hash.slice(1) || 'introduccion';
    // Registrar el estado inicial en el historial actual (sin añadir entrada nueva)
    history.replaceState({ sectionId: initial }, '', '#' + initial);
    navigateTo(initial, false); // false = ya hicimos replaceState arriba
  }

  /* ══════════════════════════════════════════════════════════
     INIT
     ══════════════════════════════════════════════════════════ */
  function init() {
    var saved;
    try { saved = localStorage.getItem('ds-theme'); } catch(e) {}
    if (saved) setTheme(saved);
    initAccordions();
    initSearch();
    var hash = location.hash.slice(1);
    if (hash) openAccordionFor(hash);
    window.setTheme        = setTheme;
    window.switchTab       = switchTab;
    window.copyCode        = copyCode;
    window.copyToClipboard = copyToClipboard;
    window.showToast       = showToast;
  }

  /* ── Auto-arranque ───────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function() {
    init();
    initRouter();
  });

})();
