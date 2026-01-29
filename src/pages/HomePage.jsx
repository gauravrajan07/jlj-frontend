import { Link } from 'react-router-dom'
import Markdown from 'react-markdown'

const HomePage = ({ papers }) => {
    // Appendix Articles
    const appendixArticles = [
        {
            category: 'APPENDIX',
            title: 'Appendix to Practical Consequences in Statutory Interpretation',
            description: '* * * Case Name/Citation/Form of Comparison / Level of Reliance/Original/Defensive/\'Plain/Meaning\'/Abbott v. Perez/8 S. Ct. 295 (xxxi)lieb policy and administrability / Undesirable results - Unworkability / Same reliance/Dissent (Sotomayor)/So/So/Abbot1 v. Perez*/8 S. Ct. 295 (2018)/Policy /...',
        },
        {
            category: 'APPENDIX',
            title: 'Appendix to Practical Consequences in Statutory Interpretation',
            description: '* * * Case Name/Citation/Form of Comparison / Level of Reliance/Original/Defensive/\'Plain/Meaning\'/Abbott v. Perez/8 S. Ct. 295 (xxxi)lieb policy and administrability / Undesirable results - Unworkability / Same reliance/Dissent (Sotomayor)/So/So/Abbot1 v. Perez*/8 S. Ct. 295 (2018)/Policy /...',
        },
        {
            category: 'APPENDIX',
            title: 'Appendix to Practical Consequences in Statutory Interpretation',
            description: '* * * Case Name/Citation/Form of Comparison / Level of Reliance/Original/Defensive/\'Plain/Meaning\'/Abbott v. Perez/8 S. Ct. 295 (xxxi)lieb policy and administrability / Undesirable results - Unworkability / Same reliance/Dissent (Sotomayor)/So/So/Abbot1 v. Perez*/8 S. Ct. 295 (2018)/Policy /...',
        },
        {
            category: 'APPENDIX',
            title: 'Appendix to Practical Consequences in Statutory Interpretation',
            description: '* * * Case Name/Citation/Form of Comparison / Level of Reliance/Original/Defensive/\'Plain/Meaning\'/Abbott v. Perez/8 S. Ct. 295 (xxxi)lieb policy and administrability / Undesirable results - Unworkability / Same reliance/Dissent (Sotomayor)/So/So/Abbot1 v. Perez*/8 S. Ct. 295 (2018)/Policy /...',
        },
    ]

    // Recent Cases
    const recentCases = [
        { category: 'ANTITRUST', type: 'RECENT CASE', title: 'Cangrejeros de Santurce Baseball Club, LLC v. Liga de Béisbol Profesional de Puerto Rico, Inc.', description: 'baseball isn\'t unique only for being "America\'s pastime." It is also unique because activities involving the "business . . . of baseball" are exempt from federal antitrust laws on the ground that they are not interstate commerce. This "business of...' },
        { category: 'CONSTITUTIONAL LAW', type: 'RECENT CASE', title: 'United States v. Duarte', description: 'After New York State Rifle & Pistol Ass\'n v. Bruen, 825032 challenges proliferate. Enacted as the "centerpiece" of the Gun Control Act of 1968, 18 U.S.C. § 922(g) categorically bars certain classes of individuals from possessing firearms...' },
        { category: 'FEDERAL COMMON LAW', type: 'RECENT CASE', title: 'Elam v. Early', description: 'Courts often consult extrajudicial, preinflation sources such as Blackstone\'s Commentaries and The Spirit of Justinian when rendering decisions in common law actions. These authorities can help guide courts in cases where a state\'s common law may...' },
        { category: 'ANTITRUST', type: 'RECENT CASE', title: 'Cangrejeros de Santurce Baseball Club, LLC v. Liga de Béisbol Profesional de Puerto Rico, Inc.', description: 'baseball isn\'t unique only for being "America\'s pastime." It is also unique because activities involving the "business . . . of baseball" are exempt from federal antitrust laws on the ground that they are not interstate commerce. This "business of...' },
    ]

    // Forum Articles
    const forumArticles = [
        { category: 'CRIMINAL JUSTICE', type: 'FELLOWSHIP ESSAY', title: 'Qualified Immunity for "Just Following Orders"', author: 'SIMONE WALLER' },
        { category: 'FIRST AMENDMENT/SPEECH', type: 'ESSAY', title: '"Our Money or Your Life!" Higher Education and the First Amendment', author: 'CASS R. SUNSTEIN' },
        { category: 'CIVIL RIGHTS', type: 'RESPONSE', title: 'Zionism and Title VI', subtitle: 'Response to Antisemitism, Anti-Zionism, and Title VI: A Guide for the Perplexed', author: 'STEPHEN E. SACHS' },
        { category: 'CIVIL RIGHTS', type: 'RESPONSE', title: 'Zionism and Title VI', subtitle: 'Response to Antisemitism, Anti-Zionism, and Title VI: A Guide for the Perplexed', author: 'STEPHEN E. SACHS' },
        { category: 'CIVIL RIGHTS', type: 'RESPONSE', title: 'Zionism and Title VI', subtitle: 'Response to Antisemitism, Anti-Zionism, and Title VI: A Guide for the Perplexed', author: 'STEPHEN E. SACHS' },
        { category: 'CIVIL RIGHTS', type: 'RESPONSE', title: 'Zionism and Title VI', subtitle: 'Response to Antisemitism, Anti-Zionism, and Title VI: A Guide for the Perplexed', author: 'STEPHEN E. SACHS' },
    ]

    // Blog Articles
    const blogArticles = [
        { category: 'ARTIFICIAL INTELLIGENCE', type: 'BLOG ESSAY', title: 'Executive Preemption and the Dormant Commerce Clause After Pataki and Paxton', date: 'January 15, 2026', author: 'J. B. BRANCH' },
        { category: 'ARTIFICIAL INTELLIGENCE', type: 'BLOG ESSAY', title: 'Executive Preemption and the Dormant Commerce Clause After Pataki and Paxton', date: 'January 17, 2026', author: 'J. B. BRANCH' },
        { category: 'ARTIFICIAL INTELLIGENCE', type: 'BLOG ESSAY', title: 'Executive Preemption and the Dormant Commerce Clause After Pataki and Paxton', date: 'January 17, 2026', author: 'J. B. BRANCH' },
        { category: 'ARTIFICIAL INTELLIGENCE', type: 'BLOG ESSAY', title: 'Executive Preemption and the Dormant Commerce Clause After Pataki and Paxton', date: 'January 17, 2026', author: 'J. B. BRANCH' },
        { category: 'ARTIFICIAL INTELLIGENCE', type: 'BLOG ESSAY', title: 'Executive Preemption and the Dormant Commerce Clause After Pataki and Paxton', date: 'January 15, 2026', author: 'J. B. BRANCH' },
    ]

    // Explore Topics
    const exploreTopics = ['CONSTITUTIONAL LAW', 'CRIMINAL LAW', 'ABORTION', 'FOURTEENTH AMENDMENT', 'FAMILY LAW']

    // Archive Articles
    const archiveArticles = [
        { category: 'CONSTITUTIONAL INTERPRETATION', type: 'ARTICLES', title: 'All things being unequal', author: 'SARAH MCKINLEY' },
        { category: 'CONSTITUTIONAL INTERPRETATION', type: 'ARTICLES', title: 'All things being unequal', author: 'SARAH MCKINLEY' },
        { category: 'CONSTITUTIONAL INTERPRETATION', type: 'ARTICLES', title: 'All things being unequal', author: 'SARAH MCKINLEY' },
        { category: 'CONSTITUTIONAL INTERPRETATION', type: 'ARTICLES', title: 'All things being unequal', author: 'SARAH MCKINLEY' },
    ]

    const essays = [
        { category: 'ARTICLE III', type: 'ESSAY', title: 'Interim Orders, the Presidency, and Judicial Supremacy', author: 'JACK GOLDSMITH' },
        { category: 'CONSTITUTIONAL INTERPRETATION', type: 'ESSAY', title: 'Originalism\'s Age of Ironies', author: 'SHERIF GIRGIS' },
    ]

    const bookReviews = [
        { category: 'ABORTION LAW', type: 'BOOK REVIEW', title: 'How to Get Free in a Time of Retrenchment', author: 'KIMBERLY MUTCHERSON' },
        { category: 'BANKRUPTCY', type: 'BOOK REVIEW', title: 'Who\'s Afraid of Bankruptcy', author: 'ABBYE ATKINSON' },
    ]

    const tributes = [
        { category: 'IN MEMORIAM', type: 'TRIBUTE', title: 'In Memoriam: Justice David H. Souter', authors: '' },
        { category: 'IN MEMORIAM', type: 'TRIBUTE', title: 'In Memoriam: Professor Charles Fried', authors: 'STEPHEN BREYER • JOHN C.P. GOLDBERG • RICHARD J. LAZARUS • MARTHA MINOW • STEPHEN E. SACHS' },
    ]

    const recentlyCited = [
        { category: 'HABEAS CORPUS', type: 'LEADING CASE', title: 'Shinn v. Ramirez' },
        { category: 'HABEAS CORPUS', type: 'LEADING CASE', title: 'Shinn v. Ramirez' },
        { category: 'HABEAS CORPUS', type: 'LEADING CASE', title: 'Shinn v. Ramirez' },
    ]

    return (
        <div className="bg-white" style={{ overflowX: 'hidden', maxWidth: '100vw' }}>
            {/* Hero Section */}
            <section style={{ backgroundColor: '#e8e4db', padding: '2rem 1rem' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ backgroundColor: 'white', border: '1px solid #ddd', padding: '1.5rem', maxWidth: '600px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', marginBottom: '12px' }}>
                            <svg style={{ width: '12px', height: '12px', color: '#999', margin: '0 auto' }} viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2l4 8-4 8-4-8z" />
                            </svg>
                        </div>
                        <p style={{ color: '#771313', fontSize: '10px', fontWeight: 'bold', letterSpacing: '0.1em', textAlign: 'center', marginBottom: '8px' }}>SUPREME COURT</p>
                        <h1 style={{ fontSize: '20px', fontFamily: 'serif', color: '#4b3342', textAlign: 'center', marginBottom: '12px' }}>
                            Practical Consequences in Statutory Interpretation
                        </h1>
                        <p style={{ color: '#949494', fontSize: '12px', textAlign: 'center', lineHeight: '1.6' }}>
                            Modern textualism has long criticized the use of practical, or consequentialist, reasoning when construing statutes. And yet in practice, textualist jurists long have invoked practical consequences arguments to help justify their statutory constructions.
                        </p>
                    </div>
                </div>
            </section>

            {/* --- LATEST PUBLICATIONS (LIVE FROM STRAPI) --- */}
            <section style={{ padding: '2rem 1rem', borderBottom: '1px solid #ddd', backgroundColor: '#fafafa' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                        <div style={{ width: '4px', height: '24px', backgroundColor: '#771313', marginRight: '12px' }}></div>
                        <h2 style={{ fontSize: '24px', fontFamily: 'serif', color: '#4b3342', margin: 0 }}>
                            Latest Publications (Live)
                        </h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
                        {papers && papers.length > 0 ? (
                            papers.map((paper) => {
                                const title = paper.Title || paper.title || "Untitled Paper";
                                const author = paper.Author || paper.author || "Unknown Author";
                                // Fallback to content or description
                                const content = paper.Content || paper.content || paper.Description || paper.description || "No content available";

                                return (
                                    <div key={paper.id} style={{ backgroundColor: 'white', padding: '2rem', border: '1px solid #eee', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                                        <p style={{ fontSize: '9px', marginBottom: '6px' }}>
                                            <span style={{ color: '#771313', fontWeight: 'bold', letterSpacing: '0.05em' }}>NEW ARTICLE</span>
                                        </p>

                                        <h3 style={{ fontSize: '20px', fontFamily: 'serif', color: '#4b3342', marginBottom: '12px', fontWeight: '500' }}>
                                            {title}
                                        </h3>

                                        {/* --- TEXT CONTENT RENDERER (MARKDOWN) --- */}
                                        <div style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', marginBottom: '16px' }}>
                                            {/* Renders markdown text correctly */}
                                            {typeof content === 'string' ? <Markdown>{content}</Markdown> : "Content format not supported"}
                                        </div>
                                        {/* --------------------------- */}

                                        <p style={{ color: '#771313', fontSize: '10px', fontWeight: 'bold', letterSpacing: '0.05em' }}>
                                            By {author}
                                        </p>
                                    </div>
                                );
                            })
                        ) : (
                            <div style={{ textAlign: 'center', padding: '2rem', color: '#949494', fontStyle: 'italic' }}>
                                Loading papers... <br />
                                <span style={{ fontSize: '10px' }}>(Make sure your Strapi backend is running at http://localhost:1337)</span>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Appendix Articles Grid */}
            <section style={{ padding: '2rem 1rem', borderBottom: '1px solid #ddd' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                        {appendixArticles.map((article, index) => (
                            <div key={index} style={{ borderTop: '2px solid #ddd', paddingTop: '1rem' }}>
                                <p style={{ color: '#949494', fontSize: '9px', fontWeight: '500', letterSpacing: '0.1em', marginBottom: '8px' }}>{article.category}</p>
                                <h3 style={{ fontSize: '16px', fontFamily: 'serif', color: '#4b3342', marginBottom: '8px', cursor: 'pointer', fontWeight: '500' }} className="hover:text-[#771313]">
                                    {article.title}
                                </h3>
                                <p style={{ color: '#949494', fontSize: '9px', lineHeight: '1.5' }}>
                                    {article.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recent Cases */}
            <section style={{ padding: '2rem 1rem', borderBottom: '1px solid #ddd' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                        {recentCases.map((item, index) => (
                            <div key={index}>
                                <p style={{ fontSize: '9px', marginBottom: '4px' }}>
                                    <span style={{ color: '#771313', fontWeight: 'bold', letterSpacing: '0.05em' }}>{item.category}</span>
                                    <span style={{ color: '#949494' }}> • </span>
                                    <span style={{ color: '#949494', letterSpacing: '0.05em' }}>{item.type}</span>
                                </p>
                                <h3 style={{ fontSize: '14px', fontFamily: 'serif', color: '#4b3342', marginBottom: '4px', cursor: 'pointer', fontWeight: '500' }} className="hover:text-[#771313]">
                                    {item.title}
                                </h3>
                                <p style={{ color: '#949494', fontSize: '9px', lineHeight: '1.5' }}>
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About the JLJ Call For Paper Review */}
            <section style={{ padding: '2.5rem 1rem', backgroundColor: '#f5f5f5' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '24px', fontFamily: 'serif', color: '#4b3342', textAlign: 'center', marginBottom: '1rem' }}>
                        About the <span style={{ fontStyle: 'italic', color: '#771313' }}>JLJ</span> Call For Paper Review
                    </h2>
                    <p style={{ color: '#949494', fontSize: '12px', textAlign: 'center', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                        The JLJ is a student-run journal of legal scholarship. The <span style={{ fontStyle: 'italic' }}>Review</span> is independent from the Delhi University and a <span style={{ color: '#771313', textDecoration: 'underline', cursor: 'pointer' }}>board of student editors</span> selected through an anonymous annual writing competition make all editorial decisions. The print <span style={{ fontStyle: 'italic' }}>Review</span> and its online companion, the <span style={{ fontStyle: 'italic' }}>Forum</span>, are published monthly from November through June. The <span style={{ fontStyle: 'italic', color: '#771313' }}>Review</span>, the <span style={{ fontStyle: 'italic', color: '#771313' }}>Forum</span>, and online<span style={{ fontStyle: 'italic', color: '#771313' }}>Blog</span> welcome submissions throughout the year.
                    </p>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '1rem', flexWrap: 'wrap' }}>
                        <Link to="/submissions" style={{ backgroundColor: '#4b3342', color: 'white', padding: '8px 12px', fontSize: '10px', fontWeight: 'bold', letterSpacing: '0.05em', textDecoration: 'none' }} className="hover:bg-[#3a2835]">
                            SUBMISSIONS
                        </Link>
                        <button style={{ border: '1px solid #4b3342', color: '#4b3342', padding: '8px 12px', fontSize: '10px', fontWeight: 'bold', letterSpacing: '0.05em', backgroundColor: 'white', cursor: 'pointer' }} className="hover:bg-gray-50">
                            SUBSCRIPTIONS
                        </button>
                        <button style={{ border: '1px solid #4b3342', color: '#4b3342', padding: '8px 12px', fontSize: '10px', fontWeight: 'bold', letterSpacing: '0.05em', backgroundColor: 'white', cursor: 'pointer' }} className="hover:bg-gray-50">
                            FELLOWSHIPS
                        </button>
                        <button style={{ border: '1px solid #4b3342', color: '#4b3342', padding: '8px 12px', fontSize: '10px', fontWeight: 'bold', letterSpacing: '0.05em', backgroundColor: 'white', cursor: 'pointer' }} className="hover:bg-gray-50">
                            WRITING COMPETITION
                        </button>
                        <button style={{ border: '1px solid #4b3342', color: '#4b3342', padding: '8px 12px', fontSize: '10px', fontWeight: 'bold', letterSpacing: '0.05em', backgroundColor: 'white', cursor: 'pointer' }} className="hover:bg-gray-50">
                            THE BLUEBOOK®
                        </button>
                    </div>

                    <div style={{ display: 'flex', maxWidth: '500px', margin: '0 auto' }}>
                        <input
                            type="email"
                            placeholder="Join our mailing list"
                            style={{ flex: 1, padding: '8px 12px', border: '1px solid #ddd', fontSize: '12px' }}
                            className="focus:outline-none focus:border-[#771313]"
                        />
                        <button style={{ backgroundColor: '#4b3342', color: 'white', padding: '8px 12px', fontSize: '10px', fontWeight: 'bold', letterSpacing: '0.05em', cursor: 'pointer' }} className="hover:bg-[#3a2835]">
                            SIGN UP
                        </button>
                    </div>
                </div>
            </section>

            {/* Forum & Blog Section */}
            <section style={{ padding: '2rem 1rem', borderTop: '1px solid #ddd' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
                        {/* Forum Column */}
                        <div>
                            <h2 style={{ fontSize: '24px', fontFamily: 'serif', color: '#4b3342', marginBottom: '1.5rem', borderTop: '2px solid #771313', paddingTop: '8px', display: 'inline-block' }}>Forum</h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                {forumArticles.map((article, index) => (
                                    <div key={index}>
                                        <p style={{ fontSize: '9px', marginBottom: '4px' }}>
                                            <span style={{ color: '#771313', fontWeight: 'bold', letterSpacing: '0.05em' }}>{article.category}</span>
                                            <span style={{ color: '#949494' }}> • </span>
                                            <span style={{ color: '#949494', letterSpacing: '0.05em' }}>{article.type}</span>
                                        </p>
                                        <h3 style={{ fontSize: '14px', fontFamily: 'serif', color: '#4b3342', fontWeight: '500', cursor: 'pointer' }} className="hover:text-[#771313]">
                                            {article.title}
                                        </h3>
                                        {article.subtitle && (
                                            <p style={{ fontSize: '9px', color: '#949494', fontStyle: 'italic' }}>{article.subtitle}</p>
                                        )}
                                        <p style={{ color: '#771313', fontSize: '9px', fontWeight: '500', letterSpacing: '0.05em', marginTop: '4px' }}>{article.author}</p>
                                    </div>
                                ))}
                            </div>
                            <p style={{ color: '#771313', fontSize: '10px', fontWeight: 'bold', letterSpacing: '0.05em', marginTop: '1.5rem', cursor: 'pointer' }} className="hover:underline">
                                MORE FROM THE FORUM →
                            </p>
                        </div>

                        {/* Blog Column */}
                        <div>
                            <h2 style={{ fontSize: '24px', fontFamily: 'serif', color: '#771313', marginBottom: '1.5rem', borderTop: '2px solid #771313', paddingTop: '8px', display: 'inline-block' }}>Blog</h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                {blogArticles.map((article, index) => (
                                    <div key={index}>
                                        <p style={{ fontSize: '9px', marginBottom: '4px' }}>
                                            <span style={{ color: '#771313', fontWeight: 'bold', letterSpacing: '0.05em' }}>{article.category}</span>
                                            <span style={{ color: '#949494' }}> • </span>
                                            <span style={{ color: '#949494', letterSpacing: '0.05em' }}>{article.type}</span>
                                        </p>
                                        <h3 style={{ fontSize: '14px', fontFamily: 'serif', color: '#4b3342', fontWeight: '500', cursor: 'pointer' }} className="hover:text-[#771313]">
                                            {article.title}
                                        </h3>
                                        <p style={{ fontSize: '9px', color: '#949494', marginTop: '4px' }}>{article.date}</p>
                                        <p style={{ color: '#771313', fontSize: '9px', fontWeight: '500', letterSpacing: '0.05em' }}>{article.author}</p>
                                    </div>
                                ))}
                            </div>
                            <p style={{ color: '#771313', fontSize: '10px', fontWeight: 'bold', letterSpacing: '0.05em', marginTop: '1.5rem', cursor: 'pointer' }} className="hover:underline">
                                MORE FROM THE BLOG →
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Explore Section */}
            <section style={{ padding: '2.5rem 1rem', backgroundColor: '#f6f3ee', textAlign: 'center' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '24px', fontFamily: 'serif', color: '#4b3342', marginBottom: '1.5rem' }}>Explore</h2>
                    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '8px', marginBottom: '1.5rem' }}>
                        {exploreTopics.map((topic, index) => (
                            <button
                                key={index}
                                style={{ padding: '8px 16px', border: '1px solid #4b3342', fontSize: '10px', color: '#4b3342', fontWeight: 'bold', letterSpacing: '0.05em', backgroundColor: 'white', cursor: 'pointer' }}
                                className="hover:bg-[#4b3342] hover:text-white"
                            >
                                {topic}
                            </button>
                        ))}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                        <span style={{ color: '#771313', fontSize: '10px', fontWeight: 'bold', letterSpacing: '0.05em', cursor: 'pointer' }} className="hover:underline">ALL TOPICS →</span>
                        <span style={{ color: '#771313', fontSize: '10px', fontWeight: 'bold', letterSpacing: '0.05em', cursor: 'pointer' }} className="hover:underline">ALL AUTHORS →</span>
                    </div>
                </div>
            </section>

            {/* More from the Archives */}
            <section style={{ padding: '2.5rem 1rem', backgroundColor: 'white' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '24px', fontFamily: 'serif', color: '#4b3342', textAlign: 'center', marginBottom: '2rem' }}>More from the Archives</h2>

                    {/* Articles */}
                    <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ fontSize: '18px', fontFamily: 'serif', color: '#4b3342', fontStyle: 'italic', marginBottom: '1rem' }}>Articles</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                            {archiveArticles.map((article, index) => (
                                <div key={index}>
                                    <p style={{ fontSize: '9px', marginBottom: '4px' }}>
                                        <span style={{ color: '#771313', fontWeight: 'bold', letterSpacing: '0.05em' }}>{article.category}</span>
                                        <span style={{ color: '#949494' }}> • </span>
                                        <span style={{ color: '#949494', letterSpacing: '0.05em' }}>{article.type}</span>
                                    </p>
                                    <h4 style={{ fontSize: '14px', fontFamily: 'serif', color: '#4b3342', fontWeight: '500', cursor: 'pointer' }} className="hover:text-[#771313]">{article.title}</h4>
                                    <p style={{ color: '#949494', fontSize: '9px', letterSpacing: '0.05em' }}>{article.author}</p>
                                </div>
                            ))}
                        </div>
                        <p style={{ color: '#771313', fontSize: '10px', fontWeight: 'bold', letterSpacing: '0.05em', marginTop: '1rem', cursor: 'pointer' }} className="hover:underline">MORE ARTICLES →</p>
                    </div>

                    {/* Essays */}
                    <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ fontSize: '18px', fontFamily: 'serif', color: '#4b3342', fontStyle: 'italic', marginBottom: '1rem' }}>Essays</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                            {essays.map((article, index) => (
                                <div key={index}>
                                    <p style={{ fontSize: '9px', marginBottom: '4px' }}>
                                        <span style={{ color: '#771313', fontWeight: 'bold', letterSpacing: '0.05em' }}>{article.category}</span>
                                        <span style={{ color: '#949494' }}> • </span>
                                        <span style={{ color: '#949494', letterSpacing: '0.05em' }}>{article.type}</span>
                                    </p>
                                    <h4 style={{ fontSize: '14px', fontFamily: 'serif', color: '#4b3342', fontWeight: '500', cursor: 'pointer' }} className="hover:text-[#771313]">{article.title}</h4>
                                    <p style={{ color: '#949494', fontSize: '9px', letterSpacing: '0.05em' }}>{article.author}</p>
                                </div>
                            ))}
                        </div>
                        <p style={{ color: '#771313', fontSize: '10px', fontWeight: 'bold', letterSpacing: '0.05em', marginTop: '1rem', cursor: 'pointer' }} className="hover:underline">MORE ESSAYS →</p>
                    </div>

                    {/* Book Reviews */}
                    <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ fontSize: '18px', fontFamily: 'serif', color: '#4b3342', fontStyle: 'italic', marginBottom: '1rem' }}>Book Reviews</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                            {bookReviews.map((article, index) => (
                                <div key={index}>
                                    <p style={{ fontSize: '9px', marginBottom: '4px' }}>
                                        <span style={{ color: '#771313', fontWeight: 'bold', letterSpacing: '0.05em' }}>{article.category}</span>
                                        <span style={{ color: '#949494' }}> • </span>
                                        <span style={{ color: '#949494', letterSpacing: '0.05em' }}>{article.type}</span>
                                    </p>
                                    <h4 style={{ fontSize: '14px', fontFamily: 'serif', color: '#4b3342', fontWeight: '500', cursor: 'pointer' }} className="hover:text-[#771313]">{article.title}</h4>
                                    <p style={{ color: '#949494', fontSize: '9px', letterSpacing: '0.05em' }}>{article.author}</p>
                                </div>
                            ))}
                        </div>
                        <p style={{ color: '#771313', fontSize: '10px', fontWeight: 'bold', letterSpacing: '0.05em', marginTop: '1rem', cursor: 'pointer' }} className="hover:underline">MORE BOOK REVIEWS →</p>
                    </div>

                    {/* Tributes */}
                    <div>
                        <h3 style={{ fontSize: '18px', fontFamily: 'serif', color: '#4b3342', fontStyle: 'italic', marginBottom: '1rem' }}>Tributes</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                            {tributes.map((article, index) => (
                                <div key={index}>
                                    <p style={{ fontSize: '9px', marginBottom: '4px' }}>
                                        <span style={{ color: '#771313', fontWeight: 'bold', letterSpacing: '0.05em' }}>{article.category}</span>
                                        <span style={{ color: '#949494' }}> • </span>
                                        <span style={{ color: '#949494', letterSpacing: '0.05em' }}>{article.type}</span>
                                    </p>
                                    <h4 style={{ fontSize: '14px', fontFamily: 'serif', color: '#4b3342', fontWeight: '500', cursor: 'pointer' }} className="hover:text-[#771313]">{article.title}</h4>
                                    {article.authors && <p style={{ color: '#771313', fontSize: '8px', letterSpacing: '0.05em' }}>{article.authors}</p>}
                                </div>
                            ))}
                        </div>
                        <p style={{ color: '#771313', fontSize: '10px', fontWeight: 'bold', letterSpacing: '0.05em', marginTop: '1rem', cursor: 'pointer' }} className="hover:underline">MORE TRIBUTES →</p>
                    </div>
                </div>
            </section>

            {/* Fellowships Section */}
            <section style={{ padding: '2.5rem 1rem', backgroundColor: '#e8e4db' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ backgroundColor: 'white', border: '1px solid #ddd', padding: '1.5rem' }}>
                        {/* Diamond Icon */}
                        <div style={{ textAlign: 'center', marginBottom: '12px' }}>
                            <svg style={{ width: '12px', height: '12px', color: '#b8860b', margin: '0 auto' }} viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2l4 8-4 8-4-8z" />
                            </svg>
                        </div>
                        <p style={{ color: '#771313', fontSize: '10px', fontWeight: 'bold', letterSpacing: '0.1em', textAlign: 'center', marginBottom: '12px' }}>FELLOWSHIPS</p>
                        <p style={{ color: '#949494', fontSize: '12px', textAlign: 'center', lineHeight: '1.6', marginBottom: '1rem' }}>
                            The Journal for Law and Justice (JLJ) is the flagship student-run publication of Law Centre-II, Faculty of Law, University of Delhi. It is an open-access, double blind peer reviewed academic journal dedicated to publishing original and high-quality research in the field of law and justice. The journal seeks to foster dialogue on pressing legal issues, encourage critical engagement with doctrines and practices, and contribute to the evolving discourse on justice, governance, and rights in India and beyond.
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
                            <button style={{ border: '1px solid #4b3342', color: '#4b3342', padding: '8px 12px', fontSize: '10px', fontWeight: 'bold', letterSpacing: '0.05em', backgroundColor: 'white', cursor: 'pointer' }} className="hover:bg-gray-50">
                                LEARN MORE
                            </button>
                            <button style={{ border: '1px solid #4b3342', color: '#4b3342', padding: '8px 12px', fontSize: '10px', fontWeight: 'bold', letterSpacing: '0.05em', backgroundColor: 'white', cursor: 'pointer' }} className="hover:bg-gray-50">
                                CURRENT & PAST FELLOWS
                            </button>
                            <button style={{ border: '1px solid #4b3342', color: '#4b3342', padding: '8px 12px', fontSize: '10px', fontWeight: 'bold', letterSpacing: '0.05em', backgroundColor: 'white', cursor: 'pointer' }} className="hover:bg-gray-50">
                                FELLOWSHIP ESSAYS
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Recently Cited Section */}
            <section style={{ padding: '2.5rem 1rem', backgroundColor: '#f6f3ee' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '2.5rem' }}>
                    {/* Logo Image */}
                    <div style={{ width: '200px', flexShrink: 0 }}>
                        <img src="/logo.png" alt="Law Centre - II" style={{ width: '100%' }} />
                    </div>

                    {/* Recently Cited Content */}
                    <div style={{ flex: 1 }}>
                        <h2 style={{ fontSize: '24px', fontFamily: 'serif', color: '#4b3342', marginBottom: '8px' }}>Recently Cited</h2>
                        <p style={{ color: '#949494', fontSize: '12px', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                            The student pieces featured below have been recently cited in judicial opinions and legal scholarship.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {recentlyCited.map((item, index) => (
                                <div key={index} style={{ display: 'flex' }}>
                                    <div style={{ backgroundColor: '#771313', padding: '12px', flexShrink: 0 }}>
                                        <p style={{ color: 'white', fontSize: '8px', fontWeight: 'bold', letterSpacing: '0.05em' }}>{item.category}</p>
                                        <p style={{ color: 'white', fontSize: '8px' }}>LEADING CASE</p>
                                        <p style={{ color: 'white', fontSize: '12px', fontFamily: 'serif', fontStyle: 'italic', marginTop: '4px' }}>{item.title}</p>
                                    </div>
                                    <div style={{ backgroundColor: '#f0f0f0', flex: 1 }}></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomePage