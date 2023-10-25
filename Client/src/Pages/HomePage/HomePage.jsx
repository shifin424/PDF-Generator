import React, { useState } from 'react';
import Button from '../../Components/Button/Button';
import Navbar from '../../Components/NavBar/Navbar';
import Image from '../../assets/background.png';
import Modal from '../../Components/Modal/Modal';
import Gif from '../../assets/gif.gif';
import { uploadPdfApi } from '../../Services/UserServices';


const HomePage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setSelectedFile(file);
    } else {
      setSelectedFile(null);
      alert("Please select a valid PDF file.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    if (!selectedFile) {
      alert("Please select a PDF file to upload.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("pdfFile", selectedFile);

      const response = await uploadPdfApi(formData);
      console.log(response, "front-end response");
      closeModal();
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div>
      <Navbar />
      <div className="mt-14">
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 md:w-1/2">
            <img src={Image} alt="Image" className="h-full w-full object-cover" />
          </div>
          <div className="flex-1 p-10 flex flex-col justify-center items-center md:items-start md:w-1/2">
            <div className="mb-8 text-center md:text-left">
              <h1 className="text-4xl font-semibold font-serif mb-4">
                DocuGenius: Effortlessly Generate Customized PDF Documents.
              </h1>
              <p className="text-gray-600">
                Easily generate PDF documents tailored to your needs. Customize the
                layout to match your requirements. Download and save your customized PDFs with a single click.
              </p>
            </div>
            <div className="mb-4 md:mb-0 space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row">
              <Button
                onClick={openModal}
                className="bg-red-400 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition w-full md:w-auto"
                text="Upload PDF"
              />
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="modal-content py-4 text-left px-6">
          <h2 className="text-2xl font-bold font-sans mb-3">Upload PDF Here</h2>
          {selectedFile ? (
            <div className="text-green-500 font-semibold mb-4 font-sans"> Ready for upload</div>
          ) : (
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-black border-dashed rounded-lg cursor-pointer bg-white dark:bg-gray-700 hover:border-gray-500 dark:hover:border-gray-400"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">PDF files only (MAX. 800x400px)</p>
                </div>
                <input id="dropzone-file"  type="file" className="hidden" name='pdfFile' accept=".pdf" onChange={handleFileUpload} />
              </label>
            </div>
          )}
          {selectedFile && (
            <img src={Gif} alt="GIF" className="w-40 h-40 mb-4 mx-auto" />
          )}
        </div>
        <div className="modal-footer p-3">
          <div className="flex items-center justify-center w-full space-y-4 md:space-y-0 space-x-4">
            {selectedFile ? (
              <Button
               onClick={handleSubmit}
                type='submit'
                className="bg-green-400 mb-5 text-white px-12 py-2 rounded-lg hover:bg-green-500"
                text="Upload Now"
              />
            ) : (
              <Button
                onClick={closeModal}
                className="bg-red-400 mb-5 text-white px-20 py-2 rounded-lg hover:bg-red-500"
                text="Close"
              />
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default HomePage;
