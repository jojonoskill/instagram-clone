import React, {useState} from 'react';

const ChangeProfilePopup = () => {
  const [imageDataUrl, setImageDataUrl] = useState("");
  const [base64, setBase64] = useState("");

  const handleImageInputChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (event) {
      const imageDataUrl = event.target.result;
      setImageDataUrl(imageDataUrl);
      setBase64(imageDataUrl.split(",")[1]);
    };

    reader.readAsDataURL(file);
  };

  const handleBase64Change = (event) => {
    setBase64(event.target.value);
  };

  const convertFromBase64 = () => {
    const imageDataUrl = `data:image/jpeg;base64,${base64}`;
    setImageDataUrl(imageDataUrl);
  };
  return (
      <div>

      </div>
  );
};

export default ChangeProfilePopup;
