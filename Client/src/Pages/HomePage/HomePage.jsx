import Button from "../../Components/Button/Button";
import Navbar from "../../Components/NavBar/Navbar"
import Image from '../../assets/background.png'


const HomePage = () => {




    const handleSubmit = () => {
        console.log("handle click")
    }

    return (
        <div>
            <Navbar />
            <div className="mt-14">
                <div className="flex flex-col md:flex-row ">
                    <div className="flex-1  md:w-1/2">
                        <img src={Image} alt="Image" className="h-full w-full object-cover" />
                    </div>
                    <div className="flex-1 p-10 flex flex-col justify-center items-center md:items-start md:w-1/2">
                        <div className="mb-8 text-center md:text-left">
                            <h1 className="text-4xl font-semibold font-serif mb-4">
                                DocuGenius: Effortlessly Generate Customized PDF Documents.
                            </h1>
                            <p className="text-gray-600">
                                Easily generate PDF documents tailored to your needs. Customize the
                                layout to match your requirements. Download and save
                                your customized PDFs with a single click.
                            </p>
                        </div>
                        <div className="mb-4 md:mb-0 space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row">
                            <Button onClick={handleSubmit} className="bg-red-400 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition w-full md:w-auto" text='Generate PDF' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;