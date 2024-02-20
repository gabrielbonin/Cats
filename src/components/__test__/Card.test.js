import { render, screen } from '@testing-library/react';
import Card from '../Card';
import userEvent from '@testing-library/user-event';
import { PetsContext } from '../Pets/Pets';
import cats from '../../mocks/cats.json';

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

const renderCardComponentWithProvider = props => {
  return render(
    <PetsContext.Provider value={{ cats, setCats: () => {} }}>
      <Card {...props} />
    </PetsContext.Provider>,
  );
};

describe('Card', () => {
  test('should show name of cat', () => {
    renderCardComponentWithProvider(cardProps);

    expect(
      screen.getByRole('heading', {
        name: /garfield/i,
      }),
    ).toBeInTheDocument();
  });

  test('should show phone number', () => {
    renderCardComponentWithProvider(cardProps);

    expect(screen.getByText(/111-111-11111/i)).toBeInTheDocument();
  });

  test('should show email', () => {
    renderCardComponentWithProvider(cardProps);
    expect(screen.getByText(/bonin@gmail.com/i)).toBeInTheDocument();
  });

  test('should show image with correct src', () => {
    renderCardComponentWithProvider(cardProps);

    expect(screen.getByAltText(/cute cat/i).src).toBe(cardProps.image.url);
  });

  test('should show outlined heart', () => {
    renderCardComponentWithProvider(cardProps);

    expect(screen.queryByAltText(/filled heart/i)).not.toBeInTheDocument();

    expect(screen.getByAltText(/outlined heart/i)).toBeInTheDocument();
  });

  test('should show filled heart', () => {
    render(<Card {...cardProps} favoured={true} />);
    renderCardComponentWithProvider({ ...cardProps, favoured: true });

    expect(screen.queryByAltText(/outlined heart/i)).not.toBeInTheDocument();

    expect(screen.getByAltText(/filled heart/i)).toBeInTheDocument();
  });

  test('should toggle heart status', () => {
    renderCardComponentWithProvider(cardProps);

    userEvent.click(screen.getByRole('button'));

    expect(screen.queryByAltText(/outlined heart/i)).not.toBeInTheDocument();
    expect(screen.getByAltText(/filled heart/i)).toBeInTheDocument();

    userEvent.click(screen.getByRole('button'));

    expect(screen.queryByAltText(/filled heart/i)).not.toBeInTheDocument();
    expect(screen.getByAltText(/outlined heart/i)).toBeInTheDocument();
  });
});
