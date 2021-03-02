import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);

describe('About component', () => {
    // renders About test
    it('renders', () => {
        render(<About />);
    });

    it('matches snapshot DOM node structure', () => {
        // asFragment returns snapshot of About component
        const { asFragment } = render(<About />);
        // test and compare outcomes
        expect(asFragment()).toMatchSnapshot();
    })
})