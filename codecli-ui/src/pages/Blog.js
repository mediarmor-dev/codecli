import React, { useState } from "react";
import styles from "./Blog.module.css";

const articles = [
    {
        id: 1,
        title: "AI Trends Shaping Software Innovation in 2025",
        content: `The world’s biggest tech companies are racing to develop AI platforms that deliver optimized performance, profitability, and security for enterprises. AI reasoning and custom silicon are fueling demand for advanced chips, while hyperscalers see cloud migrations as new revenue opportunities. Large language models (LLMs) are increasingly applied for enterprise AI reasoning, enabling smarter automation. Data companies focus on evaluating AI efficacy, and software firms aim to build agentic AI systems that act autonomously. These trends are driving cost savings and productivity boosts across industries. Businesses investing in AI expect faster innovation cycles and better customer experiences. However, challenges remain with resource constraints and evolving trade policies. The AI ecosystem is rapidly expanding, with partnerships across chips, software, and cloud providers. This wave of AI adoption is reshaping the technology industry’s competitive landscape. Enterprises that harness these trends will gain significant advantages in 2025 and beyond.`,
    },
    {
        id: 2,
        title: "The Rise of Agentic AI in Software Development",
        content: `Agentic AI systems represent a transformative shift in software development, enabling autonomous decision-making and task execution. Unlike traditional AI models, agentic AI understands project context and suggests architectural improvements. Intelligent coding assistants powered by agentic AI can complete code and maintain consistency across codebases. These systems also handle customer service integration by managing bug reports and feature requests automatically. Test suite scaling is enhanced as AI agents expand coverage based on user behavior. Information retrieval systems use retrieval-augmented generation (RAG) to provide contextual assistance. Iterative problem solving is supported by AI testing multiple approaches and learning from outcomes. Agentic AI reduces development costs by automating complex workflows. It accelerates delivery timelines and improves software quality. This technology wave is generating excitement in the developer community and investors alike.`,
    },
    {
        id: 3,
        title: "AI-Powered Testing: Revolutionizing Quality Assurance",
        content: `Automated test case generation is transforming software quality assurance by creating unit, integration, regression, and performance tests automatically. AI-driven testing platforms integrate seamlessly into CI/CD pipelines, predicting bugs before deployment. This reduces manual effort and accelerates release cycles. Regression and sanity testing become more reliable with continuous AI monitoring. Performance testing benefits from AI’s ability to simulate real user journeys and detect bottlenecks. Containerization and bundling are optimized with AI recommendations for packaging and deployment. Release automation uses AI to trigger rollbacks and monitor live systems. These advances lead to significant cost savings and improved user satisfaction. Businesses adopting AI-powered testing gain competitive advantages in software reliability. The technology industry is witnessing a wave of innovation driven by these AI testing tools.`,
    },
    {
        id: 4,
        title: "How AI is Reshaping the Software Development Lifecycle",
        content: `AI is revolutionizing every phase of the software development lifecycle, from requirements gathering to deployment. Natural language processing enables better requirements capture and brainstorming. Architecture design is enhanced with AI-generated scalable system diagrams. Platform and infrastructure setup are automated for cloud and container orchestration. Code generation is accelerated by AI-assisted development tools. Intelligent debugging detects issues in real-time, reducing downtime. Comprehensive testing across all types is powered by AI automation. Containerization and bundling are streamlined for efficient releases. AI-driven monitoring and feedback loops improve continuous delivery. This holistic AI integration is generating waves across the technology industry and driving unprecedented value.`,
    },
];

function Blog() {
    const [selectedArticle, setSelectedArticle] = useState(null);

    const openModal = (article) => {
        setSelectedArticle(article);
    };

    const closeModal = () => {
        setSelectedArticle(null);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Insights</h1>
            <div className={styles.cardGrid}>
                {articles.map((article) => (
                    <div
                        key={article.id}
                        className={styles.card}
                        onClick={() => openModal(article)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") openModal(article);
                        }}
                    >
                        <h2 className={styles.cardTitle}>{article.title}</h2>
                    </div>
                ))}
            </div>

            {selectedArticle && (
                <div className={styles.modalOverlay} onClick={closeModal}>
                    <div
                        className={styles.modalContent}
                        onClick={(e) => e.stopPropagation()}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-title"
                    >
                        <button
                            className={styles.closeButton}
                            onClick={closeModal}
                            aria-label="Close article modal"
                        >
                            &times;
                        </button>
                        <h2 id="modal-title" className={styles.modalTitle}>
                            {selectedArticle.title}
                        </h2>
                        <p className={styles.modalText}>{selectedArticle.content}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Blog;
