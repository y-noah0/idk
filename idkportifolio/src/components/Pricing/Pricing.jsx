// src/PricingPage.js
import React from 'react';
import styles from './Pricing.module.css';

const Pricing = () => {
    const plans = [
        {
            name: 'Starter Plan',
            price: '$49.99',
            details: {
                pricing: [
                    'Annual Subscription: $539.89/year (10% discount)',
                    'Hardware Bundle: $349.99 (one-time cost)',
                    'One-Time Purchase: $1450'
                ],
                software: [
                    '1 POS terminal',
                    '1 receipt printer',
                    'Basic reporting (daily sales, inventory)',
                    'User-Friendly POS Interface',
                    'Waiter Report Generation',
                    'Work Period Management'
                ]
            },
            isPopular: false
        },
        {
            name: 'Professional Plan',
            price: '$99.99',
            details: {
                pricing: [
                    'Annual Subscription: $1079.89/year (10% discount)',
                    'Hardware Bundle: $699.99 (one-time cost)',
                    'One-Time Purchase: $2200'
                ],
                software: [
                    '2 POS terminals',
                    '2 receipt printers',
                    'Advanced reporting (sales by employee, peak hours)',
                    'Priority email support',
                    'User-Friendly POS Interface',
                    'Waiter Report Generation',
                    'Work Period Management'
                ]
            },
            isPopular: true
        },
        {
            name: 'Business Plan',
            price: '$199.99',
            details: {
                pricing: [
                    'Annual Subscription: $2159.89/year (10% discount)',
                    'Hardware Bundle: Custom quote based on requirements',
                    'One-Time Purchase: $5000'
                ],
                software: [
                    'Up to 5 POS terminals',
                    'Up to 5 receipt printers',
                    'Comprehensive reporting suite',
                    'Inventory forecasting',
                    '24/7 phone and email support',
                    'User-Friendly POS Interface',
                    'Waiter Report Generation',
                    'Work Period Management'
                ]
            },
            isPopular: false
        },
        {
            name: 'Enterprise Plan',
            price: '$199.99',
            details: {
                pricing: [
                    'Custom pricing based on specific requirements',
                    'Contact our sales team for a personalized quote',
                    'Estimate One-Time Purchase: $8000'
                ],
                software: [
                    'Unlimited POS terminals and printers',
                    'Custom reporting and analytics',
                    'Kitchen Display System (KDS)',
                    'Dedicated account manager',
                    '24/7 priority support',
                    'Custom integrations',
                    'On-site training and setup',
                    'Work Period Management'
                ]
            },
            isPopular: false
        }
    ];

    const renderPricingCard = (plan) => (
        <div className={`${styles.card} ${plan.isPopular ? styles.popular : ''}`} key={plan.name}>
            {plan.isPopular && <div className={styles.popularBadge}>MOST POPULAR</div>}
            <h2 className={styles.planName}>{plan.name}</h2>
            <p className={styles.price}>{plan.price} <span className={styles.perMonth}>/ month</span></p>

            <div className={styles.details}>
                <h3>Pricing:</h3>
                <ul>
                    {plan.details.pricing.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <h3>Software Package:</h3>
                <ul>
                    {plan.details.software.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>

            <button className={styles.chooseButton}>Choose Plan</button>
        </div>
    );

    return (
        <div className={styles.pricingSection}>
            <h1 className={styles.title}>Pricing Plan Categories</h1>
            <p className={styles.description}>
                Our POS system software is designed to cater to various industries, including bars, restaurants, coffee shops, pizzerias, alimentations, salons, and more.
            </p>
            <div className={styles.pricingCards}>
                {plans.map(renderPricingCard)}
            </div>
        </div>
    );
};

export default Pricing;
