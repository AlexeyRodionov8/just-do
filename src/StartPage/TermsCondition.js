import React from 'react';

import styles from './policyAndCondition.module.css';
import StartPage from './StartPage';

const TermsCondition = props => {
    return (
        <StartPage>
            <div className={styles.wrap}>
                <div className={styles.title}>Terms Condition</div>

                <div className={styles.content}>
                    { text }
                </div>
            </div>
        </StartPage>
    );
}

export default TermsCondition;

const text = `While a T&C isn't required for your app or website, it is still legally binding and enforceable once agreed to. This makes having a T&C a good idea because is allows you to legally control certain aspects of the use of your website or app.

T&Cs can be used to specify and restrict the things that users are allowed and not allowed to do with your app or website. They can be used to prevent potential abuses of your website or app. Furthermore, they can be used as a form of protection for your company.

These agreements become legally binding the moment a user accepts them. Once your users accept your T&C, they are legally bound to the agreement and can have their use of the website or app terminated for breaking the agreement. They can also face legal consequences as a result of the breach of contract. This puts your company in a better position to control your website or app than you would without a T&C.

A T&C a good idea if you are using your app or website to sell a product. In the agreement you can outline payment methods, shipping processes, return policies, refund policies and various other aspects of how transactions will be handled. Outlining these various things in a T&C is a good idea because it is one of the first things that potential customers see when they try to create an account or make a purchase.

Once a customer is aware of your T&C, they will know exactly what they are able to do and not to do and how your company operates. Furthermore, you will also want to include any warranty information and product liability information in a clause within the T&C for your legal protection.`;