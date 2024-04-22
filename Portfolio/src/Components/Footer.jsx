

const Footer = () => {
    return (
        <footer className="bg-[#0a192f] text-gray-500">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-wrap justify-between items-center">
                    <div className="w-full md:w-1/2 text-center md:text-left mb-4 md:mb-0">
                        <p className="text-sm">&copy; 2023 <a href="https://flowbite.com/" className="hover:text-blue-500">Sean Lim</a>. All Rights Reserved.</p>
                    </div>
                    <div className="w-full md:w-1/2 text-center md:text-right">
                        <ul className="flex flex-wrap justify-center md:justify-end space-x-4">
                            <li>
                                <a href="#" className="hover:text-white">About</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">Resume</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">Portfolio</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};


export default Footer