import { RiPantoneLine } from 'react-icons/ri'

const isAdminView = false;
const isAuthUser = false;

const Navbar = () => {
    return (
        <>
            <nav className='bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200'>
                <div className='max-w-screen-xl flex flex-wrap items-center justiify-between mx-auto p-6'>
                    <div className='flex items-center cursor-pointer'>
                        <span className='self-center text-2xl font-semibold whitespace-nowrap'>
                            <h2 className="d-flex align-items-center" style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                height: "100%"
                            }}>
                                <RiPantoneLine style={{ 'margin': '0px', 'color': ' #0a2b1e' }} /> COK
                            </h2>
                        </span>
                        <p className='text-xs' style={{ 'color': 'rgb(37, 20, 20)' }}>Academy</p>
                    </div>
                    <div className='flex md:order-2 gap-2' >

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar