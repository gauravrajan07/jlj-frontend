import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

const Header = () => {
    const location = useLocation()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const navLinks = [
        { name: 'PUBLICATIONS', path: '/publications' },
        { name: 'EXPLORE', path: '/explore' },
        { name: 'STUDENT WRITING', path: '/student-writing' },
        { name: 'SUPREME COURT', path: '/supreme-court' },
        { name: 'FELLOWSHIP', path: '/fellowship' },
        { name: 'ABOUT', path: '/about' },
        { name: 'SYMPOSIUM', path: '/symposium' },
    ]

    return (
        <header style={{ backgroundColor: '#771313', overflowX: 'hidden', width: '100%' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem', paddingBottom:'8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '60px', paddingTop: '8px' }}>
                    {/* Logo */}
                    <Link to="/" style={{ flexShrink: 0 }}>
                        <img src="/logo.png" alt="Journal for Law and Justice" style={{ height: '48px' }} />
                    </Link>

                    {/* Center Title Box - Desktop */}
                    <div style={{ display: 'flex' }} className="hidden md:flex">
                        <div style={{ border: '1px solid white', padding: '6px 16px' }}>
                            <div style={{ color: 'white', fontSize: '10px', fontWeight: 'bold', letterSpacing: '0.1em', textAlign: 'center' }}>
                                JOURNAL FOR LAW<br />AND JUSTICE
                            </div>
                        </div>
                    </div>

                    {/* Navigation Links - Desktop */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }} className="hidden md:flex">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                style={{ color: 'white', fontSize: '9px', fontWeight: '500', letterSpacing: '0.05em', textDecoration: 'none', transition: 'opacity 0.2s' }}
                                className="hover:opacity-80"
                            >
                                {link.name}
                            </Link>
                        ))}
                        {/* Search Icon */}
                        <button style={{ color: 'white', background: 'none', border: 'none', cursor: 'pointer', marginLeft: '8px' }} className="hover:opacity-80">
                            <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        style={{ color: 'white', background: 'none', border: 'none', cursor: 'pointer' }}
                        className="md:hidden hover:opacity-80"
                    >
                        <svg style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation Menu */}
                {mobileMenuOpen && (
                    <div style={{ paddingBottom: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setMobileMenuOpen(false)}
                                style={{ color: 'white', fontSize: '9px', fontWeight: '500', padding: '8px 12px', textDecoration: 'none', borderRadius: '4px' }}
                                className="hover:bg-[#5a0f0f]"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button style={{ color: 'white', fontSize: '9px', fontWeight: '500', padding: '8px 12px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '6px', borderRadius: '4px' }} className="hover:bg-[#5a0f0f]">
                            <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            Search
                        </button>
                    </div>
                )}
            </div>

            {/* Breadcrumb for inner pages */}
            {location.pathname !== '/' && (
                <div style={{ backgroundColor: '#5a0f0f', color: 'white', fontSize: '10px', padding: '8px 1rem' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Link to="/" style={{ color: 'white', opacity: 0.8, textDecoration: 'none' }}>Home</Link>
                        <span style={{ opacity: 0.6 }}>/</span>
                        {location.pathname === '/submissions' && <span>Submissions</span>}
                        {location.pathname === '/submit' && (
                            <>
                                <Link to="/submissions" style={{ color: 'white', opacity: 0.8, textDecoration: 'none' }}>Submissions</Link>
                                <span style={{ opacity: 0.6 }}>/</span>
                                <span>Submit Now</span>
                            </>
                        )}
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header
