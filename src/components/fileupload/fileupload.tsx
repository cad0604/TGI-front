"use client";
import React, { useState, ChangeEvent, useRef, useEffect } from "react";

interface FileUploadWithOutCropWithOutMultipleProps {
  onChange?: (file: File | null) => void;
  nameofFile?: string;
  fileId?: string;
}

export const FileUploadWithOutCropWithOutMultiple: React.FC<
  FileUploadWithOutCropWithOutMultipleProps
> = (props) => {
  const { onChange } = props;
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;

    if (fileList && fileList.length > 0) {
      const file = fileList[0];
      setSelectedFile(file);

      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);

      if (onChange) {
        onChange(file);
      }
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setPreviewImage(null);
    if (onChange) {
      onChange(null);
    }
    // Clear the value of the existing input to remove the selected file
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  useEffect(() => {}, [selectedFile]);

  return (
    <div className={"p-2 max-w-[300px] max-h-auto cursor-pointer mt-4"}>
      <label htmlFor={props.fileId}>
        {!selectedFile && (
          <div
            className={
              "flex flex-col items-start justify-start w-[100px] gap-2 h-auto"
            }
          >
            <h4 className={"text-[18px] font-semibold"}>{props.nameofFile}</h4>
            <div className={"w-auto h-auto p-2 border-2 border-gray-500"}>
              Choose file
            </div>
          </div>
        )}
        <input
          accept="image/png, image/jpeg, image/jpg"
          className={"hidden"}
          id={props.fileId}
          type="file"
          onChange={handleFileChange}
          ref={(ref) => (fileInputRef.current = ref)}
        />
      </label>
      {previewImage && (
        <img
          className={"object-cover"}
          src={previewImage}
          alt="Preview"
          style={{ maxWidth: "100%", maxHeight: "200px" }}
        />
      )}
      {selectedFile && (
        <button
          className={"font-semibold mt-2 text-red-700"}
          type="button"
          onClick={handleRemoveFile}
        >
          Remove
        </button>
      )}
    </div>
  );
};
