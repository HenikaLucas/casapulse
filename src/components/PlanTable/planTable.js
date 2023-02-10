import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './planTable.module.scss'
import classnames from 'classnames';

export default function PlanTable({ plansData }) {

    const plans = plansData.map((planData, index) => {
        const planFeatures = planData.planFeatures.map((planFeature, index) => {
            return (
                planFeature == "" ? <br key={index} /> :
                    <li key={index}>
                        {planFeature}
                    </li>
            )
        })

        let planClass;
        let CTAClass;
        if (index % 3 == 0) {
            planClass = styles.plan0;
            CTAClass = "gradient-btn";
        } else if (index % 3 == 1) {
            planClass = styles.plan1;
            CTAClass = "gradient-btn";
        } else {
            planClass = styles.plan2;
            CTAClass = "gradient-btn-dark";
        }
        return (
            <Col xs={11} sm={8} lg={4} xl={3} key={index} className={classnames("justify-content-center mb-3 pb-4", styles.plan, planClass)}>
                <div className={classnames(styles.planHeader, planData.planFocus ? styles.planHeaderFocus : "")}>
                    {planData.planHeader}
                </div>
                <div className={styles.planPrice}>
                    <div className={styles.planPriceUnit}>
                        {planData.planPriceUnit}
                    </div>
                    <div className={styles.planPriceLabel}>
                        {planData.planPriceLabel}
                    </div>
                    <hr className={styles.planSeparator} />
                </div>
                <div className={styles.planFeatures}>
                    {planFeatures}
                </div>
                <div className={styles.planFooter}>
                    <a href={planData.planCTALink} className={CTAClass}>{planData.planCTAText}</a>
                </div>
            </Col >
        )
    })

    return (
        <Row className='justify-content-center'>
            {plans}
        </Row>
    )
}

PlanTable.propTypes = {
    plansData: PropTypes.array.isRequired,
};