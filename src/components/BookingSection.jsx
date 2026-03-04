import React from 'react';
import { InlineWidget } from 'react-calendly';
import './BookingSection.scss';
import { gymData } from '../data/gymData';

const BookingSection = () => {
    const { title, subtitle, calendlyUrl } = gymData.booking;

    return (
        <section id="book-trial" className="booking-section">
            <div className="container text-center">
                <div className="booking-header">
                    <h2>{title}</h2>
                    <p>{subtitle}</p>

                    <div className="booking-benefits">
                        <span>No Credit Card Required</span>
                        <span>1-on-1 Consultation</span>
                        <span>Full Facility Tour</span>
                    </div>
                </div>

                <div className="calendly-wrapper">
                    <InlineWidget
                        url={calendlyUrl}
                        styles={{
                            height: '700px',
                            width: '100%',
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default BookingSection;
