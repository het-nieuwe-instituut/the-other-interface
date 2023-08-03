import { Global } from '@emotion/react'

const Fonts = () => {
  return (
    <Global
      styles={`
                /*
                This CSS resource incorporates links to font software which is the valuable copyrighted property of Monotype and/or its suppliers. You may not attempt to copy, install, redistribute, convert, modify or reverse engineer this font software. Please contact Monotype with any questions regarding Web Fonts: https://www.linotype.com
                */
                @import url("https://fast.fonts.net/lt/1.css?apiType=css&c=c86c7c85-d878-470c-927a-5e23e285b133&fontids=1475960,1475966,1476050,1476056");
                @font-face{
                    font-family:"Univers";
                    src:url("/Fonts/1475960/938b61cf-8b60-408a-a252-531fc37ebeb3.woff2") format("woff2"),url("/Fonts/1475960/df8a7a82-1b14-40c7-b6f8-7e2bac922b27.woff") format("woff");
                }
                @font-face{
                    font-family:"Univers Oblique;
                    src:url("/Fonts/1475966/16282755-c749-4137-8d4d-8f240f99754e.woff2") format("woff2"),url("/Fonts/1475966/1aefeb33-7095-4b96-a70b-3519dd04b66c.woff") format("woff");
                }
                @font-face{
                    font-family:"Univers bold";
                    src:url("/Fonts/1476050/2d34feca-2ff3-4551-9c7d-03de203b8c83.woff2") format("woff2"),url("/Fonts/1476050/08d88327-1175-41ad-819c-9b7f799ddd6b.woff") format("woff");
                }
                @font-face{
                    font-family:"Univers bold oblique";
                    src:url("/Fonts/1476056/98753b06-fa76-448d-adfe-c48d096d7555.woff2") format("woff2"),url("/Fonts/1476056/3d91ae6c-54b8-4354-8257-5b4bf04cc5ef.woff") format("woff");
                }
                @font-face{
                  font-family:"Times Dot";
                  src:url("/Fonts/timesDot/TimesDot.otf") format("otf"),url("/Fonts/timesDot/TimesDot.woff") format("woff");
                }
          `}
    />
  )
}

export default Fonts
