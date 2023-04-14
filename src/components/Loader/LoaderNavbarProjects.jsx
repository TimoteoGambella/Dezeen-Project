import React from 'react'
import ContentLoader from "react-content-loader";

const LoaderNavbarProjects = () => (
  <ContentLoader 
    speed={1.2}
    width={500}
    height={64}
    backgroundColor="#ffffff"
    foregroundColor="#e6e6e6"
  >
    <rect x="0" y="34" rx="3" ry="3" width="88" height="6" /> 
    <rect x="100" y="34" rx="3" ry="3" width="88" height="6" /> 
    <rect x="200" y="34" rx="3" ry="3" width="88" height="6" /> 
    <rect x="300" y="34" rx="3" ry="3" width="88" height="6" /> 
    <rect x="400" y="34" rx="3" ry="3" width="88" height="6" />
  </ContentLoader>
);
export default LoaderNavbarProjects