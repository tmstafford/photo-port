import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

describe('Nav component', () => {
    // renders Nav test
    it('renders', () => {
        render(<Nav />);
    });

    it('matches snapshot', () => {
        // asFragment returns snapshot of Nav component
        const { asFragment } = render(<Nav />);
        // test and compare outcomes
        expect(asFragment()).toMatchSnapshot();
    });
});

describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
        const { getByLabelText } = render(<Nav />);

        expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
});

describe('links are visible', () => {
    it('inserts text into the links', () => {
        const { getByTestId } = render(<Nav />);
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About Me');
    });
})