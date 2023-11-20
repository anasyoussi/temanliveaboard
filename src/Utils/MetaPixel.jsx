import React from "react";
import { Helmet } from "react-helmet";

const MetaPixel = () => {
  return (
    <Helmet>
      <script>
         
      </script>
      <noscript id="facebook-pixel-image">
        <img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=24479123711701142&ev=PageView&noscript=1"/>
      </noscript>
    </Helmet>
  );
};

export default MetaPixel;