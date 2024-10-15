import React, { useState } from 'react';
import '../App.css';
import '../styles/ResourcesPage.css';

const Resources = () => {
    const [suggestion, setSuggestion] = useState('');

    const resourcesData = {
        'Ayurveda Basics': [
            { 
                title: 'Introduction to Ayurveda', 
                link: 'https://ayurveda.com/ayurveda-a-brief-introduction-and-guide/#:~:text=In%20Sanskrit%2C%20Ayurveda%20means%20%E2%80%9CThe,accomplished%20masters%20to%20their%20disciples.', 
                thumbnail: 'r1.png' 
            },
            { 
                title: 'Principles of Ayurveda', 
                link: 'https://ayush.delhi.gov.in/ayush/fundamental-principles',
                thumbnail: 'r2.png'
            }
        ],
        'AI in Healthcare': [
            { 
                title: 'AI in Healthcare: How AI is Transforming Healthcare', 
                link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6616181/', 
                thumbnail: 'r3.png' 
            },
            { 
                title: 'Benefits of AI in Healthcare', 
                link: 'https://builtin.com/artificial-intelligence/artificial-intelligence-healthcare',
                thumbnail: 'r4.png'
            }
        ],
        'Herbal Remedies': [
            { 
                title: 'Herbal Remedies for Common Ailments', 
                link: 'https://www.healthline.com/health/home-remedies', 
                thumbnail: 'r5.png' 
            },
            { 
                title: 'Herbs and Their Uses in Ayurveda', 
                link: 'https://www.medicalnewstoday.com/articles/ayurvedic-herbs',
                thumbnail: 'r6.png'
            }
        ],
        'Mental & Physical Wellness': [
            { 
                title: 'Mental Health and Ayurveda', 
                link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6463074/', 
                thumbnail: 'r7.png' 
            },
            { 
                title: 'Ayurvedic Practices for Physical Wellness', 
                link: 'https://www.deepammeditours.com/blog/ayurvedic-self-care-practices-for-daily-wellness/',
                thumbnail: 'r8.png'
            }
        ]
    };

    const handleSuggestionSubmit = (e) => {
        e.preventDefault();
        console.log('Suggested Resource:', suggestion);
        setSuggestion('');
    };

    return (
        <div className="resources-section">
            <h1>Resources</h1>
            <p>Explore valuable resources on Ayurveda, AI in Healthcare, and more:</p>
            
            <div className="resources-grid">
                {Object.entries(resourcesData).map(([category, resources]) => (
                    <div key={category} className="resource-category">
                        <h2>{category}</h2>
                        <div className="resource-grid">
                            {resources.map((resource, index) => (
                                <div key={index} className="resource-card">
                                    <img 
                                        src={resource.thumbnail} 
                                        alt={resource.title} 
                                        className="resource-thumbnail" 
                                    />
                                    <a href={resource.link} target="_blank" rel="noopener noreferrer" className="App-link">
                                        <h3>{resource.title}</h3>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <h2>Suggest a Resource</h2>
            <form onSubmit={handleSuggestionSubmit} className="suggestion-form">
                <input
                    type="text"
                    value={suggestion}
                    onChange={(e) => setSuggestion(e.target.value)}
                    placeholder="Enter your suggestion"
                    required
                    className="suggestion-input"
                />
                <button type="submit" className="suggestion-button">Submit</button>
            </form>
        </div>
    );
};

export default Resources;
