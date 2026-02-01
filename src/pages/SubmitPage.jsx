import { useState } from 'react'

const SubmitPage = () => {
    // State for logic
    const [exclusive, setExclusive] = useState('no')
    const [authorCount, setAuthorCount] = useState('0')
    const [isSubmitting, setIsSubmitting] = useState(false) // Loading state

    

const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const formData = new FormData(e.target)
            
            // 1. Prepare the JSON data
            const strapiData = {
                FirstName: formData.get('FirstName'),
                LastName: formData.get('LastName'),
                Title: formData.get('Title'),
                Email: formData.get('Email'),
                Phone: formData.get('Phone'),
                Address: formData.get('Address'),
                ArticleTitle: formData.get('ArticleTitle'),
                WordCount: Number(formData.get('WordCount')),
                ArticleType: formData.get('ArticleType'),
                Category: formData.get('Category'),
                Exclusive: exclusive === 'yes',
            }

            // 2. Create Payload
            const payload = new FormData()
            
            // 3. Append JSON 'data'
            payload.append('data', JSON.stringify(strapiData))

            // 4. Append Files
            const originalFile = formData.get('OriginalFile')
            if (originalFile instanceof File && originalFile.size > 0) {
                payload.append('files.OriginalFile', originalFile, originalFile.name)
            }

            const anonymizedFile = formData.get('AnonymizedFile')
            if (anonymizedFile instanceof File && anonymizedFile.size > 0) {
                payload.append('files.AnonymizedFile', anonymizedFile, anonymizedFile.name)
            }

            // --- DEBUG LOGGING (Check Console!) ---
            console.log("--- SUBMISSION DEBUG ---")
            for (var pair of payload.entries()) {
                console.log(pair[0] + ', ' + pair[1]); 
            }
            console.log("--------------------------")
            // --------------------------------------

            const response = await fetch('http://localhost:1337/api/submissions', {
                method: 'POST',
                body: payload,
            })

            const responseData = await response.json()

            if (response.ok) {
                alert("✅ Success! Check Strapi Admin.")
                e.target.reset()
                setExclusive('no')
            } else {
                console.error("Strapi Error Details:", responseData)
                alert(`Error: ${responseData.error?.message || "Unknown error"}`)
            }

        } catch (error) {
            console.error("Network Error:", error)
            alert("Network error. Is Strapi running?")
        } finally {
            setIsSubmitting(false)
        }
    }
    // --- STYLES ---
    const containerStyle = { maxWidth: '900px', margin: '0 auto', padding: '40px 20px', fontFamily: '"Times New Roman", Times, serif', color: '#333' }
    const headerStyle = { borderBottom: '1px solid #ddd', paddingBottom: '30px', marginBottom: '40px', textAlign: 'center' }
    const titleStyle = { fontSize: '42px', color: '#4b3342', marginBottom: '10px', fontWeight: 'normal' }
    const sectionHeaderStyle = { color: '#771313', fontSize: '14px', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase', borderBottom: '1px solid #771313', paddingBottom: '5px', marginBottom: '20px', display: 'inline-block' }
    const labelStyle = { display: 'block', fontSize: '11px', fontWeight: 'bold', color: '#666', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '5px' }
    const inputStyle = { width: '100%', border: 'none', borderBottom: '1px solid #ccc', padding: '8px 0', fontSize: '15px', backgroundColor: 'transparent', outline: 'none', transition: 'border-color 0.2s' }
    const selectStyle = { width: '100%', border: '1px solid #ccc', padding: '8px', fontSize: '14px', backgroundColor: '#f9f9f9', borderRadius: '0' }
    const rowStyle = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '25px' }
    const threeColStyle = { display: 'grid', gridTemplateColumns: '1fr 1.5fr 1fr', gap: '30px', marginBottom: '25px' }

    return (
        <div style={{ backgroundColor: '#fcfbf9', minHeight: '100vh' }}>
            
            <style>{`
                /* File input control: border, rounded corners and subtle shadow */
                input[type="file"] {
                    display: inline-block;
                    border: 1px dashed #771313;
                    padding: 6px 10px;
                    border-radius: 8px;
                    background-color: #fff;
                    box-shadow: 0 2px 6px rgba(0,0,0,0.04);
                    transition: box-shadow 0.15s, border-color 0.15s, transform 0.08s;
                    cursor: pointer;
                }

                input[type="file"]:hover {
                    box-shadow: 0 4px 10px rgba(0,0,0,0.08);
                    border-color: #5a0e0e;
                    transform: translateY(-1px);
                }

                input[type="file"]:focus {
                    outline: none;
                    box-shadow: 0 0 0 4px rgba(119,17,19,0.08);
                    border-color: #771313;
                }

                /* Style the file input button itself */
                input[type="file"]::file-selector-button {
                    background-color: #771313;
                    color: white;
                    border: 1px solid rgba(255,255,255,0.1);
                    padding: 8px 16px;
                    margin-right: 12px;
                    font-size: 11px;
                    font-weight: bold;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                    cursor: pointer;
                    border-radius: 6px;
                    box-shadow: inset 0 -2px 0 rgba(0,0,0,0.08);
                    transition: background-color 0.15s, transform 0.08s;
                }

                input[type="file"]::file-selector-button:hover {
                    background-color: #5a0e0e;
                    transform: translateY(-1px);
                }

                /* Main Submit Button: add border, rounded corners and shadow */
                .submit-btn {
                    border-radius: 8px;
                    border: 2px solid rgba(255,255,255,0.08);
                    box-shadow: 0 6px 18px rgba(119,17,19,0.12);
                    background-image: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(0,0,0,0.03));
                }

                .submit-btn:hover {
                    background-color: #5a0e0e !important;
                    transform: scale(1.02);
                    box-shadow: 0 8px 20px rgba(90,14,14,0.18);
                }

                .submit-btn:focus {
                    outline: 3px solid rgba(119,17,19,0.12);
                }

                .submit-btn:disabled {
                    background-color: #ccc !important;
                    cursor: not-allowed;
                    transform: none;
                    box-shadow: none;
                }

                /* Attachments card */
                .attachments-card {
                    border: 1px solid #e6d5d5;
                    border-radius: 8px;
                    padding: 18px;
                    background-color: #fffaf9;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.04);
                }
            `}</style>

            <div style={containerStyle}>
                <header style={headerStyle}>
                    <h1 style={titleStyle}>Submit Now</h1>
                </header>

                <form onSubmit={handleSubmit}>
                    
                    {/* --- PRIMARY CONTACT --- */}
                    <div style={{ marginBottom: '50px' }}>
                        <h3 style={sectionHeaderStyle}>Primary Contact</h3>

                        <div style={rowStyle}>
                            <div>
                                <label style={labelStyle}>First Name <span style={{color:'#a00'}}>*</span></label>
                                <input name="FirstName" type="text" style={inputStyle} placeholder="First Name" required />
                            </div>
                            <div>
                                <label style={labelStyle}>Last Name <span style={{color:'#a00'}}>*</span></label>
                                <input name="LastName" type="text" style={inputStyle} placeholder="Last Name" required />
                            </div>
                        </div>

                        <div style={threeColStyle}>
                             <div>
                                <label style={labelStyle}>Title <span style={{color:'#a00'}}>*</span></label>
                                <select name="Title" style={selectStyle}>
                                    <option value="">Please select...</option>
                                    <option>Prof.</option>
                                    <option>Judge</option>
                                    <option>Dr.</option>
                                    <option>Mr.</option>
                                    <option>Ms.</option>
                                </select>
                            </div>
                            <div>
                                <label style={labelStyle}>Email <span style={{color:'#a00'}}>*</span></label>
                                <input name="Email" type="email" style={inputStyle} placeholder="name@address.com" required />
                            </div>
                            <div>
                                <label style={labelStyle}>Phone <span style={{color:'#a00'}}>*</span></label>
                                <input name="Phone" type="tel" style={inputStyle} placeholder="Required" required />
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <label style={labelStyle}>Address</label>
                            <textarea name="Address" style={{ ...inputStyle, border: '1px solid #ccc', padding: '10px' }} rows="3"></textarea>
                        </div>
                    </div>

                    {/* --- ARTICLE INFORMATION --- */}
                    <div style={{ marginBottom: '50px' }}>
                        <h3 style={sectionHeaderStyle}>Article Information</h3>

                        <div style={{ marginBottom: '25px' }}>
                            <label style={labelStyle}>Article Title <span style={{color:'#a00'}}>*</span></label>
                            <input name="ArticleTitle" type="text" style={{ ...inputStyle, fontSize: '18px', fontFamily: 'serif' }} placeholder="Enter Article Title" required />
                        </div>

                        <div style={{ marginBottom: '25px', maxWidth: '300px' }}>
                            <label style={labelStyle}>Word Count <span style={{color:'#a00'}}>*</span></label>
                            <input name="WordCount" type="number" style={inputStyle} placeholder="Include text & footnotes" required />
                        </div>

                        <div style={rowStyle}>
                            <div>
                                <label style={labelStyle}>Article Type <span style={{color:'#a00'}}>*</span></label>
                                <select name="ArticleType" style={selectStyle}>
                                    <option value="">Please select...</option>
                                    <option>Article</option>
                                    <option>Essay</option>
                                    <option>Book Review</option>
                                    <option>Forum</option>
                                </select>
                            </div>
                            <div>
                                <label style={labelStyle}>Category <span style={{color:'#a00'}}>*</span></label>
                                <select name="Category" style={selectStyle}>
                                    <option value="">Please select...</option>
                                    <option>Constitutional Law</option>
                                    <option>Criminal Law</option>
                                    <option>Administrative Law</option>
                                    <option>International Law</option>
                                    <option>Other</option>
                                </select>
                            </div>
                        </div>

                        <div style={{ backgroundColor: '#f0f0f0', padding: '20px', borderLeft: '4px solid #771313' }}>
                            <label style={{ ...labelStyle, marginBottom: '10px' }}>Is this an exclusive submission?</label>
                            <div style={{ display: 'flex', gap: '20px' }}>
                                <label style={{ fontSize: '13px', fontWeight: 'bold', cursor: 'pointer' }}>
                                    <input 
                                        type="radio" 
                                        value="yes" 
                                        checked={exclusive === 'yes'} 
                                        onChange={() => setExclusive('yes')}
                                        style={{ marginRight: '5px' }} 
                                    />
                                    YES
                                </label>
                                <label style={{ fontSize: '13px', fontWeight: 'bold', cursor: 'pointer' }}>
                                    <input 
                                        type="radio" 
                                        value="no" 
                                        checked={exclusive === 'no'} 
                                        onChange={() => setExclusive('no')}
                                        style={{ marginRight: '5px' }} 
                                    />
                                    NO
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* --- ATTACHMENTS --- */}
                    <div className="attachments-card" style={{ marginBottom: '50px' }}>
                        <h3 style={sectionHeaderStyle}>Attachments</h3>

                        <div style={{ marginBottom: '25px' }}>
                            <label style={labelStyle}>Article Submission Attachment <span style={{color:'#a00'}}>*</span></label>
                            <input name="OriginalFile" type="file" style={{ display: 'block', marginTop: '5px' }} required />
                            <p style={{ fontSize: '10px', color: '#888', marginTop: '4px' }}>Required: Non-anonymized version.</p>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <label style={labelStyle}>Anonymized Submission Attachment <span style={{color:'#a00'}}>*</span></label>
                            <input name="AnonymizedFile" type="file" style={{ display: 'block', marginTop: '5px' }} required />
                            <p style={{ fontSize: '10px', color: '#888', marginTop: '4px' }}>Required: Anonymized version.</p>
                        </div>
                    </div>

                    <div style={{ textAlign: 'center' }}>
                        <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="submit-btn" 
                            style={{ 
                                backgroundColor: '#771313', 
                                color: 'white', 
                                border: 'none', 
                                padding: '15px 40px', 
                                fontSize: '12px', 
                                letterSpacing: '2px', 
                                fontWeight: 'bold', 
                                textTransform: 'uppercase', 
                                cursor: 'pointer',
                                transition: 'all 0.2s'
                            }}
                        >
                            {isSubmitting ? "Sending..." : "Submit Article"}
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default SubmitPage