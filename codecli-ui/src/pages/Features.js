import React from "react";
import styles from "./Features.module.css";

function Features() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Discover the Power of CodeCLI AI Code Editor</h1>
            <p className={styles.intro}>
                CodeCLI is more than just an AI code editor — it’s an intelligent platform designed to revolutionize every phase of the Software Development Life Cycle (SDLC).
                From initial brainstorming to deployment and testing, CodeCLI empowers developers, teams, and businesses to innovate faster, code smarter, and deliver with confidence.
            </p>

            <h2 className={styles.subtitle}>Comprehensive Features</h2>
            <ul className={styles.featureList}>
                <li><strong>Requirements Gathering & Brainstorming:</strong> Use AI-powered natural language processing to capture, analyze, and refine project requirements and ideas collaboratively.</li>
                <li><strong>Ideation & Architecture Design:</strong> Generate architectural diagrams, system designs, and scalable infrastructure plans guided by AI insights and best practices.</li>
                <li><strong>Platform & Infrastructure Setup:</strong> Automate cloud provisioning, container orchestration, and environment configuration for seamless development and deployment.</li>
                <li><strong>AI-Assisted Code Generation:</strong> Generate clean, efficient code snippets, functions, and modules from high-level descriptions, accelerating development speed.</li>
                <li><strong>Intelligent Debugging:</strong> Detect bugs, code smells, and security vulnerabilities in real-time with AI-driven suggestions and fixes.</li>
                <li><strong>Automated Test Case Generation:</strong> Create unit, integration, regression, sanity, performance, and journey test cases automatically to ensure robust software quality.</li>
                <li><strong>Comprehensive Testing Support:</strong> Execute and manage all types of testing workflows, including automated regression, performance benchmarking, and user journey validation.</li>
                <li><strong>Containerization & Bundling:</strong> Simplify packaging and deployment with AI-guided container builds, bundling optimizations, and release management.</li>
                <li><strong>Release Automation & Monitoring:</strong> Streamline release cycles with AI-powered deployment pipelines, rollback triggers, and real-time monitoring for rapid feedback.</li>
                <li><strong>Collaborative Development:</strong> Facilitate team collaboration with AI-enhanced code reviews, merge conflict resolution, and documentation generation.</li>
                <li><strong>Continuous Learning & Improvement:</strong> Leverage AI to analyze codebases and development patterns, suggesting improvements and evolving with your project needs.</li>
            </ul>

            <p className={styles.featureList}>
                CodeCLI is designed to be your intelligent partner throughout software development, helping you innovate faster, reduce errors, and deliver high-quality products that delight users and stakeholders alike.
            </p>
        </div>
    );
}

export default Features;
