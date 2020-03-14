import React, { useCallback, useState } from 'react';
import { useThemeUI } from 'theme-ui';

const ImageZoom: React.FC<{}> = props => {
  const [isZoomed, setIsZoomed] = useState(false);
  const { theme } = useThemeUI();

  const image = {
    ...props,
    className: 'Image__Zoom',
    style: {
      display: 'block',
      margin: '0 auto',
      width: '100%',
      borderRadius: isZoomed ? '5px' : '0px',
    },
  };

  const handleZoomChange = useCallback(shouldZoom => {
    setIsZoomed(shouldZoom);
  }, []);

  return (
      <img
        className={image.className}
        src={image.src}
        alt={image.alt}
        style={image.style}
      />
  );
};

export default ImageZoom;
