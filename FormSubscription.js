import './FormSubscription.css';
import React, { useState, useEffect } from 'react';

const FormSubscription = (props) => {
    const [form, setForm] = useState({
        userTitle: 'Enter Subscription Title',
        userDate: '',
        userAmount: 'Enter Amount',
    });

    const [isValid, setIsValid] = useState(true);

    useEffect(() => {
        const timerId = setTimeout(() => {
            if (form.userTitle.trim().length > 0) {
                setIsValid(true);
            }
        }, 500);
        return () => {
            clearTimeout(timerId);
        };
    }, [form.userTitle]);

    const titleChangeHandler = (event) => {
        setForm((prevState) => ({
            ...prevState,
            userTitle: event.target.value,
        }));
    };

    const dateChangeHandler = (event) => {
        setForm((prevState) => ({
            ...prevState,
            userDate: event.target.value,
        }));
    };

    const amountChangeHandler = (event) => {
        setForm((prevState) => ({
            ...prevState,
            userAmount: event.target.value,
        }));
    };

    const submitHandler = (event) => {
        event.preventDefault();
        if (form.userTitle.trim().length === 0) {
            setIsValid(false);
            return;
        }
        const subscription = {
            title: form.userTitle,
            amount: form.userAmount,
            date: new Date(form.userDate),
        };
        props.onSave(subscription);
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new_subscription_controls">
                <div className={`new_subscription_control ${!isValid ? 'invalid' : ''}`}>
                    <label>Title</label>
                    <input type="text" value={form.userTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new_subscription_control">
                    <label>Date</label>
                    <input type="date" value={form.userDate} onChange={dateChangeHandler} />
                </div>
                <div className="new_subscription_control">
                    <label>Amount</label>
                    <input type="text" value={form.userAmount} onChange={amountChangeHandler} />
                </div>
            </div>
            <div className="new_subscription_actions">
                <button type="button" className="danger" onClick={props.onCancel}>
                    Cancel
                </button>
                <button type="submit">Save</button>
            </div>
        </form>
    );
};

export default FormSubscription;
