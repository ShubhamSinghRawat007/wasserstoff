import React, { useCallback, useState } from 'react';
import './FileUploader.css';

interface FileUploaderProps {
  onFileUpload: (file: File) => void;
}

export const FileUploader: React.FC<FileUploaderProps> = ({ onFileUpload }) => {
  const [dragActive, setDragActive] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        const file = e.dataTransfer.files[0];
        onFileUpload(file);
        setPreviewUrl(URL.createObjectURL(file));
      }
    },
    [onFileUpload]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      if (e.target.files && e.target.files[0]) {
        const file = e.target.files[0];
        onFileUpload(file);
        setPreviewUrl(URL.createObjectURL(file));
      }
    },
    [onFileUpload]
  );

  return (
    <div
      className={`file-uploader ${dragActive ? 'active' : ''}`}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <input
        type="file"
        id="file-upload"
        accept="image/*"
        onChange={handleChange}
      />
      <label htmlFor="file-upload">
        {previewUrl ? (
          <div className="preview-container">
            <img src={previewUrl} alt="Uploaded avatar" className="preview-image" />
            <p className="hint">Click to change avatar</p>
          </div>
        ) : (
          <div className="upload-content">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M19 13V19H5V13H3V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13H19ZM13 13V5H11V13H8L12 17L16 13H13Z"
                fill="#6e45e2"
              />
            </svg>
            <p>Drag & drop your avatar or click to browse</p>
            <p className="hint">PNG, JPG up to 2MB</p>
          </div>
        )}
      </label>
    </div>
  );
};