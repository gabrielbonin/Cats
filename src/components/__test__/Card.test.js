import { render, screen } from '@testing-library/react';
import Card from '../Card';
import userEvent from '@testing-library/user-event';

const cardProps = {
  name: 'Garfield',
  phone: '111-111-11111',
  email: 'bonin@gmail.com',
  image: {
    url: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'cute cat',
  },
  favoured: false,
  updatedFavourite: () => {},
  index: 1,
};

describe('Card', () => {
  test('should show name of cat', () => {
    render(<Card {...cardProps} />);

    expect(
      screen.getByRole('heading', {
        name: /garfield/i,
      }),
    ).toBeInTheDocument();
  });

  test('should show phone number', () => {
    render(<Card {...cardProps} />);

    expect(screen.getByText(/111-111-11111/i)).toBeInTheDocument();
  });

  test('should show email', () => {
    render(<Card {...cardProps} />);

    expect(screen.getByText(/bonin@gmail.com/i)).toBeInTheDocument();
  });

  test('should show image with correct src', () => {
    render(<Card {...cardProps} />);

    expect(screen.getByAltText(/cute cat/i).src).toBe(cardProps.image.url);
  });

  test('should show outlined heart', () => {
    render(<Card {...cardProps} />);

    expect(screen.queryByAltText(/filled heart/i)).not.toBeInTheDocument();

    expect(screen.getByAltText(/outlined heart/i)).toBeInTheDocument();
  });

  test('should show filled heart', () => {
    render(<Card {...cardProps} favoured={true} />);

    expect(screen.queryByAltText(/outlined heart/i)).not.toBeInTheDocument();

    expect(screen.getByAltText(/filled heart/i)).toBeInTheDocument();
  });

  test('should toggle heart status', () => {
    render(<Card {...cardProps} />);

    userEvent.click(screen.getByRole('button'));

    expect(screen.queryByAltText(/outlined heart/i)).not.toBeInTheDocument();
    expect(screen.getByAltText(/filled heart/i)).toBeInTheDocument();

    userEvent.click(screen.getByRole('button'));

    expect(screen.queryByAltText(/filled heart/i)).not.toBeInTheDocument();
    expect(screen.getByAltText(/outlined heart/i)).toBeInTheDocument();
  });
});
