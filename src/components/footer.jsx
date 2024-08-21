import React, { useState } from 'react';
import { FaChevronDown, FaInstagram, FaTwitter, FaYoutube, FaWhatsapp, FaFacebook } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const ScrollToTopLink = ({ to, children, ...props }) => {
    const navigate = useNavigate();

    const handleClick = (event) => {
        event.preventDefault();
        navigate(to);
        window.scrollTo(0, 0);
    };

    return (
        <Link to={to} onClick={handleClick} {...props}>
            {children}
        </Link>
    );
};

const MenuSection = ({ title, index, links, openMenu, toggleMenu }) => (
    <div className="menu-section flex flex-col mt-10 w-full lg:w-auto">
        <div onClick={() => toggleMenu(index)} className='text-xl font-semibold text-[#EFB81C] transition-all ease-in-out duration-300 cursor-pointer flex justify-between items-center gap-2'>
            {title}
            <FaChevronDown className="text-sm lg:hidden" />
        </div>
        {openMenu[index] && (
            <div className="links flex flex-col w-full">
                {links.map((link, idx) => (
                    <ScrollToTopLink key={idx} to={link.url} className='mt-3 hover:no-underline hover:text-[#EFB81C] transition-all ease-in-out duration-300'>
                        {link.label}
                    </ScrollToTopLink>
                ))}
            </div>
        )}
        <div className="links hidden lg:flex flex-col w-full hover:no-underline">
            {links.map((link, idx) => (
                <ScrollToTopLink key={idx} to={link.url} className='mt-3 hover:no-underline hover:text-[#EFB81C] transition-all ease-in-out duration-300'>
                    {link.label}
                </ScrollToTopLink>
            ))}
        </div>
    </div>
);

const SocialIcons = () => {
    const icons = [FaInstagram, FaTwitter, FaYoutube, FaWhatsapp, FaFacebook];
    return (
        <div className="flex flex-wrap gap-3 mt-12 justify-center">
            {icons.map((Icon, idx) => (
                <div key={idx} className="flex rounded-full justify-center items-center bg-[#DBDBDB] w-[40px] h-[40px] md:w-[30px] md:h-[30px] hover:opacity-60 ease-in-out transition-opacity duration-300">
                    <Icon className="w-6 h-6 text-black" />
                </div>
            ))}
        </div>
    );
};

const Footer = () => {
    const [openMenu, setOpenMenu] = useState({});

    const toggleMenu = (index) => {
        setOpenMenu((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    const menus = [
        {
            title: 'About',
            index: 1,
            links: [
                { label: 'Referral', url: '/referral' },
                { label: 'Submit Case', url: '/submit-case' },
                { label: 'Communities', url: '/communities' },
                { label: 'Risk Disclosure', url: '/risk-disclosure' },
                { label: 'Announcements', url: '/announcements' },
                { label: 'Proof of Reserve', url: '/proof-of-reserve' },
                { label: 'Careers', url: '/carrer' },
            ]
        },
        {
            title: 'Services',
            index: 2,
            links: [
                { label: 'About Us', url: '/about' },
                { label: 'Privacy Policy', url: '/privacy-policy' },
                { label: 'Help Center', url: '/help-center-list' },
                { label: 'Terms and Condition', url: '/terms-and-condition' },
                { label: 'Public Voting', url: '/public-voting' },
                { label: 'API', url: '/api' },
                { label: 'Upload Image', url: '/upload-image' },
            ]
        },
        {
            title: 'Support',
            index: 3,
            links: [
                { label: 'Submit a Request', url: '/request' },
                { label: 'Help Center', url: '/help-center' },
                { label: 'User Feedback', url: '/feedback' },
                { label: 'Authenticity Check', url: '/authenticity' },
                { label: 'FAQ', url: '/faq' },
            ]
        },
        {
            title: 'Products',
            index: 4,
            links: [
                { label: 'features', url: '/features' },
                { label: 'Derivatives', url: '#!' },
                { label: 'Earn', url: '/earn' },
                { label: 'Launchpad', url: '/launchpad' },
                { label: 'Add to Cart', url: '/add-to-cart' },
            ]
        },
        {
            title: 'learn',
            index: 5,
            links: [
                { label: 'Buy', url: '/buy' },
                { label: 'Course', url: '/course' },
                { label: 'Earn', url: '/earn' },
                { label: 'Sell', url: '/sell' },
                { label: 'Label', url: '/label' },
            ]
        },
    ];

    return (
        <footer className='footer w-full bg-[#fff] dark:bg-black'>
            <div className='footer-inner container mx-auto flex flex-col items-center py-8 lg:py-4'>
                <div className="footer-titles border-b py-4 lg:py-8 flex flex-wrap justify-evenly w-full">
                    {menus.map(menu => (
                        <MenuSection key={menu.index} title={menu.title} index={menu.index} links={menu.links} openMenu={openMenu} toggleMenu={toggleMenu} />
                    ))}
                </div>
                <SocialIcons />
                <div className="flex flex-col lg:flex-row justify-center items-center mt-7 text-neutral-400 text-xs">
                    <div className='flex gap-1 self-start px-5 lg:text-[18px] text-[16px] hover:opacity-60 ease-in-out transition-opacity duration-300'>
                        <span>2024 CrudApp. All rights reserved.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
