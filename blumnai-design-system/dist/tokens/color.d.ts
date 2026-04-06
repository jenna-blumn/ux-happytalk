/**
 * Color tokens extracted from Sort UI (Figma) via MCP (Figma Desktop).
 *
 * Notes
 * - Single global theme only (per MCP contract).
 * - Tokens are the only place raw color values are allowed.
 * - Keys mirror Sort UI variable paths (slashes become nesting; hyphens are preserved).
 */
export declare const color: {
    readonly palette: {
        readonly zinc: {
            readonly 0: "#ffffff";
            readonly 50: "#fafafa";
            readonly 100: "#f4f4f5";
            readonly 200: "#e9e9ec";
            readonly 300: "#dadadd";
            readonly 400: "#a1a1a9";
            readonly 500: "#6f6f77";
            readonly 600: "#4e4e55";
            readonly 700: "#36363a";
            readonly 800: "#222225";
            readonly 900: "#18181b";
            readonly 950: "#111115";
            readonly 1000: "#09090b";
        };
        readonly stone: {
            readonly 0: "#ffffff";
            readonly 50: "#fafaf9";
            readonly 100: "#f5f5f4";
            readonly 200: "#e7e5e4";
            readonly 300: "#d6d3d1";
            readonly 400: "#a6a09b";
            readonly 500: "#79716b";
            readonly 600: "#57534d";
            readonly 700: "#44403b";
            readonly 800: "#312c2b";
            readonly 900: "#24211e";
            readonly 950: "#14110f";
            readonly 1000: "#0c0a09";
        };
        readonly gray: {
            readonly 0: "#ffffff";
            readonly 50: "#f9fafb";
            readonly 100: "#f3f4f6";
            readonly 200: "#ebecef";
            readonly 300: "#d7dadf";
            readonly 400: "#9ea3ae";
            readonly 500: "#6d727f";
            readonly 600: "#4d5562";
            readonly 700: "#353c4a";
            readonly 800: "#1b2028";
            readonly 900: "#14171f";
            readonly 950: "#0d0f17";
        };
        readonly neutral: {
            readonly 0: "#ffffff";
            readonly 50: "#f9fafb";
            readonly 100: "#f3f4f6";
            readonly 200: "#ebecef";
            readonly 300: "#d7dadf";
            readonly 400: "#9ea3ae";
            readonly 500: "#6d727f";
            readonly 600: "#4d5562";
            readonly 700: "#353c4a";
            readonly 800: "#1b2028";
            readonly 900: "#14171f";
            readonly 950: "#0d0f17";
        };
        readonly slate: {
            readonly 50: "#f9fafc";
            readonly 100: "#f2f5f9";
            readonly 200: "#e8ecf2";
            readonly 300: "#d3dae4";
            readonly 400: "#97a3b6";
            readonly 500: "#677489";
            readonly 600: "#4a5567";
            readonly 700: "#364154";
            readonly 800: "#20293a";
            readonly 900: "#111622";
            readonly 950: "#090c1b";
        };
        readonly red: {
            readonly 50: "#fcf3f3";
            readonly 100: "#fae3e3";
            readonly 200: "#f7cccb";
            readonly 300: "#f4a6a5";
            readonly 400: "#ed6664";
            readonly 500: "#e74341";
            readonly 600: "#d42422";
            readonly 700: "#b11e1b";
            readonly 800: "#911f1c";
            readonly 900: "#77221f";
            readonly 950: "#400e0b";
        };
        readonly orange: {
            readonly 50: "#fef8ee";
            readonly 100: "#fceed7";
            readonly 200: "#f9d8ae";
            readonly 300: "#f7bb77";
            readonly 400: "#f38f36";
            readonly 500: "#f27313";
            readonly 600: "#e35706";
            readonly 700: "#a73b0c";
            readonly 800: "#702910";
            readonly 900: "#441c0d";
            readonly 950: "#301108";
        };
        readonly amber: {
            readonly 50: "#fffbec";
            readonly 100: "#fdf4cb";
            readonly 200: "#fae792";
            readonly 300: "#f9d455";
            readonly 400: "#f5bd1e";
            readonly 500: "#f09e0f";
            readonly 600: "#d37709";
            readonly 700: "#ae540d";
            readonly 800: "#8c4212";
            readonly 900: "#723715";
            readonly 950: "#411c07";
        };
        readonly yellow: {
            readonly 50: "#fefcea";
            readonly 100: "#fef9c8";
            readonly 200: "#fcf194";
            readonly 300: "#fbe152";
            readonly 400: "#f5ca0f";
            readonly 500: "#e7b413";
            readonly 600: "#c68b0b";
            readonly 700: "#9d630e";
            readonly 800: "#814e13";
            readonly 900: "#6c4118";
            readonly 950: "#3e220b";
        };
        readonly lime: {
            readonly 50: "#f9fee9";
            readonly 100: "#effccf";
            readonly 200: "#dff9a4";
            readonly 300: "#c7f26c";
            readonly 400: "#abe435";
            readonly 500: "#90cd22";
            readonly 600: "#6fa417";
            readonly 700: "#557c18";
            readonly 800: "#456219";
            readonly 900: "#3c531b";
            readonly 950: "#1e2e0a";
        };
        readonly green: {
            readonly 50: "#f3fdf5";
            readonly 100: "#e2fbe8";
            readonly 200: "#c6f6d2";
            readonly 300: "#99efae";
            readonly 400: "#66dc7e";
            readonly 500: "#4fc660";
            readonly 600: "#3ea44b";
            readonly 700: "#33803f";
            readonly 800: "#2b6536";
            readonly 900: "#265330";
            readonly 950: "#112d18";
        };
        readonly emerald: {
            readonly 50: "#effdf6";
            readonly 100: "#d9f9e6";
            readonly 200: "#b6f2d2";
            readonly 300: "#86e7b8";
            readonly 400: "#56d197";
            readonly 500: "#44ba82";
            readonly 600: "#35966a";
            readonly 700: "#2a7858";
            readonly 800: "#235f47";
            readonly 900: "#1e4e3c";
            readonly 950: "#0e2c22";
        };
        readonly teal: {
            readonly 50: "#f3fdfa";
            readonly 100: "#d5faf2";
            readonly 200: "#adf4e5";
            readonly 300: "#7ce9d5";
            readonly 400: "#53d2be";
            readonly 500: "#44b8a7";
            readonly 600: "#359489";
            readonly 700: "#2d766f";
            readonly 800: "#255e5a";
            readonly 900: "#234e4a";
            readonly 950: "#112e2e";
        };
        readonly cyan: {
            readonly 50: "#effeff";
            readonly 100: "#d7f9fd";
            readonly 200: "#b5f2fb";
            readonly 300: "#81e7fa";
            readonly 400: "#4ad0ef";
            readonly 500: "#3eb5d7";
            readonly 600: "#3090b5";
            readonly 700: "#297392";
            readonly 800: "#275d76";
            readonly 900: "#244d62";
            readonly 950: "#143243";
        };
        readonly sky: {
            readonly 50: "#f2f9ff";
            readonly 100: "#e3f2fd";
            readonly 200: "#c2e5fc";
            readonly 300: "#8cd2fd";
            readonly 400: "#4db9fa";
            readonly 500: "#37a3ee";
            readonly 600: "#2982cb";
            readonly 700: "#2067a4";
            readonly 800: "#1e5886";
            readonly 900: "#1d496e";
            readonly 950: "#122e48";
        };
        readonly blue: {
            readonly 50: "#f0f6fe";
            readonly 100: "#deeafd";
            readonly 200: "#c4dafc";
            readonly 300: "#9ac4fe";
            readonly 400: "#65a0fd";
            readonly 500: "#437dfc";
            readonly 600: "#2b5df3";
            readonly 700: "#2147dd";
            readonly 800: "#213bb2";
            readonly 900: "#223889";
            readonly 950: "#192453";
        };
        readonly indigo: {
            readonly 50: "#eff2fe";
            readonly 100: "#e1e7fd";
            readonly 200: "#c9d2fc";
            readonly 300: "#a6b3fd";
            readonly 400: "#7e86fb";
            readonly 500: "#6060f8";
            readonly 600: "#4b3bed";
            readonly 700: "#3f2fcf";
            readonly 800: "#352aa5";
            readonly 900: "#302c81";
            readonly 950: "#1d1a4a";
        };
        readonly violet: {
            readonly 50: "#f5f3fe";
            readonly 100: "#ece9fd";
            readonly 200: "#dcd6fc";
            readonly 300: "#beb0fd";
            readonly 400: "#a185fd";
            readonly 500: "#8655fd";
            readonly 600: "#762bf5";
            readonly 700: "#6717de";
            readonly 800: "#5517b9";
            readonly 900: "#471b94";
            readonly 950: "#2b0f64";
        };
        readonly purple: {
            readonly 50: "#f9f5fe";
            readonly 100: "#f1e8fd";
            readonly 200: "#e6d5fd";
            readonly 300: "#cea9fe";
            readonly 400: "#b87efe";
            readonly 500: "#a14efd";
            readonly 600: "#8c22f1";
            readonly 700: "#7712d2";
            readonly 800: "#651baa";
            readonly 900: "#521b86";
            readonly 950: "#360962";
        };
        readonly fuchsia: {
            readonly 50: "#fbf5fe";
            readonly 100: "#f7e9fe";
            readonly 200: "#f0d1fc";
            readonly 300: "#e59dfb";
            readonly 400: "#dd72fa";
            readonly 500: "#cf3ff3";
            readonly 600: "#b716d7";
            readonly 700: "#9a15b1";
            readonly 800: "#7e188f";
            readonly 900: "#691d74";
            readonly 950: "#44084d";
        };
        readonly pink: {
            readonly 50: "#fbf3f8";
            readonly 100: "#f9e8f3";
            readonly 200: "#f5d0e7";
            readonly 300: "#ef9fce";
            readonly 400: "#ea6eb3";
            readonly 500: "#e34798";
            readonly 600: "#d32475";
            readonly 700: "#b61a5c";
            readonly 800: "#951b4c";
            readonly 900: "#7b1e43";
            readonly 950: "#4a0c24";
        };
        readonly rose: {
            readonly 50: "#fdf2f2";
            readonly 100: "#fbe5e6";
            readonly 200: "#f7ced3";
            readonly 300: "#f49fa9";
            readonly 400: "#f16e81";
            readonly 500: "#eb3e5b";
            readonly 600: "#d91a45";
            readonly 700: "#b6133a";
            readonly 800: "#971838";
            readonly 900: "#7f1b37";
            readonly 950: "#460a19";
        };
        readonly transparent: {
            readonly light: {
                readonly '00': "#ffffff00";
                readonly 4: "#ffffff0a";
                readonly 6: "#ffffff0f";
                readonly 8: "#ffffff14";
                readonly 10: "#ffffff1a";
                readonly 15: "#ffffff26";
                readonly 20: "#ffffff33";
                readonly 25: "#ffffff40";
                readonly 30: "#ffffff4d";
                readonly 35: "#ffffff59";
                readonly 40: "#ffffff66";
                readonly 45: "#ffffff73";
                readonly 50: "#ffffff80";
                readonly 65: "#ffffffa6";
                readonly 70: "#ffffffb2";
            };
            readonly dark: {
                readonly '00': "#27272a00";
                readonly 4: "#27272a0a";
                readonly 6: "#27272a0f";
                readonly 8: "#27272a14";
                readonly 10: "#27272a1a";
                readonly 15: "#27272a26";
                readonly 20: "#27272a33";
                readonly 25: "#27272a40";
                readonly 30: "#27272a4d";
                readonly 35: "#27272a59";
                readonly 40: "#27272a66";
                readonly 45: "#27272a73";
                readonly 50: "#27272a80";
                readonly 65: "#27272aa6";
                readonly 70: "#27272ab2";
            };
            readonly red: {
                readonly 10: "#ee6e6c1a";
                readonly 20: "#ee6e6c33";
                readonly 30: "#ee6e6c4d";
                readonly 40: "#ee6e6c66";
                readonly 50: "#ee6e6c80";
                readonly 60: "#ee6e6c99";
                readonly 70: "#ee6e6cb2";
                readonly 80: "#ee6e6ccc";
                readonly 90: "#ee6e6ce5";
            };
            readonly orange: {
                readonly 10: "#f38f361a";
                readonly 20: "#f38f3633";
                readonly 30: "#f38f364d";
                readonly 40: "#f38f3666";
                readonly 50: "#f38f3680";
                readonly 60: "#f38f3699";
                readonly 70: "#f38f36b2";
                readonly 80: "#f38f36cc";
                readonly 90: "#f38f36e5";
            };
            readonly amber: {
                readonly 10: "#f5bd1e1a";
                readonly 20: "#f5bd1e33";
                readonly 30: "#f5bd1e4d";
                readonly 40: "#f5bd1e66";
                readonly 50: "#f5bd1e80";
                readonly 60: "#f5bd1e99";
                readonly 70: "#f5bd1eb2";
                readonly 80: "#f5bd1ecc";
                readonly 90: "#f5bd1ee5";
            };
            readonly yellow: {
                readonly 10: "#f5ca0f1a";
                readonly 20: "#f5ca0f33";
                readonly 30: "#f5ca0f4d";
                readonly 40: "#f5ca0f66";
                readonly 50: "#f5ca0f80";
                readonly 60: "#f5ca0f99";
                readonly 70: "#f5ca0fb2";
                readonly 80: "#f5ca0fcc";
                readonly 90: "#f5ca0fe5";
            };
            readonly lime: {
                readonly 10: "#abe4351a";
                readonly 20: "#abe43533";
                readonly 30: "#abe4354d";
                readonly 40: "#abe43566";
                readonly 50: "#abe43580";
                readonly 60: "#abe43599";
                readonly 70: "#abe435b2";
                readonly 80: "#abe435cc";
                readonly 90: "#abe435e5";
            };
            readonly green: {
                readonly 10: "#66dc7e1a";
                readonly 20: "#66dc7e33";
                readonly 30: "#66dc7e4d";
                readonly 40: "#66dc7e66";
                readonly 50: "#66dc7e80";
                readonly 60: "#66dc7e99";
                readonly 70: "#66dc7eb2";
                readonly 80: "#66dc7ecc";
                readonly 90: "#66dc7ee5";
            };
            readonly emerald: {
                readonly 10: "#56d1971a";
                readonly 20: "#56d19733";
                readonly 30: "#56d1974d";
                readonly 40: "#56d19766";
                readonly 50: "#56d19780";
                readonly 60: "#56d19799";
                readonly 70: "#56d197b2";
                readonly 80: "#56d197cc";
                readonly 90: "#56d197e5";
            };
            readonly teal: {
                readonly 10: "#53d2be1a";
                readonly 20: "#53d2be33";
                readonly 30: "#53d2be4d";
                readonly 40: "#53d2be66";
                readonly 50: "#53d2be80";
                readonly 60: "#53d2be99";
                readonly 70: "#53d2beb2";
                readonly 80: "#53d2becc";
                readonly 90: "#53d2bee5";
            };
            readonly cyan: {
                readonly 10: "#4ad0ef1a";
                readonly 20: "#4ad0ef33";
                readonly 30: "#4ad0ef4d";
                readonly 40: "#4ad0ef66";
                readonly 50: "#4ad0ef80";
                readonly 60: "#4ad0ef99";
                readonly 70: "#4ad0efb2";
                readonly 80: "#4ad0efcc";
                readonly 90: "#4ad0efe5";
            };
            readonly sky: {
                readonly 10: "#4db9fa1a";
                readonly 20: "#4db9fa33";
                readonly 30: "#4db9fa4d";
                readonly 40: "#4db9fa66";
                readonly 50: "#4db9fa80";
                readonly 60: "#4db9fa99";
                readonly 70: "#4db9fab2";
                readonly 80: "#4db9facc";
                readonly 90: "#4db9fae5";
            };
            readonly blue: {
                readonly 10: "#65a0fd1a";
                readonly 20: "#65a0fd33";
                readonly 30: "#65a0fd4d";
                readonly 40: "#65a0fd66";
                readonly 50: "#65a0fd80";
                readonly 60: "#65a0fd99";
                readonly 70: "#65a0fdb2";
                readonly 80: "#65a0fdcc";
                readonly 90: "#65a0fde5";
            };
            readonly indigo: {
                readonly 10: "#7e86fb1a";
                readonly 20: "#7e86fb33";
                readonly 30: "#7e86fb4d";
                readonly 40: "#7e86fb66";
                readonly 50: "#7e86fb80";
                readonly 60: "#7e86fb99";
                readonly 70: "#7e86fbb2";
                readonly 80: "#7e86fbcc";
                readonly 90: "#7e86fbe5";
            };
            readonly violet: {
                readonly 10: "#a185fd1a";
                readonly 20: "#a185fd33";
                readonly 30: "#a185fd4d";
                readonly 40: "#a185fd66";
                readonly 50: "#a185fd80";
                readonly 60: "#a185fd99";
                readonly 70: "#a185fdb2";
                readonly 80: "#a185fdcc";
                readonly 90: "#a185fde5";
            };
            readonly purple: {
                readonly 10: "#b87efe1a";
                readonly 20: "#b87efe33";
                readonly 30: "#b87efe4d";
                readonly 40: "#b87efe66";
                readonly 50: "#b87efe80";
                readonly 60: "#b87efe99";
                readonly 70: "#b87efeb2";
                readonly 80: "#b87efecc";
                readonly 90: "#b87efee5";
            };
            readonly fuchsia: {
                readonly 10: "#dd72fa1a";
                readonly 20: "#dd72fa33";
                readonly 30: "#dd72fa4d";
                readonly 40: "#dd72fa66";
                readonly 50: "#dd72fa80";
                readonly 60: "#dd72fa99";
                readonly 70: "#dd72fab2";
                readonly 80: "#dd72facc";
                readonly 90: "#dd72fae5";
            };
            readonly pink: {
                readonly 10: "#ea6eb31a";
                readonly 20: "#ea6eb333";
                readonly 30: "#ea6eb34d";
                readonly 40: "#ea6eb366";
                readonly 50: "#ea6eb380";
                readonly 60: "#ea6eb399";
                readonly 70: "#ea6eb3b2";
                readonly 80: "#ea6eb3cc";
                readonly 90: "#ea6eb3e5";
            };
            readonly rose: {
                readonly 10: "#f16e811a";
                readonly 20: "#f16e8133";
                readonly 30: "#f16e814d";
                readonly 40: "#f16e8166";
                readonly 50: "#f16e8180";
                readonly 60: "#f16e8199";
                readonly 70: "#f16e81b2";
                readonly 80: "#f16e81cc";
                readonly 90: "#f16e81e5";
            };
        };
    };
    readonly text: {
        readonly default: "#111115";
        readonly subtle: "#4e4e55";
        readonly muted: "#4e4e55";
        readonly hint: "#27272a4d";
        readonly inverted: {
            readonly default: "#ffffff";
            readonly subtle: "#ffffffb2";
            readonly muted: "#4e4e55";
            readonly hint: "#ffffff4d";
        };
        readonly white: {
            readonly default: "#ffffff";
            readonly subtle: "#ffffffb2";
            readonly muted: "#ffffff80";
            readonly hint: "#ffffff4d";
        };
        readonly dark: {
            readonly default: "#111115";
            readonly subtle: "#4e4e55";
            readonly muted: "#6f6f77";
            readonly hint: "#27272a59";
        };
        readonly destructive: "#d42422";
        readonly success: "#3ea44b";
        readonly warning: "#e35706";
        readonly informative: "#2b5df3";
    };
    readonly bg: {
        readonly default: "#ffffff";
        readonly subtle: "#fafafa";
        readonly muted: "#f4f4f5";
        readonly inverted: "#18181b";
        readonly accent: "#6f6f77";
        readonly card: {
            readonly default: "#ffffff";
            readonly subtle: "#fafafa";
            readonly inverted: "#222225";
        };
        readonly sidebar: {
            readonly default: "#ffffff";
            readonly subtle: "#fafafa";
        };
        readonly input: {
            readonly default: "#ffffff";
            readonly soft: "#27272a0f";
            readonly disabled: "#27272a0f";
        };
        readonly overlay: "#27272a0f";
        readonly state: {
            readonly primary: "#437dfc";
            readonly 'primary-hover': "#65a0fd";
            readonly 'primary-press': "#437dfc";
            readonly 'primary-loading': "#9ac4fe";
            readonly secondary: "#ffffff";
            readonly 'secondary-hover': "#fafafa";
            readonly 'secondary-press': "#f4f4f5";
            readonly soft: "#27272a0f";
            readonly 'soft-hover': "#27272a14";
            readonly 'soft-press': "#27272a1a";
            readonly ghost: "#27272a00";
            readonly 'ghost-hover': "#27272a0f";
            readonly 'ghost-press': "#27272a14";
            readonly 'ghost-inverted': "#ffffff00";
            readonly 'ghost-hover-inverted': "#ffffff14";
            readonly 'ghost-press-inverted': "#ffffff26";
            readonly destructive: "#e74341";
            readonly 'destructive-hover': "#ed6664";
            readonly 'destructive-press': "#e74341";
            readonly 'destructive-loading': "#f4a6a5";
            readonly brand: "#437dfc";
            readonly 'brand-hover': "#65a0fd";
            readonly 'brand-press': "#437dfc";
            readonly 'brand-loading': "#9ac4fe";
            readonly gray: "#111115";
            readonly disabled: "#27272a14";
        };
        readonly checkbox: {
            readonly default: "#ffffff";
            readonly active: "#437dfc";
            readonly 'active-hover': "#65a0fd";
            readonly disabled: "#27272a0f";
        };
        readonly switch: {
            readonly default: "#e9e9ec";
            readonly 'default-hover': "#dadadd";
            readonly disabled: "#f4f4f5";
            readonly active: "#4fc660";
            readonly 'active-hover': "#3ea44b";
            readonly 'active-disabled': "#c6f6d2";
            readonly handle: "#ffffff";
            readonly 'handle-disabled': "#fafafa";
        };
    };
    readonly border: {
        readonly default: "#27272a1a";
        readonly darker: "#27272a26";
        readonly strong: "#27272a40";
        readonly inverted: "#ffffff33";
        readonly accent: "#111115";
        readonly 'accent-inverted': "#ffffff";
        readonly destructive: "#e74341";
        readonly informative: "#437dfc";
        readonly success: "#4fc660";
        readonly warning: "#f27313";
        readonly highlight: "#65a0fd66";
        readonly 'highlight-destructive': "#ee6e6c66";
        readonly 'input-highlight': "#27272a66";
    };
};
