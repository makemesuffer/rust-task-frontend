import { render } from '@testing-library/react';

import Index from '../src/pages';

test('renders deploy link', () => {
    const { getByText } = render(<Index />);
    const tailwindConfirmation = getByText(/Tailwind and DaisyUI enhanced starter kit!/);
    expect(tailwindConfirmation).toBeInTheDocument();
});
